import './style.css'
import { html } from './contents/readme.md'
import Router from 'router-light';

const router = new Router();
const app = document.getElementById('app');

router.get('/', () => {
  app.innerHTML = html;
})

router.get('/404', () => {
  app.innerHTML = '<p style="text-align: center">404 Not found</p>';
});

router.get('/test/:label1/*/*/*/:label2', (options) => {
  app.innerHTML = `<pre>${JSON.stringify(options, null, 2)}</pre>`;
})