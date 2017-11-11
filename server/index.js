const express  = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


 let students= [
    {id:1,name:'suphalert',u:'buu',year:'1500',email:'su@gja.com'},
    {id:2,name:'kikee',u:'u',year:'1900',email:'qwe@gja.com'}
    ]   
app.get('/greeting',(req,res) =>{
    let lang={
        en:'Hello',
        th:'สวัสดี'
    }
    lang['en']
    lang['th']
    let l =req.query.lang
    console.log(l)
    if(!l){
    res.json()({message:'Hello'})
    }else{
        res.json({message:lang[l]})
    }
  
})


app.get('/students',(req,res) =>{
   

    res.json(students)
})
app.get('/students/:id',(req,res)=>{
    res.json(students[req.params.id-1])
})

app.post('/students', (req, res) => {
    let student = req.body
    students.push(student)
    res.json(student)
})
module.exports = app   