window.onload = function(){
    if (document.readyState === "complete") {
        document.body.style.overflowY = "hidden";
        setTimeout(function(){
            document.querySelector(".loader-container").classList.add("remove-loader")
            setTimeout(function(){
                document.querySelector(".loader-container").remove();
            }, 1700)
            document.body.style.overflow = "scroll", overflowX = "hidden";
        },1600)
    } else {
        document.querySelector(".loader-container").classList.remove("remove-loader")
    }
}