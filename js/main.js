window.onscroll=function(){
    var t =document.documentElement.scrollTop;
    var header = document.getElementsByTagName("header")[0];
    if (t >= 400) {
        if(!(header.getAttribute("class") == "small")) {
            console.log("设置了small");
            header.setAttribute("class","small");
        }
    }
    if (t < 400) {
        if(header.getAttribute("class") =="small") {
            console.log("设置了null");
            header.setAttribute("class"," ");
        }
    }
}