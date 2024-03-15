const http = require('http');
const url = require('url');

const target = "https://dash.valorant-api.com/v1/agents";

// Create a new proxy server
const proxy = http.createServer((req, res) => {
	const proxyRequest = http.request(target, {
      headers: req.headers
    }, (proxyRes) => {
		proxyRes.pipe(res);
		// Add the CORS header in the response from the proxy
		// This should allow the client to receive the response from the API server
		res.setHeader('Access-Control-Allow-Origin', '*');
	});

	proxyRequest.on('error', (err) => {
  		console.log(err);
	});

	req.pipe(proxyRequest);
});

proxy.listen(3001);