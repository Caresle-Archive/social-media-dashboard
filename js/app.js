const body = document.body
const themeSwitcher = document.getElementById('theme-switcher')

let darkTheme = true

themeSwitcher.addEventListener('click', () => {
  if(darkTheme) {
    body.classList.add('light')
    body.classList.remove('dark')
    darkTheme = false
  } else {
    body.classList.add('dark')
    body.classList.remove('light')
    darkTheme = true
  }
})