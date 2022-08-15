let fs = require('fs')
let path = require('path')
let utility = require("../utility")

function organizeFiles(src){
    if(fs.existsSync(src)==false || src==undefined){
        src=process.cwd()
    }    
    let organizedPath = path.join(src,"Organized")
    if (fs.existsSync(organizedPath)==false) {
        fs.mkdirSync(organizedPath)
    }
    organizeWorker(src,organizedPath)
}

function organizeWorker(src,dest){
    allFilesAtSource = fs.readdirSync(src)
    for(let i=0;i<allFilesAtSource.length ;i++){
        let srcPath = path.join(src,allFilesAtSource[i])
        if (fs.lstatSync(srcPath).isFile()) {
            let category = getCategory(allFilesAtSource[i])
            sendFiles(srcPath,dest,category)
        }
        
    }
}

function sendFiles(src,dest,category){
    let categoryPath = path.join(dest,category)
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath)
    }
    let fileName = path.basename(src)
    let destinationPath = path.join(categoryPath,fileName)
    fs.copyFileSync(src,destinationPath)
    
}

function getCategory(file){
    let extension = path.extname(file).slice(1)
    for(let category in utility.types){
        if(utility.types[category].includes(extension)){
            return category
        }
    }
    return "Others"
}

module.exports={
    orgKey:organizeFiles
}