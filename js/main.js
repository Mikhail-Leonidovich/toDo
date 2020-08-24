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

let tasks = [];
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
  tasks.push(newToDo);
};

const displayTasks = () => {
  tasksList.innerHTML = "";

  if (showChecked) {
    switchShowIncompleted = tasks.filter(
      (item) => item.checked === !showChecked
    );
  } else {
    switchShowIncompleted = [...tasks];
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

const handleDel = (btnDel) => {
  tasks = tasks.filter((item) => item.id != btnDel.id);
  btnDel.parentNode.remove();
};

const generateBtnDel = (item) => {
  let btnDel = document.createElement("button");
  btnDel.className = "btn-del";
  btnDel.innerHTML = "Delete";
  btnDel.id = item.id;

  btnDel.addEventListener("click", () => {
    handleDel(btnDel);
  });

  return btnDel;
};

const handleDone = (btnDone) => {
  let currentTask = btnDone.parentNode.firstChild;

  const task = tasks.find((item) => Number(item.id) === Number(currentTask.id));
  task.checked = !task.checked;
  currentTask.classList.toggle("done");
};

const generateBtnDone = (item) => {
  let btnDone = document.createElement("button");
  btnDone.className = "btn-done";
  btnDone.innerHTML = "Done";
  btnDone.id = item.id;

  btnDone.addEventListener("click", () => {
    handleDone(btnDone);
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
  let allTaskTexts = document.querySelectorAll(".text");
  let filterTasksValue = filterTasks.value.toLowerCase();

  for (let elem of allTaskTexts) {
    taskTextValue = elem.innerHTML.toLowerCase().includes(filterTasksValue);
    if (!taskTextValue && filterTasksValue != "") {
      elem.parentNode.classList.add("hide");
    } else elem.parentNode.classList.remove("hide");
  }
});
