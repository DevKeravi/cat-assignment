var listArray = [
    {
        id: 0,
        title: "list1",
        cards: []
    },
];
var listContainer = document.querySelector(".list-container");
var initialize = function () {
    createAddListCard();
};
var addNewList = function (list) {
    var container = document.createElement("div");
    var title = document.createElement("span");
    container.classList.add("card-container");
    title.innerText = list.title;
    container.appendChild(title);
    listContainer.prepend(container);
};
var createAddListCard = function () {
    var container = document.createElement("div");
    var buttonContainer = document.createElement("div");
    var collapseButton = document.createElement("button");
    var saveButton = document.createElement("button");
    var closeButton = document.createElement("button");
    var input = document.createElement("input");
    var placeholder = "Add a list...";
    collapseButton.innerText = placeholder;
    container.classList.add("card-container", "add-list-card", "collapsed");
    buttonContainer.classList.add("hidden");
    input.classList.add("hidden");
    input.placeholder = placeholder;
    saveButton.innerText = "Save";
    closeButton.innerText = "X";
    var handleCollapse = function () {
        container.querySelectorAll(".hidden").forEach(function (elem) {
            elem.classList.remove("hidden");
        });
        collapseButton.classList.add("hidden");
        container.classList.remove("collapsed");
    };
    var handleSave = function () {
        var newList = {
            title: input.value,
            id: listArray.length
        };
        addNewList(newList);
    };
    var handleClose = function () {
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
