const express = require('express')
const router = express.Router() //express method that does routing
const controlPages = require('../controllers/dataFunctionControllers')

router.use(express.static('public')); //must be included since routes will need access to CSS

const bodyparser = require('body-parser') //must be included to access post data from FORM


router.use(bodyparser.urlencoded({ extended: false })); //must be included to access post data from FORM



//route to render the paga
router.get('/', controlPages.mainPage)


router.post('/generateBox', controlPages.resultsPage)

router.get('*', controlPages.errorPage) //default route, says any other route not specify will lend you here

    



//All of our routes will go here

module.exports = router; //this links the module to express module