const body = document.body
const themeSwitcher = document.getElementById('theme-switcher')

let darkTheme = true

themeSwitcher.addEventListener('click', () => {
  if(darkTheme) {
    body.classList.add('light')
    body.classList.remove('dark')
    themeSwitcher.childNodes[0].classList.add('floating-selector')
    darkTheme = false
  } else {
    body.classList.add('dark')
    body.classList.remove('light')
    themeSwitcher.childNodes[0].classList.remove('floating-selector')
    darkTheme = true
  }
})