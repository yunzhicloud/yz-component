页面大块的分隔区域，默认有投影，鼠标悬浮投影增强:

```jsx
<yz-card size="big" style="margin-bottom:10px">
  这是页面的大区域
</yz-card>
<yz-card size="big" style="margin-bottom:10px" title="标题1">
  带标题区域
</yz-card>
```

页面大块的分隔区域，默认有投影，鼠标悬浮投影增强并带动画效果:

```jsx
<yz-card size="big" :animation="true">这是页面的大区域带动画效果</yz-card>
```

包含在大块区域中的激活区域，默认有背景色，鼠标悬浮有投影:

```jsx
<yz-card size="big">
  <yz-card size="active">激活区域</yz-card>
</yz-card>
<yz-card size="big" title="激活区域展示">
  <yz-card size="active">激活区域</yz-card>
</yz-card>
```

包含在大块区域中的禁用区域，默认有背景色，鼠标悬浮无投影:

```jsx
<yz-card size="big">
  <yz-card size="active" style="margin-bottom:10px">
    激活区域
  </yz-card>
  <yz-card size="disabled">禁用区域</yz-card>
</yz-card>
```
