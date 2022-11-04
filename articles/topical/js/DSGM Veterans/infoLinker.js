var contactInfo = '<h2 class="title">Information:</h2><p class="Text">'
var infoDiv = document.getElementById("info");
var pfp = document.getElementById("pfp");

async function GetVeterans(){
    var JSON = await fetch('https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Veterans/VeteransInfo.json').then((result) => {
        return result.json();
    });
    JSON.veterans.forEach((veteran, index) => {
	    if(veteran.Name == document.getElementsByTagName('title')[0].innerText.split(" : ")[1]){
            pfp.src = `../../../IMG/Veterans/${veteran.Name}.png`;
		    if(veteran.Email != ""){
                contactInfo = contactInfo + `Email: <a href="mailto:${veteran.Email}?" subject="DSGM" target="_blank">${veteran.Email}</a><br>`;
            }
            if(veteran.YouTube != ""){
                contactInfo = contactInfo + `YouTube: <a href="https://${veteran.YouTubeValue}" target="_blank">${veteran.YouTube}</a><br>`;
            }
            if(veteran.Facebook != ""){
                contactInfo = contactInfo + `Facebook: <a href="" target="_blank">${veteran.Facebook}</a><br>`;
            }
            if(veteran.Twitter != ""){
                contactInfo = contactInfo + `Twitter: <a href="https://twitter.com/${veteran.Twitter.split("@")[1]}" target="_blank">${veteran.Twitter}</a><br>`;
            }
            if(veteran.Discord != ""){
                contactInfo = contactInfo + `Discord: ${veteran.Discord}<br>`;
            }
            if(veteran.Reddit != ""){
                contactInfo = contactInfo + `Reddit: <a href="https://reddit.com/user/${veteran.Reddit}" target="_blank">${veteran.Reddit}</a><br>`;
            }
            if(veteran.GitHub != ""){
                contactInfo = contactInfo + `GitHub: <a href="https://github.com/${veteran.GitHub}" target="_blank">${veteran.GitHub}</a><br>`;
            }
            if(veteran.Itchio != ""){
                contactInfo = contactInfo + `Itch.io: <a href="https://${veteran.Itchio}.itch.io" target="_blank">${veteran.Itchio}</a><br>`;
            }
            if(veteran.Website != ""){
                contactInfo = contactInfo + `Website: <a href="https://${veteran.Website}" target="_blank">${veteran.Website}</a><br>`;
            }
            if(veteran.Email == "" && veteran.YouTube == "" && veteran.Facebook == "" && veteran.Twitter == "" && veteran.Discord == "" && veteran.Reddit == "" && veteran.GitHub == "" && veteran.Itchio == "" && veteran.Website == ""){
                contactInfo = contactInfo + `Nothing to Show<br>`;
            }
            contactInfo = contactInfo + "</p>";
            infoDiv.innerHTML = contactInfo;
	    }
    });
}

GetVeterans();