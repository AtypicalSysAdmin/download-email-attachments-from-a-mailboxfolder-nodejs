# download-email-attachments-from-a-mailboxfolder-nodejs
downloads all email attachments from a specific mailbox folder

npm install download-email-attachments

npm install dotenv

I had to modify according to the error I was getting at node_modules\mailparser\lib\mailparser.js:1407:27

mime.extension is not a function

I changed it to mime.getextentions and it did work

Go to node_modules\download-email-attachments\lib\helpers\parse-imag-account-string.js

you can uncomment two methods, findusername and findpassword, if you need.

Go to node_modules\download-email-attachments\lib\find-emails.js

at line 101 you can choose the folder name in your inbox instead of TEST:

imap.openBox('TEST', false, function (err, mailbox) 

Go to node_modules\download-email-attachments\lib\save-attachment-stream.js

At line 14 you can use your own method to generate the file name and if the file name does not come out properly, you can comment out .replace(state.invalidChars, '_')
