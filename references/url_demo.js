const url = require('url')

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active")


//serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

//host (root name)
console.log(myUrl.host)

//hostname (doesn't get port)
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//parms object
console.log(myUrl.searchParams);

//add params{
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => {
     console.log(`${name} : ${value}`);
})