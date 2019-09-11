var nums = [];
var opperator;

function clickMe() {
  if (this.value == "1") {
    display.value = display.value + "1";
  } else if (this.value == "2") {
    display.value = display.value + "2";
  } else if (this.value == "3") {
    display.value = display.value + "3";
  } else if (this.value == "4") {
    display.value = display.value + "4";
  } else if (this.value == "5") {
    display.value = display.value + "5";
  } else if (this.value == "6") {
    display.value = display.value + "6";
  } else if (this.value == "7") {
    display.value = display.value + "7";
  } else if (this.value == "8") {
    display.value = display.value + "8";
  } else if (this.value == "9") {
    display.value = display.value + "9";
  } else if (this.value == "0") {
    display.value = display.value + "0";
  }
  /*Plus*/
  else if (this.value == "+" && display.value != "") {
    nums.push(display.value);
    opperator = "plus";
    console.log(nums);
    console.log(opperator);
    display.value = "";
  }
  /*Minus*/
  else if (this.value == "-" && display.value != "") {
    nums.push(display.value);
    opperator = "minus";
    console.log(nums);
    console.log(opperator);
    display.value = "";
  }
  /*Times*/
  else if (this.value == "x" && display.value != "") {
    nums.push(display.value);
    opperator = "times";
    console.log(nums);
    console.log(opperator);
    display.value = "";
  }
  /*Divide*/
  else if (this.value == "/" && display.value != "") {
    nums.push(display.value);
    opperator = "divide";
    console.log(nums);
    console.log(opperator);
    display.value = "";
  }
  /*Add Equals*/
  else if (this.value == "=" && opperator == "plus" && display.value != "=") {
    nums.push(display.value);
    console.log(nums);
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
      total += parseInt(nums[i]);
    }
    display.value = total;
    console.log(total);
    console.log(nums.length);
  }
  /*Minus Equals*/
  else if (this.value == "=" && opperator == "minus") {
    nums.push(display.value);
    console.log(nums);
    var total = nums[0];
    for (var i = 1; i < nums.length; i++) {
      total -= parseInt(nums[i]);
    }
    display.value = total;
    console.log(total);
  }

  /*Multiply Equals*/
  else if (this.value == "=" && opperator == "times") {
    nums.push(display.value);
    console.log(nums);
    var total = nums[0];
    for (var i = 1; i < nums.length; i++) {
      total *= parseInt(nums[i]);
    }
    display.value = total;
    console.log(total);
  }

  /*Multiply Equals*/
  else if (this.value == "=" && opperator == "divide") {
    nums.push(display.value);
    console.log(nums);
    var total = nums[0];
    for (var i = 1; i < nums.length; i++) {
      total /= parseInt(nums[i]);
    }
    display.value = total;
    console.log(total);
  }

  /*Clar Button*/
  else if (this.value == "C") {
    nums = []
    display.value = "";
    console.log(nums);
  }
}


$("button").on("click", clickMe);

/*
button1.addEventListener('click', clickMe);
button2.addEventListener('click', clickMe);
button3.addEventListener('click', clickMe);
button4.addEventListener('click', clickMe);
button5.addEventListener('click', clickMe);
button6.addEventListener('click', clickMe);
button7.addEventListener('click', clickMe);
button8.addEventListener('click', clickMe);
button9.addEventListener('click', clickMe);
button0.addEventListener('click', clickMe);
addButton.addEventListener('click', clickMe);
equalsButton.addEventListener('click', clickMe);
*/
