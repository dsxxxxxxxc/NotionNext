/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      body {
        background-color: #f5f5f5;
      }
      .dark body {
        background-color: #282c34;
      }

      /* 为夜间模式添加One Dark Pro风格的次要背景色 */
      .dark .bg-white {
        background-color: #21252b !important;
      }
      
      .dark .bg-gray-50 {
        background-color: #21252b !important;
      }
      
      .dark .bg-gray-100 {
        background-color: #3e4451 !important;
      }

      /* One Dark Pro卡片和内容区域颜色 */
      .dark .glassmorphism {
        background-color: rgba(33, 37, 43, 0.8) !important;
        border-color: #3e4451 !important;
      }
      
      .dark .card {
        background-color: #21252b !important;
        border-color: #3e4451 !important;
      }

      /* One Dark Pro文本颜色 */
      .dark .text-gray-600 {
        color: #abb2bf !important;
      }
      
      .dark .text-gray-700 {
        color: #9ca3af !important;
      }

      /* 设置了从上到下的渐变黑色 */
      #theme-matery .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      // 自定义滚动条
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #4338ca;
      }

      /* 夜间模式下的滚动条颜色 */
      .dark ::-webkit-scrollbar-thumb {
        background-color: #5c6370;
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: #4338ca transparent;
      }
      
      .dark * {
        scrollbar-width: thin;
        scrollbar-color: #5c6370 transparent;
      }
    `}</style>
  )
}

export { Style }
