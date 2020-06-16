// Initialized express server
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// Port
const port = 3000;


// set view engine
app.set("view engine", "ejs");

// body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Prepared dependencies
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


// Route
app.get("/", (req, res) => res.render("landing"));

let campgrounds = [
    { name: "Idumota Tour Camp", image: "" },
    { name: "Osogbo Tour Ground", image: "" },
    { name: "Ita agbon Camp", imgae: "" },
  ];


app.get("/campgrounds", (req, res) => {

  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post('/campgrounds', (req, res) => {
    // res.send('You hit the post route')
    // get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    let newCampground = { name: name, image:image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect('/campgrounds');
})

app.get('/campgrounds/new', (req, res) => {
    res.render('new')
});

// Listened port
app.listen(port, () =>
  console.log(`TourCamp Server is listening at http://localhost:${port}`)
);
