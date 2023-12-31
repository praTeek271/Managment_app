const customerDB=require("../models/customer");


//homepage
exports.homepage =async(req,res)=>{
    const local_data={
        title:"Home Page",
        desc:"This is home page of my website",
        name:"Lusifer",
    }
    res.render("home",local_data);
}

// cutomer homepage
exports.customer_homepage =async(req,res)=>{
    // const mesg= "";
    // const user_name= "";
    // try {
    const mesg = req.flash('adduser');
    const user_name = req.flash('newuser_name');
    // }catch (error) {
    //     console.log(error);
    // }
    const local_data={
        title:"Customer Page",
        desc:"This is home page of my website",
        name:"Lusifer"
    }
    const notify ={
        message: "HeY !!  "+mesg,
        name : user_name,
    }
    console.log(mesg);
    res.render("customer",{local_data,notify});
}



//POST create new customer


exports.addPOSTcustomer = async (req, res) => {
    let username = req.body.recipient_firstname;
    // const local_data = {
    //     title: "Home Page",
    //     desc: "This is the home page of my website",
    //     name:"Lusifer",
    // };
    // const notify ={
    //     message: 'NEW user ADDED ',
    //     name : username,
    // }
    const newcustomer = new customerDB({
        // name: username,
        firstname: req.body.recipient_firstname,
        lastname: req.body.recipient_laastname,
        phone_no: req.body.phone_no,
        address: req.body.address_text,
        credits: req.body.credits,
    });
    
    console.log(req.body);
    
    try{
        await customerDB.create(newcustomer);
        req.flash('adduser', ' Successfully Added');
        req.flash('newuser_name', username);
        res.redirect("/customer");
    }
    catch(err){
        console.log(err);
    }
    // res.render("customer", {local_data,notify});
    delete newcustomer,username;
};


// books homepage
exports.books_homepage =async(req,res)=>{
    const local_data={
        title:"Books Page",
        desc:"This is book page of my website",
        name:"Lusifer",
    }
    res.render("books",local_data);
}
