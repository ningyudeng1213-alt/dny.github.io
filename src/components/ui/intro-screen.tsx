"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Component } from "@/components/ui/etheral-shadow"

// 行遮罩：加大 padding/margin 给 skewX + rotateZ 留空间，防止字母被裁边
const lineStyle: React.CSSProperties = {
  overflow: 'hidden',
  display: 'block',
  paddingTop: '15px',
  paddingBottom: '15px',
  marginTop: '-15px',
  marginBottom: '-15px',
  paddingRight: '30px',
  marginRight: '-30px',
}

export function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const containerRef      = useRef<HTMLDivElement>(null)
  const leftTextRef       = useRef<HTMLDivElement>(null)
  const rightTextRef      = useRef<HTMLDivElement>(null)
  const centerBlockRef    = useRef<HTMLDivElement>(null)
  const mediaContainerRef = useRef<HTMLDivElement>(null)
  const innerContentRef   = useRef<HTMLDivElement>(null)   // 画中画内容容器（替代 video）
  const enterBtnRef       = useRef<HTMLDivElement>(null)
  const leftSquareRef     = useRef<HTMLSpanElement>(null)
  const rightSquareRef    = useRef<HTMLSpanElement>(null)
  const loaderStatusRef   = useRef<HTMLDivElement>(null)
  const loaderCounterRef  = useRef<HTMLDivElement>(null)
  const loadNumRef        = useRef<HTMLSpanElement>(null)
  const isTransitioning   = useRef(false)

  useEffect(() => {
    // enterBtn 由 GSAP xPercent/yPercent 负责居中
    gsap.set(enterBtnRef.current, { xPercent: -50, yPercent: -50 })

    // 画中画：居中且与第一页保持 1:1 比例，避免转场前后构图跳变
    gsap.set(innerContentRef.current, { xPercent: -50, yPercent: -50, scale: 1, z: -20 })

    // --- 字符级拆分（Strict Mode 安全） ---
    const container = containerRef.current!
    container.querySelectorAll('.intro-word').forEach(wordEl => {
      if (wordEl.querySelector('.intro-char')) return
      const text = wordEl.textContent ?? ''
      wordEl.innerHTML = ''
      text.split('').forEach(ch => {
        const span = document.createElement('span')
        span.className = 'intro-char'
        span.style.display = 'inline-block'
        span.textContent = ch === ' ' ? '\u00A0' : ch
        wordEl.appendChild(span)
      })
    })

    const chars = container.querySelectorAll('.intro-char')

    // --- 阶梯式初始位置 ---
    gsap.set(leftTextRef.current,    { left: '35%', top: '40%', xPercent: -50, yPercent: -50 })
    gsap.set(rightTextRef.current,   { left: '60%', top: '65%', xPercent: -50, yPercent: -50 })
    gsap.set(centerBlockRef.current, { left: '50%', top: '50%', xPercent: -50, yPercent: -50, scale: 0, opacity: 0 })

    // 字符初始状态：灰色 + 偏下 + 复合形变（overflow:hidden 遮住，恢复容器可见）
    gsap.set(chars, { y: '120%', skewY: 10, skewX: -5, rotateZ: 3, color: '#c4c4c4' })
    gsap.set([leftTextRef.current, rightTextRef.current], { opacity: 1 })

    const tl = gsap.timeline()
    const counterObj = { val: 0 }

    // --- 阶段一：三轨道严格同步 ---
    tl.addLabel('loadPhase')

    .to(counterObj, {
      val: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      roundProps: 'val',
      onUpdate() {
        if (loadNumRef.current) loadNumRef.current.textContent = String(counterObj.val)
      },
    }, 'loadPhase')

    .to(chars, {
      y: '0%', skewY: 0, skewX: 0, rotateZ: 0,
      duration: 1.4, stagger: 0.02, ease: 'expo.out',
    }, 'loadPhase')

    .to(chars, {
      color: '#0d0d0d', duration: 2.5, ease: 'power2.inOut',
    }, 'loadPhase')

    // --- 阶段二：角落提示淡出 ---
    .to([loaderStatusRef.current, loaderCounterRef.current], {
      opacity: 0, duration: 0.4, ease: 'power2.out',
    })

    // --- 阶段三：帷幕拉开 + 画中画窗口破土 ---
    .to(leftTextRef.current, {
      left: '17vw', top: '50%', xPercent: 0, yPercent: -50,
      duration: 1.8, ease: 'expo.inOut',
    }, '+=0.2')

    .to(rightTextRef.current, {
      left: 'calc(100% - 13vw)', top: '50%', xPercent: -100, yPercent: -50,
      duration: 1.8, ease: 'expo.inOut',
    }, '<')

    .to(centerBlockRef.current, {
      opacity: 1, scale: 1, duration: 1.8, ease: 'expo.inOut',
    }, '<')

    // --- 交互：mouseenter / mouseleave ---
    const centerBlock = centerBlockRef.current
    if (!centerBlock) return

    const handleMouseEnter = () => {
      if (isTransitioning.current) return
      gsap.to(leftSquareRef.current,  { x:  10, duration: 0.6, ease: 'power2.out' })
      gsap.to(rightSquareRef.current, { x: -10, duration: 0.6, ease: 'power2.out' })
    }

    const handleMouseLeave = () => {
      if (isTransitioning.current) return
      gsap.to(mediaContainerRef.current, { rotateY: 0, rotateX: 0, duration: 1, ease: 'power3.out' })
      // 画中画归位（x/y 是视差偏移量，归零即回到 xPercent/yPercent 中心）
      gsap.to(innerContentRef.current, { x: 0, y: 0, duration: 1, ease: 'power3.out' })
      gsap.to(enterBtnRef.current,     { x: 0, y: 0, duration: 1, ease: 'power3.out' })
      gsap.to(leftSquareRef.current,   { x: 0, duration: 0.6, ease: 'power2.out' })
      gsap.to(rightSquareRef.current,  { x: 0, duration: 0.6, ease: 'power2.out' })
    }

    // --- 交互：全局 mousemove 视差 + 3D 倾斜 ---
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isTransitioning.current) return
      const mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2

      gsap.to(leftTextRef.current,  { x: mouseX * -25, y: mouseY * -25, duration: 2, ease: 'power2.out' })
      gsap.to(rightTextRef.current, { x: mouseX *  25, y: mouseY *  25, duration: 2, ease: 'power2.out' })

      const rect = centerBlock.getBoundingClientRect()
      const isOver = e.clientX > rect.left && e.clientX < rect.right &&
                     e.clientY > rect.top  && e.clientY < rect.bottom
      if (isOver) {
        const bx = (e.clientX - rect.left) / rect.width  - 0.5
        const by = (e.clientY - rect.top)  / rect.height - 0.5
        gsap.to(mediaContainerRef.current, {
          rotateY: bx * 15, rotateX: -by * 15,
          duration: 0.5, ease: 'power2.out', transformPerspective: 1000,
        })
        // 画中画反向视差（x/y 叠加在 xPercent/yPercent 中心之上）
        gsap.to(innerContentRef.current, { x: -bx * 20, y: -by * 20, duration: 0.5, ease: 'power2.out' })
        gsap.to(enterBtnRef.current,     { x:  bx * 16, y:  by * 16, duration: 0.5, ease: 'power2.out' })
      }
    }

    // --- 点击：Portal 全屏展开转场 ---
    const handleClick = () => {
      if (isTransitioning.current) return
      isTransitioning.current = true

      const expandTl = gsap.timeline()

      // 1. 周围元素退场 + 清除液态扭曲
      expandTl.to(
        [leftTextRef.current, rightTextRef.current, enterBtnRef.current,
         loaderStatusRef.current, loaderCounterRef.current],
        { opacity: 0, y: -30, duration: 0.8, ease: 'power3.inOut', stagger: 0.05 },
        0
      )
      // 2. 抹平 3D 倾斜
      .to(mediaContainerRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'power3.inOut' }, 0)

      // 3. 画中画归位并恢复原始比例
      .to(innerContentRef.current, {
        x: 0, y: 0, scale: 1, z: 0,
        duration: 1.5, ease: 'expo.inOut',
      }, 0.2)

      // 4. 遮罩窗口突破限制，撑满全屏
      .to(centerBlockRef.current, {
        left: 0, top: 0,
        xPercent: 0, yPercent: 0,
        width: '100vw', height: '100vh',
        maxWidth: '100vw', maxHeight: '100vh',
        duration: 1.5, ease: 'expo.inOut',
        onComplete: () => {
          // intro 整体淡出，page 从底层透出，树杈上方灰色缓慢提亮为白色
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.7,
            ease: 'power2.inOut',
            onComplete: onEnter,
          })
        },
      }, 0.2)
    }

    centerBlock.addEventListener('mouseenter', handleMouseEnter)
    centerBlock.addEventListener('mouseleave', handleMouseLeave)
    centerBlock.addEventListener('click', handleClick)
    window.addEventListener('mousemove', handleGlobalMouseMove)

    return () => {
      tl.kill()
      centerBlock.removeEventListener('mouseenter', handleMouseEnter)
      centerBlock.removeEventListener('mouseleave', handleMouseLeave)
      centerBlock.removeEventListener('click', handleClick)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [onEnter])

  return (
    <div ref={containerRef} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      backgroundColor: '#fafafa',
      overflow: 'hidden',
      fontFamily: "var(--font-oswald), sans-serif",
    }}>
      {/* 右上角：LOADING ASSETS */}
      <div ref={loaderStatusRef} style={{
        position: 'absolute', top: '60px', right: '8vw',
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: '10px', fontWeight: 'bold',
        textTransform: 'uppercase', letterSpacing: '0.05em',
        lineHeight: 1.2, color: '#0d0d0d', zIndex: 20,
      }}>
        LOADING<br />ASSETS
        <span style={{ display: 'block', width: '3px', height: '3px', backgroundColor: '#0d0d0d', marginTop: '6px' }} />
      </div>

      {/* 左下角：数字计数器 */}
      <div ref={loaderCounterRef} style={{
        position: 'absolute', bottom: '60px', left: '8vw',
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: '10px', fontWeight: 'bold',
        letterSpacing: '0.05em', lineHeight: 1.2,
        color: '#0d0d0d', zIndex: 20,
      }}>
        <span ref={loadNumRef}>0</span><br />/100
        <span style={{ display: 'block', width: '3px', height: '3px', backgroundColor: '#0d0d0d', marginTop: '6px' }} />
      </div>

      {/* 全屏容器 */}
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>

        {/* 左侧文字 */}
        <div ref={leftTextRef} style={{
          position: 'absolute',
          fontSize: 'clamp(24px, 4vw, 64px)', lineHeight: 0.85,
          fontStyle: 'italic', fontWeight: 700, letterSpacing: '-0.03em',
          color: '#0d0d0d', display: 'flex', flexDirection: 'column',
          fontFamily: "var(--font-oswald), sans-serif",
          whiteSpace: 'nowrap', willChange: 'transform',
          opacity: 0,
        }}>
          <div style={lineStyle}>
            <span className="intro-word" style={{ display: 'inline-block' }}>DENG</span>
          </div>
          <div style={{ ...lineStyle, paddingLeft: '1.5vw' }}>
            <span className="intro-word" style={{ display: 'inline-block' }}>NINGYU</span>
          </div>
        </div>

        {/* 中间遮罩窗口 */}
        <div
          ref={centerBlockRef}
          style={{
            position: 'absolute',
            width: '22vw', height: '40vw',
            maxWidth: '400px', maxHeight: '720px',
            minWidth: '240px', minHeight: '430px',
            cursor: 'pointer', zIndex: 5,
            transformStyle: 'preserve-3d',
            opacity: 0,
          }}
        >
          {/* 裁剪容器：overflow:hidden 实现 Portal 窗口效果 */}
          <div ref={mediaContainerRef} style={{
            width: '100%', height: '100%',
            backgroundColor: '#fafafa', overflow: 'hidden',
            position: 'relative', transformStyle: 'preserve-3d',
          }}>
            {/* 画中画：全屏尺寸，固定在容器中心，GSAP 负责居中和视差 */}
            <div
              ref={innerContentRef}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '100vw', height: '100vh',
              }}
            >
              {/* ===== 第一屏真实内容：与 page.tsx section1 完全一致 ===== */}
              <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#fafafa' }}>

                {/* EtherealShadow 背景层：让树杈上方呈灰色，与第一屏过渡 */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                  <Component
                    color="rgba(128, 128, 128, 1)"
                    animation={{ scale: 100, speed: 90 }}
                    noise={{ opacity: 0.3, scale: 1.2 }}
                    sizing="fill"
                    style={{ height: '100%' }}
                  />
                </div>

                {/* 插图：高度撑满第一屏，宽度自适应，完整显示 */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/illustration.webp`}
                  alt=""
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    transform: 'translateX(-42%)',
                    height: '100%',
                    width: 'auto',
                    zIndex: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    mixBlendMode: 'multiply',
                  }}
                />

                {/* 内容层：section1 布局 — flex col 居中，同款 padding */}
                <div
                  className="flex flex-col items-center justify-center min-h-screen px-6"
                  style={{ paddingBottom: '60px', position: 'relative', zIndex: 2 }}
                >
                  <div className="w-full text-left" style={{ paddingTop: '60px', paddingLeft: '10vw' }}>

                    {/* 主标题：1:1 复刻 WordPullUp 最终 DOM 结构
                        WordPullUp 将每个词渲染为 <span display:inline-block paddingRight:8px>
                        词间无文本空格 → wordSpacing 不生效 → 间距仅来自 paddingRight:8px */}
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                      <h1
                        className="font-light text-gray-900 text-left leading-tight tracking-[0.15em]"
                        style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif", fontSize: '28px', wordSpacing: '1.2em', fontWeight: 300, margin: 0 }}
                      >
                        {['WELCOME', 'TO', 'MY'].map(w => (
                          <span key={w} style={{ display: 'inline-block', paddingRight: '8px' }}>{w}</span>
                        ))}
                      </h1>
                      <h1
                        className="font-light text-gray-900 text-left leading-tight tracking-[0.15em]"
                        style={{ fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif", fontSize: '40px', wordSpacing: '1.2em', fontWeight: 300, margin: 0 }}
                      >
                        {['PORTFOLIO'].map(w => (
                          <span key={w} style={{ display: 'inline-block', paddingRight: '8px' }}>{w}</span>
                        ))}
                      </h1>
                    </div>

                    {/* 副标题：邓甯予 */}
                    <h1
                      className="text-5xl md:text-6xl font-light text-gray-900 mt-10 mb-5 tracking-widest"
                      style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
                    >
                      邓甯予
                    </h1>

                    {/* 正文介绍 */}
                    <p
                      className="text-gray-700 text-sm md:text-base leading-8"
                      style={{ fontFamily: "Georgia, 'Songti SC', STSong, serif" }}
                    >
                      南开大学文学硕士 · 26年应届毕业生
                      <br />
                      对运营与商业化感兴趣 · 现实习于新浪微博
                      <br />
                      <span style={{ fontSize: '0.85em' }}>「用研究网文与流行文化的眼光做内容，用数据验证每一个判断」</span>
                    </p>

                    {/* Unfold 按钮（静态展示，点击由 portal 的 onEnter 接管）*/}
                    <div style={{
                      marginTop: '32px',
                      display: 'inline-flex', alignItems: 'center', gap: '12px',
                      fontSize: '15px', fontWeight: 700, color: '#2a2010',
                      fontFamily: "'Adobe Song Std', 'AdobeSongStd', serif",
                      letterSpacing: '0.25em',
                      borderBottom: '2px solid #2a2010', paddingBottom: '4px',
                    }}>
                      Unfold →
                    </div>

                  </div>
                </div>
              </div>
              {/* ===== 第一屏结束 ===== */}
            </div>

            {/* ENTER 按钮浮层 */}
            <div ref={enterBtnRef} style={{
              position: 'absolute', top: '50%', left: '50%',
              color: '#ffffff',
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: '12px', letterSpacing: '0.15em',
              display: 'flex', alignItems: 'center', gap: '12px',
              zIndex: 10, pointerEvents: 'none',
              textShadow: '0 4px 10px rgba(0,0,0,0.5)',
              whiteSpace: 'nowrap',
            }}>
              <span ref={leftSquareRef} style={{ width: '4px', height: '4px', backgroundColor: '#ffffff', display: 'block', flexShrink: 0 }} />
              ENTER
              <span ref={rightSquareRef} style={{ width: '4px', height: '4px', backgroundColor: '#ffffff', display: 'block', flexShrink: 0 }} />
            </div>
          </div>
        </div>

        {/* 右侧文字 */}
        <div ref={rightTextRef} style={{
          position: 'absolute',
          fontSize: 'clamp(24px, 4vw, 64px)', lineHeight: 0.85,
          fontStyle: 'italic', fontWeight: 700, letterSpacing: '-0.03em',
          color: '#0d0d0d', display: 'flex', flexDirection: 'column',
          fontFamily: "var(--font-oswald), sans-serif",
          whiteSpace: 'nowrap', willChange: 'transform',
          opacity: 0,
        }}>
          <div style={lineStyle}>
            <span className="intro-word" style={{ display: 'inline-block' }}>CREATIVE</span>
          </div>
          <div style={{ ...lineStyle, paddingLeft: '1.5vw' }}>
            <span className="intro-word" style={{ display: 'inline-block' }}>STORYTELLER</span>
          </div>
        </div>
      </div>

    </div>
  )
}
