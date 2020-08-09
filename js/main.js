const block = document.querySelector(".block");
const btnAdd = document.querySelector(".btn-add");
const inputText = document.querySelector(".block__add-text");
const blockList = document.querySelector(".block__list");
const blockListText = document.querySelector(".block__list-text");
const btnDel = document.querySelector(".btn-del");
const btnDone = document.querySelector(".btn-done");

const arrayOfTasks = [];

/* let createBlockList = () => {
  blockList = document.createElement("div");
  blockList.className = "block__list";
  blockList.style = "display: flex";
  block.append(blockList);
};

const createBlockListText = (elem) => {
  blockListText = document.createElement("div");
  blockListText.className = "block__list-text";
  blockListText.innerHTML = elem;
  blockList.append(blockListText);
};

const createBtnDel = () => {
  btnDel = document.createElement("button");
  btnDel.className = "btn-del";
  btnDel.innerHTML = "Delete";
  blockList.append(btnDel);
};

const createBtnDone = () => {
  btnDone = document.createElement("button");
  btnDone.className = "btn-done";
  btnDone.innerHTML = "Done";
  blockList.append(btnDone);
}; */

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

const displayTask = () => {};

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
