'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
  href?: string;
  href2?: string;
}

function RevealImageListItem({ text, images, href, href2 }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect = "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";
  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1
        className="text-4xl font-black transition-all duration-500 group-hover:opacity-40"
        style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif", color: '#2a2010' }}
      >
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          {href2 ? (
            <Link href={href2} className="block h-full w-full" onClick={() => sessionStorage.setItem('articleFrom', 'home')}>
              <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
            </Link>
          ) : (
            <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
          )}
        </div>
      </div>
      <div className={cn(container, "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12")}>
        <div className={cn(effect, "duration-200")}>
          {href ? (
            <Link href={href} className="block h-full w-full" onClick={() => sessionStorage.setItem('articleFrom', 'home')}>
              <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
            </Link>
          ) : (
            <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
          )}
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Academic Writing",
      href: "/articles/article-detail",
      href2: "/articles/article-detail-yolo",
      images: [
        { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/article1.webp`, alt: "Academic Writing 1" },
        { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/article2.webp`, alt: "Academic Writing 2" },
      ],
    },
    {
      text: "Critical Essays",
      href: "/articles/article-detail-goodstuff",
      href2: "/articles/article-detail-heterotopia",
      images: [
        { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/essay1.webp`, alt: "Critical Essays 1" },
        { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/essay2.webp`, alt: "Critical Essays 2" },
      ],
    },
    {
      text: "Strategy & Analysis",
      href: "/articles/article-detail-parrotkill",
      href2: "/articles/article-detail-robotdreams",
      images: [
        { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/strategy1.webp`, alt: "Strategy 1" },
        { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/strategy2.webp`, alt: "Strategy 2" },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-transparent py-4" style={{ paddingLeft: '10vw' }}>
      <h3
        className="text-sm font-black uppercase"
        style={{ color: '#7a7060', letterSpacing: '0.12em', fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif" }}
      >
        Article Works
      </h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} href={item.href} href2={item.href2} />
      ))}
    </div>
  );
}

function DemoList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Tickets Diary",
      images: [
        { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&auto=format&fit=crop&q=60", alt: "Tickets 1" },
        { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=200&auto=format&fit=crop&q=60", alt: "Tickets 2" },
      ],
    },
    {
      text: "Fortune Trinkets",
      images: [
        { src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&auto=format&fit=crop&q=60", alt: "Fortune 1" },
        { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&auto=format&fit=crop&q=60", alt: "Fortune 2" },
      ],
    },
    {
      text: "Coming Soon",
      images: [
        { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=60", alt: "Soon 1" },
        { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&auto=format&fit=crop&q=60", alt: "Soon 2" },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-transparent px-8 py-4">
      <h3 className="text-sm font-black uppercase" style={{ color: '#7a7060', fontFamily: "'Adobe Song Std', serif", letterSpacing: '0.15em' }}>Demo</h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList, DemoList };
