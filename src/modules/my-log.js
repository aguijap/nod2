module.exports.info = function info (text){
  console.log('Estes es el aviso ', text);
  return (text);
}
module.exports.error = function error (text){
  console.log('Estes es el error ', text);
  return (text);
}

