window.onload = function () {
    // loader js
    document.body.classList.toggle("scroll-hide");
    setTimeout(function () {
        if (document.readyState == "complete") {
            document.querySelector(".loader-container").classList.add("remove-loader");
            setTimeout(function () {
                document.querySelector(".loader-container").remove();
            }, 1600);
            document.body.classList.remove("scroll-hide");
        } else {
            document.querySelector(".loader-container").classList.remove("remove-loader");
        }
    }, 1500)
    // loader js(end)

    // profile css
    if (document.querySelector(".profile-main-wraper")) {
        function disableForm() {
            document.querySelectorAll(".profile-wraper > form > .main-input-container > .inputs-container > .inputs-fields > .float-inputs").forEach(function (hiddenIn) {
                hiddenIn.disabled = true
            });
        }

        function enableForm() {
            document.querySelectorAll(".profile-wraper > form > .main-input-container > .inputs-container > .inputs-fields > .float-inputs").forEach(function (hiddenIn) {
                hiddenIn.disabled = false
            });
        }

        document.querySelectorAll(".profile-wraper > form > .main-input-container > .inputs-container > .inputs-fields > .float-inputs").forEach(function (blueUnderline) {
            blueUnderline.addEventListener("focus", function () {
                blueUnderline.parentNode.classList.add("blur-underline");
            })
        })

        document.querySelectorAll(".profile-wraper > form > .main-input-container > .inputs-container > .inputs-fields > .float-inputs").forEach(function (blueUnderline) {
            blueUnderline.addEventListener("focusout", function () {
                blueUnderline.parentNode.classList.remove("blur-underline");
            })
        })

        disableForm()
        document.querySelector(".edit-profile-btn").onclick = function () {
            enableForm();
            this.innerHTML = "Save Changes";
            document.querySelector(".overlayForm").remove();
            document.querySelectorAll(".input-placeholders").forEach(function (colorPlaceholder) {
                colorPlaceholder.style.color = "#00a09b";
            })
            document.querySelectorAll(".profile-wraper > form > .main-input-container > .inputs-container:first-child > .inputs-fields:first-child > input:first-child").forEach(function (focusName) {
                focusName.focus();
            })
        }

        document.querySelector(".image-upload-wraper").onclick = function () {
            document.querySelector(".image-upload").onchange = function (valueImg) {
                document.querySelector(".profile-img-wraper .user-img").src = URL.createObjectURL(valueImg.currentTarget.files[0]);
                document.querySelector(".user-img").src = document.querySelector(".profile-img-wraper .user-img").src;
            }
            document.querySelector(".image-upload").click();
        }
    }
    // profile css (end)

    // onfocus input label up
    const inputClasses = document.querySelectorAll(".float-inputs");
    inputClasses.forEach(function (getClass) {
        if (getClass.value) {
            addInputTransition(getClass);
        }
    });

    inputClasses.forEach(function (getClass) {
        getClass.addEventListener("focus", function () {
            addInputTransition(getClass);
        })
    });
    // onfocus input label up (end)

    // onfocusout input label down
    inputClasses.forEach(function (getClass) {
        getClass.addEventListener("focusout", function () {
            if (getClass.value) {
                addInputTransition(getClass);
            } else {
                removeInputTransition(getClass);
            }
        })
    });
    // onfocusout input label down (end)

    // world cup prediction
    if (document.querySelectorAll(".team-logo > .team-score:last-child")) {
        document.querySelectorAll(".team-logo > .team-score:last-child").forEach(function (predPlus) {
            predPlus.addEventListener("click", function () {
                const elementApend = this.parentNode;
                const apendWraper = document.querySelector(".apended");
                const withContent = elementApend.cloneNode(true);
                apendWraper.appendChild(withContent);
                document.querySelector(".two-semi-finalist").classList.add("show");
                document.querySelector(".two-semi-finalist").scrollIntoView(false);
                this.children[1].classList.add("show-minus");
                this.childNodes[1].remove();
                this.style.pointerEvents = "none";
                document.querySelectorAll(".apended > .team-logo > .team-score:last-child").forEach(function (twoFinalist) {
                    twoFinalist.onclick = function () {
                        const twoFinalParent = this.parentNode;
                        const twofinal = document.querySelector(".two-finalist-apend");
                        const twoFinalContent = twoFinalParent.cloneNode(true);
                        twofinal.appendChild(twoFinalContent);
                        this.children[1].classList.add("show-minus");
                        this.childNodes[1].remove();
                        this.style.pointerEvents = "none";
                        document.querySelector(".two-final").classList.remove("hide");
                        document.querySelector(".two-final").scrollIntoView(false);
                    }
                })

            })
        })
    }
    // world cup prediction (end)
    // reusable functions for form input transition
    function addInputTransition(getClass) {
        getClass.parentNode.childNodes[1].classList.add("no-opacity");
        getClass.parentNode.childNodes[3].classList.add("up-label");
        getClass.parentNode.classList.add("highligh-underline");
    }

    function removeInputTransition(getClass) {
        getClass.parentNode.childNodes[1].classList.remove("no-opacity");
        getClass.parentNode.childNodes[3].classList.remove("up-label");
        getClass.parentNode.classList.remove("highligh-underline");
    }
    // reusable functions for form input transition (end)

    // radio button js
    const radio1 = document.querySelectorAll(".radio-check");
    radio1.forEach(function (radioLabel1) {
        radioLabel1.addEventListener("click", function () {
            var borderTeam1 = document.querySelector(".border-team");
            if (borderTeam1) {
                borderTeam1.classList.remove("border-team");
            }
            this.parentNode.childNodes[1].childNodes[1].childNodes[1].classList.add("border-team");
        })
    })

    const radio2 = document.querySelectorAll(".radio-check2");
    radio2.forEach(function (radioLabel2) {
        radioLabel2.addEventListener("click", function () {
            var borderTeam2 = document.querySelector(".border-team2");
            if (borderTeam2) {
                borderTeam2.classList.remove("border-team2");
            }
            this.parentNode.childNodes[1].childNodes[1].childNodes[1].classList.add("border-team2");
        })
    })
    // radio button js (end)

    // close ADS
    document.querySelectorAll(".close-add").forEach(function (closeAds) {
        closeAds.addEventListener("click", function () {
            this.parentNode.classList.add("remove-ads");
            setTimeout(() => {
                this.parentNode.remove();
            }, 1000)
        })
    })
    // close ADS (end)

    // hamburger menu
    if (document.querySelector(".ham-wraper")) {
        document.querySelector(".ham-wraper").onclick = function () {
            document.querySelector(".dashboard-left-section").classList.toggle("show-ham");
            document.querySelector(".overlay").classList.toggle("show-overlay");
            document.querySelector(".ham-wraper").classList.toggle("ham-rotate");
            document.body.classList.toggle("scroll-hide");
        }
    }
    // hamburger menu (end)
};