// const add = require('./add.js')
// add(10,5)
// add(20,10)
// console.log('Hello world')

// const a = require('./iife')
// console.log(a);

// with caching
// const building1 = require('./building')
// console.log(building1.getName());
// building1.setName('Apartments')
// console.log(building1.getName());

// const building2 = require('./building')
// console.log(building2.getName());

// without caching
// const building =  require('./building')
// const build1 = new building('Apartment')
// console.log(build1.getName());
// build1.setName('Villa')
// console.log(build1.getName());

// const path = require('node:path')

// basename
// console.log('basename');
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log('\n');
//extname
// console.log('extname');
// console.log(path.extname(__filename));
// console.log('\n');

//parse
// console.log('parse');
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));
// console.log('\n');

//format
// console.log('format');
// console.log(path.format(path.parse(__filename)));
// console.log('\n');

//isAbsolute
// console.log('isAbsolute');
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./building.js'));
// console.log('\n');

//join
// console.log('join');
// console.log(path.join('form1', 'form2','index.js'));
// console.log(path.join('/form1', 'form2','index.js'));
// console.log(path.join('/form1', '//form2','index.js'));
// console.log(path.join('/form1', '//form2','../index.js'));
// console.log('\n');

//resolve
// console.log('resolve');
// console.log(path.resolve('form1', 'form2','index.js'));
// console.log(path.resolve('/form1', 'form2','index.js'));
// console.log(path.resolve('/form1', '//form2','index.js'));
// console.log(path.resolve('/form1', '//form2','../index.js'));
// console.log('\n');

// writing a new file and updating a file
// console.log('writing file and updating file :');
// const fs = require('node:fs')
// fs.writeFileSync('./data.txt','Hello World')
// fs.writeFile('./data.txt','Hi World',{flag:'a'},(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('File written and updating successfully');
//     }
// })

//deleting a file in node js
// const fs = require('node:fs')
// fs.unlink('./data.txt',(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Deleted successfully');
//     }
// })

// streams => this is for transferring files from one file to another file
// const fs = require("node:fs");
// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 4,
// });
// const writeableStream = fs.createWriteStream("./file2.txt");
// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

// pipes : Another method for file transfer
// const fs = require('node:fs')
// const zlib = require('node:zlib')
// const zip = zlib.createGzip();
// const readableStreams = fs.createReadStream('./file3.txt',{
//     encoding:"utf-8",
//     highWaterMark:2,
// })
// readableStreams.pipe(zip).pipe(fs.WriteStream('./file4.txt.zip'))

// http modules: creating basic server
// console.log("http :");
// const http = require("node:http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200,{"content-type":'text/plain'})
//     res.end('Hello World')
// });
// server.listen(3001,()=>{
//     console.log('Server is running in 3001');
// })

// http : JSON content in browser using node
// console.log('JSON content in browser using node');
// const http = require("node:http");
// const json = require('./db.json')
// const json = {
//   name: "adam",
//   age: 25,
//   addr: "abc",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.end(JSON.stringify(json));
// });

// server.listen(3000, () => {
//   console.log('Server is running in 3000');
//   console.log(json);
// });

// html response in http:
// console.log('html response in http:');
// const http = require('node:http')
// const fs = require('node:fs')
// const html = fs.readFileSync('./index.html','utf-8')
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end(html)
// })

// server.listen(3001,()=>{
//     console.log('server is running in 3001');
// })

//routing in server using node js:
const http = require("node:http");
const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "content-type": "text/json" });
    res.end(
      JSON.stringify({
        name: "adam",
        age: "10",
      })
    );
  } else {
    res.writeHead(404);
    res.end('Page not Found');
  }
});
server.listen(3003,()=>{
    console.log('server is running in port 3003');
})


