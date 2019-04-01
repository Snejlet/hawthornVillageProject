var express = require ('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log("At the home page");
    res.redirect("/home.html")
});

router.get('/apartments', function(req, res){
    console.log("At the apartments root page");
    res.redirect("/apartments.html")
});

router.get('/contact', function (req, res){
    console.log("At the contacts page");
    res.redirect("/contact.html")
});

router.get('/fourBedroom', function(req, res){
    console.log("At the four bedroom apartment page");
    res.redirect("/fourBedroom.html")
});

router.get('/holidayApartment', function (req, res){
    console.log("At the holiday apartments page");
    res.redirect("/holidayApartment.html")
});

router.get('/shortStay', function (req, res){
    console.log("At the short stay apartments page");
    res.redirect("/shortStay.html")
});

router.get('/studentApartment', function (req, res){
    console.log("At the student apartments page");
    res.redirect("/studentApartment.html")
});

router.get('/twoBedroom', function (req, res){
    console.log("At the two bedroom apartment page");
    res.redirect("/twoBedroom.html")
});

module.exports = router;