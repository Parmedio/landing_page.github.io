const but01 = document.getElementById("col01");
const but02 = document.getElementById("col02");
const backGstyle = document.getElementById("current_grad");
const deg_grad = document.getElementById("deg");
const css_param = document.getElementsByClassName("centr param_update");
const col_text = document.getElementsByClassName("txt_inv");

const page_edit = (variable) => {
    variable.addEventListener("input", function() {
        a = "linear-gradient(" + Number(deg_grad.value) + "deg, " + but01.value + ", " + but02.value + ") no-repeat fixed";
        backGstyle.style.background = a
        css_param[0].textContent = a
        var list_text = [0, 1, 3, 4];
        const paint_all = (iterable) => {
            for (const x of iterable) {
                col_text[x].style.color = but01.value
            }
        }
        paint_all(list_text)
    })
}

page_edit(but01);
page_edit(but02);
page_edit(deg_grad);
