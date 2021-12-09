interface cardProp {
  id: number;
  value: string;
}
interface listProp {
  id: number;
  title: string;
  cards?: cardProp[];
}

const listArray: listProp[] = [
  {
    id: 0,
    title: "list1",
    cards: [],
  },
];

const listContainer = document.querySelector(".list-container");

const initialize = () => {
  createAddListCard();
};

const addNewList = (list: listProp) => {
  const container = document.createElement("div");
  const title = document.createElement("span");
  container.classList.add("card-container");

  title.innerText = list.title;

  container.appendChild(title);
  listContainer.prepend(container);
};

const createAddListCard = () => {
  const container = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const collapseButton = document.createElement("button");
  const saveButton = document.createElement("button");
  const closeButton = document.createElement("button");
  const input = document.createElement("input");
  const placeholder = "Add a list...";

  collapseButton.innerText = placeholder;
  container.classList.add("card-container", "add-list-card", "collapsed");
  buttonContainer.classList.add("hidden");
  input.classList.add("hidden");
  input.placeholder = placeholder;

  saveButton.innerText = "Save";
  closeButton.innerText = "X";

  const handleCollapse = () => {
    container.querySelectorAll(".hidden").forEach((elem) => {
      elem.classList.remove("hidden");
    });
    collapseButton.classList.add("hidden");
    container.classList.remove("collapsed");
  };

  const handleSave = () => {
    const newList: listProp = {
      title: input.value,
      id: listArray.length,
    };
    addNewList(newList);
  };

  const handleClose = () => {
    buttonContainer.classList.add("hidden");
    input.classList.add("hidden");
    container.classList.add("collapsed");
    collapseButton.classList.remove("hidden");
  };

  collapseButton.onclick = handleCollapse;
  saveButton.onclick = handleSave;
  closeButton.onclick = handleClose;

  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(closeButton);

  container.appendChild(input);
  container.appendChild(collapseButton);
  container.appendChild(buttonContainer);
  listContainer.appendChild(container);
};

initialize();
