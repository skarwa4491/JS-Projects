#!/usr/bin/env node

let fs = require('fs')
let path = require('path')

let input = process.argv.slice(2)
let optionsArray = []
let filesArray = []
// seperation of options and file names
for (let i = 0; i < input.length; i++) {
    if (input[i].charAt(0) === '-') {
        optionsArray.push(input[i])
    }
    else {
        filesArray.push(input[i])
    }
}

let isBothPresent = optionsArray.includes("-b") && optionsArray.includes("-n")
if(isBothPresent){
    console.log("use either of the options")
    return
}

for(let i =0;i<filesArray.length ; i++){
    
    if(!fs.existsSync(filesArray[i])){
        console.log(`no such file ${filesArray[i]}`)
        return;
    }
}

// read files
let content = ""
for (let i = 0; i < filesArray.length; i++) {

    content += fs.readFileSync(filesArray[i]) + "\n"

}

let contentArray = content.split("\n")
// -s
if (optionsArray.includes('-s')) {
    let isFirstSpace = true
    for (let i = 0; i < contentArray.length; i++) {
        if (contentArray[i] == '' && contentArray[i - 1] == '') {
            contentArray[i] = null
        }
        else if (contentArray[i] == "" && contentArray[i - 1] == null) {
            contentArray[i] = null
        }
    }

    for (let i = contentArray.length; i >= 0; i--) {
        if (contentArray[i] == null) {
            contentArray.splice(i, 1)
        }
    }
}

// -n
if(optionsArray.includes('-n')){
    for(let i=0;i<contentArray.length;i++){
        contentArray[i] = `${i+1} ${contentArray[i]}`
    }
}

// -b
if(optionsArray.includes('-b')){
    let counter = 1;
    for(let i =0;i<contentArray.length ; i++){
        if(contentArray[i] != ''){
            contentArray[i] = `${counter} ${contentArray[i]}`
            counter++;
        }
    }
}

console.log(contentArray.join("\n"))