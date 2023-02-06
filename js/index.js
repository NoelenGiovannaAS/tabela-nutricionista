var button_input_pacient = document.querySelector(".form-pacients__button");
button_input_pacient.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector(".pacients-form")
    var pacient = get_pacient(form);
    var pacientTr = putTr(pacient);
    var table =  document.querySelector("tbody");
    table.appendChild(pacientTr);
    form.reset();
});


/*
If were a class to input
function putTd(data, name_class) {
   var td = document.createElement("td");
    td.classList.add(name_class);
    td.textContent = data;
    return td;
}*/
function putTd(data) {
    var td = document.createElement("td");
     td.textContent = data;
     return td;
}

function putTr(pacient){
    var pacientTr = document.createElement("tr");
    pacientTr.appendChild(putTd(pacient.name));
    pacientTr.appendChild(putTd(pacient.age));
    pacientTr.appendChild(putTd(pacient.weight));
    pacientTr.appendChild(putTd(pacient.height));
    pacientTr.appendChild(putTd(pacient.imc));
    return pacientTr;
}

