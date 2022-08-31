//      ------ Cached Elements ------
const input = document.getElementById('input');
const btn = document.getElementById('submit-button')
const uList = document.getElementById('todo-list')

btn.addEventListener('click', getList);

function getList(list) {
  const listElement = document.createElement('li')
  // console.log(listElement);
  listElement.textContent = input.value
  uList.appendChild(listElement)
  input.value = ''
}


