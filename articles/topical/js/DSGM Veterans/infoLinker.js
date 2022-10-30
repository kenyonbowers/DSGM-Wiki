var contactInfo = '<h2 class="title">Information:</h2><p class="Text">'
var infoDiv = document.getElementById("info");

async function GetVeterans(){
    var JSON = await fetch('https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Veterans/VeteransInfo.json').then((result) => {
	    return result.json();
    });
    JSON.veterans.forEach((veteran, index) => {
	    if(veteran.Name == document.getElementsByTagName('title')[0].innerText.split(" : ")[1]){
		    if(veteran.Email != ""){
                contactInfo = contactInfo + `Email: <a href="mailto:${veteran.Email}?" subject="DSGM" target="_blank">${veteran.Email}</a><br>`;
            }
            if(veteran.YouTube != ""){
                contactInfo = contactInfo + `YouTube: <a href="${veteran.YouTubeValue}" target="_blank">${veteran.YouTube}</a><br>`;
            }
            if(veteran.Facebook != ""){
                contactInfo = contactInfo + `Facebook: <a href="" target="_blank">${veteran.Facebook}</a><br>`;
            }
            if(veteran.Twitter != ""){
                contactInfo = contactInfo + `Twitter: <a href="https://twitter.com/${veteran.Twitter}" target="_blank">${veteran.Twitter}</a><br>`;
            }
            if(veteran.Discord != ""){
                contactInfo = contactInfo + `Discord: ${veteran.Discord}<br>`;
            }
            if(veteran.Reddit != ""){
                contactInfo = contactInfo + `Reddit: <a href="" target="_blank">${veteran.Reddit}</a><br>`;
            }
            contactInfo = contactInfo + "</p>";
            infoDiv.innerHTML = contactInfo;
	    }
    });
}

GetVeterans();