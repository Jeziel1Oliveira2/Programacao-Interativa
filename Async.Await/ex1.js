function dobro(n) {
    return new Promise(resolve => {
        setTimeout(_=> resolve (n*2), 5000);
    })
}

async function executar(num){
    try {
        let numero = await dobro(num);       
        console.log("resultado: ", numero);  
    }
    catch (err) {
        console.log("erro: ", err)
    }
}
executar(2)