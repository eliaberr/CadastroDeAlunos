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
        name: "Computador M2-TX",
        email: "Intel I7, 32GB, SSD 512, HD 1T",
        telefone: 11951285687,
        curso: 2,
        turno: 2

    },
    {
        id: 3,
        name: "Computador M1-T",
        email: "Intel I5, 16GB, HD 1T",
        telefone: 11951285687,
        curso: 3,
        turno: 2

    },
];

var cursos = [
    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 3, name: "React" }
];

var tunos = [
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

function addNewRow(aln){
    var table = document.getElementById("tableAlunos");
    var newRow = table.insertRow();

    var idNode = document.createTextNode(aln.id);
    newRow.insertCell().appentChild(idNode);

    console.log(idNode)
}
