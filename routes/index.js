/* File: index.js
   Student’s Name:
   Student ID: 
   Date: September 22, 2023 */

/* Code as below */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET about me page. */
router.get('/about', function (req, res, next) {
  console.log('About page accessed');
  res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  console.log('Projects page accessed');
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  console.log('Services page accessed');
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  console.log('Contact page accessed');
  res.render('contact', { title: 'Contact' });
});

router.post('/send-message', function (req, res, next) {
  // Handle the form submission here (e.g., capture the form data and process it)
  // Redirect back to the Home Page after processing the form data
  res.redirect('/');
});

module.exports = router;
