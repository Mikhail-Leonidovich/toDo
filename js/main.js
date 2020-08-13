const block = document.querySelector(".block");
const blockNew = document.querySelector(".block__new");

const inputText = document.querySelector(".block__add-text");
const btnAdd = document.querySelector(".btn-add");

const btnDel = document.querySelector(".btn-del");
const btnDone = document.querySelector(".btn-done");

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
  if (elem == "") {
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

const displayTask = () => {
  let blockNewInner = "";

  arrayOfTasks.forEach((item, i) => {
    blockNewInner += `
    <div class="block__list" style="display : flex">
            <div id="#${i + 1}" class="block__list-text">${item.todo}</div>
            <button class="btn-del">Delete</button>
            <button class="btn-done">Done</button>
    </div>
    `;
  });

  blockNew.innerHTML = blockNewInner;
};
