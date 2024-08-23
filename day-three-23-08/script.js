console.log("connected");

const element = document.getElementById("heading-one");

const btn = document.getElementById("button");

const emptyDiv = document.getElementById("division");

btn.addEventListener("click", () => {
  element.innerText = "New Heading";

  emptyDiv.innerHTML = `<div>HELLO</div>`;
});
