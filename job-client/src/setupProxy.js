const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/jobs',
        createProxyMiddleware({
            // target: "https://jobsearch-application.herokuapp.com/",
            target:"http://localhost:8080/",
            changeOrigin: true
            // secure: false
        })
    )
}