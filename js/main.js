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

  let blockListText = document.createElement("div");
  blockListText.className = "block__list-text";
  blockListText.innerHTML = inputText.value;
  blockList.append(blockListText);

  let btnDel = document.createElement("button");
  btnDel.className = "btn-del";
  btnDel.innerHTML = "Delete";
  blockList.append(btnDel);

  block.prepend(blockList);

  btnDel.addEventListener("click", () => {
    block.removeChild(blockList);
  });
}

function clearInputText() {
  inputText.value = "";
}

btnAdd.addEventListener("click", () => {
  addNewBlockListElem();
  clearInputText();
});
