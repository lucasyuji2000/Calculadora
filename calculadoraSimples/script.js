function insert(num) {
    document.form.text.value = document.form.text.value+num;
}

function set() {
    document.form.text.value = "";
}

function back() {
    let x = document.form.text.value
    document.form.text.value = x.substring(0,x.length-1)
}

function equal() {
    let x = document.form.text.value;
    console.log(x)
    if (x) {
        document.form.text.value = eval(x);
    }
}