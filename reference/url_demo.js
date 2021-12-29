const url = require('url');

const myurl = new URL("http://www.test.com:800/?id=12");


//serilezed url
console.log(myurl.href);
console.log(myurl.toString());
//root
console.log(myurl.host);
//host name
console.log(myurl.hostname);

//pathname
console.log(myurl.pathname);

//serlized queryc
console.log(myurl.search);

//prams object
console.log(myurl.searchParams);

//add Params
console.log(myurl.searchParams.append('abc',1234));

console.log(myurl.searchParams);


//loop prams
myurl.searchParams.forEach((value,name)=>console.log(`name : ${name}`))




