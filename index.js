console.log("Iniciar inscrição...")

//suponhamos que o evento fosse uma semana depois da criação
//desse código (22 de setembro).

var data_evento = (22)

var data_atual = window.prompt("Qual é o dia de hoje?")

if (data_evento > data_atual) {
    var dia_ok = true 
}
    else {
        var dia_ok = false
        window.alert("Cadastro invalidado pela data. Clique em OK para encerrar o programa.")
}
//pede a data para o usuário e verifica se 
//ela está conforme com a data do evento.

if (dia_ok = false) {
   var prosseguir1 = false;
} else {
    var prosseguir1 = true;
}
//impede o programa de continuar caso a data seja inválida.

if (prosseguir1 = true) {
var idade_usuario = window.prompt("Qual é a sua idade?")
var idade_minima = 18
if (idade_usuario >= idade_minima) {
    var prosseguir2 = true;
        } else {
            var prosseguir2 = false
        }
    }
//impede o programa de continuar caso a idade seja insuficiente.

if (prosseguir1 = true , prosseguir2 = true) {
    alert("Idade e data de inscrição válidas!")
    alert("Verificando base de dados para cadastros anteriores...")
}

 


