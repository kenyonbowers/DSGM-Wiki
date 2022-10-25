var dwnldBtn = document.getElementById("button");
var button = document.getElementById("downloadButton");
var JSON = await fetch('https://bowersindustry.github.io/DSGM-Wiki/articles/topical/DSGM%20Versions/DSGM%20Versions%20Available.json').then((result) => {
	return result.json();
});
var ext = "";
JSON.versions.forEach((version, index) => {
	if(version.version == document.getElementsByTagName("title")[0].innerText.split(" ")[4]){
		ext = version.ext;
	}
});

var filename = "DSGM " + document.getElementsByTagName("title")[0].innerText.split(" ")[4] + ext;
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