
const express = require("express");
const app = express();
const path = require("path");
const https = require("https");
const qs = require("querystring");
const port = process.env.PORT || 3800;
require('dotenv').config()
require("./db/conn")
const Urgent = require("./db/urgent")
const Medicine = require("./db/medicine")
const ReqPlasma = require("./db/plasmarequest")
const Oxygen = require("./db/oxygen")
const Bed = require("./db/bed")
const Mental = require("./db/mentalhealth")
const DonPlasma = require("./db/donateplasma")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile('/client/build/index.html', { root: __dirname }, function (err) {
            if (err) {
                res.redirect("https://covidhelp-mmmut.herokuapp.com/")

            }
        });
    });
}


app.post("/urgenthelp", async (req, res) => {
    try {
        if (req.body.first != null) {
            const paid = new Urgent({
                name: req.body.first,
                address: req.body.address,
                phone: req.body.phone,
                age: req.body.age,
                help: req.body.help,
            })
            await paid.save();
        }
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }

})


app.post("/requestoxy", async (req, res) => {
    try {
        if (req.body.first != null) {
            const paid = new Oxygen({
                name: req.body.first,
                address: req.body.address,
                phone: req.body.phone,
                age: req.body.age,
                help: req.body.help,
            })
            await paid.save();
        }
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }

})

app.post("/requestbed", async (req, res) => {
    try {
        if (req.body.first != null) {
            const paid = new Bed({
                name: req.body.first,
                address: req.body.address,
                phone: req.body.phone,
                age: req.body.age,
                help: req.body.help,
            })
            await paid.save();
        }
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }

})

app.post("/medicine", async (req, res) => {
    try {
        if (req.body.first != null) {
            const paid = new Medicine({
                name: req.body.first,
                address: req.body.address,
                phone: req.body.phone,
                age: req.body.age,
                positiveTestDate: req.body.date,
                medicine: req.body.medicine,
            })
            await paid.save();
        }
        res.redirect("/");
    } catch (error) {
        console.log(error)
    }

})

app.post("/requestplasma", async (req, res) => {
    try {
        if (req.body.first != null) {
            const paid = new ReqPlasma({
                name: req.body.first,
                address: req.body.address,
                phone: req.body.phone,
                age: req.body.age,
                positiveTestDate: req.body.date,
                bloodgroup: req.body.bg,
            })
            await paid.save();
        }
        res.redirect("/");
    } catch (error) {
        console.log(error)
    }

})

app.post("/donateplasma", async (req, res) => {
    try {
        if (req.body.first != null) {
            const paid = new DonPlasma({
                name: req.body.first,
                address: req.body.address,
                phone: req.body.phone,
                age: req.body.age,
                positiveTestDate: req.body.date,
                bloodgroup: req.body.bg,
            })
            await paid.save();
        }
        res.redirect("/");
    } catch (error) {
        console.log(error)
    }

})

app.post("/mentalhealth", async (req, res) => {
    try {
        if (req.body.first != null) {
            const paid = new Mental({
                name: req.body.first,
                address: req.body.address,
                phone: req.body.phone,
                age: req.body.age,
                help: req.body.help,
            })
            await paid.save();
        }
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }

})





app.listen(port, () => {
    console.log(`server is running at ${port}`);
})

