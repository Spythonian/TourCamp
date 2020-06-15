// Initialized express server
const express = require("express");
const app = express();
// Port
const port = 3000;

// set view engine
app.set("view engine", "ejs");

// Prepared dependencies
// app.use('/api', api); // redirect API calls
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


// Route
app.get("/", (req, res) => res.render("landing"));

app.get("/campgrounds", (req, res) => {
  const campgrounds = [
    { name: "Idumota Tour Camp", image: "" },
    { name: "Osogbo Tour Ground", image: "" },
    { name: "Ita agbon Camp", imgae: "" },
  ];
  res.render("campgrounds", { campgrounds: campgrounds });
});

// Listened port
app.listen(port, () =>
  console.log(`TourCamp Server is listening at http://localhost:${port}`)
);
