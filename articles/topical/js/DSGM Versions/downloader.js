var dwnldBtn = document.getElementById("button");
var button = document.getElementById("downloadButton");
var filename = "";
var ext = "";
var title = document.getElementsByTagName("title")[0].innerText.split(" ");

async function getEXT(){
	var JSON = await fetch('https://bowersindustry.github.io/DSGM-Wiki/articles/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
		return result.json();
	});
	console.log(JSON)
	JSON.versions.forEach((version, index) => {
		console.log(JSON.versions[index].ext)
		if(version.version == title[4]){
			ext = version.ext;
			console.log(version.ext)
		}
	});

	console.log(ext)

	filename = "DSGM " + document.getElementsByTagName("title")[0].innerText.split(" ") + "." + ext;
}
getEXT();

var anchor = document.createElement("a");

fetch(`https://bowersindustry.github.io/DSGM-Wiki/files/DSGM%20Downloads/DSGM%20${filename.split(" ")[1]}`)
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

dwnldBtn.addEventListener("click", function(){
    anchor.click();
})