// send deadString to background and pop
window.sendDeadString = () => {
  const deadString = localStorage.deadString
  if (deadString) chrome.runtime.sendMessage({ key: "deadString", value: deadString })
}