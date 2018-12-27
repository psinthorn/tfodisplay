const mongoose = require("mongoose");
const Contact = require("../models/Contact");
const About = require("../models/About");
const Welcome = require("../models/Welcome");
const Intro = require("../models/Intro");
const Service = require("./../models/Service");
const Policy = require("./../models/Policy");
const Display = require("./../models/DisplayText");

module.exports = {
  dashBoard(req, res) {
    // let promisesAll = [
    //     Product.find({status: 'Public'}).sort({ date: -1}).exec(),
    //     Intro.find({ status: 'Public'}).exec(),
    //     Contact.find({}).exec()
    // ];
    // Promise.all(promisesAll)
    // .then( ([products, intro, contact]) => {
    //         res.render('index/welcome', { products: products, intro: intro, contact });
    // });
  },

  index(req, res) {
    Display.findOne({}).then(display => {
      res.render("index/display-text", { display: display });
    });
  },

  indexText(req, res) {
    Display.findOne({}).then(display => {
      res.render("index/display-text-2", { display: display });
    });
  },

  display3(req, res) {
    Display.findOne({}).then(display => {
      res.render("index/display-text-3", { display: display });
    });
  },

  banner(req, res) {
    Service.find({})
      .sort({ order: 1 })
      .then(services => {
        res.render("index/display-banner", { services: services });
        //res.status(200).send(services)
        //res.send(services);
      });
  },

  companyProfile(req, res) {
    About.findOne({}).then(about => {
      res.render("index/about", { about: about });
    });
  },

  about(req, res) {
    About.findOne({}).then(about => {
      res.render("index/about", { about: about });
    });
  },

  services(req, res) {
    Service.find({ status: "Public" })
      .sort({ order: 1 })
      .then(services => {
        res.render("index/services", { services: services });
      });
  },

  serviceShow(req, res) {
    const id = req.params.id;

    Service.findById({ _id: id }).then(service => {
      res.render("index/service-show", { service: service });
    });
  },

  termPolicy(req, res) {
    Policy.find({}).then(policy => {
      res.render("index/term-policies", { policy: policy });
    });
  },

  contact(req, res) {
    Contact.findOne({}).then(contact => {
      res.render("index/contact-us", { contact: contact });
    });
  },

  maps(req, res) {
    res.render("index/maps");
  }
};
