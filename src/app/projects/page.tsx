import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center px-6">
      <p className="font-sans text-xs tracking-[0.35em] uppercase text-white/35 mb-5">Projects</p>
      <h1
        className="text-4xl text-white font-light mb-4"
        style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
      >
        项目作品集
      </h1>
      <p className="text-white/35 text-sm mb-10 font-sans">内容整理中，敬请期待。</p>
      <Link
        href="/"
        className="font-sans text-white/40 text-xs tracking-widest hover:text-white/70 transition-colors"
      >
        ← 返回首页
      </Link>
    </div>
  );
}
