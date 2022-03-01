console.log("Made by Pankaj");

// Add function
function add() {
  var a = document.getElementById("num1").value
  var b = document.getElementById("num2").value
  var a1 = (Math.round(a * 100) / 100);
  var b1 = (Math.round(b * 100) / 100);
  var c = a1 + b1;
  var c1 = document.getElementById("answer").value = Number(c).toFixed(2);
  doubleError();
}

// Substraction Function
function sub() {
  var a = document.getElementById("num1").value
  var b = document.getElementById("num2").value
  var a1 = (Math.round(a * 100) / 100);
  var b1 = (Math.round(b * 100) / 100);
  var c = a1 - b1;
  var c1 = document.getElementById("answer").value = Number(c).toFixed(2);
  doubleError();
}

// Multiply Function
function mul() {
  var a = document.getElementById("num1").value
  var b = document.getElementById("num2").value
  var a1 = (Math.round(a * 100) / 100);
  var b1 = (Math.round(b * 100) / 100);
  var c = a1 * b1;
  var c1 = document.getElementById("answer").value = Number(c).toFixed(2);
  doubleError();

}

// Divide Function
function div() {
  var a = document.getElementById("num1").value
  var b = document.getElementById("num2").value
  var a1 = (Math.round(a * 100) / 100);
  var b1 = (Math.round(b * 100) / 100);
  var c = a1 / b1;
  var c1 = document.getElementById("answer").value = Number(c).toFixed(2);
  doubleError();

}

//Power Function
function pow() {
  var a = document.getElementById("num1").value
  var b = document.getElementById("num2").value
  var a1 = parseInt(a);
  var b1 = parseInt(b);
  var c = Math.pow(a, b);
  var c1 = document.getElementById("answer").value = c;
  doubleError();

}

//More
function more() {
  var a = document.getElementsByClassName("single");
  var b = document.getElementsByClassName("double");
  var c = document.getElementById("num2");
  clearit();
  for (var i = 0; i < 6; i += 1) {
    if (a[i].style.visibility == 'visible') {
      a[i].style.visibility = 'hidden';
      b[i].style.visibility = 'visible';
      c.style.display = 'block';
    }
    else {
      a[i].style.visibility = 'visible';
      b[i].style.visibility = 'hidden';
      c.style.display = 'none';

    }
  }
}

//square root
function sqroot() {
  var a = document.getElementById("num1").value;
  var b = Math.sqrt(a);
  var c = document.getElementById("answer").value = b;
  singleError();
}

//sin Function
function sin() {
  var a = document.getElementById("num1").value;
  var b = Math.sin(a);
  var c = document.getElementById("answer").value = b;
  singleError();
}

//cos function
function cos() {
  var a = document.getElementById("num1").value;
  var b = Math.cos(a);
  var c = document.getElementById("answer").value = b;
  singleError();
}


//tan Function
function tan() {
  var a = document.getElementById("num1").value;
  var b = Math.tan(a);
  var c = document.getElementById("answer").value = b;
  singleError();
}

//log Function
function log() {
  var a = document.getElementById("num1").value;
  var b = Math.log(a);
  var c = document.getElementById("answer").value = b;
  singleError();
}


// Clear Function
function clearit() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('answer').value = '';
}

//function Shows syntax error for double 
function doubleError() {
  if (document.getElementById('answer').value == '') {
    alert('Syntax Error')
  }
  else if (document.getElementById('num1').value == '') {
    alert('Enter First number');
  }
  else if (document.getElementById('num2').value == '') {
    alert('Enter Second number');
  }
}

//function Shows syntax error for single
function singleError() {
  if (document.getElementById('num1').value == '') {
    alert('Enter First number');
  }
}