var conv = document.querySelector(".convertcoin");

conv.onsubmit = function (e) {
  e.preventDefault();
  var amount = document.querySelector(".amount").value;
  var optine = document.querySelector(".select").value;
  console.log(optine);

  if (optine == "dollar") {
    var result = amount * 0.27;
    document.querySelector(".result").innerHTML = result;
  } else if (optine == "dinar") {
    var result = amount * 0.19;
    document.querySelector(".result").innerHTML = result;
  } else if (optine == "nis") {
    var result = amount;
    document.querySelector(".result").innerHTML = result;
  }
}
