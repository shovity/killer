window.killing = (options = {}) => {

  const venom = document.getElementById('venom');
  
  if (options.clean === true && venom) {
    venom.innerHTML = '';
    return
  }

  const deadString = localStorage.deadString;
  // check exits dead string
  if (!localStorage.deadString) return;
  const cssInject = `
   ${deadString} {
      display: none !important;
      opacity:0 !important;
      pointer-events: none !important;
    }
  `;

  
  if (venom) {
    venom.innerHTML = cssInject;
  } else {
    document.getElementsByTagName('head')[0].innerHTML += `<style id="venom">${cssInject}</style>`;
  }
}

// killing...
killing();
