const block = document.querySelector(".block");
const btnAdd = document.querySelector(".btn-add");
const inputText = document.querySelector(".block__add-text");

let blockList;
let blockListText;
let btnDel;
let btnDone;

const arrayOfTasks = [];

const addInArrayOfTasks = (elem) => {
  arrayOfTasks.push(elem);
};

const addNewBlockListElem = (elem) => {
  if (!elem && elem == "") {
    alert("Вы не заполнили поле");
    return;
  } else {
    createNewBlockListElem(elem);
  }
};

let createBlockList = () => {
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

  btnDel.addEventListener("click", () => {
    let arrIndex = arrayOfTasks.findIndex(
      (task) => task === blockListText.innerHTML
    );

    arrayOfTasks.splice(arrIndex, 1);
    block.removeChild(blockList);
  });
};

const createBtnDone = () => {
  btnDone = document.createElement("button");
  btnDone.className = "btn-done";
  btnDone.innerHTML = "Done";
  blockList.append(btnDone);

  btnDone.addEventListener("click", () => {
    blockListText.style = "background-color: #98FB98;";
  });
};

const createNewBlockListElem = (elem) => {
  addInArrayOfTasks(elem);

  createBlockList();
  createBlockListText(inputText.value);
  createBtnDel();
  createBtnDone();
};

const clearInputText = () => (inputText.value = "");

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
