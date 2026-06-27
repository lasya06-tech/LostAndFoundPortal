const nodemailer=require("nodemailer");

exports.sendMessage=async(req,res)=>{
    try{
        const {name,email,message}=req.body;

        

        //create transporter

        const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // MUST be false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

        //email content

        const mailOptions={
            from:email,
            to:process.env.EMAIL_USER,
            subject:`Contact Form Message ${name}`,
            text:`
            Name: ${name}
            Email: ${email}
            Message: ${message}
            `
        };

        //send email

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success:true,
            message:"Message sent successfully"
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Failed to send message"
        });
    }
};