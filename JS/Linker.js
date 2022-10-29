var LinksClassNames = []/*["JamesGarner", "DigitalDesignDude"]*/;
var LinkValuePath = "../articles/topical/DSGM Veterans/";

LinksClassNames.forEach((LinkClassName) => {
    var Elements = document.getElementsByClassName(LinkClassName);
    var ElArray = Array.prototype.slice.call(Elements)
    ElArray.forEach((El) => {
        El.href = LinkValuePath + LinkClassName + ".html";
    })
})