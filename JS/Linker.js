var LinksClassNames = ["James Garner", "DigitalDesignDude", "CTurt", "Foxi4", "Xcallono", "Buck_7", "Ruffsta", "SandySage", "Robert Dixon", "Eldude", "Wintermute", "Mollusk", "Noda", "BassAceGold", "Joshua Alfonso", "Nicklausw", "Kenyon Bowers"];
var LinkValuePath = "https://bowersindustry.github.io/DSGM-Wiki/articles/topical/DSGM%20Veterans/";
var ExternalLinksNames = ["DSGM Resource Site", "DSGM Install on Win 10/11", "DSGM GitHub", "Twitter", "Discord", "Subreddit", "DSGM Twitter Original", "Fan Site", "Discord Online", "DDD DSGM Examples"];
var ExternalLinksValues = ["digitaldesigndude.github.io/DSGM-Resource-Site", "github.com/DigitalDesignDude/Ds-Game-Maker-5-Setup", "github.com/jadaradix/dsgamemaker", "twitter.com/DS_Game_Maker", "discord.gg/vx3g55EPT6", "reddit.com/r/DSGameMaker", "twitter.com/DSGameMaker", "dsgamemaker.online", "discord.gg/MbMD2zzDHS", "surrealcubemedia.itch.io/ds-game-maker-examples"];

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