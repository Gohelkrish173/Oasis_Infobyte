let display = document.getElementById('ans');

    const AddToAnsBox = (x) => {
      display.value += x;
    }

    const RemoveOne = () => {
      display.value = display.value.slice(0,display.value.length - 1);
    }
    
    const Square = () =>{
      display.value = Math.pow(eval(display.value),2);
    }

    const ClearDisplay = ()=>{
      display.value = "";
    }

    const Enter = ()=>{
      display.value = eval(display.value);
    };

    const SquareRoot = () => {
      display.value = Math.pow(eval(display.value),(1/2));
    }

    let currentDisplay = '';
    document.querySelector('.c-eval').value = currentDisplay;

    document.addEventListener('keydown', (e) => {
      const k = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '.', 'Enter', 'Backspace','Escape','(',')'];

      if (k.includes(e.key)) {
        if (e.key === 'Enter') {
          Enter();
        } else if (e.key === 'Backspace') {
          RemoveOne();
        } else if(e.key === 'Escape'){
          ClearDisplay();
        } else {
          AddToAnsBox(e.key);
        }
      }

      if (e.key === 'Enter') {
        e.preventDefault();
      }

    });