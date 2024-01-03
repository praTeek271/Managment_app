const bookDB=require("../models/book");



// // cutomer homepage
// exports.book_homepage =async(req,res)=>{
    
//     const mesg = req.flash('adduser');
//     const user_name = req.flash('newuser_name');
    
//     const local_data={
//         title:"book Page",
//         desc:"This is home page of my website",
//         name:"Lusifer"
//     }

//     const notify ={
//         message: "HeY !!  "+mesg,
//         name : user_name,
//     }
//     //import book data from database
//     let perPage=10;
//     let page = req.query.page || 1;
//     try{
//         const book_data = await bookDB.aggregate([{$sort:{updatedAT:-1}}])
//         .skip(perPage * page-perPage)
//         .limit(perPage)
//         .exec();
//         const count=await bookDB.countDocuments();
//         // console.log(book_data);
//         res.render("book",
//         {
//             local_data,
//             notify,
//             book_data,
//             current:page,
//             pages:Math.ceil(count/perPage)
//         });
//     }
//     catch(err){
//         console.log("Error for importing 'COUSTOMER' data from database\n",err);
//     }

//     // console.log(mesg);
//     // res.render("book",{local_data,notify});
// }

// //view book
// exports.view_book =async(req,res)=>{
//     const local_data={
//         title:"View book Page",
//         desc:"This is view book page of my website",
//         name:"Lusifer",
//     }
//     const notify ={
//         message: "HeY !!  ",
//         name : "Lusifer",
//     }
//     const id = req.params.id;
//     try{
//         const book_data = await bookDB.findOne({ _id: id});
//         console.log(book_data);
//         res.render("view_book",{local_data,notify,book_data});
//     }
//     catch(err){
//         console.log("Error for importing 'COUSTOMER' data from database\n",err);
//     }
// }

// //POST create new book
// exports.addPOSTbook = async (req, res) => {
//     let username = req.body.recipient_firstname;
//     // const local_data = {
//     //     title: "Home Page",
//     //     desc: "This is the home page of my website",
//     //     name:"Lusifer",
//     // };
//     // const notify ={
//     //     message: 'NEW user ADDED ',
//     //     name : username,
//     // }
//     const newbook = new bookDB({
//         // name: username,
//         firstname: req.body.recipient_firstname,
//         lastname: req.body.recipient_laastname,
//         phone_no: req.body.phone_no,
//         address: req.body.address_text,
//         credits: req.body.credits,
//     });
    
//     console.log(req.body);
    
//     try{
//         await bookDB.create(newbook);
//         req.flash('adduser', ' Successfully Added');
//         req.flash('newuser_name', username);
//         res.redirect("/book");
//     }
//     catch(err){
//         console.log(err);
//     }
//     // res.render("book", {local_data,notify});
//     delete newbook,username;
// };

// //update book
// exports.update_book =async(req,res)=>{
//     const local_data={
//         title:"Update book Page",
//         desc:"This is update book page of my website",
//         name:"Lusifer",
//     }
//     const notify ={
//         message: "DATABASE updated ",
//         name : "Lusifer",
//     }
//     const id = req.params.id;
//     try{
//         const book_data = await bookDB.findOne({ _id: id});
//     // making changes
//         if (book_data.firstname !=req.body.recipient_firstname) {
//             book_data.firstname = req.body.recipient_firstname;
//         } else {
//             book_data.firstname = book_data.firstname;
//         }
//         if (book_data.lastname !=req.body.recipient_laastname) {
//             book_data.lastname = req.body.recipient_laastname;
//         } else {
//             book_data.lastname = book_data.lastname;
//         }
//         if (book_data.phone_no !=req.body.phone_no) {
//             book_data.phone_no = req.body.phone_no;
//         } else {
//             book_data.phone_no = book_data.phone_no;
//         }
//         if (book_data.address !=req.body.address_text) {
//             book_data.address = req.body.address_text;
//         } else {
//             book_data.address = book_data.address;
//         }
//         if (book_data.credits !=req.body.credits) {
//             book_data.credits = req.body.credits;
//         } else {
//             book_data.credits = book_data.credits;
//         }
//         await book_data.save();
//         console.log("Data Updated");
//         res.redirect("/book/bookviews/"+id);
        
//         res.render("view_book",{local_data,notify,book_data});
//     }
//     catch(err){
//         console.log("Error for importing 'COUSTOMER' data from database\n",err);
//     }
// }

// books homepage
exports.books_homepage =async(req,res)=>{
    const local_data={
        title:"Books Page",
        desc:"This is book page of my website",
        name:"Lusifer",
    }
    res.render("books",local_data);
}
