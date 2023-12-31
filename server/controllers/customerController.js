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
    let username = req.body['recipient-firstname'] + " " + req.body['recipient-lastname'];
   const local_data = {
        title: "Home Page",
        desc: "This is the home page of my website",
        name: "Lusifer",
        message: 'NEW user ADDED '+username,
    };
    console.log(req.body);
    res.render("customer", local_data);
};
