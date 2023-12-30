// cutomer homepage

exports.customer_homepage =async(req,res)=>{
    const local_data={
        title:"Customer Page",
        desc:"This is home page of my website",
        name:"Lusifer",
    }
    res.render("customer",local_data);
}