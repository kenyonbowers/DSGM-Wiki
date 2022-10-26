var downloadButton = document.getElementById("downloadButton");
var filename = "";
var ext = "";
var title = document.getElementsByTagName("title")[0].innerText.split(" ");
var size = "";
var anchor = document.createElement("a");

function getDownload(){
	let contentType = "application/json";
  	fetch("https://raw.githubusercontent.com/BowersIndustry/DSGM-Wiki-Files/main/Article%20Files/topical/DSGM%20Versions/DSGM%20Versions%20Available.json")
    	.then((response) => {
      		const contentEncoding = response.headers.get("content-encoding");
      		const contentLength = response.headers.get(
        		contentEncoding ? "x-file-size" : "content-length"
      		);
      		contentType = response.headers.get("content-type") || contentType;
      		if (contentLength === null) {
        		throw Error("Response size header unavailable");
      		}

      		const total = parseInt(contentLength, 10);

      		return new Response(
        		new ReadableStream({
          			start(controller) {
            			const reader = response.body.getReader();

            			read();

            			function read() {
              				reader
                				.read()
                				.then(({ done, value }) => {
                  					if (done) {
                    					controller.close();
                    					return;
                  					}
                  					controller.enqueue(value);
                  					read();
                				})
                				.catch((error) => {
                  					console.error(error);
                  					controller.error(error);
                				});
            			}
          			},
        		})
      		);
    	})
    	.then((response) => response.blob())
    	.then((blob) => {
    		let url = window.URL.createObjectURL(blob);
			document.body.append(anchor);
			anchor.style = "display: none;"
			anchor.href = url;
			anchor.download = filename;

			downloadButton.style = "background-color: #00ff00;"
			downloadButton.addEventListener("click", function(){
				anchor.click();
			})
    	})
    	.catch((error) => {
      		console.error(error);
    	});
}

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
		getDownload();
	}
	else{
		filename = "File Not Availible";
		document.getElementById("NameOfFile").innerText = "Name: " + filename + " | " + "Size: " + size;
	}
}

getJSON();