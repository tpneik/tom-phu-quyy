"user strict";

// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderAboutPage  : renderAbout,
  renderServicePage : renderService,
  renderMenuPage : renderMenu,
  renderTestimonialPage : renderTestimonial,
  renderContactPage : renderContact,
  renderBookingPage : renderBooking
};

/**
* @name renderHomePage
* @description
* Render homepage.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderHomePage(req, res) {
  res.render('index', {
    content : 'This is homepage content'
  });
}

function renderAbout(req, res) {
  res.render('about', {
    content : 'This is contact page content'
  });
}

function renderService(req, res) {
  res.render('service', {
    content : 'This is service page content'
  });
}

function renderMenu(req, res) {
  res.render('menu', {
    content : 'This is Menu page content'
  });
}

function renderTestimonial(req, res) {
  res.render('testimonial', {
    content : 'This is testimonial page content'
  });
}

function renderContact(req, res) {
  res.render('contact', {
    content : 'This is testimonial page content'
  });
}

function renderBooking(req, res) {
  res.render('booking', {
    content : 'This is testimonial page content'
  });
}