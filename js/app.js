const text = document.querySelector(".text")
const search = document.getElementById("reply")
const btnSearch = document.getElementById("search")

document.addEventListener("DOMContentLoaded", function () {
    let apikey = "LIVDSRZULELA";
    let lmt = 20;

    btnSearch.addEventListener("click", function () {
        let term = text.value;
        let url = "https://g.tenor.com/v1/search?q=" + term + "&key=" + apikey + "&limit=" + lmt;
        // console.log(url);

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let myArr = JSON.parse(this.responseText);
                // console.log(myArr);
                let i = 0;
                console.log(myArr["results"].length);
                while(i < myArr["results"].length) {
                    let src = myArr["results"][i]["media"][0]["nanogif"]["url"];
                    const img = document.createElement("img")
                    img.setAttribute("src",src)
                    search.appendChild(img)
                    i++;
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    })
        
});
