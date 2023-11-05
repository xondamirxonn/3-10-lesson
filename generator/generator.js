let lastX;
let lastY;


document.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;


  let color = "#" + Math.random().toString(16).slice(2, 10);
  let div = document.createElement("div");
  div.classList.add("rang");
  div.style.display = "block"
  div.style.backgroundColor = color;
  div.style.backgroundColor = color;
  div.style.top = y + "px";
  div.style.left = x + "px";
  document.body.append(div);
  // lastX = x;
  // lastY = y;
});
