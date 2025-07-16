const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたら2秒後に文章を書き換える
btn.addEventListener('click', () => {
  setTimeout( () => {
    text.textContent ='ボタンをクリックしました';
  }, 2000);
});