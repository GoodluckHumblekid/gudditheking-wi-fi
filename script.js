window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("hide");

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000);

    }, 5000);

});