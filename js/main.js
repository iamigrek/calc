function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
  var max = document.form.textview.value;
  if (max.length > 9) {
    back();
  }
}

function clean() {
  document.form.textview.value = '';
  var max = document.form.textview.value;
}

function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
  var max = document.form.textview.value;
}

function equal() {
  var exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}
