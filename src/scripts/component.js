let isCapsLock = false;
let buttonsArea = document.querySelector('.box2');
let textArea = document.querySelector('#box1');
let isEnglish = true;
let capsLockButton = document.querySelector('.button-29');

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
}

let startArray = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
let startArrayRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

function clickButton() {
  let buttonsArea = document.querySelector('.box2');
  let textArea = document.querySelector('#box1');
  buttonsArea.onclick = function(ev) {
    let i = ev.target.closest('div').dataset.action;
    if (i === undefined || i === '55' || i === '56' || i === '57' || i === '59' || i === '63' || i === '') {
      textArea.innerText = textArea.value + '';
    } else if (i === '41') {
      textArea.innerText = textArea.value + '\r\n';
    } else if (i === '14') {
      textArea.innerText = textArea.value + '    ';
    } else if (i === '13') {
      textArea.innerText = (textArea.value).substring(0, (textArea.value).length - 1);
    } else if (i === '28') {
      textArea.innerText = (textArea.value).substring(1, (textArea.value).length);
    } else if (i === '29') {
      pressCapsLock();
    } else if (i === '42' || i === '54') {
      if (i === '42' || i === '54') {
        pressShift();
        setTimeout(pressShift, 1000);
      }
    }
    else if (isCapsLock) {
      if (isEnglish) {
        textArea.innerText = textArea.value + (`${startArray[i]}`).toUpperCase();
      } else {
        textArea.innerText = textArea.value + (`${startArrayRus[i]}`).toUpperCase();
      }
    } else {
      if (isEnglish) {
        textArea.innerText = textArea.value + (`${startArray[i]}`);
      } else {
        textArea.innerText = textArea.value + (`${startArrayRus[i]}`);
      }
    }
  };
}

addButtons();

function addButtons() {
  document.querySelector('body').innerHTML = `
<p class="title">Virtual keyboard</p>
<textarea type="text" id="box1"></textarea>
<div class="box2">
</div>
<p class="footer">Клавиатура создана в операционной системе Windows</p>
<p class="footer">Для переключения языка комбинация используемая в системе: левыe Ctrl + Alt или Shift + Alt</p>`;

  let buttonsArea = document.querySelector('.box2');
  /* let textArea = document.querySelector('#box1'); */

  for (let i = 0; i < 64; i += 1) {
    let button = document.createElement('div');
    button.setAttribute('data-action', `${i}`);
    let buttonTitle = document.createElement('p');
    button.append(buttonTitle);
    buttonTitle.innerText = `${startArray[i]}`;
    button.classList.add(`button-${i}`);
    button.classList.add('passive');
    buttonsArea.append(button);
  }
  clickButton();
}
class Box extends Component {
  constructor(options) {
    super(options.selector)
    this.$el.style.width = options.size + 'px'
    this.$el.style.height = options.size / 2.8 + 'px'
    this.$el.style.background = options.color
  }
}

document.querySelector('#box1').focus();

const box1 = new Box({
  selector: '#box1',
  size: 710,
  color: 'transparent'
});

const box2 = new Box({
  selector: '.box2',
  size: 710,
  color: ' rgba(72, 71, 71, 0.566)'
});


function pressShift() {
    let buttonsArea = document.querySelector('.box2');
  let shiftButton = document.querySelector('.button-42');
  if (isCapsLock === false) {
    shiftButton.style.background = 'rgba(200, 116, 6, 0.638';
    shiftButton.style.borderRadius = '20px';
    if (isEnglish) {
      for (let i = 15; i < 25; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toUpperCase()}</p>`;
      }
      for (let i = 30; i < 39; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toUpperCase()}</p>`;
      }
      for (let i = 43; i < 50; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toUpperCase()}</p>`;
      }
      isCapsLock = true;
    } else {
      for (let i = 15; i < 28; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toUpperCase()}</p>`;
      }
      for (let i = 30; i < 41; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toUpperCase()}</p>`;
      }
      for (let i = 43; i < 53; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toUpperCase()}</p>`;
      }
      isCapsLock = true;
    }
  } else {
    shiftButton.style.background = 'rgba(72, 71, 71, 0.8)';
    shiftButton.style.borderRadius = '0px';
    if (isEnglish) {
      for (let i = 15; i < 25; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toLowerCase()}</p>`;
      }
      for (let i = 30; i < 39; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toLowerCase()}</p>`;
      }
      for (let i = 43; i < 50; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toLowerCase()}</p>`;
      }
    } else {
      for (let i = 15; i < 28; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toLowerCase()}</p>`;
      }
      for (let i = 30; i < 41; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toLowerCase()}</p>`;
      }
      for (let i = 43; i < 53; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toLowerCase()}</p>`;
      }
    }
    isCapsLock = false;
  }
}

function pressCapsLock() {
  let buttonsArea = document.querySelector('.box2');
  let capsLockButton = document.querySelector('.button-29');
  if (isCapsLock === false) {
    capsLockButton.style.background = 'rgba(200, 116, 6, 0.638';
    capsLockButton.style.borderRadius = '20px';
    if (isEnglish) {
      for (let i = 15; i < 25; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toUpperCase()}</p>`;
      }
      for (let i = 30; i < 39; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toUpperCase()}</p>`;
      }
      for (let i = 43; i < 50; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toUpperCase()}</p>`;
      }
      isCapsLock = true;
    } else {
      for (let i = 15; i < 28; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toUpperCase()}</p>`;
      }
      for (let i = 30; i < 41; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toUpperCase()}</p>`;
      }
      for (let i = 43; i < 53; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toUpperCase()}</p>`;
      }
      isCapsLock = true;
    }
  } else {
    capsLockButton.style.background = 'rgba(72, 71, 71, 0.8)';
    capsLockButton.style.borderRadius = '0px';
    if (isEnglish) {
      for (let i = 15; i < 25; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toLowerCase()}</p>`;
      }
      for (let i = 30; i < 39; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toLowerCase()}</p>`;
      }
      for (let i = 43; i < 50; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArray[i].toLowerCase()}</p>`;
      }
    } else {
      for (let i = 15; i < 28; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toLowerCase()}</p>`;
      }
      for (let i = 30; i < 41; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toLowerCase()}</p>`;
      }
      for (let i = 43; i < 53; i += 1) {
        buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i].toLowerCase()}</p>`;
      }
    }
    isCapsLock = false;
  }
}

function activeButtons(i) {
  let button0 = document.querySelector(`.button-${i}`);
  button0.classList.add('active');
  button0.classList.remove('passive');
  setTimeout(() => {
    button0.classList.add('passive');
    button0.classList.remove('active');
  }, 300);
}

function pressButtons() {
  let i;
  let buttonsArea = document.querySelector('.box2');
  let textArea = document.querySelector('#box1');
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      textArea.innerText = textArea.value + '    ';
    } else {
      textArea.innerText = textArea.value + `${e.key}`;
    }
    if (e.key === 'CapsLock') {
      pressCapsLock();
    }
    document.querySelector('#box1').focus();
    if (e.code === 'Backquote') {
      i = 0;
      activeButtons(i);
    }
    if (e.code === 'Digit1') {
      i = 1;
      activeButtons(i);
    }
    if (e.code === 'Digit2') {
      i = 2;
      activeButtons(i);
    }
    if (e.code === 'Digit3') {
      i = 3;
      activeButtons(i);
    }
    if (e.code === 'Digit4') {
      i = 4;
      activeButtons(i);
    }
    if (e.code === 'Digit5') {
      i = 5;
      activeButtons(i);
    }
    if (e.code === 'Digit6') {
      i = 6;
      activeButtons(i);
    }
    if (e.code === 'Digit7') {
      i = 7;
      activeButtons(i);
    }
    if (e.code === 'Digit8') {
      i = 8;
      activeButtons(i);
    }
    if (e.code === 'Digit9') {
      i = 9;
      activeButtons(i);
    }
    if (e.code === 'Digit0') {
      i = 10;
      activeButtons(i);
    }
    if (e.code === 'Minus') {
      i = 11;
      activeButtons(i);
    }
    if (e.code === 'Equal') {
      i = 12;
      activeButtons(i);
    }
    if (e.code === 'Backspace') {
      i = 13;
      activeButtons(i);
    }
    if (e.code === 'Tab') {
      i = 14;
      activeButtons(i);
    }
    if (e.code === 'KeyQ') {
      i = 15;
      activeButtons(i);
    }
    if (e.code === 'KeyW') {
      i = 16;
      activeButtons(i);
    }
    if (e.code === 'KeyE') {
      i = 17;
      activeButtons(i);
    }
    if (e.code === 'KeyR') {
      i = 18;
      activeButtons(i);
    }
    if (e.code === 'KeyT') {
      i = 19;
      activeButtons(i);
    }
    if (e.code === 'KeyY') {
      i = 20;
      activeButtons(i);
    }
    if (e.code === 'KeyU') {
      i = 21;
      activeButtons(i);
    }
    if (e.code === 'KeyI') {
      i = 22;
      activeButtons(i);
    }
    if (e.code === 'KeyO') {
      i = 23;
      activeButtons(i);
    }
    if (e.code === 'KeyP') {
      i = 24;
      activeButtons(i);
    }
    if (e.code === 'KeyP') {
      i = 24;
      activeButtons(i);
    }
    if (e.code === 'BracketLeft') {
      i = 25;
      activeButtons(i);
    }
    if (e.code === 'BracketRight') {
      i = 26;
      activeButtons(i);
    }
    if (e.code === 'Backslash') {
      i = 27;
      activeButtons(i);
    }
    if (e.code === 'Delete') {
      i = 28;
      activeButtons(i);
    }
    if (e.code === 'CapsLock') {
      i = 29;
      activeButtons(i);
    }
    if (e.code === 'KeyA') {
      i = 30;
      activeButtons(i);
    }
    if (e.code === 'KeyS') {
      i = 31;
      activeButtons(i);
    }
    if (e.code === 'KeyD') {
      i = 32;
      activeButtons(i);
    }
    if (e.code === 'KeyF') {
      i = 33;
      activeButtons(i);
    }
    if (e.code === 'KeyG') {
      i = 34;
      activeButtons(i);
    }
    if (e.code === 'KeyH') {
      i = 35;
      activeButtons(i);
    }
    if (e.code === 'KeyJ') {
      i = 36;
      activeButtons(i);
    }
    if (e.code === 'KeyK') {
      i = 37;
      activeButtons(i);
    }
    if (e.code === 'KeyL') {
      i = 38;
      activeButtons(i);
    }
    if (e.code === 'Semicolon') {
      i = 39;
      activeButtons(i);
    }
    if (e.code === 'Quote') {
      i = 40;
      activeButtons(i);
    }
    if (e.code === 'Enter') {
      i = 41;
      activeButtons(i);
      textArea.innerText = textArea.value + '\r\n';
    }
    if (e.code === 'ShiftLeft') {
      i = 42;
      activeButtons(i);
      pressShift();
      setTimeout(pressShift, 700);
    }
    if (e.code === 'KeyZ') {
      i = 43;
      activeButtons(i);
    }
    if (e.code === 'KeyX') {
      i = 44;
      activeButtons(i);
    }
    if (e.code === 'KeyC') {
      i = 45;
      activeButtons(i);
    }
    if (e.code === 'KeyV') {
      i = 46;
      activeButtons(i);
    }
    if (e.code === 'KeyB') {
      i = 47;
      activeButtons(i);
    }
    if (e.code === 'KeyN') {
      i = 48;
      activeButtons(i);
    }
    if (e.code === 'KeyM') {
      i = 49;
      activeButtons(i);
    }
    if (e.code === 'Comma') {
      i = 50;
      activeButtons(i);
    }
    if (e.code === 'Period') {
      i = 51;
      activeButtons(i);
    }
    if (e.code === 'Slash') {
      i = 52;
      activeButtons(i);
    }
    if (e.code === 'ShiftRight') {
      i = 54;
      activeButtons(i);
      pressShift();
      setTimeout(pressShift, 700);
    }
    if (e.code === 'ArrowUp') {
      i = 53;
      activeButtons(i);
      textArea.innerText = textArea.value + '▲';
    }
    if (e.code === 'ControlLeft') {
      i = 55;
      activeButtons(i);
    }
    if (e.code === 'Meta') {
      i = 56;
      activeButtons(i);
    }
    if (e.code === 'AltLeft') {
      i = 57;
      activeButtons(i);
    }
    if (e.code === 'Space') {
      i = 58;
      activeButtons(i);
    }
    if (e.code === 'AltRight') {
      i = 59;
      activeButtons(i);
    }
    if (e.code === 'ArrowLeft') {
      i = 60;
      activeButtons(i);
      textArea.innerText = textArea.value + '◄';
    }
    if (e.code === 'ArrowDown') {
      i = 61;
      activeButtons(i);
      textArea.innerText = textArea.value + '▼';
    }
    if (e.code === 'ArrowRight') {
      i = 62;
      activeButtons(i);
      textArea.innerText = textArea.value + '►';
    }
    if (e.code === 'ControlRight') {
      i = 63;
      activeButtons(i);
    }
  });
}

pressButtons();



function doubleChoice(func, ...codes) {
  let pressed = new Set();
  document.addEventListener('keydown', (e) => {
    pressed.add(e.code);
    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', (e) => {
    pressed.delete(e.code);
  });
  document.querySelector('#box1').focus();
}

doubleChoice(
  () => {
    let buttonsArea = document.querySelector('.box2');
    if (isEnglish) {
      if (isCapsLock) {
        buttonsArea.children[0].innerHTML = '<p>Ё</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArrayRus[i]).toUpperCase()}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArrayRus[i]).toUpperCase()}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArrayRus[i]).toUpperCase()}</p>`;
        }
        isEnglish = false;
      } else {
        buttonsArea.children[0].innerHTML = '<p>ё</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i]}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i]}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i]}</p>`;
        }
        isEnglish = false;
      }
    } else {
      if (isCapsLock) {
        buttonsArea.children[0].innerHTML = '<p>`</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArray[i]).toLocaleUpperCase()}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArray[i]).toLocaleUpperCase()}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArray[i]).toLocaleUpperCase()}</p>`;
        }
        isEnglish = true;
      } else {
        buttonsArea.children[0].innerHTML = '<p>`</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArray[i]}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArray[i]}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArray[i]}</p>`;
        }
        isEnglish = true;
      }
    }
  },
  'ShiftLeft',
  'AltLeft'
);

doubleChoice(
  () => {
    let buttonsArea = document.querySelector('.box2');
    if (isEnglish) {
      if (isCapsLock) {
        buttonsArea.children[0].innerHTML = '<p>Ё</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArrayRus[i]).toUpperCase()}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArrayRus[i]).toUpperCase()}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArrayRus[i]).toUpperCase()}</p>`;
        }
        isEnglish = false;
      } else {
        buttonsArea.children[0].innerHTML = '<p>ё</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i]}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i]}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArrayRus[i]}</p>`;
        }
        isEnglish = false;
      }
    } else {
      if (isCapsLock) {
        buttonsArea.children[0].innerHTML = '<p>`</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArray[i]).toLocaleUpperCase()}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArray[i]).toLocaleUpperCase()}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${(startArray[i]).toLocaleUpperCase()}</p>`;
        }
        isEnglish = true;
      } else {
        buttonsArea.children[0].innerHTML = '<p>`</p>';
        for (let i = 15; i < 28; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArray[i]}</p>`;
        }
        for (let i = 30; i < 41; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArray[i]}</p>`;
        }
        for (let i = 43; i < 53; i += 1) {
          buttonsArea.children[i].innerHTML = `<p>${startArray[i]}</p>`;
        }
        isEnglish = true;
      }
    }
  },
  'AltLeft',
  'ControlLeft'
);
