window.killing = () => {
  // check exits dead string
  if (!localStorage.deadString) return
  // split dead string to get dead list array of query selector
  const deadList = localStorage.deadString.split(';')

  // get options
  const log = (deadList.indexOf('@log') !== -1)

  // start killing process
  if (log) console.log('💀 Killer is running...')
  deadList.forEach(e => {
    if (!e || e[0] === '@') {
      // somthing like null, '', undefine, false ... or a option start with '@'
    } else {
      try {
        // try to DOM query
        const deads = document.querySelectorAll(e)
        deads.forEach(dead => {
          dead.style.display = 'none'
          dead.style.opacity = '0'
          dead.style.pointerEvents = 'none'
        })
        if (log) console.log(`💀 "${e}" x ${deads.length} is dead!`)
      } catch (err) {
        if (log) console.log(`💀 ${e} is not a valid selector.`)
      } 
    }
  })
  if (log) console.log('💀 The killing is done!')
}

// killing...
killing()
