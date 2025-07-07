import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'

/**
 * 字数统计
 * @returns
 */
export default function WordCount({ wordCount, readTime, post }) {
  const { locale } = useGlobal()
  
  // 检查是否启用字数统计和阅读时间
  const wordCountEnable = siteConfig('POST_WORD_COUNT_ENABLE')
  const readTimeEnable = siteConfig('POST_READ_TIME_ENABLE')
  const extendedStatsEnable = siteConfig('POST_EXTENDED_STATS_ENABLE')
  
  // 如果都未启用，则不显示
  if (!wordCountEnable && !readTimeEnable) {
    return null
  }

  // 计算更多统计信息
  const getAdditionalStats = () => {
    if (!post?.pageContent) return {}
    
    const content = post.pageContent
    const charCount = content.length
    const paragraphCount = (content.match(/\n\s*\n/g) || []).length + 1
    const sentenceCount = (content.match(/[.!?。！？]+/g) || []).length
    
    return { charCount, paragraphCount, sentenceCount }
  }

  const additionalStats = getAdditionalStats()

  return (
    <div className='word-count-container border-l-2 border-gray-200 dark:border-gray-700 pl-3'>
    <span id='wordCountWrapper' className='flex gap-3 font-light'>
        {wordCountEnable && (
      <span className='flex whitespace-nowrap items-center'>
            <i className='pl-1 pr-2 fas fa-file-word text-blue-500' />
        <span>{locale.COMMON.WORD_COUNT}</span>&nbsp;
            <span id='wordCount' className='font-medium'>{wordCount}</span>
      </span>
        )}
        {readTimeEnable && (
      <span className='flex whitespace-nowrap items-center'>
            <i className='mr-1 fas fa-clock text-green-500' />
        <span>{locale.COMMON.READ_TIME}≈</span>&nbsp;
            <span id='readTime' className='font-medium'>{readTime}</span>&nbsp;{locale.COMMON.MINUTE}
          </span>
        )}
      </span>
      
      {/* 扩展统计信息 - 可以通过配置控制显示 */}
      {extendedStatsEnable && additionalStats.charCount > 0 && (
        <div className='mt-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-2'>
          <span className='mr-3'>
            <i className='fas fa-font mr-1 text-purple-500' />
            字符: {additionalStats.charCount}
          </span>
          <span className='mr-3'>
            <i className='fas fa-paragraph mr-1 text-orange-500' />
            段落: {additionalStats.paragraphCount}
          </span>
          <span>
            <i className='fas fa-comment mr-1 text-red-500' />
            句子: {additionalStats.sentenceCount}
    </span>
        </div>
      )}
    </div>
  )
}