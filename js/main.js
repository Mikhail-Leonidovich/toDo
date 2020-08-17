const block = document.querySelector(".block");
const blockNew = document.querySelector(".block__new");

const inputText = document.querySelector(".block__add-text");
const btnAdd = document.querySelector(".btn-add");

const btnDel = document.querySelector(".btn-del");
const btnDone = document.querySelector(".btn-done");
const blockListText = document.querySelector(".block__list-text");

const incompletedTasks = document.getElementById("1");

let arrayOfTasks = [];
let arrayOfIncompletedTasks = [];

let counterId = 0;

let showChecked = false;

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

const clearInputText = () => {
  inputText.value = "";
};

const addNewBlockListElem = (elem) => {
  if (elem === "") {
    alert("Вы не заполнили поле");
    return;
  } else {
    addInArrayOfTasks(elem);
    displayTasks();
    /*  CheckIncompletedTasks(); */
  }
};

const addInArrayOfTasks = (elem) => {
  counterId += 1;

  let newToDo = {
    todo: elem,
    checked: false,
    id: counterId,
  };
  arrayOfTasks.push(newToDo);
};

const displayTasks = () => {
  while (blockNew.lastChild) {
    blockNew.removeChild(blockNew.lastChild);
  }

  arrayOfIncompletedTasks = [...arrayOfTasks];
  if (showChecked)
    arrayOfIncompletedTasks = arrayOfTasks.filter(
      (item) => item.checked === showChecked
    );

  arrayOfIncompletedTasks.forEach((item) => {
    let blockList = document.createElement("div");
    blockList.className = "block__list";
    blockList.id = item.id;

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
        if (Number(btnDel.id) === Number(elem.id)) {
          elem.remove(this);
          let itemIndex = arrayOfTasks.findIndex(
            (item) => Number(item.id) === Number(elem.id)
          );
          arrayOfTasks.splice(itemIndex, 1);
        }
      }
    });

    btnDone.addEventListener("click", () => {
      let allBlockListTexts = document.querySelectorAll(".block__list-text");

      for (let elem of allBlockListTexts) {
        if (Number(btnDone.id) === Number(elem.id)) {
          arrayOfTasks.forEach((item) => {
            if (Number(item.id) === Number(btnDone.id)) {
              item.checked = !item.checked;
            }
          });
          elem.classList.toggle("done");
        }
      }
      arrayOfIncompletedTasks = [];
      /* CheckIncompletedTasks(); */
    });

    blockNew.append(blockList);
  });
};
/* убрать и переделать */

/* const CheckIncompletedTasks = () => {
  arrayOfIncompletedTasks = [];
  let obj = arrayOfTasks.filter((item) => {
    return item.checked === false;
  });
  arrayOfIncompletedTasks.push(obj);
}; */

incompletedTasks.addEventListener("click", () => {
  let allBlockLists = document.querySelectorAll(".block__list");

  arrayOfTasks.forEach((item) => {
    for (let elem of allBlockLists) {
      if (Number(item.id) === Number(elem.id) && item.checked === true) {
        elem.classList.toggle("hide");
      }
    }
  });

  /* arrayOfTasks.forEach((item) => {
    if (item.checked === true) {
      let allBlockLists = document.querySelectorAll(".block__list");
      for (let elem of allBlockLists) {
        if (item.id === Number(elem.id)) {
          elem.classList.toggle("hide");
        }
      }
    }
  }); */
});
