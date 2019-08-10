const fs=require("fs");
const path=require("path");

//Create Folder
// fs.mkdir(path.join(__dirname,"/test"),{},err=> {
//     if(err) throw err;
//     console.log("folder created")
// });

// Create and writeTo Files
// fs.writeFile(path.join(__dirname,"/test","hello.txt"),
//     "Hello World",
//     err=>{
//     if(err) throw err;
//     console.log("File Written to");
//     // Append File
//     fs.appendFile(path.join(__dirname,"/test","hello.txt"),
//     " This is Something New",
//     err=>{
//     if(err) throw err;
//     console.log("Appended to");
// });
// });


// Read File
fs.readFile(path.join(__dirname,"/test","hello.txt"),"utf8",
    (err,data)=>{
    if(err) throw err;
    console.log(data);
});


//Rename a File

fs.rename(path.join(__dirname,"/test","hello.txt"),path.join(__dirname,"/test","helloworld.txt"),
    (err)=>{
    if(err) throw err;
    console.log("File Renamed");
});