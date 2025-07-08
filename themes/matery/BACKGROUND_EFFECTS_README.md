# Matery 主题背景特效修改总结

## 文件位置变更
- `line.js`: 从 `/public/js/` 移动到 `/themes/matery/`
- `ribbonDynamic.js`: 从 `/public/js/` 移动到 `/themes/matery/`

## 主要修改内容

### 1. 引用路径更新
**文件**: `themes/matery/index.js`
- 修改脚本引用路径为 `/themes/matery/line.js` 和 `/themes/matery/ribbonDynamic.js`

### 2. 变量冲突解决

#### line.js 变量重命名:
- `random` → `lineRandom` (避免与ribbonDynamic.js冲突)
- `context` → `lineContext` (避免与React Context冲突)

#### ribbonDynamic.js 变量重命名:
- `random` → `ribbonRandom` (避免与line.js冲突)

### 3. 事件监听器优化
**line.js**:
- `window.onresize` → `window.addEventListener('resize', ...)`
- `window.onmousemove` → `window.addEventListener('mousemove', ...)`
- `window.onmouseout` → `window.addEventListener('mouseout', ...)`

### 4. 命名空间保护
- 添加 `window.MateryLineBackground` 防止重复初始化
- 添加 `window.MateryRibbonBackground` 防止重复初始化

### 5. CSS样式增强
**文件**: `themes/matery/style.js`
- 为背景特效canvas添加强制样式
- 设置不同的z-index层级 (line: -2, ribbon: -1)
- 确保pointer-events: none

### 6. z-index层级设置
- Line canvas: z-index: -2
- Ribbon canvas: z-index: -1
- 确保不会覆盖其他页面元素

## 兼容性检查

### 已验证的兼容性:
- ✅ 与React Context不冲突
- ✅ 与matery主题组件不冲突
- ✅ 变量命名空间隔离
- ✅ 事件监听器不会覆盖其他功能
- ✅ CSS样式不会影响页面布局

### 保留的功能:
- ✅ 线条背景动画效果
- ✅ 彩带背景动画效果
- ✅ 鼠标交互功能
- ✅ 响应式设计
- ✅ 配置开关控制

## 使用方法
在 `themes/matery/config.js` 中控制开关:
```javascript
MATERY_BACKGROUND_ANIMATE_LINES: true,    // 控制线条背景
MATERY_BACKGROUND_ANIMATE_RIBBONS: true   // 控制彩带背景
```

## 调试信息
浏览器控制台会显示:
- "Line.js: 开始初始化"
- "RibbonDynamic.js: 开始初始化"
- "Line.js: Canvas已添加到页面"
- "RibbonDynamic.js: Canvas已添加到页面"
