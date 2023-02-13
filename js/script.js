const treangle = document.getElementById('treangle');
const context = document.getElementById('context');
const dropdown = document.getElementById('dropdown');
treangle.onclick = function () {
  context.classList.toggle('dropdown__visible-context');
  this.classList.toggle('dropdown__treangle-rotate');
};
