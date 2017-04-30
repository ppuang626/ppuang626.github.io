function webservice(url,id){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById(id).innerHTML = syntaxHighlight(jsonPretty);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function homePageLoading() {
    url = "https://bitcoin.mubiz.com/info";
    id = "info";
    webservice(url, id);

    url = "https://bitcoin.mubiz.com/blockchaininfo";
    id = "blockchaininfo";
    webservice(url, id);

    url = "https://bitcoin.mubiz.com/mininginfo";
    id = "mininginfo";
    webservice(url, id);

    url = "https://bitcoin.mubiz.com/peerinfo";
    id = "peerinfo";
    webservice(url, id);
}
