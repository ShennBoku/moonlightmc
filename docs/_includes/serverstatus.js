// Handling errors
function handleErrors(response) {
    if (!response.ok) {
        document.getElementById("serverStatus").innerHTML = "";
        document.getElementById("serverStatusM").innerHTML = "";
        document.getElementById("serverLogoName").classList.remove("hidden");
    }
    return response;
}

// Fetch API, mcsrvstat
fetch("https://api.mcsrvstat.us/2/49.128.187.70:25612")
    .then(handleErrors)
    .then(response => {
        return response.json();
    })
