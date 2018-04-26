# Alert

アラートの UI を作るにはテキスト類を `.alert` でラッピングします。役割にしたがって `.is-primary` `.is-info` `.is-success` `.is-warning` `.is-danger` を付与しスタイルを変化させます。

<demo-alert demo="basic"/>

```html
<div class="alert">
  <i class="fas fa-thumbs-up is-fit" aria-hidden="true"></i>
  <span class="text">アプリの通知設定へようこそ！</span>
</div>

<div class="alert is-primary">
  <i class="fas fa-thumbs-up is-fit" aria-hidden="true"></i>
  <span class="text">アプリの通知設定へようこそ！</span>
</div>

<div class="alert is-info">
  <i class="fas fa-info-circle is-fit" aria-hidden="true"></i>
  <span class="text">通知設定に関するチュートリアルはこちら。</span>
</div>

<div class="alert is-success">
  <i class="fas fa-check is-fit" aria-hidden="true"></i>
  <span class="text">通知設定は自動的に保存されました。</span>
</div>

<div class="alert is-warning">
  <i class="fas fa-exclamation-triangle is-fit" aria-hidden="true"></i>
  <span class="text">通知設定はアクティベートされていません。</span>
</div>

<div class="alert is-danger">
  <i class="fas fa-times is-fit" aria-hidden="true"></i>
  <span class="text">通知設定は削除されました。</span>
</div>
```
