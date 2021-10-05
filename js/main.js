const exp = document.form.textview.value;

function insert(num) {
  let val = document.form.textview.value;
  document.form.textview.value = val + num;
  val.length > 8 && back();
}

function back() {
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function clean() {
  document.form.textview.value = '';
}

function equal() {
  exp && (document.form.textview.value = eval(exp));
}
