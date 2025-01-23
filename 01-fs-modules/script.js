const fs = require('fs');

// writefile
fs.writeFile("hello.txt", "Hello Node", function (err) {
   if (err) {
      console.log(err);
   } else {
      console.log("file write done");
   }
});
// appendFile
fs.appendFile("hello.txt", " Append line", function (err) {
   if (err) {
      console.log(err);
   } else {
      console.log("file append done");
   }
});
// copyFile
fs.copyFile("hello.txt", "copyfile.txt", function (err) {
   if (err) {
      console.log(err);
   } else {
      console.log("file copy done");
   }
});
// rename
fs.rename("hello.txt", "hello2.txt", function (err) {
   if (err) {
      console.log(err);
   } else {
      console.log("file rename done");
   }
});
// unlink 
// fs.unlink("hello2.txt", function (err) {
//    if (err) {
//       console.log(err);
//    } else {
//       console.log("file delete done");
//    }
// });