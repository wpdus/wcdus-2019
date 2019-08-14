var browserSync = require('browser-sync');

browserSync({
  proxy: 'https://2019.dusseldorf.wordcamp.org',
  files: ['style.css'],
  serveStatic: ['.'],
  rewriteRules: [
    {
      match: /wp-admin\/admin-ajax\.php\?action=wordcamp_remote_css&#038;ver=[0-9]+/g,
      fn: function (req, res, match) {
        return 'style.css';
      }
    }
  ]
});