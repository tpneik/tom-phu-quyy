"user strict";

// Module public methods.
module.exports = {
  renderHomePage : renderHomePage,
  renderContactPage  : renderContact
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

/**
* @name renderContact
* @description
* Render contact page.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderContact(req, res) {
  res.render('products', {
    content : 'This is contact page content'
  });
}