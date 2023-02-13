const treangle = document.getElementById('treangle');
const context = document.getElementById('context');
treangle.onclick = function () {
  context.classList.toggle('dropdown__visible-context');
  this.classList.toggle('dropdown__treangle-rotate');
};
const question = ['Вопрос в несколько слов', 'Вопрос в несколько букв'];
