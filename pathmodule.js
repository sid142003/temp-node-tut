const path=require('path')
const filepath=path.join('/content', 'subfolder' , 'test.txt')
console.log(path.sep);
console.log(filepath);
const base=path.basename(filepath)
console.log(base);

const absolute=path.resolve(__dirname);
console.log(absolute);