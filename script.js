var but01 = document.getElementById("col01");
var but02 = document.getElementById("col02");
var backGstyle = document.getElementById("current_grad");
var deg_grad = document.getElementById("deg");
var css_param = document.getElementsByClassName("centr param_update");
var col_text = document.getElementsByClassName("txt_inv");

function page_edit(variable) {
    variable.addEventListener("input", function() {
        backGstyle.style.background = "linear-gradient(" + Number(deg_grad.value) + "deg, " + but01.value + ", " + but02.value + ") no-repeat fixed";
        css_param[0].textContent = "linear-gradient(" + Number(deg_grad.value) + "deg, " + but01.value + ", " + but02.value + ") no-repeat fixed";
        col_text[0].style.color = but01.value;
        col_text[1].style.color = but01.value;
        col_text[3].style.color = but01.value;
        col_text[4].style.color = but01.value;
    })
}

page_edit(but01);
page_edit(but02);
page_edit(deg_grad);

//deg_grad.addEventListener("mouseenter", function() {console.log(deg_grad.value);})
//but01.addEventListener("mouseenter", function() {console.log("sei passato sopra il colore 01");})
//but02.addEventListener("mouseenter", function() {console.log("sei passato sopra il colore 02");})
//css_param.addEventListener("mouseenter", function() {console.log("sei passato sopra la scheda parametri");})

//onclick & oninput --- mettendo "oninput="nome_funzione(argomento)" tra gli attributi dell'elemento html saremmo riusciti ad ottenere lo stesso risultato senza invocare la funzione sul foglio js "page_edit(but01)" 🤙. 