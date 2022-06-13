const text = document.querySelector(".text_box input[type='text'");

textbutton = document.querySelector(".btn");
const todo_list = document.querySelector(".todo_list");

textbutton.addEventListener("click", () => {
  const addtext = text.value;
  if (addtext.length == 0) {
    alert("Please Add Your ToDo");
  } else {
    const newhtml = `<span class="list_text"> ${addtext}</span>
  <button class="remove listbtn">remove</button>
  <button class="done listbtn">done</button>`;

    const newli = document.createElement("li");

    newli.innerHTML = newhtml;
    todo_list.append(newli);
    text.value = "";
  }
});

todo_list.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode;
    liSpan.style.textDecoration = "line-through";
  }
});
