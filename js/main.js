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

  /* КОСТЫЛЬ */

  arrayOfTasks.forEach((item, i) => {
    if (item.checked == false) {
      blockNewInner += `
      <div id="${i + 1}" class="block__list" style="display : flex">
              <div id="${i + 1}" class="block__list-text">${item.todo}</div>
              <button id="${i + 1}" class="btn-del">Delete</button>
              <button id="${i + 1}" class="btn-done">Done</button>
      </div>`;
    } else if (item.checked == true) {
      blockNewInner += `
      <div id="${i + 1}" class="block__list" style="display : flex">
              <div id="${
                i + 1
              }" class="block__list-text" style="background-color: rgb(106, 224, 106)">${
        item.todo
      }</div>
              <button id="${i + 1}" class="btn-del">Delete</button>
              <button id="${i + 1}" class="btn-done">Done</button>
      </div>`;
    }
  });

  blockNew.innerHTML = blockNewInner;
};

block.addEventListener("click", (e) => {
  if (e.target.matches(".btn-del")) {
    let currentBtnDel = e.target.id;

    arrayOfTasks.forEach((item, i) => {
      if (i == currentBtnDel - 1) {
        /* arrayOfTasks.splice(i, 1); */

        delete arrayOfTasks[i]; /* КОСТЫЛЬ */

        let allBlockLists = document.querySelectorAll(".block__list");

        for (let element of allBlockLists) {
          if (element.id == currentBtnDel) {
            element.remove(this);
          }
        }
      }
    });
  } else if (e.target.matches(".btn-done")) {
    let currentBtnDone = e.target.id;

    let allBlockListTexts = document.querySelectorAll(".block__list-text");

    for (let element of allBlockListTexts) {
      if (element.id == currentBtnDone) {
        element.style = "background-color: rgb(106, 224, 106)";
        arrayOfTasks[currentBtnDone - 1].checked = true;
      }
    }
  }
});
