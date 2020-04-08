
nome = prompt("Digite seu nome?")
tagh1.innerHTML = ("Nome: ")+ nome
data = prompt("Data de nascimento : ")
idade = prompt("Idade:")
condiçao = confirm("Tem condição pré-existente ?")
if (condiçao == true){
    estado = "Sim"
}
else{
    estado = "Não"
}
lista.innerHTML = `
    <li>Data de Nascimento: ${data} </li>
    <li>Idade: ${idade} </li>
    <li> Tem condição pré-existente: ${estado} </li>
`