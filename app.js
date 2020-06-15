// Initialized express server
const express = require("express");
const app = express();
// Port
const port = 3000;

// set view engine
app.set("view engine", "ejs");

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
