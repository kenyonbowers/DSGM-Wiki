var VersionsHolder = document.getElementById("VersionsHolder");
var article = '<div class="ArticleBackground"><a href="./v5.03.html"><img src="../../../IMG/DSGM Icons/dsgamemaker.com.png" class="ArticleImg"/><div class="ArticleTitleDiv"><p class="ArticleTitle">v5.03</p></div></a></div>'
var Title = document.getElementsByTagName("title")[0].innerText.split(" ")[4];
var object = await fetch('https://bowersindustry.github.io/DSGM-Wiki/articles/topical/DSGM%20Versions/DSGM%20Versions%20Available.json');
console.log(object)

VersionsHolder.innerHTML = VersionsHolder.innerHTML + article;