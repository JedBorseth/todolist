let todoButton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todo')
let inputarea = document.getElementById('input')

console.log("This Code Was Written And Designed By Jedsen 'Snooks' Borseth")

todoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.classList.add('todojs');
    paragraph.innerText = "-" + inputarea.value;
    todocontainer.appendChild(paragraph);
    inputarea.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph)
    })
})


inputarea.addEventListener("keydown", function(enter) {
    if (enter.keyCode === 13) {
    let paragraph = document.createElement('p')
    paragraph.classList.add('todojs')
    paragraph.innerText = "-" + inputarea.value;
    todocontainer.appendChild(paragraph);
    inputarea.value = ""; }
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"

    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph)
    })
  })