var dwnldBtn = document.getElementById("downloadButton");
var filename = "";
var ext = "";
var title = document.getElementsByTagName("title")[0].innerText.split(" ");
var size = "";

async function FetchTheRest(){
	
}

async function getEXT(){
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
		fetch(`https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/DSGM%20Downloads/${filename}`)
			.then((response) => {
				if (response.ok) {
			  		return response.blob();
				}
				throw new Error('Something went wrong');
		  	})
			.then((blob) => {
				document.body.append(anchor);
				anchor.style = "display: none;"

       			var url = window.URL.createObjectURL(blob)
				anchor.href = url;
				anchor.download = filename;

				dwnldBtn.style = "background-color: #00ff00;"
			})
			.catch((err) => {
				console.log(err)
			});
	}
	else{
		filename = "File Not Availible";
		document.getElementById("NameOfFile").innerText = "Name: " + filename + " | " + "Size: " + size;
	}
}

getEXT();

var anchor = document.createElement("a");

dwnldBtn.addEventListener("click", function(){
    anchor.click();
})