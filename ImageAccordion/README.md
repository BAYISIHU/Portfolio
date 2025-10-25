プロジェクト紹介 (Project Introduction)
これは、JavaScriptのDOM操作とCSS Transitionを組み合わせ、マウスホバーに連動する「イメージ・アコーディオン」エフェクトを実装したUIコンポーネントです。

主な機能 (Key Features)
動的なレイアウト変更: マウスが特定の<li>（画像）に入ると、JavaScriptが他の<li>を100pxに縮小し、ターゲットの<li>を800pxに拡大します。

スムーズなCSSアニメーション: transition: all 500ms; をCSSで指定することで、width（幅）の変更が滑らかなアニメーションとして実行されます。

イベント処理: mouseenter（ホバー時）と mouseleave（ホバー解除時）のイベントリスナーを各要素に設定し、インタラクションを制御します。

状態のリセット: マウスが領域外に出ると、すべての<li>はJavaScriptによって均等な240pxの幅にリセットされます。