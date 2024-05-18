$("#inputTelefone").mask("(99) 9999-99999");

function formatTelefone(telefone) {
    let telefoneStr = telefone.toString();
    return telefoneStr.replace(/(\d{2})(\d{4})(\d{4,5})/, "($1) $2-$3");
}

var alunos = [
    {
        id: 1,
        name: "Eliabe",
        email: "eliabe859@gmail.com",
        telefone: 11951285687,
        curso: 1,
        turno: 2

    },
    {
        id: 2,
        name: "Lais Ribeiro",
        email: "lais.ribeiro@gmail.com",
        telefone: 11951285687,
        curso: 2,
        turno: 1

    },
    {
        id: 3,
        name: "isabelly Ramos",
        email: "iza.ramos@gmail.com",
        telefone: 11951285687,
        curso: 3,
        turno: 3

    },
];

var cursos = [
    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 3, name: "React" }
];

var turnos = [
    { id: 1, name: "Manhã" },
    { id: 2, name: "Tarde" },
    { id: 3, name: "Noite" },
];

loadAlunos();

function loadAlunos() {
    for (let aln of alunos) {
        addNewRow(aln);
    }


}

function addNewRow(aln) {
    var table = document.getElementById("tabelaAlunos");
    var newRow = table.insertRow();

    var idNode = document.createTextNode(aln.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(aln.name)
    newRow.insertCell().appendChild(nameNode)

    var emailNode = document.createTextNode(aln.email)
    newRow.insertCell().appendChild(emailNode)

    var telefoneFormatted = formatTelefone(aln.telefone);
    var telefoneNode = document.createTextNode(telefoneFormatted);
    newRow.insertCell().appendChild(telefoneNode);

    var cursoNode = document.createTextNode(cursos[aln.curso - 1].name)
    newRow.insertCell().appendChild(cursoNode)

    var turno = '';
    
    if (aln.turno==1) {
        turno = "<span class='badge text-bg-warning'>M</span>"
        
    } else {
        if (aln.turno==2) {
            turno = "<span class='badge text-dark bg-orange'>T</span>"
        } else {
            turno = "<span class='badge text-bg-dark'>N</span>"
        }
    }

    console.log(turno)


    var cell = newRow.insertCell();
    cell.innerHTML = turno;



    


}