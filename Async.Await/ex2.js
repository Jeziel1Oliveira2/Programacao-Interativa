function fun(x) {
    const a = 10
    return new Promise(resolve =>{ resolve(a+x); 
    })
}

function fun2(x) {
    const b = 20
    return new Promise(resolve =>{ resolve(b+x);
    })
};

function fun3(x) {
    const c = 30
    return new Promise(resolve =>{ resolve(c+x);
    })
};

async function ex(n){
    try {
        let numero = await fun(n);
        console.log("10 + ", n," = ",numero);
        numero = await fun2 (numero);
        console.log("20 + 20 = ",numero);
        numero = await fun3 (numero);
        console.log("30 + 40 = ", numero);  
    }
    catch (err) {
        console.log("erro", err)
    }
}

ex(10)

