webpackJsonp([7],{358:function(s,n,a){"use strict";function l(s){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}function p(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function t(s,n){for(var a=0;a<n.length;a++){var l=n[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}function e(s,n,a){return n&&t(s.prototype,n),a&&t(s,a),s}function c(s,n){return!n||"object"!==l(n)&&"function"!=typeof n?r(s):n}function r(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function h(s){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function i(s,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&o(s,n)}function o(s,n){return(o=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(s,n)}Object.defineProperty(n,"__esModule",{value:!0});var j=a(6),u=a.n(j),m=function(s){function n(s){return p(this,n),c(this,h(n).call(this,s))}return i(n,s),e(n,[{key:"rawMarkup",value:function(){return{__html:'<h1 id="-canvas-">利用透视原理实现 canvas 第三维度</h1>\n<p>canvas 2d 渲染上下文（The rendering context）只有 x、y 两个维度，若要表现物体的立体感和纵深感，就需要利用透视原理创建 z 维度，实现平面到立体的转变。</p>\n<h3 id="-">透视原理</h3>\n<p>透视是根据物体呈近大远小的空间关系，将立体三维空间的形象表现在二维平面上。透视的几个要素：</p>\n<ul>\n<li>视平线：就是与画者眼睛平行的水平线。</li>\n<li>消失点：就是与画面不平行的成角物体，在透视中伸远到视平线心点两旁的消失点。举个栗子，当你沿着铁路线去看两条铁轨时、当沿着公路去看两侧排列整齐的树木时，两条平行的铁轨或两排树木连线交于很远的某一点，即消失点。<div align="center"><img width="432" height="296" src="http://p42jcfxfo.bkt.clouddn.com/images/thinkin/perspective_1.png?v=1"/></div>\n\n</li>\n</ul>\n<h3 id="-">透视图公式</h3>\n<p>原理：随着物体的深度(z 坐标)增加，远离成像面，其体积会逐渐缩小最后消失，同时 x,y 坐标向消失点移动。</p>\n<div align="center"><img width="538" height="493" src="http://p42jcfxfo.bkt.clouddn.com/images/thinkin/perspective_0.png"/></div>\n\n<p>有一个正在远离你的物体，一个观察点(镜头)和一个成像面(即屏幕)。物体和成像面之间有一段距离，也就是 z 值。观察点到成像面也有一段距离，与照相机镜头的焦距类似，用变量 f1 表示。很容易计算出物体实际大小与其在成像面上形成的图像大小之比为：</p>\n<pre><code><span className="hljs-attr">scale</span>=fl/(fl+z)\n</code></pre><p>物体和消失点的距离也随 scale 变化，假设消失点在成像面上的坐标为(cx,cy)，物体移动前位置为(x0,y0)则：</p>\n<pre><code><span class="hljs-attr">x-cx</span>=scale*(x0-cx)\n<span class="hljs-attr">y-cy</span>=scale*(y0-cy)\n</code></pre><p>由此得到物体移动后的坐标：</p>\n<pre><code><span class="hljs-attr">x</span>=cx+scale*(x0-cx)\n<span class="hljs-attr">y</span>=cy+scale*(y0-cy)\n</code></pre><h3 id="-">编程实践</h3>\n<p>效果图：</p>\n<div align="center"><img width="400" src="http://p42jcfxfo.bkt.clouddn.com/images/thinkin/paopao.gif"/></div>\n\n<p>代码如下：</p>\n<pre><code class="lang-html"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"utf-8"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>泡泡<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/css"</span>&gt;</span><span class="css">\n        <span class="hljs-selector-tag">body</span> {\n            <span class="hljs-attribute">background</span>: <span class="hljs-number">#262626</span>;\n        }\n\n        <span class="hljs-selector-tag">canvas</span> {\n            <span class="hljs-attribute">display</span>: block;\n            <span class="hljs-attribute">margin</span>: <span class="hljs-number">100px</span> auto;\n        }\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"canvas"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"600"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"600"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span>&gt;</span><span class="javascript">\n        <span class="hljs-keyword">const</span> canvas = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"canvas"</span>),\n            ctx = canvas.getContext(<span class="hljs-string">"2d"</span>),\n            circleArr = [],\n            fl = <span class="hljs-number">500</span>,\n            R = <span class="hljs-number">30</span>,\n            width = canvas.width,\n            height = canvas.height,\n            center = {\n                <span class="hljs-attr">x</span>: width / <span class="hljs-number">2</span>,\n                <span class="hljs-attr">y</span>: height / <span class="hljs-number">2</span>\n            },\n            random = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> ((<span class="hljs-built_in">Math</span>.random() &gt; <span class="hljs-number">0.5</span> ? <span class="hljs-number">1</span> : <span class="hljs-number">-1</span>) * <span class="hljs-built_in">Math</span>.random() + <span class="hljs-number">0.5</span>);\n        <span class="hljs-keyword">let</span> index = <span class="hljs-number">0</span>;\n        <span class="hljs-comment">//圆形类</span>\n        <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Circle</span> </span>{\n            <span class="hljs-keyword">constructor</span>(x, y, r, color) {\n                <span class="hljs-keyword">this</span>.x = x;\n                <span class="hljs-keyword">this</span>.y = y;\n                <span class="hljs-keyword">this</span>.r = r;\n                <span class="hljs-keyword">this</span>.z = <span class="hljs-number">0</span>;\n                <span class="hljs-keyword">this</span>.index = index++;\n                <span class="hljs-comment">// 颜色的取值范围</span>\n                <span class="hljs-keyword">this</span>.color = <span class="hljs-string">"rgba("</span> + (<span class="hljs-built_in">parseInt</span>(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">240</span>) + <span class="hljs-number">9</span>) + <span class="hljs-string">","</span> + (<span class="hljs-built_in">parseInt</span>(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">220</span>) + <span class="hljs-number">18</span>) + <span class="hljs-string">",203,0.85)"</span>;\n                <span class="hljs-comment">//往数组中push自己</span>\n                circleArr.push(<span class="hljs-keyword">this</span>);\n            }\n\n            <span class="hljs-comment">//绘制</span>\n            print() {\n                <span class="hljs-comment">//新建一条路径</span>\n                ctx.beginPath();\n                <span class="hljs-comment">//创建一个圆</span>\n                ctx.arc(<span class="hljs-keyword">this</span>.x, <span class="hljs-keyword">this</span>.y, <span class="hljs-keyword">this</span>.r, <span class="hljs-number">0</span>, <span class="hljs-built_in">Math</span>.PI * <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>);\n                <span class="hljs-comment">//设置样式颜色</span>\n                ctx.fillStyle = <span class="hljs-keyword">this</span>.color;\n                <span class="hljs-comment">//通过填充路径的内容区域生成实心的图形</span>\n                ctx.fill();\n            }\n\n            <span class="hljs-comment">//更新</span>\n            update() {\n                <span class="hljs-keyword">this</span>.z += <span class="hljs-number">0.4</span>\n                <span class="hljs-keyword">let</span> scale = fl / (fl + <span class="hljs-keyword">this</span>.z);\n                <span class="hljs-keyword">this</span>.x = center.x + scale * (<span class="hljs-keyword">this</span>.x - center.x)\n                <span class="hljs-keyword">this</span>.y = center.y + scale * (<span class="hljs-keyword">this</span>.y - center.y)\n                <span class="hljs-keyword">this</span>.r = <span class="hljs-keyword">this</span>.r * scale;\n                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.index == <span class="hljs-number">1</span>) <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"scale:"</span>, scale.toFixed(<span class="hljs-number">2</span>) * <span class="hljs-number">1</span>, <span class="hljs-string">"r:"</span>, <span class="hljs-keyword">this</span>.r.toFixed(<span class="hljs-number">2</span>) * <span class="hljs-number">1</span>, <span class="hljs-string">" z:"</span>, <span class="hljs-keyword">this</span>.z.toFixed(<span class="hljs-number">2</span>) * <span class="hljs-number">1</span>)\n                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.r &lt; <span class="hljs-number">0.1</span>) {\n                    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; circleArr.length; i++) {\n                        <span class="hljs-keyword">if</span> (circleArr[i] === <span class="hljs-keyword">this</span>) {\n                            circleArr.splice(i, <span class="hljs-number">1</span>);\n                        };\n                    }\n                    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n                }\n                <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;\n            }\n        }\n\n        <span class="hljs-comment">//创建圆</span>\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">500</span>; i++) {\n            <span class="hljs-keyword">if</span> (i == <span class="hljs-number">0</span>) <span class="hljs-keyword">new</span> Circle(random() * width, random() * height, R, <span class="hljs-string">"orange"</span>);\n            <span class="hljs-keyword">else</span>\n                setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n                    <span class="hljs-keyword">new</span> Circle(random() * width, random() * height, R, <span class="hljs-string">"orange"</span>);\n                }, i * <span class="hljs-number">50</span>)\n        }\n\n        <span class="hljs-comment">//更新和绘制</span>\n        <span class="hljs-keyword">const</span> update = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            ctx.clearRect(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">600</span>)\n\n            <span class="hljs-keyword">if</span> (circleArr.length &gt; <span class="hljs-number">0</span>) {\n                <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; circleArr.length; i++) {\n                    <span class="hljs-keyword">if</span> (circleArr[i]) circleArr[i].update() &amp;&amp; circleArr[i].print();\n                };\n                requestAnimationFrame(update)\n            } <span class="hljs-keyword">else</span> {\n                <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"animation end"</span>)\n            }\n        }\n        requestAnimationFrame(update)\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>\n</code></pre>\n'}}},{key:"render",value:function(){return u.a.createElement("div",{dangerouslySetInnerHTML:this.rawMarkup()})}}]),n}(j.Component);n.default=m}});