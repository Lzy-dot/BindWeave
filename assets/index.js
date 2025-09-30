
$('.carousel-item', '.show-neighbors').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});


// --- BibTeX 复制按钮功能 ---

// 确保在整个文档加载完毕后才执行脚本，这是一个好习惯
document.addEventListener('DOMContentLoaded', (event) => {
    
    // 1. 获取需要操作的 HTML 元素
    const copyBtn = document.getElementById('copy-bibtex-btn');
    const bibtexCodeElement = document.getElementById('bibtex-code');

    // 2. 检查元素是否存在，如果不存在则不执行后续代码，避免报错
    if (copyBtn && bibtexCodeElement) {
        
        // 3. 为“复制”按钮添加一个点击事件监听器
        copyBtn.addEventListener('click', () => {
            
            // 4. 获取 BibTeX 代码的纯文本内容
            const codeToCopy = bibtexCodeElement.innerText;

            // 5. 使用现代的 Clipboard API 将文本复制到剪贴板
            // 这是一个异步操作，返回一个 Promise
            navigator.clipboard.writeText(codeToCopy).then(() => {
                
                // 6. 复制成功后，给用户一个视觉反馈
                const originalText = copyBtn.innerText; // 保存按钮原来的文字
                copyBtn.innerText = 'Copied!'; // 修改按钮文字为 "Copied!"
                
                // 7. 2秒后，将按钮的文字恢复原状
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                }, 2000);

            }).catch(err => {
                
                // 8. 如果复制失败，在控制台打印错误信息
                console.error('无法复制 BibTeX 代码: ', err);
                alert('复制失败，请手动复制。'); // 给用户一个备用提示
            });
        });
    }
});
