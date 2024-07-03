const {readFile, writeFile} = require('fs')
const { resourceLimits } = require('worker_threads')

readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(result)

  const first = result
  readFile('./content/second.txt', 'utf8',(err, result) => {
  if(err){
    console.log(err)
  }
  console.log(result)

  const second = result
  writeFile('./content/result1.txt',`Here is the result: ${first},${second}`,(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    console.log(result)
    })
  })
})