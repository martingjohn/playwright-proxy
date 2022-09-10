# playwright-proxy

Proxy to pass urls to in order to receive the page back.
Way to get around "You need to enable JavaScript to run this app." errors on curl, etc.

It can also optionally save a screenshot of the page - which can be useful for debugging (defaulted off unless set in the POST request)

To run image

docker run \
       -d \
       -v ${PWD}/screenshots:/home/pwuser/screenshots \
       -p 8085:8085 \
       martinjohn/playwright-proxy

to invoke

Before

$ curl "https://www.sainsburys.co.uk/gol-ui/product/fruitandveg-essentials/sainsburys-loose-fairtrade-bananas"
<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>Sainsbury's online Grocery Shopping and Fresh Food Delivery</title><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/><meta name="theme-color" content="#000000"/><link rel="preconnect" href="https://assets.sainsburys-groceries.co.uk/" crossorigin/><link rel="dns-prefetch" href="https://assets.sainsburys-groceries.co.uk/"/><link rel="shortcut icon" href="/favicon.ico"/><link href="/gol-ui/static/css/app.490060e9.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><script>window.utag_cfg_ovrd={noview:!0},window.digitalData={event:[],page:{pageInfo:{pageName:"",newSite:"yes",shoppingMode:"normal",breadCrumbs:"",section:"",pageCategory:"",aisle:"",shelf:"",pageTemplate:"",lang:"en-gb",rendering:"web"},events:[]},user:{profile:{profileInfo:{websphereId:"",user_status:"","user id":""}}}},window.history.scrollRestoration="manual"</script><div id="root"></div><script src="/gol-ui/static/js/config.js?cb=a7125998"></script><script src="/gol-ui/static/js/newrelic.920d7ec4.js"></script><script src="/gol-ui/static/js/app.d3d636ca.js"></script></body></html>

After
$ curl -X POST \
	-d "url=https://www.sainsburys.co.uk/gol-ui/product/fruitandveg-essentials/sainsburys-loose-fairtrade-bananas" \
	-d "screenshot=Y" \
	http://localhost:8085/fetch

(large page print on screen)
