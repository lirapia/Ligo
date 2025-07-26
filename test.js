function movebtn() {
  
  const movebtn = document.querySelectorAll(".move2");
  const input = document.querySelectorAll(".inputcontroler textarea")
  var move = document.getElementById('move');
  var move2 = document.getElementById('move2');
  const a2 = document.createElement('a');
  movebtn.forEach((mb, i) => {
    input[i].style.visibility = "hidden";
    mb.addEventListener("click", () => {
      
      a2.href = "#" + input[i].id;
      a2.className = 'a2';
      move.appendChild(a2);

      console.log(a2.href);

      console.log(move);
      console.log(input[i].id)
    })
  })
}