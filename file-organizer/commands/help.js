function help(){
    console.log(`List of all commands
    1. cdir tree <path> : represents tree structure of given path, if path is not given
    current working directroy is default path
    2. cdir organize <path> : organizes file of given path , if path is not given
    current working directory is default path
`)
}

module.exports={
    helpKey:help
}