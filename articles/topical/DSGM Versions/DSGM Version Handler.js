var Title = document.getElementsByTagName("title")[0].innerText.split(" ");

async function getJSON(){
    if(Title[3] != "Versions"){
        var VersionsHolder = document.getElementById("VersionsHolder");
        var article = '';
        var amount = 9;

        var JSON = await fetch('https://bowersindustry.github.io/DSGM-Wiki/articles/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
            return result.json()
        });
        JSON.versions.forEach((version, index) => {
            if(version.version == Title[4]){
                for(let i = 1; i < amount + 1; i++){
                    if(JSON.versions[index + i] != undefined){
                        article = article + `<div class="ArticleBackground"><a href="./${JSON.versions[index + i].version}.html"><img src="../../../IMG/DSGM Icons/${JSON.versions[index + i].image}.png" class="ArticleImg"/><div class="ArticleTitleDiv"><p class="ArticleTitle">${JSON.versions[index + i].version}</p></div></a></div>`
                    }
                }
                VersionsHolder.innerHTML = VersionsHolder.innerHTML + article;
            }
        })
    }
    else{
        
    }
}

getJSON();