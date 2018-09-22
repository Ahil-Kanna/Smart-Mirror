function readJson(mydata) {
    var div = document.getElementById('data');
    let x = 100;
    console.log(mydata);
    if (mydata.totalResults < 100)
        x = mydata.totalResults;
    for (var i = 0; i < x; i++) {

        if (mydata.articles[i].title != null) {
            div.innerHTML = div.innerHTML + "<div class=\"container\" id=\"scrollpage\"> \n<div class=\"container pad\"><img src=\"News/tag.png\" /> \n<p> " + mydata.articles[i].title + "</p>" + "\n " //+"\n<p>"+mydata.articles[i].description+"</p>"
                +
                "\n</div> \n</div>";
        }

    }

}


let url1 = "https://newsapi.org/v2/top-headlines?sources=espn&apiKey=aa1293652d0541cfbc0e17874727b4a1";
let url2 = "https://newsapi.org/v2/everything?sources=espn&apiKey=aa1293652d0541cfbc0e17874727b4a1";
let url3 = "https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=aa1293652d0541cfbc0e17874727b4a1";
let url = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=aa1293652d0541cfbc0e17874727b4a1";

function fetch() {
    newapi(url);
    //newapi(url3);
    newapi(url1);
}

function newapi(url) {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", url, true);
    xhReq.send();
    xhReq.onreadystatechange = function () {
        if (xhReq.readyState == 4 && xhReq.status == 200) {
            //console.log(xhReq.responseText);
            readJson(JSON.parse(xhReq.responseText));
        }
    }
}

function pageScroll() {

    $("#data").animate({
        scrollTop: $('#data').prop("scrollHeight")
    }, 40000);
    scrolldelay = setTimeout('pageScrollReverse()', 300); // scrolls every 300 milliseconds
}

function pageScrollReverse() {
    $("#data").animate({
        scrollTop: 0
    }, 30000);
    scrolldelay = setTimeout('pageScroll()', 300); // scrolls every 300 milliseconds
}

function fullscreen() {
    var docElm = document.body;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.msRequestFullscreen) {
        docElm = document.body; //overwrite the element (for IE)
        docElm.msRequestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
}