require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const mailer = require('nodemailer');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); 
const { v4: uuidv4 } = require('uuid');
const stud_uuid=uuidv4();

//const redditData = require('./data.json');
app.use(express.static(path.join(__dirname, 'public')));
const axios = require('axios');
const { resolveAny } = require("dns");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
// Import SendGrid SDK
const sgMail = require('@sendgrid/mail');

// Set API Key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Define the email options

// Create a connection pool
const pool = mysql.createPool({
    host:  process.env.sqlDB_HOST,                                                                         
    user: process.env.sqlDB_USER, 
    password: process.env.sqlDB_PASS, 
    database: process.env.sqlDB_NAME,
    port:process.env.sqlDB_port,
    authPlugins: {
        caching_sha2_password: mysql.authCachingSha2Password
      },
  waitForConnections: true,
  connectionLimit: 1000, 
  queueLimit: 0 
});


// Usage



//hhhh
/*
const db_connecting =async()=>{
    try{
        const connection = await mysql.createConnection({ 
            host:  process.env.sqlDB_HOST,                                                                         
            user: process.env.sqlDB_USER, 
            password: process.env.sqlDB_PASS, 
            database: process.env.sqlDB_NAME,
            port:process.env.sqlDB_port,
            authPlugins: {
                caching_sha2_password: mysql.authCachingSha2Password
              },
            
            connectTimeout:10000
        }); 
        connection.connect((err) => { if (err) { 
            console.error('Error connecting to the database:', err.stack); 
            return; } 
            console.log('Connected to the database as id', connection.threadId); 
           
        }); return connection;
        
        

    }catch(error){
        console.error("error during connection setup:",error)
       

    }
}
    */


    

const mailerz=async(email,bookName,authorName)=>{
    try{
        const msg = {
            to: email, 
            from: process.env.my_email, 
            subject: 'Thank You!',
            text: `Thank you for providing the book details: ${bookName} by ${authorName}.` ,
           
          };
          
         const mail_send= await sgMail.send(msg)
         return mail_send;

    }
    catch(error){
        console.error("email wont be send!!",error)
    }
    


}


/*//learning path references//
connection.query('SELECT * FROM Book_suggest', (err, results, fields) => { 
    if (err) { console.error('Error executing query:', err.stack); 
        return;

     } 
console.log('Results:', results); }); 
*/
/*
//gen req
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})
//query string
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})*/
arr=["Dive" ,"deep" ,"into" ,"the" ,"mysteries" ,"of" ,"the" ,"cosmos", "where", "physics,", "chemistry,","and", "math", "reveal" ,"the", "unknown."] 
image_arr=["chem","reactions-rearrangements-reagents-sanyal-500x500","Rcm","jdlee","phy","mat","cengage-jee-advanced-coordinate-geometry","vinay kumar","hallz","cengage-jee-advanced-coordinate-geometry","pathfinder-for-olympiad-and-jee-advanced-physics","morin"]
app.get('/', (req, res) => {
    res.render('home',{arr:arr})
    console.log(arr.length)
})
let toast="";
app.get('/Pdf', (req, res) => {
    
   
    let book_cover="";
    res.render('Pdf',{book_cover,image_arr,toast})
   
})
//just for checking purpose//
app.get('/checker', (req, res) => {
    
    res.render('checker')
   
})
app.get('/Pdf/search', async(req, res) => {
    image_arr_2=["chem","reactions-rearrangements-reagents-sanyal-500x500","Rcm","jdlee","phy","mat"]
    const inp =req.query.bookz_name
    //searchQuery = inp.replace(/\s+/g, '+');
    
    try{
        const content=await axios.get(`https://openlibrary.org/search.json?q=${inp}`);
        console.log(content)
        const book = content.data.docs;

        const book_id=book.cover_i
        const book_rate=book.ratings_average
        console.log('Cover URL:', book_id)
        book_cover=`https://covers.openlibrary.org/b/id/${book_id}-L.jpg`
       
        console.log(book.ratings_average,book.author_name)
       
        res.render('Pdf',{book,book_cover,image_arr,toast})
      
    

    }catch(error){
        console.log("cant find book!!",error)
        res.status(500).send('Error fetching book details');
    }

   /* const [Valuz,Valz]=Object.values(req.params)
    console.log(req.params)
    console.log(Valuz)
    console.log(Valz)
    res.render('checker',{Valuz,Valz})*/
    
})
app.post('/suggestion',async(req, res) => {
   
    const { bookName, authorName, email } = req.body;
        mailerz(email,bookName,authorName).then(()=>{
            console.log("email sent!!");
        }).catch((error)=>{
            console.log("email not sent",error);})
        
    
    //console.log(bookName," ",authorName," ",email)
 
        /*
    const transporter = mailer.createTransport({ 
        service: 'gmail', 
        
        
        auth: { user: process.env.my_email,
                pass: process.env.email_pass

        } });
        const mailOptions = { 
            from:process.env.my_email , 
            to: email, 
            subject: 'Thank You!', 
            text: `Thank you for providing the book details: ${bookName} by ${authorName}.` 
        };
        transporter.sendMail(mailOptions, (error, info) => { 
            if (error) { return console.log(error); } 
            console.log('Email sent'); 
             });
   */

//railway hosted mysql db operation 
    const sql = 'INSERT INTO book_suggest (Bookname,  Authorname ) VALUES (?, ?)'; 


    pool.query(sql, [bookName, authorName], (err, results) => {
       if (err) {
         console.error('Error inserting data:', err.message);
         return;
       }
       console.log('Data inserted successfully:', results);});
    toast="reached";
    res.redirect('/Pdf'); 

});


 
app.post('/feedback',async(req, res) => {
    const { name, school, feedback } = req.body;
    const sql = 'INSERT INTO feedback_matters(name, feedback, schoolcollege) VALUES (?, ?, ?)';
    pool.query(sql, [name, feedback, school], (err, results) => {
        if (err) {
          console.error('Error inserting data:', err.message);
          return;
        }
        console.log('Data inserted successfully:', results);
      });
    res.redirect('/')
   
  
  });
   

app.post('/studregistration',async(req, res) => {
    const { firstname,lastname,state,country,classname,exam,password} = req.body;
    const sql = 'INSERT INTO student_reg(stud_id,firstname,lastname,state,country,class,exam,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'; 

    pool.query(sql,[stud_uuid,firstname,lastname,state,country,classname,exam,password], (err, results) => {
        if (err) {
          console.error('Error inserting data:', err.message);
          return;
        }
        console.log('Data inserted successfully:', results);});
    res.redirect('/')
});
    

    
    
app.listen(300,()=>{
    console.log("server is running!!")
})