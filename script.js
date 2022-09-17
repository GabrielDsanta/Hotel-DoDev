



let hotelName = []
let hotelID = []
let hotelRank = []
let hotelAddress = []
let hotelTel = []

let reserveID = []
let reserveIDHotel = []
let reserveName = []
let reserveEntry = []
let reserveOut = []


let choice = true
let choice2


do{
    choice2 = prompt("1 /// Cadastrar Hotel /// 2 Reservar Hotel /// Enter para avançar")

    switch(choice2){
        case "1":
        cadastroHotel()
        break;

        case "2":
        reserveHotel()
        break;
    }

    choice2 = prompt("1 /// Ver Reservas por ID do Hotel /// 2 Consultar sua reserva por ID /// 3 Consultar Reserva por Nome /// 4 Visualizar hoteis por categoria /// 5 Atualizar telefone /// 6 Sair Do Hotel /// 7 Enter para Voltar")

    switch(choice2){
        case "1":
        ShowReserveByID(hotelID)
        break;

        case "2":
        ShowMyReserveByID(reserveID)
        break;

        case "3":
        ShowAllReservesByName(reserveName)
        break;

        case "4":
        ShowAllHotelsByCategory(hotelRank)
        break;

        case "5":
        ChangeTel(hotelID)
        break;

        case "6":
            choice = false
        break;
    }


}while(choice)

function cadastroHotel(){
    hotelName.push(prompt("Cadastre o nome do Hotel"))
    hotelID.push(prompt("Cadastre o ID do Hotel"))
    hotelRank.push(prompt("Cadastre a Categoria de 1 ~ 5 do Hotel"))
    hotelAddress.push(prompt("Cadastre o Endereço do Hotel"))
    hotelTel.push(prompt("Cadastre o Telefone do Hotel"))
}

function reserveHotel(){
    reserveID.push(prompt("Qual o ID da Reserva ?"))
    reserveIDHotel.push(prompt("Qual o ID do Hotel que você quer Reservar ?"))
    reserveName.push(prompt("Qual o seu Nome ?"))
    reserveEntry.push(prompt("Qual o dia de Entrada ?"))
    reserveOut.push(prompt("Qual o dia de Saída ?"))
}

function ShowReserveByID(id){
    id = Number(prompt("Qual o ID do Hotel ?"))

    hotelID.forEach(VerificateReserve)

    if(VerificateReserve == false){
        return alert("ID não cadastrado")
    }

    function VerificateReserve(item, index){
        if(item == id){
            alert(`O Hotel ${hotelName[index]} já está reservado por: ${reserveName[index]} dos dias ${reserveEntry[index]} á ${reserveOut[index]}`)
            return VerificateReserve = true
        }
    }

}

function ShowMyReserveByID(id){
    id = Number(prompt("Qual o seu ID de Reserva ?"))

    reserveID.forEach(VerificateReserveID)

    if(VerificateReserveID == false){
        return alert("ID de Reserva não cadastrado")
    }

    function VerificateReserveID(item, index){
        if(item == id){
            alert(`Hotel:${hotelName[index]}, Endereço:${hotelAddress[index]}, Entrada:${reserveEntry[index]}, Saída:${reserveOut[index]}`)
            return VerificateReserveID = true
        }
    }
}

function ShowAllReservesByName(name){
    let reservas = []

    name = prompt("Digite um nome")

    reserveName.forEach(ShowReserves)

    if(ShowReserves == false){
        return alert("Nome não encontrado")
    }

    function ShowReserves(item, index){
        if(item == name){
            reservas.push(hotelName[index])
            return ShowReserves = true
        }
    }

    return alert(`${name} possui reservas nos Hotéis: ${reservas}`)
}

function ShowAllHotelsByCategory(rank){
    let hotels = []

    rank = prompt("Qual o Rank de hotel você quer ver ?")

    hotelRank.forEach(ShowHotels)

    if(ShowHotels == false){
        return alert("Nenhum Hotel encontrado nessa categoria")
    }

    function ShowHotels(item, index){
        if(item == rank){
            hotels.push(hotelName[index])
            return ShowHotels = true
        }
    }

    return alert(`No Rank ${rank} possui os Hotéis: ${hotels}`)
}

function ChangeTel(id, telefone){ 
    id = prompt("Qual o ID do Hotel ?")

    hotelID.forEach(FindID)

    if(FindID == false){
        return alert(`ID não registrado`)
    }

    function FindID(item, index){
        telefone = prompt("Digite o novo telefone")
        
        if(id == item){
            hotelTel[index] = telefone
            return FindID = true
        }
    }

    return alert(`Telefone atualizado com sucesso !`)
}