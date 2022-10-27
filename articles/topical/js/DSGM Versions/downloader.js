var downloadButton = document.getElementById("downloadButton");
var filename = "";
var ext = "";
var title = document.getElementsByTagName("title")[0].innerText.split(" ");
var size = "";
var anchor = document.getElementById("link");

async function getJSON() {
	var JSON = await fetch('https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
		return result.json();
	});
	JSON.versions.forEach((version, index) => {
		if(version.version == title[4]){
			ext = version.ext;
			size = version.size;
		}
	});
	if(ext != ""){
		filename = "DSGM " + title[4] + "." + ext;
		document.getElementById("NameOfFile").innerText = "Name: " + filename + " | " + "Size: " + size;
		downloadButton.href = `https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/DSGM%20Downloads/${filename}`
		downloadButton.style = "background-color: lime;"
	}
	else{
		filename = "File Not Availible";
		document.getElementById("NameOfFile").innerText = "Name: " + filename + " | " + "Size: " + size;
	}
}

getJSON();