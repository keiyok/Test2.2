 function eventA(btn) {
      if(btn.value == "=") {
        document.display.value = eval(document.display.value);
      } else if (btn.value == "C") {
        document.dentaku.display.value = "";
      } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        } 
        document.dentaku.display.value += btn.value;
        document.dentaku.multi_btn.value = "×";
        document.dentaku.div_btn.value = "÷";
      }
    }