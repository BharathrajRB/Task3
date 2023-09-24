const Obj = [
  {
    "tag": "div",
    "class": "task-container",
    "children": [
      {
        "tag": "div",
        "class": "progress-bar",
        "style": "width: 30%;"
      },
      {
        "tag": "div",
        "class": "progress-text",
        "textContent": "Task A - 3/10"
      }
    ]
  },
  {
    "tag": "div",
    "class": "task-container",
    "children": [
      {
        "tag": "div",
        "class": "progress-bar",
        "style": "width: 40%;"
      },
      {
        "tag": "div",
        "class": "progress-text",
        "textContent": "Task B - 8/20"
      }
    ]
  }
];

function create(Obj) {
  let ele = document.createElement(Obj.tag);

  if (Obj.class) {
    ele.classList.add(Obj.class);
  }

  if (Obj.textContent) {
    ele.innerText = Obj.textContent;
  }
  if (Obj.children) {
    Obj.children.forEach(item => {
      ele.appendChild(create(item));
    })
  }

  return ele;
}
