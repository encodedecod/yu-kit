import{_ as s,c as a,o as n,a as l}from"./app.c2744608.js";const C=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[{"level":3,"title":"\u7EC4\u4EF6\u5E93","slug":"\u7EC4\u4EF6\u5E93","link":"#\u7EC4\u4EF6\u5E93","children":[]},{"level":3,"title":"hooks \u5E93","slug":"hooks-\u5E93","link":"#hooks-\u5E93","children":[]},{"level":3,"title":"\u5DE5\u5177\u5E93","slug":"\u5DE5\u5177\u5E93","link":"#\u5DE5\u5177\u5E93","children":[]},{"level":3,"title":"\u51FD\u6570\u5E93","slug":"\u51FD\u6570\u5E93","link":"#\u51FD\u6570\u5E93","children":[]}]},{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528","link":"#\u7B80\u5355\u4F7F\u7528","children":[]}],"relativePath":"guide/index.md"}'),e={name:"guide/index.md"},o=l(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="\u7EC4\u4EF6\u5E93" tabindex="-1">\u7EC4\u4EF6\u5E93 <a class="header-anchor" href="#\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> npm i @yu-kit/components</span></span>
<span class="line"></span></code></pre></div><h3 id="hooks-\u5E93" tabindex="-1">hooks \u5E93 <a class="header-anchor" href="#hooks-\u5E93" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> npm i @yu-kit/hooks</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5DE5\u5177\u5E93" tabindex="-1">\u5DE5\u5177\u5E93 <a class="header-anchor" href="#\u5DE5\u5177\u5E93" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> npm i @yu-kit/kit</span></span>
<span class="line"></span></code></pre></div><h3 id="\u51FD\u6570\u5E93" tabindex="-1">\u51FD\u6570\u5E93 <a class="header-anchor" href="#\u51FD\u6570\u5E93" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> npm i @yu-kit/utils</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ElementHandler</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yu-kit/kit</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLoading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yu-kit/hooks</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">YuButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yu-kit/components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">interval</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yu-kit/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div>`,12),p=[o];function t(c,r,i,d,h,y){return n(),a("div",null,p)}const F=s(e,[["render",t]]);export{C as __pageData,F as default};
