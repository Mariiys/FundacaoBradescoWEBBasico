'use strict'
// usando o método toggle para alternar o elemento 
//para a classe dark-theme, que criamos no arquivo css.
// o rótulo do botão
// também precisa ser atualizado para mostrar o tema correto
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = 'Dark';
    }
    else {
        this.textContent = 'Light';
    }
});