var StandaloneArticles = document.querySelectorAll(".Standalone");
var TopicalArticles = document.querySelectorAll(".Topical");

StandaloneArticles.forEach((Article) => {
    console.log(Article.href)
    Article.href = `./articles/standalone/${Article.innerText}.html`
    console.log(Article.href)
});
TopicalArticles.forEach((Article) => {
    console.log(Article.href)
    Article.href = `./articles/topical/${Article.innerText}.html`
    console.log(Article.href)
});