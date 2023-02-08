const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');
const turmas = require('./turmasRouter');
const niveis = require('./niveisRouter');

module.exports = app => {
    app.use(
        bodyParser.json(), 
        pessoas, 
        niveis, 
        turmas);
   

}