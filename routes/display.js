const DisplayController = require('./../controllers/admin/displayController');
const {ensureAuthenticated, ensureGuest} = require('./../helpers/auth');

module.exports = (app) => {

    //888888888888888888888888888
    //88   display Routes    88
    //888888888888888888888888888

    //Get all Contact List
    app.get('/admin/display', ensureAuthenticated, DisplayController.getAll);

     //Get all display List
     app.get('/admin/display/add', ensureAuthenticated, DisplayController.addForm);
     
    //Create new display 
    app.post('/admin/display',ensureAuthenticated, DisplayController.create);

    //Edit form
    app.get('/admin/display/:id', ensureAuthenticated, DisplayController.editForm);

    //Edit process
    app.put('/admin/display/:id', ensureAuthenticated, DisplayController.editUpdate);

    //Edit image
    app.put('/admin/display/image/:id', ensureAuthenticated, DisplayController.imageUpdate);

    //Delete display
    app.delete('/admin/display/:id', ensureAuthenticated, DisplayController.delete);

}