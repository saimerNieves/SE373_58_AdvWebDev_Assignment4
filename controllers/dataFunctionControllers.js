//this controlls the data in trhe pages

//funcyion called mainPage
const mainPage = (req, res) => {

    res.render('index')
}

const resultsPage = (req, res) => {

    console.log(req.body.numb)

    res.render('results', {gridDimensions:req.body.numb}) //rendering to results while passing a variable
   
}

const errorPage = (req, res) => {

    res.render('error')
}


//exporting pages page
module.exports ={
    
    mainPage,
    resultsPage,
    errorPage
}