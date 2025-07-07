import { siteConfig } from '@/lib/config'
import { useState } from 'react'

const SOCIALS = [
  { key: 'github', icon: 'fab fa-github', link: v => v, label: 'GitHub' },
  { key: 'qq', icon: 'fab fa-qq', link: v => `tencent://message/?uin=${v}`, label: 'QQ' },
  { key: 'email', icon: 'fas fa-envelope', link: v => `mailto:${v}`, label: 'Email' },
  // 可继续添加如 twitter、weibo、facebook 等
]

// 可自定义提示文字
const DEFAULT_TOOLTIP = siteConfig('SOCIAL_TOOLTIP') || 'Contact me'

export default function SocialLinks() {
  // 兼容原有的配置方式
  const get = key => siteConfig('CONTACT_' + key.toUpperCase()) || siteConfig('SOCIAL_LINKS')?.[key]
  const [hovered, setHovered] = useState(null)
  return (
    <div className="flex flex-col items-center mt-16 z-40">
      <div className="flex gap-6">
        {SOCIALS.map(s =>
          get(s.key) ? (
            <div
              key={s.key}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(s.key)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={s.link(get(s.key))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300 text-2xl"
              >
                <i className={s.icon} />
              </a>
              {/* 悬浮提示 */}
              {hovered === s.key && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none shadow-lg z-50">
                  {siteConfig(`SOCIAL_TOOLTIP_${s.key.toUpperCase()}`) || DEFAULT_TOOLTIP}
                </div>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}
