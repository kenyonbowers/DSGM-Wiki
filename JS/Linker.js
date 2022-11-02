var LinksClassNames = ["James Garner", "DigitalDesignDude", "CTurt", "Foxi4", "Xcallono", "Buck_7", "Ruffsta", "SandySage", "Robert Dixon", "Eldude", "Wintermute", "Mollusk", "Noda", "BassAceGold", "Joshua Alfonso", "Nicklausw", "Kenyon Bowers"];
var LinkValuePath = "https://bowersindustry.github.io/DSGM-Wiki/articles/topical/DSGM%20Veterans/";
var ExternalLinksNames = ["DSGM Resource Site", "DSGM Install on Win 10/11", "DSGM GitHub", "Discord", "Subreddit", "DSGM Twitter Original", "Fan Site", "Discord Online", "DDD DSGM Examples", "DSGM Examples", "VM", "VM v5.21B", "dsgmBoards"];
var ExternalLinksValues = ["digitaldesigndude.github.io/DSGM-Resource-Site", "github.com/DigitalDesignDude/Ds-Game-Maker-5-Setup", "github.com/jadaradix/dsgamemaker", "discord.gg/vx3g55EPT6", "reddit.com/r/DSGameMaker", "twitter.com/DSGameMaker", "dsgamemaker.online", "discord.gg/MbMD2zzDHS", "surrealcubemedia.itch.io/ds-game-maker-examples", "bowersindustry.itch.io/dsgm-examples", "dropbox.com/s/ylylraogj0lb5hu/windowsxp.ova?dl=0", "dropbox.com/s/ojwr9wgi929xug5/DS%20Game%20Maker%205.21.ova?dl=0", "dsgm.boards.net"];
var VersionLinkValuePath = "https://bowersindustry.github.io/DSGM-Wiki/articles/topical/DSGM%20Versions/";

LinksClassNames.forEach((LinkClassName) => {
    var string = LinkClassName.replaceAll(" ", "")
    var Elements = document.getElementsByClassName(string);
    var ElArray = Array.prototype.slice.call(Elements)
    ElArray.forEach((El) => {
        El.href = LinkValuePath + LinkClassName + ".html";
    })
})

ExternalLinksNames.forEach((LinkClassName, index) => {
    var string = LinkClassName.replaceAll(" ", "")
    var Elements = document.getElementsByClassName(string);
    var ElArray = Array.prototype.slice.call(Elements)
    ElArray.forEach((El) => {
        El.href = "https://" + ExternalLinksValues[index];
        El.target = "_blank"
    })
})

async function LoadVersionHrefs(){
    var JSON = await fetch('https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
        return result.json()
    });
    JSON.versions.forEach((version, index) => {
        var Elements = document.getElementsByClassName(version.version);
        console.log(version.version)
        var ElArray = Array.prototype.slice.call(Elements)
        ElArray.forEach((El) => {
            El.href = VersionLinkValuePath + version.version + ".html";
        })  
    })
}
LoadVersionHrefs();