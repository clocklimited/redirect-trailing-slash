module.exports = middleware
var qs = require('qs')

function middleware(req, res, next) {
  if (req.path === '/' || !/\/$/.test(req.path)) return next()
  var url = req.path
    .replace(/^\/+/, '/')
    .replace(/\/+$/, '')
  res.redirect(301, url + '?' + qs.stringify(req.query))
}
