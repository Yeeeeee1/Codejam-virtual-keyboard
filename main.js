/*eslint linebreak-style: ["error", "windows"]*/
var n = 1;
var x = 1;
var p = 1;
var aa = 2;
var c = 1;
var h = 1;
var pp = 1;
var hh = 1;
var parent = document.querySelector('body');

var text = document.createElement('textarea');
text.id = "textarea";

parent.appendChild(text);

var lang = document.createElement('div');
lang.id = "language";
lang.className = "language";
lang.innerHTML = "Language";

parent.appendChild(lang);

var keyboard = document.createElement('div');
keyboard.id = "parent";

parent.appendChild(keyboard);
var language = document.getElementById('language');
var anchors = document.getElementsByTagName('button');
var parent = document.getElementById('parent');
var body = document.getElementById('body');
var textarea = document.getElementById('textarea');    
class Button {
  constructor(width, height, name, id) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.id = id;
  }
  buttonsClone() 
{var button = document.createElement('button');
button.style.width = this.width;
button.style.height = this.height;
button.innerHTML = this.name;
button.id = this.id;

parent.appendChild(button);
  }
}
var rus = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\u2191', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '\u2190', '\u2193', '\u2192', 'Ctrl',
];
var rusCaps = [
  'Ё', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', "Del",
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '\u2191', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '\u2190', '\u2193', '\u2192', 'Ctrl',
];

const keyLayout2 = [
        "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","+", "Backspace",
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
        "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", '"', "enter",
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '\u2191', "Shift",
        "Ctrl", "Win", "Alt", " ", "Alt", '\u2190', '\u2193', '\u2192', "Ctrl"
    ];
        const keyLayout = [
        "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","+", "Backspace",
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
        "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", '"', "enter",
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '\u2191', "Shift",
        "Ctrl", "Win", "Alt", " ", "Alt", '\u2190', '\u2193', '\u2192', "Ctrl"
    ];

       var physicalKeyCodes = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
   "Tab", 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', "Backslash", "Delete",
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
   "ShiftLeft", 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', "ShiftRight",
   "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", 'ArrowLeft', 'ArrowDown', 'ArrowRight', "ControlRight"
  
];

var caps = [
      '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
      'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Enter',
      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '\u2191', 'Shift',
      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '\u2190', '\u2193', '\u2192', 'Ctrl'
    ];

var iid = ["n"];
var iiid = ["g"];
var iiiid = ["q"];
var iiiiid = ["a"];
language.onclick = function (e) {
  x++;
  if (x % 2 == 0) {
    keyLayout.splice(0, 64);
    for (var d = 0; d < rus.length; d++) {
      keyLayout.splice(d, 0, rus[d]);
    }
    try {
    for (var r = 0; r < iid.length; r++) {
      var element = document.getElementById(iid[r]).remove();
    }
    } catch(e) {

    }
    try {
    for (var r = 0; r < iiid.length; r++) {
      var element = document.getElementById(iiid[r]).remove();
    }
    } catch(e) {

    }
      if (x % 2 == 0) {
    var idddd = "q";
    for (var w = 0; w < rus.length; w++) {
      var button = new Button("50", "50", rus[w], idddd);
      button.buttonsClone();
      idddd = idddd + "q";
      iiiid.push(idddd);
    }
  }

  }
  // ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ OFF
  if (x % 2 != 0) {
    keyLayout.splice(0, 64);
    for (var m = 0; m < keyLayout2.length; m++) {
      keyLayout.splice(m, 0, keyLayout2[m]);
    }
    try {
    for (var r = 0; r < iiiid.length; r++) {
      var element = document.getElementById(iiiid[r]).remove();
    }
    } catch(e) {

    }
      if (x % 2 != 0) {
    var idd = "n";
for (var i = 0; i < keyLayout.length; i++) {
  var button = new Button("50", "50", keyLayout[i], idd);
  button.buttonsClone();
  idd = idd + "n";
  iid.push(idd);
}
  }
  }
  //
}
body.onkeydown = function (e) {
  if (keyLayout[0] == "Ё") {
    aa = 1;
  } else {
    aa = 2;
  }

  if (n % 2 != 0) {
      document.addEventListener('keydown', function(e) {
    var caps = event.getModifierState && event.getModifierState('CapsLock');
    if(caps){
        if(e.ctrlKey && e.key == 'Alt'){
            c++;
        }
    }
    });
    }

  // TAB
  if (e.code == "Tab") {
    textarea.value += "    "; 
  }
  //
  // BACKSPACE
  if (e.code == "Backspace") {
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
  }
  //
  // ENTER
  if (e.code == "Enter") {
    textarea.value += "\n";
  }
  //
  // ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ
  if (e.ctrlKey && e.code == "AltLeft" || e.ctrlKey && e.code == "AltRight") {
    x++;
  }
  if (x % 2 == 0) {
    keyLayout.splice(0, 64);
    for (var d = 0; d < rus.length; d++) {
      keyLayout.splice(d, 0, rus[d]);
    }
    try {
    for (var r = 0; r < iid.length; r++) {
      var element = document.getElementById(iid[r]).remove();
    }
    } catch(e) {

    }
    try {
    for (var r = 0; r < iiid.length; r++) {
      var element = document.getElementById(iiid[r]).remove();
    }
    } catch(e) {

    }
    if (e.ctrlKey && e.keyCode == 18) {
      if (x % 2 == 0) {
    var idddd = "q";
    for (var w = 0; w < rus.length; w++) {
      var button = new Button("50", "50", rus[w], idddd);
      button.buttonsClone();
      idddd = idddd + "q";
      iiiid.push(idddd);
    }
  }
  }

  }
  // ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ OFF
  if (x % 2 != 0) {
    keyLayout.splice(0, 64);
    for (var m = 0; m < keyLayout2.length; m++) {
      keyLayout.splice(m, 0, keyLayout2[m]);
    }
    try {
    for (var r = 0; r < iiiid.length; r++) {
      var element = document.getElementById(iiiid[r]).remove();
    }
    } catch(e) {

    }
    if (e.ctrlKey && e.keyCode == 18) {
      if (x % 2 != 0) {
    var idd = "n";
for (var i = 0; i < keyLayout.length; i++) {
  var button = new Button("50", "50", keyLayout[i], idd);
  button.buttonsClone();
  idd = idd + "n";
  iid.push(idd);
}
  }
  }
  }
  //
  // ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ CAPSLOCK
  if (x % 2 == 0) {
    if (e.code == "CapsLock") {
      p++;
    }
  }
  if (p % 2 == 0 && hh % 2 != 0) {
    keyLayout.splice(0, 64);
    for (var y = 0; y < rusCaps.length; y++) {
      keyLayout.splice(y, 0, rusCaps[y]);
    }
    try {
    for (var r = 0; r < iiiid.length; r++) {
      var element = document.getElementById(iiiid[r]).remove();
    }
    } catch(e) {

    }
      if (p % 2 == 0 && n % 2 != 0) {
    var iddddd = "a";
    for (var w = 0; w < rus.length; w++) {
      var button = new Button("50", "50", rusCaps[w], iddddd);
      button.buttonsClone();
      iddddd = iddddd + "a";
      iiiiid.push(iddddd);
  }
  }
}
      // ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ CAPSLOCK OFF
        if (p % 2 != 0 && e.code == "CapsLock") {
    keyLayout.splice(0, 64);
    for (var f = 0; f < rus.length; f++) {
      keyLayout.splice(f, 0, rus[f]);
    }
    try {
    for (var r = 0; r < iiiiid.length; r++) {
      var element = document.getElementById(iiiiid[r]).remove();
    }
    } catch(e) {

    }
      if (p % 2 != 0 && e.code == "CapsLock" && aa == 1) {
    var idddd = "q";
    for (var w = 0; w < rus.length; w++) {
      var button = new Button("50", "50", rus[w], idddd);
      button.buttonsClone();
      idddd = idddd + "q";
      iiiid.push(idddd);
    }
}
  }
  //
  // CAPSLOCK В ПЕРЕКЛЮЧЕНИЯХ ЯЗЫКОВ
  //
  // CAPSLOCK
  if (e.code == "CapsLock") {
    n++;
  }
    if (n % 2 == 0 && x % 2 != 0 && hh % 2 != 0) {
    keyLayout.splice(0, 64);
    try {
    for (var k = 0; k < iid.length; k++) {
      var element = document.getElementById(iid[k]).remove();
    }
    } catch(e) {

    }
    for (var k = 0; k < caps.length; k++) {
      keyLayout.splice(k, 0, caps[k]);
    }
   var iddd = "g";
   if (e.code == "CapsLock" && n % 2 == 0) {
    for (var i = 0; i < caps.length; i++) {
      var button = new Button("50", "50", caps[i], iddd);
      button.buttonsClone();
      iddd = iddd + "g";
      iiid.push(iddd);
    }
  }
    var capslock = document.getElementById('gggggggggggggggggggggggggggggg');
    capslock.style.background = "darkgrey";
    console.log(keyLayout);
  }
  //
  // CAPSLOCK OFF
  if (n % 2 != 0 && event.code == "CapsLock" && x % 2 != 0) {
    keyLayout.splice(0, 64);
    for (var m = 0; m < keyLayout2.length; m++) {
      keyLayout.splice(m, 0, keyLayout2[m]);
    }
    try {
    for (var b = 0; b < iiid.length; b++) {
      var element = document.getElementById(iiid[b]).remove();
    }
    } catch(e) {

    }
    if (e.code == "CapsLock" && n % 2 != 0 && aa == 2) {
    var idd = "n";
for (var i = 0; i < keyLayout.length; i++) {
  var button = new Button("50", "50", keyLayout[i], idd);
  button.buttonsClone();
  idd = idd + "n";
  iid.push(idd);
}
  }
}
  //
  // SHIFT
    if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
      hh++;
    }
            if (n % 2 != 0 && x % 2 != 0 && hh % 2 == 0) {
    keyLayout.splice(0, 64);
    try {
    for (var k = 0; k < iid.length; k++) {
      var element = document.getElementById(iid[k]).remove();
    }
    } catch(e) {

    }
    for (var k = 0; k < caps.length; k++) {
      keyLayout.splice(k, 0, caps[k]);
    }
   var iddd = "g";
    if (n % 2 != 0 && x % 2 != 0 && hh % 2 == 0 && h % 2 != 0) {
    for (var i = 0; i < caps.length; i++) {
      var button = new Button("50", "50", caps[i], iddd);
      button.buttonsClone();
      iddd = iddd + "g";
      iiid.push(iddd);
  }
  }
  h = 2;
  }

  // SHIFT В ПЕРЕКЛЮЧЕНИЯХ ЯЗЫКОВ
                  if (n % 2 != 0 && x % 2 == 0 && hh % 2 == 0) {
    keyLayout.splice(0, 64);
    try {
    for (var k = 0; k < iiiid.length; k++) {
      var element = document.getElementById(iiiid[k]).remove();
    }
    } catch(e) {

    }
    for (var k = 0; k < rusCaps.length; k++) {
      keyLayout.splice(k, 0, rusCaps[k]);
    }
   var iddddd = "a";
    if (n % 2 != 0 && x % 2 == 0 && hh % 2 == 0 && h % 2 != 0) {
    for (var i = 0; i < rusCaps.length; i++) {
      var button = new Button("50", "50", rusCaps[i], iddddd);
      button.buttonsClone();
      iddddd = iddddd + "a";
      iiiiid.push(iddddd);
  }
  }
  h = 2;
  }
  //
  //
  console.log(keyLayout);
  for (var i = 0; i < physicalKeyCodes.length; i++) {
    if (e.code == physicalKeyCodes[i]) {
      if (e.code != "Tab" && e.code != "Backspace" && e.code != "ShiftLeft" && e.code != "ShiftRight" && e.code != "ControlLeft" && e.code != "ControlRight" && e.code != "AltLeft" && e.code != "AltRight" && e.code != "Enter" && e.code != "Delete" && e.code != "CapsLock") {
        textarea.value += keyLayout[i];
      }
      if (hh % 2 == 0) {
      for (var s = 0; s < iiiiid.length; s++) {
        if (i == s) {
          var elementttt = document.getElementById(iiiiid[s]);
          elementttt.style.background = "darkgrey";
          elementttt.style.transition = "0.5s";
          elementttt.style.borderRadius = "20px";
          setTimeout(function () {
            elementttt.style.background = "";
            elementttt.style.borderRadius = "";
          }, 500);
        }
      }
    }
      if (hh % 2 == 0) {
      for (var s = 0; s < iiid.length; s++) {
        if (i == s) {
          var elementttt = document.getElementById(iiid[s]);
          elementttt.style.background = "darkgrey";
          elementttt.style.transition = "0.5s";
          elementttt.style.borderRadius = "20px";
          setTimeout(function () {
            elementttt.style.background = "";
            elementttt.style.borderRadius = "";
          }, 500);
        }
      }
    }
      if (pp % 2 == 0) {
      for (var s = 0; s < iid.length; s++) {
        if (i == s) {
          var elementttt = document.getElementById(iid[s]);
          elementttt.style.background = "darkgrey";
          elementttt.style.transition = "0.5s";
          elementttt.style.borderRadius = "20px";
          setTimeout(function () {
            elementttt.style.background = "";
            elementttt.style.borderRadius = "";
          }, 500);
        }
      }
    }
      if (c % 2 == 0) {
      for (var s = 0; s < iiiiid.length; s++) {
        if (i == s) {
          var elementttt = document.getElementById(iiiiid[s]);
          elementttt.style.background = "darkgrey";
          elementttt.style.transition = "0.5s";
          elementttt.style.borderRadius = "20px";
          setTimeout(function () {
            elementttt.style.background = "";
            elementttt.style.borderRadius = "";
          }, 500);
        }
      }
    }
      if (p % 2 == 0) {
      for (var s = 0; s < iiiiid.length; s++) {
        if (i == s) {
          var elementttt = document.getElementById(iiiiid[s]);
          elementttt.style.background = "darkgrey";
          elementttt.style.transition = "0.5s";
          elementttt.style.borderRadius = "20px";
          setTimeout(function () {
            elementttt.style.background = "";
            elementttt.style.borderRadius = "";
          }, 500);
        }
      }
    }
      if (x % 2 == 0) {
      for (var v = 0; v < iiiid.length; v++) {
        if (i == v) {
          var elementtt = document.getElementById(iiiid[v]);
          elementtt.style.background = "darkgrey";
          elementtt.style.transition = "0.5s";
          elementtt.style.borderRadius = "20px";
          setTimeout(function () {
            elementtt.style.background = "";
            elementtt.style.borderRadius = "";
          }, 500);
        }
      }
    }
      if (n % 2 != 0) {
      for (var j = 0; j < iid.length; j++) {
        if (i == j) {
          var element = document.getElementById(iid[j]);
          element.style.background = "darkgrey";
          element.style.transition = "0.5s";
          element.style.borderRadius = "20px";
          setTimeout(function () {
            element.style.background = "";
            element.style.borderRadius = "";
          }, 500);
        }
      }
    }
    if (n % 2 == 0) {
      for (var z = 0; z < iiid.length; z++) {
        if (i == z) {
          var elementt = document.getElementById(iiid[z]);
          elementt.style.background = "darkgrey";
          elementt.style.transition = "0.5s";
          elementt.style.borderRadius = "20px";
          setTimeout(function () {
            elementt.style.background = "";
            elementt.style.borderRadius = "";
          }, 500);
        }
      }
    }
    }
  }
}


// ОТДЕЛЬНЫЙ СКРИПТ ДЛЯ КЕЙАП ДЛЯ ШИФТА
        // SHIFT OFF
        document.addEventListener("keyup", function (e) {
          if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
      hh++;
      h = 1;
    }
                // SHIFT OFF
            if (n % 2 != 0 && x % 2 != 0 && hh % 2 != 0) {

    keyLayout.splice(0, 64);
    try {
    for (var b = 0; b < iiid.length; b++) {
      var element = document.getElementById(iiid[b]).remove();
    }
    } catch(e) {

    }
    for (var k = 0; k < keyLayout2.length; k++) {
      keyLayout.splice(k, 0, keyLayout2[k]);
    }
   var idd = "n";
   if (e.code == "ShiftLeft" || e.code == "ShiftRight" && n % 2 != 0 && x % 2 != 0 && pp % 2 == 0) {
for (var i = 0; i < keyLayout.length; i++) {
  var button = new Button("50", "50", keyLayout[i], idd);
  button.buttonsClone();
  idd = idd + "n";
  iid.push(idd);
}
  }
  }
  //
  // SHIFT OFF В ПЕРЕКЛЮЧЕНИЯХ ЯЗЫКОВ
            if (n % 2 != 0 && x % 2 == 0 && hh % 2 != 0) {
    keyLayout.splice(0, 64);
    try {
    for (var b = 0; b < iiiiid.length; b++) {
      var element = document.getElementById(iiiiid[b]).remove();
    }
    } catch(e) {

    }
    for (var k = 0; k < rus.length; k++) {
      keyLayout.splice(k, 0, rus[k]);
    }
   var idddd = "q";
   if (e.code == "ShiftLeft" || e.code == "ShiftRight" && n % 2 == 0 && x % 2 == 0 && pp % 2 == 0) {
for (var i = 0; i < rus.length; i++) {
  var button = new Button("50", "50", rus[i], idddd);
  button.buttonsClone();
  idddd = idddd + "q";
  iiiid.push(idddd);
}
  }
  }
  //
        });

    


//

// СОЗДАНИЕ КНОПОК
var idd = "n";
for (var i = 0; i < keyLayout.length; i++) {
  var button = new Button("50", "50", keyLayout[i], idd);
  button.buttonsClone();
  idd = idd + "n";
  iid.push(idd);
}


// КЛИКИ
for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function(e) {
          for (var h = 0; h < iid.length; h++) {
            if (e.target.id == iid[h]) {
            // TAB
            if (e.target.id == "nnnnnnnnnnnnnnn") {
              textarea.value += "    "; 
            }
            //
            // BACKSPACE
            if (e.target.id == "nnnnnnnnnnnnnn") {
              textarea.value = textarea.value.substring(0, textarea.value.length - 1);
            }
            //
            // ENTER
            if (e.target.id == "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn") {
              textarea.value += "\n";
            }
            //
              e.target.style.background = "darkgrey";
              e.target.style.transition = "0.5s";
              setTimeout(function () {
                e.target.style.background = "";
              }, 500);
              if (e.target.id != "nnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && e.target.id != "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn") {
              textarea.value += keyLayout[h];
              }
            }
          }
          
        }
    }
    var capslockOn = document.getElementById('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');

        // КЛИКИ CAPSLOCK
  capslockOn.onclick = function (e) {
                          // CAPSLOCK
  if (e.target.id == "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn") {
    n++;
  }
    if (n % 2 == 0 && x % 2 != 0 && hh % 2 != 0) {
    keyLayout.splice(0, 64);
    try {
    for (var k = 0; k < iid.length; k++) {
      var element = document.getElementById(iid[k]).remove();
    }
    } catch(e) {

    }
    for (var k = 0; k < caps.length; k++) {
      keyLayout.splice(k, 0, caps[k]);
    }
   var iddd = "g";
   if (n % 2 == 0) {
    for (var i = 0; i < caps.length; i++) {
      var button = new Button("50", "50", caps[i], iddd);
      button.buttonsClone();
      iddd = iddd + "g";
      iiid.push(iddd);
    }
  }
    var capslock = document.getElementById('gggggggggggggggggggggggggggggg');
    capslock.style.background = "darkgrey";
    console.log(keyLayout);
  }
  //
  // CAPSLOCK OFF
    var capslockOff = document.getElementById('gggggggggggggggggggggggggggggg');
    capslockOff.onclick = function () {
      
      if (n % 2 == 0 && x % 2 != 0) {
    keyLayout.splice(0, 64);
    for (var m = 0; m < keyLayout2.length; m++) {
      keyLayout.splice(m, 0, keyLayout2[m]);
    }
    try {
    for (var b = 0; b < iiid.length; b++) {
      var element = document.getElementById(iiid[b]).remove();
    }
    } catch(e) {

    }
    if (n % 2 == 0 && aa == 2) {
    var idd = "n";
for (var i = 0; i < keyLayout.length; i++) {
  var button = new Button("50", "50", keyLayout[i], idd);
  button.buttonsClone();
  idd = idd + "n";
  iid.push(idd);
}
  }
  n++;
}
    }
  
}
  //


//
// 
var shift = document.getElementById('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
shift.onclick = function (e) {
  if (e.target.id = "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn") {
    n++;
  }
    if (n % 2 == 0 && x % 2 != 0 && hh % 2 != 0) {
    keyLayout.splice(0, 64);
    try {
    for (var k = 0; k < iid.length; k++) {
      var element = document.getElementById(iid[k]).remove();
    }
    } catch(e) {

    }
    for (var k = 0; k < caps.length; k++) {
      keyLayout.splice(k, 0, caps[k]);
    }
   var iddd = "g";
   if (e.target.id = "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn" && n % 2 == 0) {
    for (var i = 0; i < caps.length; i++) {
      var button = new Button("50", "50", caps[i], iddd);
      button.buttonsClone();
      iddd = iddd + "g";
      iiid.push(iddd);
    }
  }
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function(e) {
          for (var h = 0; h < iiid.length; h++) {
            if (e.target.id == iiid[h]) {
            // TAB
            if (e.target.id == "ggggggggggggggg") {
              textarea.value += "    "; 
            }
            //
            // BACKSPACE
            if (e.target.id == "gggggggggggggg") {
              textarea.value = textarea.value.substring(0, textarea.value.length - 1);
            }
            //
            // ENTER
            if (e.target.id == "gggggggggggggggggggggggggggggggggggggggggg") {
              textarea.value += "\n";
            }
            //
              e.target.style.background = "darkgrey";
              e.target.style.transition = "0.5s";
              setTimeout(function () {
                e.target.style.background = "";
              }, 500);
              if (e.target.id != "ggggggggggggggg" && e.target.id != "gggggggggggggg" && e.target.id != "ggggggggggggggggggggggggggggg" && e.target.id != "gggggggggggggggggggggggggggggggggggggggggg" && e.target.id != "ggggggggggggggggggggggggggggggggggggggggggggggggggggggg" && e.target.id != "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" && e.target.id != "ggggggggggggggggggggggggggggggg" && e.target.id != "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" && e.target.id != "ggggggggggggggggggggggggggggggggggggggggggg" && e.target.id != "gggggggggggggggggggggggggggggggggggggggggggggggggggggggg" && e.target.id != "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggg") {
              textarea.value += caps[h];
              }


              keyLayout.splice(0, 64);
    for (var m = 0; m < keyLayout2.length; m++) {
      keyLayout.splice(m, 0, keyLayout2[m]);
    }
    try {
    for (var b = 0; b < iiid.length; b++) {
      var element = document.getElementById(iiid[b]);
      element.remove();
    }
    } catch(e) {
      console.log(e);
    }
    var idd = "n";
for (var i = 0; i < keyLayout.length; i++) {
  var button = new Button("50", "50", keyLayout[i], idd);
  button.buttonsClone();
  idd = idd + "n";
  iid.push(idd);
  }
}
        }
      }    
    }
  }
  n++; };
//
