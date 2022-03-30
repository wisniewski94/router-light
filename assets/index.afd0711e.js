import{R as c}from"./vendor.9df4b9ca.js";const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};u();const p=`<div align="center">
  <span>
    <a href="https://github.com/wisniewski94/router-light/issues">Report Bug</a>
    <a href="https://github.com/wisniewski94/router-light/issues">Request Feature</a>
  </span>
</div>
<!-- ABOUT THE PROJECT -->
<h3>About The Project</h3>
<p>This is very simple and lightweight routing library intended mostly to be used in vanilla js apps. You can read how it's made here:</p>
<p><a href="https://www.wiktorwisniewski.dev/blog/how-to-create-router-library">How to create a router for custom SPA App</a></p>
<p align="right">(<a href="#top">back to top</a>)</p>
<h3>Getting started</h3>
<p>You can fork or download the plugin from GitHub, or you can install it through npm or bower.</p>
<pre><code>$ npm install router-light
</code></pre>
<p align="right">(<a href="#top">back to top</a>)</p>
<h3>Usage</h3>
<ol>
<li>Import the module:</li>
</ol>
<pre><code class="language-js">import Router from 'router-light';
</code></pre>
<ol start="2">
<li>Create instance of router object:</li>
</ol>
<pre><code class="language-js">const router = new Router();
</code></pre>
<ol start="3">
<li>Register paths and callbacks:</li>
</ol>
<pre><code class="language-js">router.get('/my-custom-page', () =&gt; {
  document.body.innerText = 'Hello World';
})
</code></pre>
<p>Callback function is called when the url matches any of registered paths. In other words, the application \u201Clistens\u201D for requests that match the specified route(s)  and when it detects a match, it calls the specified callback function.</p>
<p>Route paths can be patterns. For example:</p>
<pre><code class="language-js">router.get('/test/:label1/*/*/*/:label2', (options) =&gt; {
  console.log(options);
});
</code></pre>
<p>If the url is <code>/test/custom_label/arg1/arg2/843/custom_label2</code> then the matching pattern is <code>/test/:label1/*/*/*/:label2</code> and options will become object with given properties:</p>
<pre><code class="language-js">{
  &quot;0&quot;: &quot;arg1&quot;,
  &quot;1&quot;: &quot;arg2&quot;,
  &quot;2&quot;: &quot;843&quot;,
  &quot;label1&quot;: &quot;custom_label&quot;,
  &quot;label2&quot;: &quot;custom_label2&quot;
}
</code></pre>
<!-- CONTRIBUTING -->
<h2>Contributing</h2>
<p>Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>.</p>
<p>If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag &quot;enhancement&quot;.
Don't forget to give the project a star! Thanks again!</p>
<ol>
<li>Fork the Project</li>
<li>Create your Feature Branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
<li>Commit your Changes (<code>git commit -m 'feat: Add some AmazingFeature'</code>)</li>
<li>Push to the Branch (<code>git push origin feature/AmazingFeature</code>)</li>
<li>Open a Pull Request</li>
</ol>
<p>Note that this library uses commitlint and commit message must contain one of common types: <a href="https://github.com/conventional-changelog/commitlint">conventional-changelog/commitlint</a></p>
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- LICENSE -->
<h2>License</h2>
<p>Distributed under the MIT License. See <code>LICENSE</code> for more information.</p>
<p align="right">(<a href="#top">back to top</a>)</p>
<!-- CONTACT -->
<h2>Contact</h2>
<p>Twitter <a href="https://twitter.com/wwisniewski_">@wwisniewski_</a></p>
<p>Blog <a href="https://wiktorwisniewski.dev">wiktorwisniewski.dev</a></p>
<p align="right">(<a href="#top">back to top</a>)</p>
`,r=new c,a=document.getElementById("app");r.get("/router-light",()=>{a.innerHTML=p});r.get("/404",()=>{a.innerHTML='<p style="text-align: center">404 Not found</p>'});r.get("/router-light/test/:label1/*/*/*/:label2",i=>{a.innerHTML=`<pre>${JSON.stringify(i,null,2)}</pre>`});
