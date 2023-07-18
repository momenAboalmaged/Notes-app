import nodeoutlook from 'nodejs-nodemailer-outlook'

export function sendEmail(dest,message){

nodeoutlook.sendEmail({
    auth: {
        user: "TomnayaSolutions@outlook.com",
        pass: "Zatona1234@momen"
    },
    from: 'TomnayaSolutions@outlook.com',
    to: dest,
    subject: 'Hi , bro welcome to Tomnaya',
    html:message,
    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i)
}


);

}
