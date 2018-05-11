function loadImg (src, callback, fail) {
    var img = document.createElement('img');
    img.onload = function () {
        callback(img)
    }
    img.onerror = function () {
        fail()
    }
}

var src = 'https://www.imooc.com/static/img/index/logo.png'
loadImg(src, function (img) {
    console.log(img.width)
}, function () {
    console.log('fail')
})