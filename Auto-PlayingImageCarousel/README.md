プロジェクト紹介 (Project Introduction): JavaScript (ES6) の setInterval 非同期タイマーを利用して実装した、自動再生型の画像カルーセル・コンポーネントです。JavaScriptのデータ配列を基に、複数のDOM要素を同期させて更新します。

主な機能 (Key Features):

自動再生とループ処理: setIntervalタイマー（1000ms）を使用し、配列インデックスを1秒ごとに更新。インデックスがデータ配列の末尾に達すると0に戻り、シームレスなループ再生を実現。

データ駆動のDOM更新: JavaScriptのオブジェクト配列（sliderData）をデータソースとして、画像（img.src）とキャプション（p.innerHTML）を動的に書き換えます。

インジケーター（ドット）の同期: CSSの .active クラスを classList API（remove/add）で付け替えることにより、表示中の画像と下部のナビゲーションドットの状態を正確に連動させます。