/* dto eka hadanne*/

const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    fName:{
        type:String,
        required:true /*meka aniwarayen oneda*/
    },
    lName:{
        type:String,
        required:true /*meka aniwarayen oneda*/
    },
    email:{
        type:String,
        required:true /*meka aniwarayen oneda*/
    },
    password:{
        type:String,
        required:true /*meka aniwarayen oneda*/
    },
    avatar:{
        type:String,
    },
    userState:{
        type:Boolean,
    },
    regDate:{
        type:Date,
        required:true /*meka aniwarayen oneda*/
    },
    regTime:{
        type:String,
        required:true /*meka aniwarayen oneda*/
    }
});
/*wena thanaka idan access karanath puluwan wenna export kara data base eka table eka hadana vidiha denna ona*/
/* table name eka meke = user */
module.exports = mongoose.model('User',UserSchema);