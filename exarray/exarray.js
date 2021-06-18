let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]
console.log(filmes.join())
console.log("Filme bom:", filmes[1])
let novofilme = filmes.unshift("vingadores")
console.log(filmes.join())
let excluirfilme = filmes.shift()
console.log(filmes.join())
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]
console.log(cartoons.join())
let excluircartoons = cartoons.pop()
console.log(cartoons.join())

function juntar(texto1, texto2) {
    return(filmes + "," + cartoons)
   
}
console.log(juntar(filmes, cartoons))
