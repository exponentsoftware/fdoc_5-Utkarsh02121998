var sample = [1, 2, 3];

sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})

sample.forEach((elem, index) => `${elem} comes at ${index}`)