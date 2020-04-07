
nome = prompt("Digite seu nome?")
tagh1.innerHTML = ("Nome: ")+ nome
data = prompt("Data de nascimento : ")
idade = prompt("Idade:")
condiçao = ("Tem condição pré-existente ?")
lista.innerHTML = `
    <li>Data de Nascimento: ${data} </li>
    <li>Idade: ${idade} </li>
    <li> Tem condição pré-existente: ${condiçao} </li>
`