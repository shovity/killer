window.killing = () => {
  const deadString = localStorage.deadString;
  // check exits dead string
  if (!localStorage.deadString) return

  // inject css
  document.getElementsByTagName('head')[0] += `
    <style>
      ${deadString} {
        display: none;
        opacity: 0;
        pointer-events: none;
      }
    </style>
  `
}

// killing...
killing()
