#!/usr/bin/env node
let fs = require('fs')
let path = require('path')
let treeObj = require("./commands/tree")
let helpObj = require("./commands/help")
let orgObj = require("./commands/organize")
let inputArr = process.argv.slice(2)
let command = inputArr[0]

switch(command){
    case "tree":
        treeObj.treekey(inputArr[1])
        break
    case "organize":
        orgObj.orgKey(inputArr[1])
        break
    case "help":
        helpObj.helpKey()
        break
    default:
        console.log("no such command 😭")
        break
}
