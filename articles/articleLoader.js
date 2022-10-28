var StandaloneArticles = document.querySelectorAll(".Standalone");
var TopicalArticles = document.querySelectorAll(".Topical");

StandaloneArticles.forEach((Article) => {
    Article.href = `./articles/standalone/${Article.innerText}.html`
    Article.children[0].src = `./IMG/articles/standalone/${Article.innerText}/${Article.innerText}.png`;
});
TopicalArticles.forEach((Article) => {
    Article.href = `./articles/topical/${Article.innerText}.html`
    Article.children[0].src = `./IMG/articles/topical/${Article.innerText}/${Article.innerText}.png`;
});