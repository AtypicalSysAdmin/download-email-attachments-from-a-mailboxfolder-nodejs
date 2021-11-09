const downloadEmailAttachments = require('download-email-attachments');
const moment = require('moment');
const opDir = "C:\\Users\\moham\\OneDrive\\Desktop\\TEST FOLDER";
console.log(opDir);
const email = "youremail";
const password =  'yourpassword'; //app password
const port = 993;
const host = 'imap.gmail.com';
const todaysDate = moment().format('YYYY-MM-DD');
var reTry = 1;

var paraObj = {
   invalidChars: /\W/g,
   account: `"${email}":${password}@${host}:${port}`, // all options and params 
   //besides account are optional
   directory: opDir,
   filenameTemplate: '{filename}',
   // filenameTemplate: '{day}-{filename}',
   filenameFilter: /.xlsx?$/,
   timeout: 10000,
   log: { warn: console.warn, debug: console.info, error: console.error, info: 
   console.info },
   since: '2021-10-28',
   lastSyncIds: ['234', '234', '5345'], // ids already dowloaded and ignored, helpful 
   //because since is only supporting dates without time
   //senderaddress: 'alison.haworth22@gmail.com',
   attachmentHandler: function (attachmentData, callback, errorCB) {
   console.log(attachmentData);
   callback()
  }
 }

 var onEnd = (result) => {

      if (result.errors || result.error) {
           console.log("Error ----> ", result);
           if(reTry < 4 ) {
               console.log('retrying....', reTry++)
               return downloadEmailAttachments(paraObj, onEnd);
           } else  console.log('Failed to download attachment')
     } else console.log("done ----> ");
  }
downloadEmailAttachments(paraObj, onEnd);

