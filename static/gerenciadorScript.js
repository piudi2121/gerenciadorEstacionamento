function criarCarro(modelo, ano, dono, tempo) {
    var carro = {}
    carro["modelo"] = modelo
    carro["ano"] = ano
    carro["dono"] = dono
    carro["tempo"]  = tempo

    return carro
}

function addCar() {
    var storageData = localStorage.getItem("carros")

    if(storageData == true && storageData != undefined){
        var carros = JSON.parse(storageData)

        let modelo = document.getElementById("modelo").value
        let ano = document.getElementById("ano").value
        let dono = document.getElementById("dono").value
        let tempo =  document.getElementById("tempo").value

        carros.push(criarCarro(modelo, ano, dono, tempo))
        localStorage.setItem("carros", JSON.stringify(carros))
        console.log(carros)
    } else {
        var carros = []
    
        let modelo = document.getElementById("modelo").value
        let ano = document.getElementById("ano").value
        let dono = document.getElementById("dono").value
        let tempo =  document.getElementById("tempo").value

        carros.push(criarCarro(modelo, ano, dono, tempo))
        localStorage.setItem("carros", JSON.stringify(carros))
        console.log(carros)
    }
}

function remCar() {
    var dono = document.getElementById("donoRem").value

    var storageData = localStorage.getItem("carros")

    if(storageData){
        var carros = JSON.parse(storageData)
        var index = undefined;

        for(var i = 0; i < carros.length; i++){
            if(carros[i]["dono"] == dono){
                index = i
            }
        }

        if(index != undefined){
            carros.splice(index, 1)
        }

        console.log(carros)
    }

    localStorage.setItem("carros", JSON.stringify(carros))
}

function printCar() {
    var carros = localStorage.getItem('carros')

    if(carros == true && carros != undefined){
        var div = document.createElement('div')
        var stringhtml;
        for(var i = 0; i < carros.length; i++){
            for(atributos in carro){
                console.log(atributos + "\n")
            }
        }
    }
    else {
        console.log("not found")
    }
}

function clearCar() {
    localStorage.clear()
}