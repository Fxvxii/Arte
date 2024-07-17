

document.addEventListener('DOMContentLoaded', function () {
    const btn_oculto_texto_1 = document.getElementById('oculto_texto_btn_1');
    const oculto_texto_btn_1 = document.getElementById('oculto_texto_1');

    btn_oculto_texto_1.addEventListener('click', function(){
        oculto_texto_btn_1.classList.toggle('show');
        if (oculto_texto_btn_1.classList.contains('show')) {
            btn_oculto_texto_1.innerHTML = '🖌';
        } else {
            btn_oculto_texto_1.innerHTML = '🖌';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const btn_oculto_texto_3 = document.getElementById('oculto_texto_btn_3');
    const oculto_texto_btn_3 = document.getElementById('oculto_texto_3');

    btn_oculto_texto_3.addEventListener('click', function(){
        oculto_texto_btn_3.classList.toggle('show');
        if (oculto_texto_btn_3.classList.contains('show')) {
            btn_oculto_texto_3.innerHTML = '🖌';
        } else {
            btn_oculto_texto_3.innerHTML = '🖌';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const btn_oculto_texto_2 = document.getElementById('oculto_texto_btn_2');
    const oculto_texto_btn_2 = document.getElementById('oculto_texto_2');

    btn_oculto_texto_2.addEventListener('click', function(){
        oculto_texto_btn_2.classList.toggle('show');
        if (oculto_texto_btn_2.classList.contains('show')) {
            btn_oculto_texto_2.innerHTML = '🖌';
        } else {
            btn_oculto_texto_2.innerHTML = '🖌';
        }
    });
});