# フロントエンド練習プロジェクト集

このリポジトリは、フロントエンド開発（HTML, CSS, JavaScript）の学習の一環として作成した、小規模なUIコンポーネントやミニプロジェクトをまとめたものです。

※ このポートフォリオは随時更新予定です。

---

## 収録プロジェクト

### 2. 3Dボックス背景 (3D Boxes Background)
**Demo:**
[プロジェクトデモはこちら]

**概要:**
CSSの疑似要素 (`::before`, `::after`) と `transform` (`skew`) を利用して、フラットなボックスに立体的な（3D）外観を加えています。ボタンをクリックすると、JavaScriptがクラスを切り替え、全てのボックスが360度回転するマジックのようなアニメーションが実行されます。

**主な使用技術:**
* HTML
* CSS (Flexbox, 疑似要素, transition, transform)
* JavaScript (classList.toggle, イベントリスナー)

### 3. アニメーション・カウントダウン (Animated Countdown)
**Demo:**
[プロジェクトデモはこちら]
**概要:**
CSSの `@keyframes` とJavaScriptの `animationend` イベントを活用した、アニメーション付きのカウントダウンタイマーです。数字が一つずつ回転しながら（`goIn`, `goOut`アニメーション）表示され、「0」になるとカウンターが消え、「GO」というメッセージとリプレイボタンが表示されます。

**主な使用技術:**
* HTML
* CSS (Flexbox, @keyframes, animation)
* JavaScript (DOM操作, setInterval, animationend イベント)

### 4. 展開式ナビゲーション (Rotating Navigation)
**Demo:**
[プロジェクトデモはこちら]
**概要:**
ハンバーガーアイコンをクリックすると、ナビゲーションメニューが展開・収納されます。展開時には、メニュー全体が横に広がり、各メニュー項目がY軸回転 (`rotateY`) しながら出現します。同時に、アイコンもX形に変形する、スムーズなCSSアニメーションが実装されています。

**主な使用技術:**
* HTML
* CSS (transition, transform: rotateY, transform: rotate)
* JavaScript (classList.toggle, イベントリスナー)

### 5. (次のプロジェクト)
