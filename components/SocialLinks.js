import { siteConfig } from '@/lib/config'

const SOCIALS = [
  { key: 'github', icon: 'fab fa-github', link: v => v },
  { key: 'qq', icon: 'fab fa-qq', link: v => `tencent://message/?uin=${v}` },
  { key: 'email', icon: 'fas fa-envelope', link: v => `mailto:${v}` },
  // 可继续添加如 twitter、weibo、facebook 等
]

export default function SocialLinks() {
  // 兼容原有的配置方式
  const get = key => siteConfig('CONTACT_' + key.toUpperCase()) || siteConfig('SOCIAL_LINKS')?.[key]
  return (
    <div className="flex gap-6 mt-8 z-40">
      {SOCIALS.map(s =>
        get(s.key) ? (
          <a
            key={s.key}
            href={s.link(get(s.key))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition-colors duration-300 text-2xl"
          >
            <i className={s.icon} />
          </a>
        ) : null
      )}
    </div>
  )
}
