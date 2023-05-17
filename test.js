window.onload = function() {
  const cancel = document.getElementById("c");
  const stockDataElements = document.getElementsByClassName("stock-data");
  const OperatorsElements = document.getElementsByClassName("operators");
  const inpTextarea = document.getElementById("inp");


  for (let i = 0; i < stockDataElements.length; i++) {
    stockDataElements[i].addEventListener("click", function() {
      inpTextarea.value += this.innerText;
    });
  }

  for (let i = 0; i < OperatorsElements.length; i++) {
    OperatorsElements[i].addEventListener("click", function() {
      inpTextarea.value += this.innerText;
    });
  }

  cancel.addEventListener("click", function() {
    inpTextarea.value = "";
  });
  
};