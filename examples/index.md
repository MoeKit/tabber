# Demo

---

## Normal usage

````html
<ul id="tab-items">
    <li>hello world</li>
    <li>hello world2</li>
    <li>hello world3</li>
</ul>

<ul id="tab-contents">
    <li>hello world</li>
    <li>hello world2</li>
    <li>hello world3</li>
</ul>
````
````javascript
seajs.use('index', function(Tabber) {
    new Tabber({
        tabs:'#tab-items>li',
        panels:'#tab-contents>li',
        tabActiveIndex:2,
        triggerType:'mouseover'
    });
});
````
