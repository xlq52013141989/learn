var xhr = new XMLHttpRequest();
xhr.open('GET', '/api', false);
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4) {
        if (xhr.status == 200) {
            alert(xhr.responnseText)
        }
    }
}
xhr.send(null);