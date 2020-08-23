const block = document.querySelector(".block");
const tasksList = document.querySelector(".tasks__list");

const inputText = document.querySelector(".block__add-text");
const btnAdd = document.querySelector(".btn-add");

const btnDel = document.querySelector(".btn-del");
const btnDone = document.querySelector(".btn-done");
const taskText = document.querySelector(".text");

const incompletedTasks = document.getElementById("1");
const burgerFilter = document.getElementById("2");
const filterTasks = document.querySelector(".burger-menu__filter");

let Tasks = [];
let switchShowIncompleted = [];

let counterId = 0;

let showChecked = false;

inputText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    addNewTasksItemElem(inputText.value);
    clearInputText();
  }
});

btnAdd.addEventListener("click", () => {
  addNewTasksItemElem(inputText.value);
  clearInputText();
});

const clearInputText = () => {
  inputText.value = "";
};

const addNewTasksItemElem = (elem) => {
  if (elem === "") {
    alert("Вы не заполнили поле");
    return;
  } else {
    addInTasks(elem);
    displayTasks();
  }
};

const addInTasks = (elem) => {
  counterId += 1;

  let newToDo = {
    todo: elem,
    checked: false,
    id: counterId,
  };
  Tasks.push(newToDo);
};

const displayTasks = () => {
  tasksList.innerHTML = "";

  if (showChecked) {
    switchShowIncompleted = Tasks.filter(
      (item) => item.checked === !showChecked
    );
  } else {
    switchShowIncompleted = [...Tasks];
  }

  switchShowIncompleted.forEach((item) => {
    let tasksItem = document.createElement("div");
    tasksItem.className = "tasks__item";
    tasksItem.id = item.id;
    tasksList.append(tasksItem);

    tasksItem.append(generateTaskText(item));

    tasksItem.append(generateBtnDel(item));

    tasksItem.append(generateBtnDone(item));
  });
};

const generateTaskText = (item) => {
  let taskText = document.createElement("div");
  taskText.className = item.checked === false ? "text" : "text done";
  taskText.innerText = item.todo;
  taskText.id = item.id;

  return taskText;
};

const generateBtnDel = (item) => {
  let btnDel = document.createElement("button");
  btnDel.className = "btn-del";
  btnDel.innerHTML = "Delete";
  btnDel.id = item.id;

  btnDel.addEventListener("click", () => {
    Tasks = Tasks.filter((item) => item.id != btnDel.parentNode.id);

    btnDel.parentNode.remove();
  });

  return btnDel;
};

const generateBtnDone = (item) => {
  let btnDone = document.createElement("button");
  btnDone.className = "btn-done";
  btnDone.innerHTML = "Done";
  btnDone.id = item.id;

  btnDone.addEventListener("click", () => {
    let currentTask = btnDone.parentNode.firstChild;

    Tasks.forEach((item) => {
      if (Number(currentTask.id) === Number(item.id)) {
        item.checked = !item.checked;
        currentTask.classList.toggle("done");
      }
    });
  });

  return btnDone;
};

incompletedTasks.addEventListener("click", () => {
  showChecked = !showChecked;
  displayTasks();
});

burgerFilter.addEventListener("click", () => {
  filterTasks.classList.toggle("hide");
});

filterTasks.addEventListener("input", () => {
  let allBlockLists = document.querySelectorAll(".block__list");
  let filterTasksValue = filterTasks.value.toLowerCase();
  if (filterTasksValue != "") {
    Tasks.forEach((item) => {
      let arrayItem = item.todo.toLowerCase().includes(filterTasksValue);
      if (arrayItem) {
        for (let elem of allBlockLists) {
          if (Number(item.id) === Number(elem.id)) {
            elem.classList.remove("hide");
          }
        }
      } else {
        for (let elem of allBlockLists) {
          if (Number(item.id) === Number(elem.id)) {
            elem.classList.add("hide");
          }
        }
      }
    });
  } else {
    Tasks.forEach((item) => {
      for (let elem of allBlockLists) {
        if (Number(item.id) === Number(elem.id)) {
          elem.classList.remove("hide");
        }
      }
    });
  }
});
