const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&HANFmbyY#EAr_9P5h1YA4-Y60PM2qH0siEp8ouIuYydvY1pxHYrI', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000',
MONGODB: process.env.MONGODB || 'put_your_mongodb_url' // අනිවාරෙන් Mongodb Url එකක් ඕනි දන්නෙ නැත්නම් මගෙ වීඩියෝ එක බලලා හදාගන්න.🔥
};
