/**
* @module routes
* @description
* Define all core routes of applications
*/
"user strict";

const coreCtrl = require('../controllers').Core;

module.exports = function(app) {
  app.route('/').get(coreCtrl.renderHomePage);
  app.route('/about').get(coreCtrl.renderAboutPage);
  app.route('/service').get(coreCtrl.renderServicePage);
  app.route('/menu').get(coreCtrl.renderMenuPage);
  app.route('/testimonial').get(coreCtrl.renderTestimonialPage);
  app.route('/contact').get(coreCtrl.renderContactPage);
  app.route('/booking').get(coreCtrl.renderBookingPage);
};