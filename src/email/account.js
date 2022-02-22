const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const welcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'vasav.dangi@kevit.io',
        subject:'welcome',
        text:`we are happy after seeing you ${name}`
    })
}

const goodbyeMail= (email,name) => {
    sgMail.send({
        to:email,
        from:'vasav.dangi@kevit.io',
        subject:'Deletion of account',
        text:`it was an pleasure to work with you ${name},what should we do to improve our site`
    })
}
module.exports={
    welcomeEmail,
    goodbyeMail
}