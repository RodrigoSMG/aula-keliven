let frutas = ["maça,banana,laranja,"]
console.log(frutas)

frutas.push("morango" , "manga")
console.log(frutas)
frutas.pop()
console.log(frutas)

frutas.shift()

console.log(frutas)

frutas.unshift("manga","abacaxi")
console.log(frutas)

frutas = frutas.map(elemento => elemento + "s")
console.log(frutas)
frutas = frutas.map(elemento =>elemento.replace('morangos', 'tangerina'))
console.log(frutas)

frutas.forEach(elemento =>{
console.log(elemento)
})

var frutasFilter = frutas.filter(elemento => elemento.length > 6)
console.log(frutas)
console.log(frutasFilter)

var frutasReduce = frutas.reduce((elementosAcumulados, elemento) =>
elementosAcumulados + elemento)
console.log(frutasReduce)
