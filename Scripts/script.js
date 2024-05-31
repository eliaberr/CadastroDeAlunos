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
/*onsubmit="save(); return false;"*/


function save(){

    var turnoDoAluno = 0
    var turnoManha = document.getElementById("gridRadios1").checked;
    var turnoTarde = document.getElementById("gridRadios2").checked;
  
    if(turnoManha == true) {
        turnoDoAluno = 1
    }else{
        if(turnoTarde == true) {
            turnoDoAluno = 2
        } else {
            turnoDoAluno = 3
        }
    };
    
    curso = document.getElementById("selectCursos").value,

    
    console.log(curso);
    console.log(turnoDoAluno);

    var aln = {
        id: alunos.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        telefone: document.getElementById("inputTelefone").value,
        curso: document.getElementById("selectCursos").value,
        turno: turnoDoAluno,
    };
    /*console.log(aln.id);
    console.log(aln.name);
    console.log(aln.email);
    console.log(aln.telefone);
    console.log(aln.cursos);
    console.log(aln.turno);
*/
    addNewRow(aln);
    alunos.push(aln);

   
    document.getElementById("formAluno").reset()
    

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
    
    console.log(cursos[aln.curso - 1].name)

    var cursoNode = document.createTextNode(cursos[aln.curso - 1].name);
    newRow.insertCell().appendChild(cursoNode)

    console.log(cursoNode)

    var turno = '';

    if (aln.turno == 1) {
        turno = "<span class='badge text-bg-warning'>M</span>"

    } else {
        if (aln.turno == 2) {
            turno = "<span class='badge text-dark bg-orange'>T</span>"
        } else {
            turno = "<span class='badge text-bg-dark'>N</span>"
        }
    }

    
    


    var cell = newRow.insertCell();
    cell.innerHTML = turno;

}

