let fs = require('fs')
let path = require('path')

function tree(src){
    if(fs.existsSync(src)==false || src==undefined){
        src = process.cwd()
    }
    treeHelper(src,"\t")
    
}

function treeHelper(dirPath,indent){
    let isFile = fs.lstatSync(dirPath).isFile()
    if (isFile){
        let fileName=path.basename(dirPath)
        console.log(indent+"|-"+fileName)
    }
    else{
        let dirName = path.basename(dirPath)
        console.log(indent+"|-"+dirName)
        let children = fs.readdirSync(dirPath)
        for(let i=0;i<children.length;i++){
            let childPath = path.join(dirPath,children[i])
            treeHelper(childPath,indent+"\t")
        }
    }
    
}

module.exports={
    treekey:tree
}