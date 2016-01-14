/* */

'use strict'

module.exports = function (app){
    
    console.log('In index.server.routes.js');
    
    var index = require('../../app/controllers/index.server.controller.js');
    app.get('/', index.render);
}