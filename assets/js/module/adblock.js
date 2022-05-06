export default function adBlockChecker() {

    setTimeout(() => {

        // Add test element and get its styles
        document.body.innerHTML +=
            '<div class="adsbygoogle" id="ad-detector"></div>';
        let adElement = document.querySelector('#ad-detector'),
            adElementStyle = getComputedStyle(adElement, null),
            adblockEnabled = false,
            detectCheck = document.querySelector('.detect'),
            message = document.querySelector('.message'),
            wrapper = document.querySelector('.wrapper');

        // Adblock is enabled
        if (adElementStyle.display === 'none') {
            adblockEnabled == true;
            detectCheck.innerHTML = 'Adblock detectado!';
            detectCheck.classList.add('ab');
            message.innerHTML = 'Por favor, desligue seu bloqueador de anúncios e recarregue a página.';
            return;
        }
        // Adblock is disabled
        detectCheck.innerHTML = 'Adblock não detectado!';
        detectCheck.classList.add('no-ab');
        message.innerHTML = 'Obrigado por não utilizar um bloqueador.';
        setTimeout(() => {
            wrapper.style.display = 'none';
        }, 2500);

    }, 1500);

}