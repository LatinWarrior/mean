/* app/controllers/index.server.controller.js */

'use strict'

exports.render = function(req, res){
    //res.send('Hello World');
    
    console.log('In index.server.controller.js');
    
    if (req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Hello World. Here I am. ',
        userFullName: req.user ? req.user.fullName : ''
    });
};

