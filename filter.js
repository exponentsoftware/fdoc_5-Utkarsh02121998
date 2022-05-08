var sample = [1, 2, 3] 

var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)

var result = sample.filter(elem => elem !== 2)