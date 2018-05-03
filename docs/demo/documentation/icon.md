# Icon

アイコンは、Font Awesome・Material Icons・IcoMoon・gulp-iconfont などの利用を想定しています。

class は `.fa` `.fas` `.far` `.fal` `.fab` `.material-icons` `.im` `.icon` を等しく使用でき、アイコンと `.text` が隣り合うと自動的に margin-left が付与され距離が保たれます。

<demo-icon demo="basic"/>

```html
<i class="fas fa-heart" aria-hidden="true"></i>
<span class="text">ハート</span>
<i class="fas fa-heart" aria-hidden="true"></i>
<span class="text">ハート</span>
...
```

## Fit

アイコンに class `.is-fit` を付与することで、アイコンの領域を一定に保てます。グリフの幅が異なるアイコンを付けてリストを作る場合に有用です。

<demo-icon demo="fit"/>

```html
<i class="fas fa-archive" aria-hidden="true"></i>
<i class="fas fa-angle-right" aria-hidden="true"></i>

<i class="fas fa-archive is-fit" aria-hidden="true"></i>
<i class="fas fa-angle-right is-fit" aria-hidden="true"></i>
```
