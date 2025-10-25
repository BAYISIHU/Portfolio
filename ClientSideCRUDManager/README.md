プロジェクト紹介 (Project Introduction)
これは、外部データベースやAPIに依存せず、JavaScriptのみを使用してクライアントサイド（ブラウザメモリ）で完結する、基本的なデータ管理（作成・読み取り・削除）のデモンストレーションです。

主な機能 (Key Features)
データ作成 (Create): フォーム入力（form）のsubmitイベントを捕捉し、簡易なバリデーション（空欄チェック）後、JavaScriptのArray（配列）に新しいオブジェクトとしてデータを追加（push）します。

動的レンダリング (Read): render()関数が、現在のArrayデータを基にcreateElementとinnerHTML（テンプレートリテラル）を使用して<table>の<tbody>内を動的に再構築します。

データ削除 (Delete): <tbody>に対するイベント委任（Event Delegation）を活用。クリックされた<a>タグのカスタムdata-id（配列インデックス）を取得し、Array.splice()メソッドで配列から該当データを削除した後、再度render()を呼び出します。

フォーム制御: データ追加後、form.reset()メソッドを呼び出して入力フォームを自動的にクリアします。