// script.js
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation(); // ページ読み込み時にアニメーションを開始

// script.js (runAnimation 関数を修正)

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1; // 最後の要素のインデックス (0始まりなので length - 1)

    num.addEventListener('animationend', (e) => {
      // (e.animationName で 'goIn' か 'goOut' かを判別)

      // goInアニメが終わり、かつ、最後の数字(0) *ではない* 場合
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      }
      // goOutアニメが終わり、かつ、次の数字が *ある* 場合
      else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      }
      // それ以外 (＝最後の数字(0) の goIn が終わった時)
      else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}
// すべてを初期状態に戻す関数
// (Function to reset everything to the initial state)
function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = ''; // すべてのクラス (.in, .out) を削除
    // (Remove all classes (.in, .out))
  });

  nums[0].classList.add('in'); // 最初の「3」にだけ .in を戻す
  // (Add .in back only to the first "3")
}

// リプレイボタンがクリックされた時の処理
// (Action when the replay button is clicked)
replay.addEventListener('click', () => {
  resetDOM();
  runAnimation(); // アニメーションを再実行
  // (Re-run the animation)
});