function insert(num) {
  let val = document.form.textview.value;
  document.form.textview.value = val + num;
  val.length > 8 && back();
}

function back() {
  const exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function clean() {
  document.form.textview.value = '';
}

function equal() {
  const exp = document.form.textview.value;
  exp && (document.form.textview.value = eval(exp));
}
