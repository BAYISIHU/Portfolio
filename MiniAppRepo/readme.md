# フロントエンド練習プロジェクト集

このリポジトリは、フロントエンド開発（HTML, CSS, JavaScript）の学習の一環として作成した、小規模なUIコンポーネントやミニプロジェクトをまとめたものです。

※ このポートフォリオは随時更新予定です。

---

## 収録プロジェクト
### 1. 3Dボックス背景 (3D Boxes Background)
**Demo:**
[プロジェクトデモはこちら](https://BAYISIHU.github.io/Portfolio/MiniAppRepo/day1_expanding-cards/)
**概要:**
 HTML、CSS、JavaScript（ES6+）を使用して実装した、インタラクティブなUIコンポーネントです。複数のカードが横並びに配置されており、ユーザーが特定のカードをクリックすると、そのカードがアニメーションと共にスムーズに拡大し、関連するテキストが表示されます。
 **主な使用技術:**
HTML5: セマンティックな構造定義
CSS3:
Flexbox: カードの横並びレイアウトと展開・縮小の制御
Transitions: flexとopacityプロパティの変更を滑らかにするアニメーション
メディアクエリ: レスポンシブ対応
JavaScript (Vanilla JS):
イベントリスナー: clickイベントの監視

classList操作: activeクラスの追加・削除による状態管理
### 2. 3Dボックス背景 (3D Boxes Background)
**Demo:**
[プロジェクトデモはこちら](https://BAYISIHU.github.io/Portfolio/MiniAppRepo/NO2-3d-boxes-background/)


MiniAppRepo\NO2-3d-boxes-background\index.html
**概要:**
CSSの疑似要素 (`::before`, `::after`) と `transform` (`skew`) を利用して、フラットなボックスに立体的な（3D）外観を加えています。ボタンをクリックすると、JavaScriptがクラスを切り替え、全てのボックスが360度回転するマジックのようなアニメーションが実行されます。

**主な使用技術:**
* HTML
* CSS (Flexbox, 疑似要素, transition, transform)
* JavaScript (classList.toggle, イベントリスナー)

### 3. アニメーション・カウントダウン (Animated Countdown)
**Demo:**
[プロジェクトデモはこちら](https://BAYISIHU.github.io/Portfolio/MiniAppRepo/NO3-animated-countdown/)
**概要:**
CSSの `@keyframes` とJavaScriptの `animationend` イベントを活用した、アニメーション付きのカウントダウンタイマーです。数字が一つずつ回転しながら（`goIn`, `goOut`アニメーション）表示され、「0」になるとカウンターが消え、「GO」というメッセージとリプレイボタンが表示されます。

**主な使用技術:**
* HTML
* CSS (Flexbox, @keyframes, animation)
* JavaScript (DOM操作, setInterval, animationend イベント)

### 4. 展開式ナビゲーション (Rotating Navigation)
**Demo:**
[プロジェクトデモはこちら](https://BAYISIHU.github.io/Portfolio/MiniAppRepo/NO4-animated-navigation/)

**概要:**
ハンバーガーアイコンをクリックすると、ナビゲーションメニューが展開・収納されます。展開時には、メニュー全体が横に広がり、各メニュー項目がY軸回転 (`rotateY`) しながら出現します。同時に、アイコンもX形に変形する、スムーズなCSSアニメーションが実装されています。

**主な使用技術:**
* HTML
* CSS (transition, transform: rotateY, transform: rotate)
* JavaScript (classList.toggle, イベントリスナー)

### 5. (次のプロジェクト)
