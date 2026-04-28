/**
 * compress-images.mjs
 * Compress and convert images to WebP using sharp.
 * Originals are backed up to public/originals-backup/
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const BACKUP_DIR = path.join(PUBLIC_DIR, 'originals-backup');

// Target images to process: [relativePath, isAnimated]
const TARGETS = [
  // GIFs → animated WebP
  ['TicketsDiary_Portfolio/pic3_ticket.gif', true],
  ['TicketsDiary_Portfolio/pic2_wall.gif', true],
  ['TicketsDiary_Portfolio/pic1_home.gif', true],

  // Large PNGs → WebP
  ['Bmsc_Portfolio/assets/pages/page-01-home.png', false],
  ['disc.png', false],
  ['Bmsc_Portfolio/assets/pages/page-05-match-unlock.png', false],
  ['Bmsc_Portfolio/assets/pages/page-03-result.png', false],
  ['Bmsc_Portfolio/assets/pages/page-04-atlas-entry.png', false],
  ['微信图片_2026-04-15_175005_501.png', false],   // → wechat-screenshot-1.png
  ['Bmsc_Portfolio/assets/pages/page-02-quiz.png', false],
  ['TicketsDiary_Portfolio/pic6_stats.png', false],
  ['TicketsDiary_Portfolio/pic4_ocr.png', false],
  ['illustration.png', false],
  ['etheral-mask.png', false],
  ['Bmsc_Portfolio/assets/pages/page-07-share-card.png', false],
  ['微信图片_2026-04-15_175009_970.png', false],   // → wechat-screenshot-2.png
  ['TicketsDiary_Portfolio/pic8_share.png', false],
  ['TicketsDiary_Portfolio/image_6.png', false],
  ['TicketsDiary_Portfolio/image_9.png', false],
  ['TicketsDiary_Portfolio/image_7.png', false],
  ['TicketsDiary_Portfolio/image_8.png', false],

  // Large JPGs → WebP
  ['02.JPG', false],
  ['tickets-diary.jpg', false],
  ['09.jpeg', false],

  // Medium JPGs/PNGs (also worth compressing)
  ['06.JPG', false],
  ['article1.jpg', false],
  ['article2.jpg', false],
  ['Fortune-Trinkets.jpg', false],
  ['03.JPG', false],
  ['04.JPG', false],
  ['10.jpg', false],
  ['essay1.jpg', false],
  ['strategy2.jpg', false],
  ['07.JPG', false],
  ['11.jpg', false],
  ['05.JPG', false],
  ['strategy1.jpg', false],
  ['accordion1.jpg', false],
  ['Coming soon.jpg', false],
  ['essay2.jpg', false],
  ['accordion5.jpg', false],
  ['accordion2.jpg', false],
  ['accordion3.jpg', false],
  ['accordion4.jpg', false],
  ['01.JPG', false],
  ['08.jpeg', false],
  ['polaroid/我的图1.jpg', false],
  ['polaroid/我的图2.jpg', false],
  ['polaroid/我的图3.jpg', false],
  ['polaroid/我的图4.jpg', false],
  ['polaroid/我的图5.jpg', false],
];

// Chinese filename rename map
const RENAME_MAP = {
  '微信图片_2026-04-15_175005_501.png': 'wechat-screenshot-1.png',
  '微信图片_2026-04-15_175009_970.png': 'wechat-screenshot-2.png',
  'Coming soon.jpg': 'coming-soon.jpg',
  '我的图1.jpg': 'photo1.jpg',
  '我的图2.jpg': 'photo2.jpg',
  '我的图3.jpg': 'photo3.jpg',
  '我的图4.jpg': 'photo4.jpg',
  '我的图5.jpg': 'photo5.jpg',
};

function getNewName(relPath) {
  const basename = path.basename(relPath);
  const dir = path.dirname(relPath);
  const renamed = RENAME_MAP[basename] || basename;
  // Change extension to .webp
  const withoutExt = renamed.replace(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/i, '');
  const newBasename = withoutExt + '.webp';
  return dir === '.' ? newBasename : path.join(dir, newBasename);
}

async function processImage(relPath, isAnimated) {
  const srcPath = path.join(PUBLIC_DIR, relPath);
  if (!fs.existsSync(srcPath)) {
    console.log(`  ⚠️  Not found, skipping: ${relPath}`);
    return null;
  }

  const newRelPath = getNewName(relPath);
  const destPath = path.join(PUBLIC_DIR, newRelPath);

  // Backup original
  const backupPath = path.join(BACKUP_DIR, relPath);
  fs.mkdirSync(path.dirname(backupPath), { recursive: true });
  fs.copyFileSync(srcPath, backupPath);

  // Ensure dest dir exists
  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  const originalSize = fs.statSync(srcPath).size;

  // Convert
  await sharp(srcPath, isAnimated ? { animated: true } : {})
    .webp({ quality: 82, effort: 4 })
    .toFile(destPath);

  const newSize = fs.statSync(destPath).size;
  const saved = ((1 - newSize / originalSize) * 100).toFixed(1);

  return { relPath, newRelPath, originalSize, newSize, saved };
}

async function main() {
  console.log('Creating backup dir:', BACKUP_DIR);
  fs.mkdirSync(BACKUP_DIR, { recursive: true });

  const results = [];
  for (const [relPath, isAnimated] of TARGETS) {
    process.stdout.write(`Processing: ${relPath} ... `);
    try {
      const r = await processImage(relPath, isAnimated);
      if (r) {
        console.log(`✓  ${(r.originalSize/1024).toFixed(0)}KB → ${(r.newSize/1024).toFixed(0)}KB (-${r.saved}%)`);
        results.push(r);
      }
    } catch (e) {
      console.log(`✗  ERROR: ${e.message}`);
    }
  }

  console.log('\n=== Summary ===');
  let totalOrig = 0, totalNew = 0;
  for (const r of results) {
    totalOrig += r.originalSize;
    totalNew += r.newSize;
    console.log(`  ${r.newRelPath}: ${(r.originalSize/1024).toFixed(0)}KB → ${(r.newSize/1024).toFixed(0)}KB`);
  }
  console.log(`\nTotal: ${(totalOrig/1024/1024).toFixed(2)}MB → ${(totalNew/1024/1024).toFixed(2)}MB (-${((1-totalNew/totalOrig)*100).toFixed(1)}%)`);

  // Output rename map for code update
  console.log('\n=== Path changes (for code update) ===');
  for (const r of results) {
    if (r.relPath !== r.newRelPath) {
      console.log(`  /${r.relPath}  →  /${r.newRelPath}`);
    }
  }
}

main().catch(console.error);
