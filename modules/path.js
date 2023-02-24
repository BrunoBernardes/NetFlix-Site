const { dirname } = require("path");
const path = require("path");

//Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretorio atual
console.log(path.dirname(__filename));

//Extensao do arquivo
console.log(path.extname(__filename));

//Criar um objeto path
console.log(path.parse(__filename));

//juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));
