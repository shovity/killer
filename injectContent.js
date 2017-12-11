window.killing = () => {
  const deadString = localStorage.deadString;
  // check exits dead string
  if (!localStorage.deadString) return;
  const cssInject = `<style>${deadString} {display:none;opacity:0;pointer-events:none;}</style>`;
  const venom = document.getElementById('venom');
  
  if (venom) {
    venom.innerHTML = cssInject;
  } else {
    document.getElementsByTagName('head')[0].innerHTML += cssInject;
  }
}

// killing...
killing()
