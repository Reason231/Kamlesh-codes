const nodemailer=require('nodemailer')
require('dotenv').config();                 // so that we can take the values of .env file like host,port

class MailService{
    
    #transport;                             // private variable

    constructor(){
        try{
            // connecting the e-mail server
            const msgOpts={                                             // here we assigned this to a variable
                host: process.env.SMTP_HOST,                            // process.env lea  server ma run bhayeko .env lai liyera smtp host lincha
                port: process.env.SMTP_PORT,
                // secure: true,
                // service: "gmail"                                     // we don't need these two now cause we are using fake mail i.e mailtrap
                auth: {
                    user: process.env.SMTP_USERNAME,
                    pass: process.env.SMTP_PASSWORD
                }
            }
            this.#transport = nodemailer.createTransport(msgOpts)       // createTransprt connects the server
        }

        catch(exception) {
            console.log(exception)
            console.log("Error connecting the SMTP server")
            //process.exit(1)                                              // It ends the server if error occurs while sending mail just like throw
            throw{status:500, message:"Error connecting smtp server", detail: exception}    // It throws the error to the express config error handler 
        }
    } 

    // up we connect the mail server and now here we send the email
    sendEmail = async ({to,subject,message,attachments=null}) =>{                   // they receive the values
        try{
            const msgOpts = {
                to:to,
                from: process.env.SMTP_FROM,                                   // from value should be the .env host value in order to send mail but now we have defined the fake mail address in env
                subject: subject,
                html: message,
                // cc:"",                                                      // they are optional for rn
                // bcc:"",
            }

            if (attachments) {                                                 // if attachments is not null
                msgOpts('attachments') = attachments                           // creates a attachments variable which contrains the file
            }                                                                  // upto here we create option now we r going to send e-mail

            await this.#transport.sendMail(msgOpts);                           // here we send the e-mail
            return true

        }
        catch(exception){
            console.log(exception)
            console.log("Error sending email")
            throw{status:500,message:"Error sending email", detail:exception}
        }
    }
}

const mailSvc=new MailService()
module.exports=mailSvc