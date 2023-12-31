const customerDB=require("../models/customer");
// cutomer homepage

exports.customer_homepage =async(req,res)=>{
    const local_data={
        title:"Customer Page",
        desc:"This is home page of my website",
        name:"Lusifer",
        message: "",
    }
    res.render("customer",local_data);
}
// books homepage

exports.books_homepage =async(req,res)=>{
    const local_data={
        title:"Books Page",
        desc:"This is book page of my website",
        name:"Lusifer",
    }
    res.render("books",local_data);
}

//homepage

exports.homepage =async(req,res)=>{
    const local_data={
        title:"Home Page",
        desc:"This is home page of my website",
        name:"Lusifer",
    }
    res.render("home",local_data);
}

//POST create new customer


exports.addPOSTcustomer = async (req, res) => {
    let username = req.body.recipient_firstname;
   const local_data = {
        title: "Home Page",
        desc: "This is the home page of my website",
        name: username,
        message: 'NEW user ADDED ',
    };
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
        // res.redirect('/customer');
    }
    catch(err){
        console.log(err);
    }
    res.render("customer", local_data);
};
