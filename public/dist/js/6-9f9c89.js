webpackJsonp([6],{364:function(s,n,t){"use strict";function e(s){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}function a(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function r(s,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function l(s,n,t){return n&&r(s.prototype,n),t&&r(s,t),s}function p(s,n){return!n||"object"!==e(n)&&"function"!=typeof n?i(s):n}function i(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function o(s){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function c(s,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&u(s,n)}function u(s,n){return(u=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(s,n)}Object.defineProperty(n,"__esModule",{value:!0});var h=t(6),j=t.n(h),f=function(s){function n(s){return a(this,n),p(this,o(n).call(this,s))}return c(n,s),l(n,[{key:"rawMarkup",value:function(){return{__html:'<p>Eslint 和 Prettier 配置自动格式化代码</p>\n<p>Eslint 可以提供代码检查，而 Prettier 能够统一团队代码风格，两者结合在一起会事半功倍。</p>\n<h4 id="-">安装依赖</h4>\n<ul>\n<li>eslint-config-prettier 可以取消 eslint 和 prettier 冲突的配置项，采用 prettier 风格</li>\n<li>eslint-plugin-prettier 可以将 prettier 的格式化规则作为 eslint 的检查规则</li>\n</ul>\n<pre><code><span className="hljs-symbol">yarn</span> <span class="hljs-keyword">add </span>prettier <span class="hljs-keyword">babel-eslint </span>eslint eslint-config-prettier eslint-plugin-flowtype eslint-plugin-prettier eslint-plugin-<span class="hljs-meta">import</span>  --dev\n</code></pre><h4 id="-">相关配置文件</h4>\n<p>新建 Eslint 和 Prettier 的配置件：</p>\n<pre><code>touch <span class="hljs-selector-class">.eslintrc</span><span class="hljs-selector-class">.json</span>\ntouch <span class="hljs-selector-class">.prettierrc</span><span class="hljs-selector-class">.json</span>\n</code></pre><p>在.eslintrc.json 写入一下内容:</p>\n<pre><code>{\n    <span class="hljs-attr">"parser"</span>: <span class="hljs-string">"babel-eslint"</span>,\n    <span class="hljs-attr">"extends"</span>: [\n        <span class="hljs-string">"prettier"</span>,\n        <span class="hljs-string">"prettier/flowtype"</span> // if you are using flow\n    ],\n    <span class="hljs-attr">"rules"</span>: {\n        <span class="hljs-attr">"indent"</span>: [<span class="hljs-string">"error"</span>, <span class="hljs-number">4</span>],\n        <span class="hljs-attr">"prettier/prettier"</span>: <span class="hljs-string">"error"</span>\n    },\n    <span class="hljs-attr">"plugins"</span>: [\n        /* Flow type linting rules for ESLint. */\n        <span class="hljs-string">"flowtype"</span>,\n        <span class="hljs-string">"prettier"</span>\n    ]\n}\n</code></pre><p>在.prettierrc.json 写入一下内容:</p>\n<pre><code>{\n    <span class="hljs-attr">"tabWidth"</span>: <span class="hljs-number">4</span>\n}\n</code></pre><h4 id="-">开发工具的配置</h4>\n<p>例如，将以下配置加入配置文件：</p>\n<pre><code>    {\n        <span class="hljs-attr">"editor.formatOnSave"</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">"prettier.disableLanguages"</span>: [<span class="hljs-string">"js"</span>],\n        <span class="hljs-attr">"eslint.autoFixOnSave"</span>: <span class="hljs-literal">true</span>,\n        <span class="hljs-attr">"eslint.alwaysShowStatus"</span>: <span class="hljs-literal">true</span>\n    }\n</code></pre><h4 id="-husky-lint-staged-">使用 Husky + Lint-Staged 在代码提交前自定检查并修正代码</h4>\n<ul>\n<li>由于 husky 在 .git/hooks 中写入了 pre-commit 钩子，该钩子在 git commit 执行时被触发</li>\n<li>lint-staged 利用配置的文件过滤路径，对暂存区文件一个个进行匹配，匹配成功时，运行 eslint –fix 并自动将修改添加到暂存区</li>\n</ul>\n<pre><code>yarn <span class="hljs-keyword">add</span><span class="bash">  precommit husky --dev</span>\n</code></pre><p>在 package.json 添加配置</p>\n<pre><code>    <span class="hljs-string">"scripts"</span>: {\n        <span class="hljs-string">"precommit"</span>: <span class="hljs-string">"lint-staged"</span> <span class="hljs-string">//husky</span> 在 <span class="hljs-string">.git/hooks</span> 中写入了 钩子\n    },\n    <span class="hljs-string">"lint-staged"</span>: {\n        <span class="hljs-string">"src/**/*.js"</span>: [\n            <span class="hljs-string">"prettier --write"</span>,\n            <span class="hljs-string">"git add"</span>\n        ]\n    },\n</code></pre>'}}},{key:"render",value:function(){return j.a.createElement("div",{dangerouslySetInnerHTML:this.rawMarkup()})}}]),n}(h.Component);n.default=f}});