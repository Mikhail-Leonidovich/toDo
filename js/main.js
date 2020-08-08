const block = document.querySelector(".block");
const btnAdd = document.querySelector(".btn-add");
const btnDone = document.querySelector(".btn-done");
const inputText = document.querySelector(".block__add-text");

let arrayOfTasks = [];

const addNewBlockListElem = () => {
  if (!inputText.value) {
    alert("Вы не заполнили поле");
    return;
  }

  let task = inputText.value;
  arrayOfTasks.push(task);

  let blockList = document.createElement("div");
  blockList.className = "block__list";
  blockList.style = "display: flex";

  let blockListText = document.createElement("div");
  blockListText.className = "block__list-text";
  blockListText.innerHTML = task;
  blockList.append(blockListText);

  let btnDel = document.createElement("button");
  btnDel.className = "btn-del";
  btnDel.innerHTML = "Delete";
  blockList.append(btnDel);

  let btnDone = document.createElement("button");
  btnDone.className = "btn-done";
  btnDone.innerHTML = "Done";
  blockList.append(btnDone);

  block.append(blockList);

  btnDel.addEventListener("click", () => {
    block.removeChild(blockList);
  });

  btnDone.addEventListener("click", () => {
    blockListText.style =
      "text-decoration: line-through; background-color: #98FB98";
  });
};

const clearInputText = () => (inputText.value = "");

inputText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addNewBlockListElem();
    clearInputText();
  }
});

btnAdd.addEventListener("click", () => {
  addNewBlockListElem();
  clearInputText();
});
