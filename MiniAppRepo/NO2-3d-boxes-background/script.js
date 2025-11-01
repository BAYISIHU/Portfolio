// script.js
const boxesContainer = document.getElementById('boxes');
// 1. ボタン要素を取得
const btn = document.getElementById('btn');
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  // 4x4のグリッドを作成
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');

      // 背景画像の位置を計算して設定
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;

      boxesContainer.appendChild(box);
    }
  }
}

// 関数を実行
createBoxes();