const fs = require('fs')

const printingData = {"name": "Employee 1 Name", "salary": 2000}
let addedData = {"name": "Employee 2 Name", "salary": 1997}

// fs.writeFile("employees.json",JSON.stringify(printingData),'utf-8',((err)=>{
//     if(err) console.log(err)
//     console.log("Dosya oluşturuldu, dosya içeriği;")
// }))

// fs.readFile("./employees.json",'utf-8',((err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// }))

// fs.appendFile("./employees.json",JSON.stringify(addedData),'utf-8',((err,data)=>{
//     if(err) console.log(err)
//     console.log("Yeni bilgi eklendi")
// }))

// fs.unlink("./employees.json",((err)=>{
//     if(err) console.log(err)
//     console.log("empoyeess.json dosyası silindi")
// }))