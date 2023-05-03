/*
* express
* mongoose
* cors
* nodemon
* dotenv-github danne nathi key thiya ganna
* */

const express=require('express');
const mongoose=require('mongoose');
const cros=require('cors');
require('dotenv').config();

const port=process.env.USER_PORT;

//------------------------------final ekata meka karanne hadapu router lug karala denna thiyanne------
const userRouter=require('./routes/UserRoute');
const productRouter=require('./routes/ProductRoute');
//-------------------------------------


/*app eka run karanna karala cros eka */
const app=express();
app.use(express.json({limit:'50mb'}))
app.use(cros());



/*data base eka plug karana eka //// 127.0.0.1:27017 == localhost:27017*/
mongoose.connect('mongodb://127.0.0.1:27017/robotikka',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(() => {
    /*database eka hariyata plug unanam application eka run karanna then() kiyana promiser ekan kiyanne*/

    app.listen(port,()=>{
        console.log('application run wenawa database connect ekath hari mona port ekada on ');
    })

}).catch((error=>{
    console.log(error);
}));

//--------- url eka denna controller ekata ginin save wenna ona ewa --

app.use('/api/v1/userRoute',userRouter);
app.use('/api/v1/productRoute',productRouter);