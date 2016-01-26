var fs = require('fs');
var fsExtra = require('fs-extra');
var path = require("path");

var imagesCount = 1;
var errorCount = 1;

var dirParser = function (pathFrom, pathTo) {
  var fileContents = fs.readdirSync(pathFrom), stats;

  fileContents.forEach(function (fileName) {
    stats = fs.lstatSync(pathFrom + fileName);
    if (stats.isDirectory()) {
      dirParser(pathFrom + fileName + '/', pathTo);
    }
    else {
      try {
        if (!stats.isDirectory()) {
          fsExtra.copySync(pathFrom, pathTo);
          console.log('Copying image [' + imagesCount + ']: ' + fileName);
          imagesCount++;
        }
      } catch (err) {
        console.error('Cannot copy ' + errorCount + ' file "' + fileName + '": ' + err.message);
        errorCount++;
      }
    }
  });
};

var rmdir = function(dir) {
  console.log(dir);
  var list = fs.readdirSync(dir);
  for(var i = 0; i < list.length; i++) {
    var filename = path.join(dir, list[i]);
    var stat = fs.statSync(filename);

    if(filename == "." || filename == "..") {
      // pass these files
    } else if(stat.isDirectory()) {
      // rmdir recursively
      rmdir(filename);
    } else {
      // rm fiilename
      fs.unlinkSync(filename);
    }
  }
  fs.rmdirSync(dir);
};

dirParser(process.argv[2], process.argv[3]);