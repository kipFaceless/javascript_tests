exports.isVowel = function(char){

    return ['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1;

}

/* 
exports.isConsonant = function(char){

    return ['a', 'e', 'i', 'o', 'u'].indexOf(char) == -1;
}
*/
exports.isConsonant = function(char){

    return !exports.isVowel(char);
} 

exports.three_params = function(Jun, n,b){
    return ;
}

exports.must_be_string = function ( something){
           

   return something;
}