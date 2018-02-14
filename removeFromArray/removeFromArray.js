var removeFromArray = function(array, /*, ...args */) {

    var args = Array.apply(null, arguments).slice(1);
    var indices = [];
    
    for(var i = 0; i < args.length; i++){
        var arg = args[i];
        var index = array.indexOf(arg);
        while(index > -1){
            indices.push(index);
            index = array.indexOf(arg, index + 1);
        }
    }

    indices.sort();
    for(var i = 0; i < indices.length; i++){
        var index = indices[i] - i;
        array.splice(index, 1);
    }    

    return array;
} 

module.exports = removeFromArray
