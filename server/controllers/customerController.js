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

//homepage

exports.addcustomer = async (req, res) => {
    // get username
    const username = req.body['recipient-name'];
    // get phone
    const phone = req.body['phone-no'];
    // get address
    const address = req.body['address-text'];
    const form_data = [username, phone, address];

    const cards = [
        {
          titleCard: 'title 1',
          desc: 'just some text'
        },
        {
          titleCard: 'title 1',
          desc: 'just some text'
        },
        {
          titleCard: 'title 1',
          desc: 'just some text'
        },
      ]

    const local_data = {
        title: "Home Page",
        desc: "This is the home page of my website",
        name: "Lusifer",
        form_data: cards,  // make sure the variable name matches
    };

    res.render("customer", local_data);
};
