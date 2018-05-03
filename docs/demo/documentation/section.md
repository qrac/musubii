# Section

## Inner

`.section` 直下に配置する `.inner` には画面幅に応じてレスポンシブな固定幅が設定されます。

<demo-section demo="basic"/>

```html
<div class="section">
  <div class="inner">
    ...
  </div>
</div>
```

## Inner Soft

`.inner-soft` を使うと固定幅が無くなります。

<demo-section demo="soft"/>

```html
<div class="section">
  <div class="inner-soft">
    ...
  </div>
</div>
```

## Inner VW

`.inner-vw` を使うと Fablet 以上のサイズで幅が割合算出されます。

<demo-section demo="vw"/>

```html
<div class="section">
  <div class="inner-vw">
    ...
  </div>
</div>
```
