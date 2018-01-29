var currentHtmlContent;
 
var element = new Image();
 
var elementWithHiddenContent = document.querySelector("#element-to-hide");
 
var innerHtml = elementWithHiddenContent.innerHTML;
 
 
 
element.__defineGetter__("id", function() {
 
    currentHtmlContent= "";
 
});
 
 
 
setInterval(function() {
 
    currentHtmlContent= innerHtml;
 
    console.log(element);
 
    console.clear(); 
 
    elementWithHiddenContent.innerHTML = currentHtmlContent;
 
}, 1000);