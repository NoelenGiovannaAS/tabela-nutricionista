function get_pacient(form) {
    var test = document.getElementById('mood');

    var pacient = {
        name: form.name.value,
        age: form.age.value,
        weight: form.weight.value,
        height: form.height.value,
        sex: form.sex.value,
        mood: form.mood.value,
        imc: calculaImc(form.weight.value, form.height.value)
       // allergy: form.checkbox_allergy.value
    }

    return pacient;
}

function calculaImc(weight, height){
    var imc = 0;
    imc = weight / (height * height);
    return imc.toFixed(2);
}
