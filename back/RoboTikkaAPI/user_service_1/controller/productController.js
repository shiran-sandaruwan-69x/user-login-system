const ProductSchema=require('../models/productSchema');
let jwt=require('jsonwebtoken');

const saveProduct=(req,resp)=>{

  const product=new ProductSchema({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      discount:req.body.discount,
      image:req.body.image,
  });

  product.save().then(result=>{
      resp.status(200).json({message:'success'});
  }).catch(error=>{
      resp.status(500).json(error);
  })

}

// const getAllProduct=(req,resp)=>{
//
//     let tempEmail='';
//     let tempPassword='';
//
//     const token=req.query.token? req.query.token:'empty';
//
//     if (token==='empty'){
//         resp.status(401).json({message:'unautherized request detected'});
//         return;
//     }
//
//     const isVaild=new Promise((resolve,reject )=> {
//         jwt.verify(token,process.env.JWT_AUTH,function (error,decoded) {
//         if (error){
//             reject(false);
//         }
//         if(decoded) {
//             console.log(decoded);
//             tempEmail=decoded.email;
//             tempPassword=decoded.password;
//           resolve(true);
//         }
//         });
//     });
//
//     isVaild.then(resphonse=>{
//         console.log(tempEmail);
//         console.log(tempPassword);
//         ProductSchema.find().then(result=>{
//             resp.status(200).json(result);
//         }).catch(err=>{
//             resp.status(500).json({message:'internal server error..'});
//         });
//     }).catch(err=>{
//         resp.status(401).json({message:'unautherized request detected..'});
//     });
//
//
//
//
// };

const getAllProducts = (req, resp) => {
    console.log(req.query.token);
    let tempEmail = '';
    let tempPassowd = '';
    const token = req.query.token ? req.query.token : 'empty';
    if (token === 'empty') {
        resp.status(401).json({message: 'UnAutherized Request Detected.'});
        return;
    }

    const isValid = new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_AUTH, function (error, decoded) {
            if (error) {
                reject(false);
            }
            if (decoded) {
                console.log(decoded);
                tempEmail = decoded.email;
                tempPassowd = decoded.password;
                resolve(true)
            }
        })
    })

    isValid.then(r => {

        let pagination = req.query.pagination?parseInt(req.query.pagination):2;
        let page = req.query.page?parseInt(req.query.page):1;

        if (page===0){
            page=1;
        }
        ProductSchema.countDocuments(function (e,count){
            ProductSchema.find().skip((page-1)*pagination).limit(pagination).then(result => {
                resp.status(200).json(
                    {
                        count:count,
                        dataSet:result
                    }
                );
            }).catch(eee => {
                console.log(eee)
                resp.status(500).json({message: 'internal Server Error'});
            })
        })


    }).catch(eee => {
        resp.status(401).json({message: 'iUnAutherized Request Detected.'});
    })
};

module.exports={
    saveProduct,
    getAllProducts
}