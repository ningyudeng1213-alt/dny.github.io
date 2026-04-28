'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Component } from '@/components/ui/etheral-shadow';

const articles = [
  {
    title: '性与暴力的合谋',
    sub: '当代电影中的剩余快感——国产商业电影中白日梦奇观策略研究',
    href: '/articles/article-detail-gaze',
    type: 'film',
    tag: 'Academic Writing',
  },
  {
    title: '身体、创伤与自我',
    sub: '电影《热辣滚烫》改编的互文性创新——从身体政治、创伤叙事与自传式电影三维解读',
    href: '/articles/article-detail-yolo',
    type: 'film',
    tag: 'Film Criticism',
  },
  {
    title: '工于细腻的《好东西》',
    sub: '社会议题的有机融合与当代叙事的突破——当"好东西"本身成为问题',
    href: '/articles/article-detail-goodstuff',
    type: 'film',
    tag: 'Film Criticism',
  },
  {
    title: '鹦鹉杀的"爽缩力"',
    sub: '不谈教育，亵渎爱情？',
    href: '/articles/article-detail-parrotkill',
    type: 'film',
    tag: 'Film Criticism',
  },
  {
    title: '我只能离开',
    sub: '《机器人之梦》的现代寓言',
    href: '/articles/article-detail-robotdreams',
    type: 'film',
    tag: 'Film Criticism',
  },
  {
    title: '2025甜宠剧"金扫帚奖"',
    sub: '看甜宠剧不如看恐怖片——《难哄》梦游桥段的工业化症结',
    href: '/articles/article-detail-nanhou',
    type: 'tv-series',
    tag: 'TV Series',
  },
  {
    title: '记忆·现实·游戏·异托邦的生生不息',
    sub: '评《十日终焉》——以福柯异托邦理论解读终焉之地的空间建构、记忆悖论与游戏化叙事',
    href: '/articles/article-detail-heterotopia',
    type: 'internet-literature',
    tag: 'Internet Literature',
  },
  {
    title: '末日之境与超越之路',
    sub: '结合《十日终焉》探讨资本主义现实主义的困境与超越——读马克·费舍《资本主义现实主义》',
    href: '/articles/article-detail',
    type: 'internet-literature',
    tag: 'Internet Literature',
  },
  {
    title: '同赛道·异策略',
    sub: '三款水排序游戏的关卡设计拆解——Magicsort / 精明的开局 / 缤纷糖葫芦',
    href: '/articles/article-detail-games',
    type: 'games',
    tag: 'Games Analysis',
  },
  {
    title: '内容理解分析练习',
    sub: '微信读书导航标签重构方案 × 男频网文深度对比评析——《十日终焉》& 《道诡异仙》',
    href: '/articles/article-detail-exam',
    type: 'creative-brief',
    tag: 'Strategy & Analysis',
  },
];

const typeLabels: Record<string, string> = {
  film: 'Film',
  'tv-series': 'TV Series',
  'internet-literature': 'Internet Literature',
  games: 'Games',
  'creative-brief': 'Creative Brief',
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono&display=swap');

  .al-body {
    --paper: #f0ece4;
    --ink: #18150f;
    --ink-soft: #3a342a;
    --muted: #8a8070;
    --rule: #ccc5b8;
    --accent: #8b3a2a;
    --cream: #e8e2d8;
    --dark2: #1e1a14;
    background: transparent;
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .al-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    background: #fafafa;
    pointer-events: none;
  }

  .al-layer {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  .al-grain {
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
  }

  .al-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 22px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgba(250, 250, 250, 0.92) 60%, transparent);
  }
  .al-back {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s;
  }
  .al-back:hover { color: var(--ink); }
  .al-back::before { content: '←'; }
  .al-nav-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .al-main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 130px 48px 80px;
  }

  .al-header {
    margin-bottom: 64px;
  }
  .al-overline {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
  }
  .al-type-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 6vw, 72px);
    font-weight: 900;
    font-style: italic;
    color: var(--ink);
    line-height: 1;
    margin-bottom: 28px;
    letter-spacing: -0.02em;
  }
  .al-count {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    color: var(--muted);
    text-transform: uppercase;
  }

  .al-divider {
    height: 1px;
    background: var(--rule);
    margin-bottom: 0;
  }

  .al-list { display: flex; flex-direction: column; }

  .al-row {
    display: grid;
    grid-template-columns: 40px 1fr auto;
    gap: 24px;
    align-items: start;
    padding: 28px 0;
    border-bottom: 1px solid var(--rule);
    text-decoration: none;
    color: inherit;
    transition: background 0.2s;
    cursor: pointer;
  }
  .al-row:hover { background: rgba(139, 58, 42, 0.04); }
  .al-row:hover .al-arrow { opacity: 1; transform: translateX(4px); }
  .al-row:hover .al-title { color: var(--accent); }

  .al-num {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 700;
    color: var(--rule);
    line-height: 1.4;
    padding-top: 2px;
  }

  .al-content { min-width: 0; }
  .al-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 8px;
    transition: color 0.2s;
  }
  .al-sub {
    font-family: 'EB Garamond', serif;
    font-size: 15px;
    font-style: italic;
    color: var(--muted);
    line-height: 1.6;
  }

  .al-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding-top: 4px;
    flex-shrink: 0;
  }
  .al-tag {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    border: 1px solid var(--rule);
    padding: 3px 10px;
    white-space: nowrap;
  }
  .al-arrow {
    font-size: 14px;
    color: var(--accent);
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
  }

  .al-empty {
    padding: 80px 0;
    text-align: center;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    color: var(--muted);
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    .al-nav, .al-main { padding-left: 24px; padding-right: 24px; }
    .al-row { grid-template-columns: 32px 1fr; }
    .al-meta { display: none; }
    .al-type-title { font-size: 36px; }
  }
`;

function ArticleList() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';

  const filtered = type ? articles.filter(a => a.type === type) : articles;
  const label = type ? (typeLabels[type] ?? type) : '全部文章';

  return (
    <>
      <style>{css}</style>
      <div className="al-body">
        <div className="al-bg">
          <Component
            color="rgba(128, 128, 128, 1)"
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 0.3, scale: 1.2 }}
            sizing="fill"
            style={{ height: '100%' }}
          />
        </div>

        <div className="al-grain" />

        <div className="al-layer">
          <nav className="al-nav">
            <Link
              href="/#section3"
              className="al-back"
              onClick={() => sessionStorage.setItem('skipIntro', 'true')}
            >
              Portfolio
            </Link>
            <span className="al-nav-label">Article Works</span>
          </nav>

          <main className="al-main">
            <div className="al-header">
              <div className="al-overline">Article Works · 文章作品集</div>
              <div className="al-type-title">{label}</div>
              <div className="al-count">{filtered.length} {filtered.length === 1 ? 'Article' : 'Articles'}</div>
            </div>

            <div className="al-divider" />

            <div className="al-list">
              {filtered.length === 0 ? (
                <div className="al-empty">No articles found</div>
              ) : (
                filtered.map((article, i) => (
                  <Link key={article.href} href={article.href} className="al-row" onClick={() => sessionStorage.setItem('articleFrom', 'list')}>
                    <div className="al-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="al-content">
                      <div className="al-title">{article.title}</div>
                      <div className="al-sub">{article.sub}</div>
                    </div>
                    <div className="al-meta">
                      <span className="al-tag">{article.tag}</span>
                      <span className="al-arrow">→</span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

function ArticlesFallback() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#fafafa' }}>
        <Component
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.3, scale: 1.2 }}
          sizing="fill"
          style={{ height: '100%' }}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#8a8070' }}>LOADING</span>
      </div>
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={<ArticlesFallback />}>
      <ArticleList />
    </Suspense>
  );
}
