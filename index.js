const pdf =require('html-pdf')
var ejs=require("ejs")
var nome="tarcisio"

ejs.renderFile('./index.ejs',{nome:nome,},(err,html)=>{
  if(err){
    console.log("Tudo errado")
  }else{
    //gerador de pdf
    pdf.create(html,{}).toFile("./Curriculo.pdf",(err,res)=>{
      if(err){
        console.log("Um erro aconteceu")
      }else{
        console.log(res)
      }
    })
  }
})

