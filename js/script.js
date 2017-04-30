function webservice(url,id)
{
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
    webservice('https://bitcoin.mubiz.com/info', 'info');
    
    webservice('https://bitcoin.mubiz.com/blockchaininfo', 'blockchaininfo');
    
    webservice('https://bitcoin.mubiz.com/peerinfo', 'peerinfo');
    
    webservice('https://bitcoin.mubiz.com/mininginfo', 'mininginfo');
}
