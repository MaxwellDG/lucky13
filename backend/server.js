const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox727244908efa48a08886e767c9e2ee14.mailgun.org';
const apiKey = "NOPE"
const mg = mailgun({apiKey: apiKey, domain: DOMAIN});


const app = express()
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParse.json())

app.post("/lucky13/email", async (req, res) => {

    console.log(`${ req.body.contactee } is the contactee.`)

    const data = {
        from: `${req.body.name} <bot@mailgun.org>`,
        to: `${req.body.contactee}@lucky13tattoos.com`,
        subject: 'Client inquiry',
        text: `${req.body.name} says: 
        
        ${req.body.message} 
        
        Respond to me at: ${req.body.email}`
    };
    mg.messages().send(data, function (error, body) {
        if(error){
            console.log(error)
            res.json({
                error
            })
        } else {
            res.json({
                status: 200,
                body
            })
            console.log(body);
        }
    });

})    

app.listen(port, () => console.log("Started up server on port 8080"))