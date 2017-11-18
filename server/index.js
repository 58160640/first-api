const express  = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


 let students= [
    {id:1,name:'Adisorn',u:'buu',year:'1500',email:'arm@gmail.com',faculty:'Math'},
    {id:2,name:'kikee',u:'u',year:'1900',email:'qwe@gja.com',faculty:'sa'}
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
   

    res.status(200).json(students)
})
app.get('/students/:id',(req,res)=>{
    let id = req.param.id
    if(!id||isNaN(id)){
        res.status(400).json({errorMessage:'This api require`id`parameter' })
        return
    }
    res.json(students[req.params.id-1])
})

app.post('/students', (req, res) => {
    let student = req.body
    student.id = students.length + 1
    students.push(student)
    res.status(201).json(student)
})
module.exports = app   