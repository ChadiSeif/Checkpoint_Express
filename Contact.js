var express = require('express');
var path = require('path');

//router object
var router = express.Router();

router.get('/Contact', function(req, res){
 res.sendFile(path.join(__dirname, '..', 'Contact.html'));
});

module.exports = router;