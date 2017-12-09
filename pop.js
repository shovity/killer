// save on blur textarea
deadString.addEventListener('blur', () => {
  // replace all enter char with ';'
  const newDeadString = deadString.value.replace(/\n/g, ';')
  // Generate code for inject to content script
  // save to localStorage or remove localStorage if null
  const code = newDeadString === '' ?
  "localStorage.removeItem('deadString')" :
  `localStorage.deadString = '${newDeadString}'; window.killing()`

  chrome.tabs.executeScript({ code })
})

// listen dead string
chrome.runtime.onMessage.addListener((mes) => {
  if (mes.key === 'deadString') {
    const dt = mes.value.replace(/;/g, '\n')
    deadString.value = dt || ''
  }
})

// request dead string
chrome.tabs.executeScript({ code: 'window.sendDeadString()' })