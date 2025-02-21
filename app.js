const express  = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello from Dockerized Node.js App!")
});

const PORT = process.env.PORT || 3000;


app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
  });
  