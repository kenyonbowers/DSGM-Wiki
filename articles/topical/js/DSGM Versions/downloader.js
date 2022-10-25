var dwnldBtn = document.getElementById("button");
var button = document.getElementById("downloadButton");
var filename = "";
var ext = "";
var title = document.getElementsByTagName("title")[0].innerText.split(" ");

async function getEXT(){
	var JSON = await fetch('https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
		return result.json();
	});
	JSON.versions.forEach((version, index) => {
		if(version.version == title[4]){
			ext = version.ext;
		}
	});

	filename = "DSGM " + title[4] + "." + ext;
	FetchTheRest();
}
getEXT();

var anchor = document.createElement("a");

async function FetchTheRest(){
	fetch(`https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/DSGM%20Downloads/${filename}`)
		.then(res => res.blob())
		.then(blob => {
			document.body.append(anchor);
			anchor.style = "display: none;";

        	var url = window.URL.createObjectURL(blob)
			anchor.href = url;
			anchor.download = filename;

			button.style = "background-color: #00ff00;"
		}
	);
}

dwnldBtn.addEventListener("click", function(){
    anchor.click();
})