// cutomer homepage

exports.customer_homepage =async(req,res)=>{
    const local_data={
        title:"Customer Page",
        desc:"This is home page of my website",
        name:"Lusifer",
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


exports.addcustomer = async (req, res) => {
   const local_data = {
        title: "Home Page",
        desc: "This is the home page of my website",
        name: "Lusifer",
    };
    console.log(req.body);
    res.render("customer", local_data);
};
