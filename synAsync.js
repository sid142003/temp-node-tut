// const {readFileSync, writeFileSync}=require('fs')

// const first =readFileSync("./content/first.txt" , 'utf-8')

// console.log(first);
// writeFileSync('./content/result-sync.txt' ,`here is the result: ${first}`, {flag:'a'})



const {readFile , writeFile}=require('fs')
readFile('./content/first.txt' , (err, result)=>{
    if(err){
        console.log(err);
        return
    }
const first =result;
readFile('./content/result-sync.txt' , 'utf-8' , (err , result)=>{
    if(err){
        console.log(err);
        return
    }

    console.log(first);

//     if(err){
//         console.log(err);
//         return
//     }
const second =result;
writeFile('./content/result-async.txt' , `here is the result : ${first} , ${second}`)
})
})