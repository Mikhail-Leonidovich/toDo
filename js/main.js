const block = document.querySelector(".block");
const blockNew = document.querySelector(".block__new");

const inputText = document.querySelector(".block__add-text");
const btnAdd = document.querySelector(".btn-add");

const btnDel = document.querySelector(".btn-del");
const btnDone = document.querySelector(".btn-done");
const blockListText = document.querySelector(".block__list-text");

const arrayOfTasks = [];

block.addEventListener("keydown", (e) => {
  if (e.target.matches(".block__add-text")) {
    if (e.keyCode === 13) {
      e.preventDefault();
      addNewBlockListElem(inputText.value);
      clearInputText();
    }
  }
});

block.addEventListener("click", (e) => {
  if (e.target.matches(".btn-add")) {
    addNewBlockListElem(inputText.value);
    clearInputText();
  }
});

const clearInputText = () => {
  inputText.value = "";
};

const addNewBlockListElem = (elem) => {
  if (elem === "") {
    alert("Вы не заполнили поле");
    return;
  } else {
    addInArrayOfTasks(elem);
    displayTask();
  }
};

let counterId = 0;

const addInArrayOfTasks = (elem) => {
  counterId += 1;

  let newToDo = {
    todo: elem,
    checked: false,
    id: counterId,
  };
  arrayOfTasks.push(newToDo);
};

const displayTask = () => {
  while (blockNew.lastChild) {
    blockNew.removeChild(blockNew.lastChild);
  }

  arrayOfTasks.forEach((item, i) => {
    let blockList = document.createElement("div");
    blockList.className = "block__list";
    blockList.id = item.id;
    blockList.style = "display: flex";

    let blockListText = document.createElement("div");
    blockListText.className =
      item.checked === false ? "block__list-text" : "block__list-text done";
    blockListText.innerHTML = item.todo;
    blockListText.id = item.id;
    blockList.append(blockListText);

    let btnDel = document.createElement("button");
    btnDel.className = "btn-del";
    btnDel.innerHTML = "Delete";
    btnDel.id = item.id;
    blockList.append(btnDel);

    let btnDone = document.createElement("button");
    btnDone.className = "btn-done";
    btnDone.innerHTML = "Done";
    btnDone.id = item.id;
    blockList.append(btnDone);

    btnDel.addEventListener("click", () => {
      let allBlockLists = document.querySelectorAll(".block__list");

      for (let elem of allBlockLists) {
        if (btnDel.id === elem.id) {
          elem.remove(this);
          arrayOfTasks.splice(--elem.id, 1);
        }
      }
    });

    btnDone.addEventListener("click", () => {
      let allBlockListTexts = document.querySelectorAll(".block__list-text");

      for (let elem of allBlockListTexts) {
        if (btnDone.id === elem.id) {
          arrayOfTasks.forEach((item) => {
            if (item.id === Number(btnDone.id)) {
              item.checked = !item.checked;
            }
          });

          elem.classList.toggle("done");
        }
      }
    });

    blockNew.append(blockList);
  });
};
