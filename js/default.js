const buttonElm = document.getElementById('brexis-button');
const buttonType = buttonElm.getAttribute('button-type');
if (buttonType == 'register') {
    buttonElm.innerHTML = 'Register with Brexis'
}
if (buttonType == 'login') {
    buttonElm.innerHTML = 'Login with Brexis'
}

function brexisButton() {
    const buttonElm = document.getElementById('brexis-button');
    const buttonType = buttonElm.getAttribute('button-type');
    const apiKey = buttonElm.getAttribute('api-key');
    const siteUrl = window.location.hostname;
    if (buttonType == 'register' || buttonType == 'login') {
        if (buttonType == 'register') {
            brexisPopUpWindow = window.open('https://secure.brexis.net/register/?type=' + buttonType + '&site-api-key=' + apiKey + '&site-url=' + siteUrl, 'myWindow', 'width = 360, height = 540 ');
        }
    } else {
        const invalidbuttonType = Error('Invalid button-type');
        console.log(invalidbuttonType);
    }
}