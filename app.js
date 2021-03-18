var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var firebase = require('firebase')

  var firebaseConfig = {
    apiKey: "AIzaSyD6dsU311LEUTDQhF7ly_JI_Vl1o2dXPR0",
    authDomain: "firsttime-3ac0b.firebaseapp.com",
    databaseURL: "https://firsttime-3ac0b-default-rtdb.firebaseio.com",
    projectId: "firsttime-3ac0b",
    storageBucket: "firsttime-3ac0b.appspot.com",
    messagingSenderId: "635297673380",
    appId: "1:635297673380:web:a25e0dfeb02efe957e7631",
    measurementId: "G-T6NZ24G67L"
  };
  // Initialize Firebase
  let datab='';
  firebase.initializeApp(firebaseConfig);
  let database=firebase.database();

app.set('view engine','ejs');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tech.tomatoes.india@gmail.com',
    pass: 'ayush123'
  }
});


app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
res.sendFile(__dirname+'/public/index.html');
});


app.post('/',(req,res)=>{
  var mailOptions = {
    from: 'tech.tomatoes.india@gmail.com',
    to: req.body.email,
    subject: req.body.msg_subject,
    html: `<strong> Name: </strong> ${req.body.name}<br>
         <strong> email :</strong> ${req.body.email}<br>
         <strong> subject :</strong> ${req.body.msg_subject}<br>
         <strong> message :</strong> ${req.body.message}<br>
            `
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
console.log(req.body,'from server');
});

app.get('/blog',(req,res)=>{
  res.render('first');
});

app.listen(3000,()=>{
  console.log('server has started');
});

app.get('/blog/form',(req,res)=>{
  res.sendFile(__dirname+'/public/blogform.html');
  });

app.post('/blog/form',(req,res)=>{
  res.redirect('/blog/form');
  console.log(req.body);
})
 let arr=[];
  database.ref('users/').once('value')
.then(function(snapshot) {
    datab= snapshot.val() ;
    // console.log(datab,typeof(datab));
    let keys=Object.keys(datab);
    // console.log(keys);

   for (let i = 0; i < keys.length; i++) {
     arr.push(datab[keys[i]]);
    }
    // console.log(arr);
  });
app.get('/blog/show',(req,res)=>{
  res.render('mblogs',{data:arr});
});
app.get('/separate/:p',(req,res)=>{
  var jai=req.params.p;
  console.log(arr[jai]['content']);
  res.render('separate',{content: arr[jai]['content']});
})
