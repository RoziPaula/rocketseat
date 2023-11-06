function toggleMode() {
    const html = document.documentElement

   // if(html.classList.contains('light')) {
   //    html.classList.remove('light')
   // } else {
   //   html.classList.add('light')
   // }

   //abaixo segue uma maneira mais simples de escrever o código acima

   const img = document.querySelector('#profile img')

   html.classList.toggle('light')

     if(html.classList.contains('light')) {
      img.setAttribute('src', '../assets/assets/avatar-let3.png')
    } else {
      img.setAttribute('src', '../assets/assets/avatar-let.png')
    }
}