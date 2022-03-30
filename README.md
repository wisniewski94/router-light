<div align="center">

  <h1 align="center">Router Light</h3>

  <p align="center">
    Lightweight, routing library for any browser application
    <br />
    <br />
    <a href="https://wisniewski94.github.io/router-light">View Demo</a>
    ·
    <a href="https://github.com/wisniewski94/router-light/issues">Report Bug</a>
    ·
    <a href="https://github.com/wisniewski94/router-light/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

This is very simple and lightweight routing library intended mostly to be used in vanilla js apps. You can read how it's made here:

[How to create a router for custom SPA App](https://deploy-preview-80--funnyavocado.netlify.app/blog/how-to-create-router-library)

<p align="right">(<a href="#top">back to top</a>)</p>

### Getting started

You can fork or download the plugin from GitHub, or you can install it through npm or bower.

```
$ npm install router-light
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Usage
1. Import the module:

```js
import Router from 'router-light';
```

2. Create instance of router object:

```js
const router = new Router();
```

3. Register paths and callbacks:
```js
router.get('/my-custom-page', () => {
  document.body.innerText = 'Hello World';
})
```

Callback function is called when the url matches any of registered paths. In other words, the application “listens” for requests that match the specified route(s)  and when it detects a match, it calls the specified callback function.

Route paths can be patterns. For example:
```js
router.get('/test/:label1/*/*/*/:label2', (options) => {
  console.log(options);
});
```

If the url is `/test/custom_label/arg1/arg2/843/custom_label2` then the matching pattern is `/test/:label1/*/*/*/:label2` and options will become object with given properties:

```js
{
  "0": "arg1",
  "1": "arg2",
  "2": "843",
  "label1": "custom_label",
  "label2": "custom_label2"
}
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Note that this library uses commitlint and commit message must contain one of common types: [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Twitter [@wwisniewski_](https://twitter.com/wwisniewski_)

Blog [wiktorwisniewski.dev](https://wiktorwisniewski.dev)

<p align="right">(<a href="#top">back to top</a>)</p>
