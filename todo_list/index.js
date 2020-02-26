const input = document.getElementById('i_task')
const btn = document.getElementById('add_task')
const list = document.getElementById('list')

btn.onclick = addItem

function addItem() {
    const newItem = listItem();
    list.appendChild(newItem)
    input.value = ''
}

function listItem() {
    const listItem = document.createElement('li')
    const label = document.createElement('label')

    label.innerText = input.value
    listItem.appendChild(label) 

    return listItem
}