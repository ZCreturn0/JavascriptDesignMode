console.log('myLog loaded');
var myLog = {
    log: function(){
        console.log([].join.apply(arguments,[',']));
    }
}