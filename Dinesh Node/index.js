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

const path = require('node:path')

// basename
console.log('basename');
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log('\n');
//extname
console.log('extname');
console.log(path.extname(__filename));
console.log('\n');

//parse
console.log('parse');
console.log(path.parse(__filename));
console.log(path.parse(__dirname));
console.log('\n');

//format 
console.log('format');
console.log(path.format(path.parse(__filename)));
console.log('\n');

//isAbsolute
console.log('isAbsolute');
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./building.js'));
console.log('\n');

//join
console.log('join');
console.log(path.join('form1', 'form2','index.js'));
console.log(path.join('/form1', 'form2','index.js'));
console.log(path.join('/form1', '//form2','index.js'));
console.log(path.join('/form1', '//form2','../index.js'));
console.log('\n');

//resolve
console.log('resolve');
console.log(path.resolve('form1', 'form2','index.js'));
console.log(path.resolve('/form1', 'form2','index.js'));
console.log(path.resolve('/form1', '//form2','index.js'));
console.log(path.resolve('/form1', '//form2','../index.js'));
console.log('\n');
