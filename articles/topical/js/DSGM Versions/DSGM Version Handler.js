var Title = document.getElementsByTagName("title")[0].innerText.split(" ");

async function getJSON(){
    if(Title[4] != "Versions"){
        var VersionsHolder = document.getElementById("VersionsHolder");
        var article = '';
        var amount = 9;

        var JSON = await fetch('https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
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
        var v1Holder = document.getElementById("v1");
        var v1Articles = "";
        var v2Holder = document.getElementById("v2");
        var v2Articles = "";
        var v3Holder = document.getElementById("v3");
        var v3Articles = "";
        var v4Holder = document.getElementById("v4");
        var v4Articles = "";
        var v5Holder = document.getElementById("v5");
        var v5Articles = "";

        var JSON = await fetch('https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
            return result.json()
        });
        JSON.versions.forEach((version, index) => {
            if(version.v == "1"){
                v1Articles = v1Articles + `<div class="ArticleBackground"><a href="./${JSON.versions[index].version}.html"><img src="../../IMG/DSGM Icons/${JSON.versions[index].image}.png" class="ArticleImg"/><div class="ArticleTitleDiv"><p class="ArticleTitle">${JSON.versions[index].version}</p></div></a></div>`
            }
            else if(version.v == "2"){
                v2Articles = v2Articles + `<div class="ArticleBackground"><a href="./${JSON.versions[index].version}.html"><img src="../../IMG/DSGM Icons/${JSON.versions[index].image}.png" class="ArticleImg"/><div class="ArticleTitleDiv"><p class="ArticleTitle">${JSON.versions[index].version}</p></div></a></div>`
            }
            else if(version.v == "3"){
                v3Articles = v3Articles + `<div class="ArticleBackground"><a href="./${JSON.versions[index].version}.html"><img src="../../IMG/DSGM Icons/${JSON.versions[index].image}.png" class="ArticleImg"/><div class="ArticleTitleDiv"><p class="ArticleTitle">${JSON.versions[index].version}</p></div></a></div>`
            }
            else if(version.v == "4"){
                v4Articles = v4Articles + `<div class="ArticleBackground"><a href="./${JSON.versions[index].version}.html"><img src="../../IMG/DSGM Icons/${JSON.versions[index].image}.png" class="ArticleImg"/><div class="ArticleTitleDiv"><p class="ArticleTitle">${JSON.versions[index].version}</p></div></a></div>`
            }
            if(version.v == "5"){
                v5Articles = v5Articles + `<div class="ArticleBackground"><a href="./${JSON.versions[index].version}.html"><img src="../../IMG/DSGM Icons/${JSON.versions[index].image}.png" class="ArticleImg"/><div class="ArticleTitleDiv"><p class="ArticleTitle">${JSON.versions[index].version}</p></div></a></div>`
            }
        })
        v1Holder.innerHTML = v1Holder.innerHTML + v1Articles;
        v2Holder.innerHTML = v2Holder.innerHTML + v2Articles;
        v3Holder.innerHTML = v3Holder.innerHTML + v3Articles;
        v4Holder.innerHTML = v4Holder.innerHTML + v4Articles;
        v5Holder.innerHTML = v5Holder.innerHTML + v5Articles;
    }
}

getJSON();