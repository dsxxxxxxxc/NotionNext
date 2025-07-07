// import Image from 'next/image'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { loadExternalResource } from '@/lib/utils'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
import SocialLinks from '@/components/SocialLinks'
import Link from 'next/link'
import '@/public/css/wave.css'

let wrapperTop = 0

/**
 * 首页英雄区
 * 是一张大图，带个居中按钮
 * @returns 头图
 */
const Hero = props => {
  const [typed, changeType] = useState()
  const { siteInfo } = props
  const { locale } = useGlobal()
  const GREETING_WORDS = siteConfig('GREETING_WORDS').split(',')
  useEffect(() => {
    updateHeaderHeight()
    if (!typed && window && document.getElementById('typed')) {
      loadExternalResource('/js/typed.min.js', 'js').then(() => {
        if (window.Typed) {
          changeType(
            new window.Typed('#typed', {
              strings: GREETING_WORDS,
              typeSpeed: 200,
              backSpeed: 100,
              backDelay: 400,
              showCursor: true,
              smartBackspace: true
            })
          )
        }
      })
    }

    window.addEventListener('resize', updateHeaderHeight)
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  function updateHeaderHeight() {
    requestAnimationFrame(() => {
      const wrapperElement = document.getElementById('wrapper')
      wrapperTop = wrapperElement?.offsetTop
    })
  }

  return (
    <header
      id='header'
      style={{ zIndex: 1 }}
      className=' w-full h-screen relative bg-black'>
      <div className='text-white absolute flex flex-col h-full items-center justify-center w-full '>
        {/* 站点标题 */}
        <div className='text-4xl md:text-5xl shadow-text'>
          <Link href='/'>
            <span className='hover:text-orange-400 transition-colors duration-300 cursor-pointer'>
              {siteInfo?.title || siteConfig('TITLE')}
            </span>
          </Link>
        </div>
        {/* 站点欢迎语 */}
        <div className='mt-2 h-12 items-center text-center shadow-text text-white text-lg'>
          <span id='typed' />
        </div>
        {/* 滚动按钮 */}
        <div
          onClick={() => {
            window.scrollTo({ top: wrapperTop, behavior: 'smooth' })
          }}
          className='glassmorphism mt-12 border cursor-pointer w-40 text-center pt-4 pb-3 text-md text-white hover:bg-orange-600 duration-300 rounded-3xl z-40'>
          <i className='animate-bounce fas fa-angle-double-down' />{' '}
          <span>
            {siteConfig('MATERY_SHOW_START_READING', null, CONFIG) &&
              locale.COMMON.START_READING}
          </span>
        </div>

        {/* 社交媒体图标 */}
        <SocialLinks />
      </div>

      <LazyImage
        priority={true}
        id='header-cover'
        src={siteInfo?.pageCover}
        className={`header-cover object-center w-full h-screen object-cover ${siteConfig('MATERY_HOME_NAV_BACKGROUND_IMG_FIXED', null, CONFIG) ? 'fixed' : ''}`}
      />

      {/* 波浪特效 */}
      <div className="preview-overlay absolute bottom-0 left-0 w-full pointer-events-none">
        <svg className="preview-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="preview-parallax">
            <use href="#gentle-wave" x="48" y="0" fill="var(--gentle-wave1)" />
            <use href="#gentle-wave" x="48" y="3" fill="var(--gentle-wave2)" />
            <use href="#gentle-wave" x="48" y="5" fill="var(--gentle-wave3)" />
            <use href="#gentle-wave" x="48" y="7" fill="var(--gentle-wave)" />
          </g>
        </svg>
      </div>
    </header>
  )
}

export default Hero
