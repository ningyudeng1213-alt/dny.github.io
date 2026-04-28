'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, MotionConfig, AnimatePresence } from 'framer-motion'

export type IMenuItem = { id: number; title: string; url: string; scrollTo?: string }
export type IMenu = {
  id: number
  title: string
  url: string
  scrollTo?: string
  dropdown?: boolean
  items?: IMenuItem[]
}

const NavItem = ({ item }: { item: IMenu }) => {
  const [open, setOpen] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  const handleScrollTo = (e: React.MouseEvent) => {
    if (item.scrollTo) {
      e.preventDefault()
      document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); setLinkHovered(false) }}
    >
      {item.dropdown ? (
        <span
          className="relative text-sm py-2 flex items-center gap-1 cursor-default"
          style={{
            fontFamily: "'Adobe Song Std', serif",
            letterSpacing: '0.15em',
            color: '#7a7060',
            fontWeight: 600,
          }}
        >
          {item.title}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'inline-block', fontSize: '10px', opacity: 0.6, marginTop: '1px' }}
          >
            ▾
          </motion.span>
        </span>
      ) : (
        <Link
          href={item.url}
          className="relative text-sm py-2 flex items-center gap-1"
          style={{
            fontFamily: "'Adobe Song Std', serif",
            letterSpacing: '0.15em',
            color: linkHovered ? '#4a4035' : '#7a7060',
            fontWeight: 600,
            transition: 'color 0.2s',
          }}
          onClick={item.scrollTo ? handleScrollTo : undefined}
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
        >
          {item.title}
          {linkHovered && (
            <motion.div layoutId="underline" className="absolute bottom-0 h-px w-full" style={{ background: '#7a7060' }} />
          )}
        </Link>
      )}

      {/* 下拉菜单 */}
      <AnimatePresence>
        {item.dropdown && open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: '50%',
              transform: 'translateX(-50%)',
              minWidth: '120px',
              background: 'rgba(250,250,248,0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)',
              padding: '6px 0',
              zIndex: 200,
              listStyle: 'none',
              margin: 0,
            }}
          >
            {item.items?.map((sub) => (
              <DropdownItem key={sub.id} item={sub} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

const DropdownItem = ({ item }: { item: IMenuItem }) => {
  const [hovered, setHovered] = useState(false)

  const handleScrollTo = (e: React.MouseEvent) => {
    if (item.scrollTo) {
      const target = document.getElementById(item.scrollTo)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <li>
      <Link
        href={item.url}
        className="block px-5 py-2 text-xs"
        style={{
          fontFamily: "'Adobe Song Std', serif",
          letterSpacing: '0.12em',
          color: '#4a4035',
          fontWeight: 600,
          transition: 'color 0.2s',
          background: hovered ? 'rgba(0,0,0,0.04)' : 'transparent',
        }}
        onClick={item.scrollTo ? handleScrollTo : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {item.title}
      </Link>
    </li>
  )
}

const Menu = ({ list }: { list: IMenu[] }) => {
  return (
    <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
      <nav>
        <ul className="flex items-center gap-8" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {list.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </MotionConfig>
  )
}

export default Menu
