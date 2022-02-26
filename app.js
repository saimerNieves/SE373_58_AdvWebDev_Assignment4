//importing Library

const express = require('express')
const expressHandleBars = require('express-handlebars')
const hbs = require('handlebars')


//instance of express app
const app = express()

//link this page to our router director that will redirect users to different pages
const router = require('./routes/index')


//Reach the server at the root level call the router
app.use("/", router) //is going to use this router now

//Set the view engine
app.engine('hbs', expressHandleBars.engine({
    defaultLayout:'mainEngineTemplate',
    extname:'.hbs',


    helpers:{//this is a function to help us in the template

        createGrid(gridDimensions){
        
            let htmlInnerTableRows = ''


            for(let i=0; i<gridDimensions; i++){

                let htmlInnerTablecolumns = ''

                for(let i = 0; i<gridDimensions; i++){

                    let color = ((1<<24) * Math.random()|0).toString(16)
                    
                    htmlInnerTablecolumns += `<td style='background-color:#${color};'>${color}<br/><span style="color:#ffffff;">${color}</span></td>`
                }
                htmlInnerTableRows+= `<tr>${htmlInnerTablecolumns}</tr>` 


                
            }

            let htmlElementsString = `

            <table>
            <tbody>
            ${htmlInnerTableRows}
            </tbody>
            </table>

            `;

            return new hbs.SafeString(htmlElementsString)
        },


        error404(){

            let min = 20; 
            let max = 50; 
        
            let gridDimensions = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
            let classesArray = ["still","rotate","shrink"];


            let errorHeading = "<h1>NOT FOUND</h1>";
            let error404Divs = ``;


            for (let i = 0; i < gridDimensions; i++){

                let classRandomSelection = Math.floor(Math.random() * (3) );
                let classSelected = classesArray[classRandomSelection]

                error404Divs += `<div class=${classSelected}>404</div>`;
            }

            let allElements = errorHeading + error404Divs;

            return new hbs.SafeString(allElements)
        },

    }
}))

app.set('view engine', 'hbs')

//set up port for connection
app.listen(3004, ()=>{
    console.log("Connected on port 3004")
})
