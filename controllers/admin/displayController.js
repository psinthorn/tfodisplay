const mongoose = require("mongoose");
const Display = require("../../models/DisplayText");
const fs = require("fs");

module.exports = {
  //Get all available list of apartments
  getAll(req, res) {
    Display.findOne({}).then(display => {
      res.render("admin/display-list", { display: display });
    });
  },

  //Create form

  addForm(req, res) {
    Display.findOne({}).then(display => {
      res.render("admin/display-add");
    });
  },

  //Create new display
  create(req, res) {
    const displayProps = req.body;

    //console.log(displayProps);

    Display.create(displayProps)
    .then(() => {
      res.redirect("/admin/display");
      //res.send(display);
    });
  },

  //Edit form display
  editForm(req, res) {
    const id = req.params.id;
    //console.log(id);
    Display.findById({ _id: id }).then(display => {
      res.render("admin/display-edit", { display: display });
    });
  },

  //Edit form display
  editUpdate(req, res) {
    const displayProps = req.body;
    const id = req.params.id;

    Display.findByIdAndUpdate({ _id: id }, displayProps)
      .then(() => Display.find({ _id: id }))
      .then(() => {
        req.flash("success_msg", "Update completed.");
        res.redirect("/admin/display");
      });
  },

  //Delete display
  delete(req, res) {
    const id = req.params.id;

    Display.findByIdAndRemove({ _id: id })
      .then(() => Display.find({}))
      .then(display => {
        res.render("admin/displays-list", { display: display });
      });
  },

  //upload image form
  image(req, res) {
    res.render("admin/image-upload-form");
  },

  //image upload process
  imageUplaod(req, res) {
    const id = req.params.id;

    const imgUrl = req.files.imgUrl;
    const imgUrlName = Date.now() + "-" + imgUrl.name;
    const imagesUploads = "./public/images/";
    imgUrl.mv(imagesUploads + imgUrlName, err => {
      if (err) throw err;
    });

    let displayProps = {
      imgUrl: imgUrlName
    };

    Display.findByIdAndUpdate({ _id: id }, displayProps).then(display => {
      res.render("/admin/display", { display: display });
    });
  },

  //Image Update

  imageUpdate(req, res) {
    const id = req.params.id;
    const imgUrl = req.files.imgUrl;

    //res.send(imgUrl.name);
    const imgUrlName = "display-" + Date.now() + "-" + imgUrl.name;
    const imagesUploads = "./public/images/";
    imgUrl.mv(imagesUploads + imgUrlName, err => {
      if (err) throw err;
    });

    //res.send(imgUrlName);
    const delImage = imagesUploads + req.body.oldImgUrl;
    const newImg = {
      imgUrl: imgUrlName
    };

    fs.unlink(delImage, err => {
      Display.findByIdAndUpdate({ _id: id }, newImg)
        .then(() => Display.findById({ _id: id }))
        .then(display => {
          res.render("admin/display-edit", { display: display });
        });
    });
  }
};
