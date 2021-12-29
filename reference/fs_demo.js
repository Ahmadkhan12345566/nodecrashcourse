const  fs = require('fs');
const  path = require('path');


//create dir
// fs.mkdir(path.join(__dirname,'/test'),{},function (err){
//     if (err) throw err;
//     console.log("Folder Created ... ");
//
// })

// write work
// fs.writeFile(path.join(__dirname,'/test','helo.txt'),'hello',err => {
//         if (err) throw err;
//         console.log("Folder Created ... ");
//     }
//     );


// append work
// fs.appendFile(path.join(__dirname,'/test','helo.txt'),' I love node js',err => {
//         if (err) throw err;
//         console.log("Folder Created ... ");
//     }
// );



// read work
fs.readFile(path.join(__dirname,'/test','helo.txt'),'utf8',(err,data) => {
        if (err) throw err;
        console.log(data);
    }
);


//rename file name


fs.rename(path.join(__dirname,'/test','helo.txt'),path.join(__dirname,'/test','heloworld.txt'),(err,data) => {
        if (err) throw err;
        console.log("renamed");
    }
);
