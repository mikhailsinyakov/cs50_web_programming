// Using proxy url to bypass cors policy
const proxyUrl = "https://evening-ridge-46250.herokuapp.com/"

window.addEventListener("load", () => {
    document.getElementsByTagName("form")[0].addEventListener("submit", e => {
        query = e.target.elements["q"].value;
        if (query.length == 0) {
            e.preventDefault();
        }
        else if (e.submitter.id == "lucky-button") {
            e.preventDefault();
            fetch(`${proxyUrl}${e.target.action}?q=${query}`)
                .then(response => response.text())
                .then(html => {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(html, "text/html");
                    let firstResult = doc.querySelector(".g a").href;

                    location.href = firstResult;
                });
        }
    });
});