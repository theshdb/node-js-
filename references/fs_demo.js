const fs = require('fs')
const path = require('path')

// create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err)=>{
//     if(err) throw err
//     console.log("Folder created.");
// })



//create and write file
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello, World", err => {
//     if(err) throw err
//     console.log("File written to...");

//     //append file
//     fs.appendFile(path.join(__dirname,
//         "/test", "hello.txt"), 
//         "\nI love nodeJS.", 
//         err => {
//             if (err) throw err
//             console.log("Appended to file...")
//     })
// })



//read file
fs.readFile(path.join(__dirname,
    "/test", "hello.txt"), 
    "utf8", 
    (err, data) => {
        if (err) throw err
        console.log(data)
})


//rename a file
fs.rename(path.join(__dirname,
    "/test", "hello.txt"), 
    path.join(__dirname,
        "/test", "helloworld.txt"), 
    err => {
        if (err) throw err
        console.log("Renamed file...")
})