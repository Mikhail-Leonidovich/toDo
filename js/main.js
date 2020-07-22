let block = document.querySelector(".block");
let btnAdd = document.querySelector(".btn-add");
let inputText = document.querySelector(".block__add-text");

function addNewBlockListElem() {
  if (!inputText.value) {
    alert("Вы не заполнили поле");
    return;
  }

  let blockList = document.createElement("div");
  blockList.className = "block__list";
  blockList.style = "display: flex";

  let blockListText = document.createElement("div");
  blockListText.className = "block__list-text";
  blockListText.innerHTML = inputText.value;
  blockList.append(blockListText);

  let btnDel = document.createElement("button");
  btnDel.className = "btn-del";
  btnDel.innerHTML = "Delete";
  blockList.append(btnDel);

  block.append(blockList);

  btnDel.addEventListener("click", () => {
    block.removeChild(blockList);
  });
}

function clearInputText() {
  inputText.value = "";
}

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
