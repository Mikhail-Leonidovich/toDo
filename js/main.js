const block = document.querySelector(".block");
const btnAdd = document.querySelector(".btn-add");
const inputText = document.querySelector(".block__add-text");
const blockList = document.querySelector(".block__list");
const blockListText = document.querySelector(".block__list-text");
const btnDel = document.querySelector(".btn-del");
const btnDone = document.querySelector(".btn-done");

const arrayOfTasks = [];

const addNewBlockListElem = (elem) => {
  if (!elem && elem == "") {
    alert("Вы не заполнили поле");
    return;
  } else {
    addInArrayOfTasks(elem);
    displayTask();
  }
};

const addInArrayOfTasks = (elem) => {
  let newToDo = {
    todo: elem,
    checked: false,
  };
  arrayOfTasks.push(newToDo);
};

/* ДОДЕЛАТЬ */

const displayTask = () => {
  arrayOfTasks.forEach((item, i) => {
    block.innerHTML += `
    <div class="block__list" style="display : flex">
            <div id="#${i}" class="block__list-text">${item.todo}</div>
            <button class="btn-del">Delete</button>
            <button class="btn-done">Done</button>
    </div>
    `;
  });
};

inputText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addNewBlockListElem(inputText.value);
    clearInputText();
  }
});

btnAdd.addEventListener("click", () => {
  addNewBlockListElem(inputText.value);
  clearInputText();
});

const clearInputText = () => (inputText.value = "");
