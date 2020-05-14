//dom inputs
//prices els
const price1 = document.querySelector("#price1");
const price2 = document.querySelector("#price2");
const price3 = document.querySelector("#price3");
const price4 = document.querySelector("#price4");

//qEls
const q1El = document.querySelector("#q1");
const q2El = document.querySelector("#q2");
const q3El = document.querySelector("#q3");
const q4El = document.querySelector("#q4");

//results
const res1El = document.querySelector("#res1");
const res2El = document.querySelector("#res2");
const res3El = document.querySelector("#res3");
const res4El = document.querySelector("#res4");

//buttonEl
let button = document.querySelector("#btn-reset");

//domArrays
let pricesEls = [price1, price2, price3, price4];
let qEls = [q1El, q2El, q3El, q4El];
let resultsEls = [res1El, res2El, res3El, res4El];

//buttonHandler -reset action
button.addEventListener("click", function (e) {
  function resetData(data) {
    data.forEach((dataItem) => {
      dataItem.textContent = "";
      if ((dataItem.tagName = "INPUT")) {
        dataItem.value = "";
      }
    });
  }

  resetData(pricesEls);
  resetData(qEls);
  resetData(resultsEls);
});

qEls.forEach((q, index) => {
  q.addEventListener("keyup", function (e) {
    resultsEls.forEach((r, i) => {
      if (index === i) {
        r.textContent =
          String(pricesEls[i].valueAsNumber / e.target.valueAsNumber) == "NaN"
            ? 0
            : pricesEls[i].valueAsNumber / e.target.valueAsNumber.toFixed(2);
      }
    });
  });
});

pricesEls.forEach((product, index) => {
  product.addEventListener("keyup", function (e) {
    resultsEls.forEach((r, i) => {
      if (index === i) {
        r.textContent =
          String(e.target.valueAsNumber / qEls[i].valueAsNumber) == "NaN"
            ? 0
            : e.target.valueAsNumber / qEls[i].valueAsNumber.toFixed(2);
      }
    });
  });
});
