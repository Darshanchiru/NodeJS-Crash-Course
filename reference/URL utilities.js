const url=require('url');

const myUrl=new URL("https://www.mywebsite.com/hello.html?id=21&status=active");

console.log(myUrl);

// Serialized
console.log(myUrl.href);
console.log(myUrl.toString());

// HOST root domain]
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Param Object
console.log(myUrl.searchParams);

// Adding params
myUrl.searchParams.append('abc','darshan');
console.log(myUrl.searchParams);

// Loop through Params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));