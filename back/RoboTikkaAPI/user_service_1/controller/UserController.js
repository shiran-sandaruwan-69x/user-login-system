const UserSchema=require('../models/userSchema');

const bcrypt=require('bcrypt') /*meken karanne password ekata arakshawak denawa katawath bala ganna ba password eka data base eka*/
let jwt=require('jsonwebtoken');
const nodeMailer=require('nodemailer');

const registerUser=(req,resp)=>{

    UserSchema.findOne({email:req.body.email},(error,result)=>{

        if (error){
            resp.status(500).json({message:error});
        }else {
            if (result!==null){
                //not!==null kiyanne mewenakota user kenek innawa

                let data={
                    message:'email already exists !',
                    state:false
                }

                resp.status(400).json({data});
            }else {
                //save
                //password eka arakshawak hambenwa encript kirimen
                bcrypt.genSalt(10,function (err,salt) {
                   bcrypt.hash(req.body.password,salt,function (error,hash) {

                       const user=new UserSchema({
                           fName:req.body.fName,
                           lName:req.body.lName,
                           email:req.body.email,
                           password:hash,
                           avatar:req.body.avatar,
                           userState:req.body. userState,
                           regDate:req.body.regDate,
                           regTime:req.body.regTime,
                       });

                       user.save().then(saveResponse=>{

                           //token ekak hadala yawanawa
   // api token ekak use karanne use kenek log unama appication ekata ai a use 24 hours yanan password gahala log wenna
   //ona nam api yawana token ekan eyawa adura gannawa automa

                           const token=jwt.sign({
                               email:req.body.email,
                               password:req.body.password

        /*token eka kochara kalayak backend eka thiyanna oneda kiyala kiyanna ona meken eka karanne*/

                        /* JWT_AUTH kiyanne key eka apidena */
                           },process.env.JWT_AUTH,{expiresIn: '24h'})

                           //gmail ekata mail eka yawana vidiha

                           let transporter = nodeMailer.createTransport({
                               host: "smtp.gmail.com",
                               port: 587,
                               secure: false, // true for 465, false for other ports
                               requireTLS:true,
                     // auth kiyanne application eka hadana kenage .env file eka thiyana gmail password denna
                               auth: {
                                   user: process.env.EMAIL, // generated ethereal user
                                   pass: process.env.PASSWORD, // generated ethereal password
                               }
                           });

                           // apita yawanna ona mail eka body eka hada gannwa
                           let mailOption={
                               // from:'"Robo Tikka 👻"<noreply.prosess.env.EMAIL>',
                               from:'"Robo Tikka 👻"<rusarani1011997@gmail.com>',
                               to:req.body.email,
                               subject:'Robo Tikka Warning !',
                               html:`<html>
                          <body>
                          <p style="color: red">
                         .... Final warning came to the Robo Tikka ....
</p>

</body> 
</html>`
                           }


                            //mail eka send karanna thiyanne
                           transporter.sendMail(mailOption,(emailError,emailInfo)=>{
                              if (emailError){
                                  resp.status(500).json({
                                      message:'internal server error ekak bn podak balapan',
                                      state:false,
                                      error:saveResponseError
                                  });
                                  return;
                              }

                               let datObj={
                                   message:'success',
                                   token:token,
                                   state:true
                               }

                               resp.status(200).json({datObj});

                           });



                       }).catch(saveResponseError=>{
                           resp.status(500).json({message:'internal server error ekak bn podak balapan',state:false,error:saveResponseError});
                       })

                   })
                })

            }
        }

    })




    // console.log(req.body.fName);
    // console.log(req.body.email);
    // console.log(req.body.password);
    // console.log(req.body.lName);




};

const login=(req,resp)=>{
    const email = req.headers.email ? req.headers.email : null;
    const password = req.headers.password ? req.headers.password : null;

    try{
        if (email !==null && password !==null){
            UserSchema.findOne({email:email,userState:true}, (error,result)=>{
                if (result!==null){
                    bcrypt.compare(password, result.password, function (err, finalOutPut){
                        if (err){
                            resp.status(500).json(err);
                        }
                        if (finalOutPut){
                            const token = jwt.sign({
                                email: email,
                                password: password
                            }, process.env.JWT_AUTH, {expiresIn: '24h'});
                            resp.status(200).json({
                                message: 'success',
                                token: token,
                                state:true
                            });
                        }else{
                            resp.status(400).json({message:'please regiter..'});
                        }
                    })
                }else{
                    resp.status(400).json({message:'please regiter..'});
                }
            })
        }else {
            resp.status(400).json({message:'Please provide valid user name and password'});
        }

    }catch (e) {
        resp.status(500).json({message:'internal Server Error..',error:e});
    }
    
};

module.exports={
    registerUser,
    login
}

