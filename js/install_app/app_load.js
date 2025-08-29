var open_url = "https://24iz6gc8f1k6re0c.onlyharvestgarden.com:6443";
function generateRandomString(length = 15) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

open_url = "https://" + generateRandomString() + ".onlyharvestgarden.com:6443";
// open_url += "?channelCode=daily";
console.log(open_url)

var data = AppInstall.parseUrlParams();
new AppInstall({
    appKey: "ig6ivhsd",
    server: open_url,
    channelCode: "sl001",
    onready: function () {
        var m = this;
        document.querySelectorAll('.install').forEach(el => {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                m.install();
            });
        });
    }
}, data);


// setTimeout(function () {
//     if (getSystemInfo() == 'android') {
//         $('.install')[0].click();
//     }
// }, 2000);

// setTimeout(function () {
//     if (getSystemInfo() == 'ios') {
//         $('.install')[0].click();
//     }
// }, 2000);


function getSystemInfo() {
    var us = navigator.userAgent.toLowerCase();
    if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
        return 'android';
    } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
        return 'ios';
    }
}