// 测试背景特效是否正常工作
console.log('测试脚本开始运行');

// 检查canvas元素
setTimeout(() => {
  const lineCanvas = document.querySelector('canvas[id^="c_n"]');
  const ribbonCanvas = document.querySelector('#ribbon-canvas');
  
  console.log('Line Canvas 找到:', lineCanvas ? '是' : '否');
  console.log('Ribbon Canvas 找到:', ribbonCanvas ? '是' : '否');
  
  if (lineCanvas) {
    console.log('Line Canvas 样式:', lineCanvas.style.cssText);
    console.log('Line Canvas 尺寸:', lineCanvas.width, 'x', lineCanvas.height);
  }
  
  if (ribbonCanvas) {
    console.log('Ribbon Canvas 样式:', ribbonCanvas.style.cssText);
    console.log('Ribbon Canvas 尺寸:', ribbonCanvas.width, 'x', ribbonCanvas.height);
  }
}, 2000);
