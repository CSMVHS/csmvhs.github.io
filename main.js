let feed;

function local(mod) {
    return;
    csmvhsVisits = localStorage.getItem("csmvhsVisits");
    if (!csmvhsVisits) {
        csmvhsVisits = 0;
    }
    if (mod === "init") {
        csmvhsVisits++;
    }
    localStorage.setItem("csmvhsVisits", csmvhsVisits);
}

function loadingCover() {
    const coverHTML = `<h1>There was an error.</h1>`;
    const coverEl = document.createElement("div");
    coverEl.classList.add("loading");
    coverEl.innerHTML = coverHTML;
    document.body.appendChild(coverEl);
    const cover = document.querySelector("div.loading");

    function doCover() {
        cover.style.display = "flex";

        setTimeout(() => {
            if (document.readyState === "complete") {
                cover.style.transform = "translateY(100%)";
                cover.style.opacity = 0.75;
                return;
            }

            window.onload = function() {
                cover.style.transform = "translateY(100%)";
                cover.style.opacity = 0.75;
            }
        }, 900);

        const loadingMessages = [
            "Brewing digital coffee...",
            "Compiling quantum algorithms...",
            "Defragmenting the digital soul...",
            "Sorting ones and zeros...",
            "Exploring the labyrinth of code...",
            "Iterating to infinity and beyond...",
            "Initializing the universe...",
            "Constructing digital Lego bricks...",
            "Mapping the neural network...",
            "Whispering to the server gods...",
            "Encrypting with top-secret algorithms...",
            "Teleporting data packets...",
            "Syncing across the multiverse...",
            "Hatching virtual machines...",
            "Docking containers in the cloud...",
            "Performing the digital handshake...",
            "Teaching robots to dream...",
            "Querying the oracle of data...",
            "Sharpening index for light-speed queries...",
            "Mining for golden features...",
        ]

        const messageEl = document.querySelector("div.loading h1");
        const message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        messageEl.innerHTML = message;
    }

    doCover();
}

function randomBannerImage() {
    if (!(location.pathname == "/")) {
        return;
    }

    const banners = [
        "/csmvhs/images/codecity.png",
    ]

    const bannerEl = document.querySelector("section.banner");
    bannerEl.style.backgroundImage = `url(${banners[Math.floor(Math.random() * banners.length)]})`;
}

function hideOnScroll() {
    const hintArrow = document.querySelector("section.banner i.hint-arrow");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            hintArrow.style.opacity = 0;
        } else {
            hintArrow.style.opacity = 1;
        }
    })
}

function navImage() {
    const images = document.querySelectorAll("img.nav-home");
    images.forEach(img => {
        img.addEventListener("click", () => {
            window.location.href = "/csmvhs/";
        })
    });
}

function navShow() {
    const navHTML = `<img src="/csmvhs/images/cshs.png" class="nav-home">
    <!-- <a class="nav-register direct">Register</a> -->
    <a class="nav-attendance direct">Attendance</a>

    <div class="dropdown">
      <a class="nav-competitions dropper">Competitions</a>
      <div class="dropdown-content-wrapper">
        <div class="dropdown-content">
          <a class="nav-competitions-info">Info</a>
        </div>
      </div>
    </div>
    <div class="dropdown">
      <a class="nav-slideshows dropper">Slideshows</a>
      <div class="dropdown-content-wrapper">
        <div class="dropdown-content">
          <a class="nav-slideshows-january">January</a>
        </div>
      </div>
    </div>`;
    const navEl = document.createElement("nav");
    navEl.innerHTML = navHTML;
    document.body.appendChild(navEl);
}

function officersContactButtons() {
    const contactButtons = document.querySelectorAll("body#officers div.staff button.email");
    contactButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button.getAttribute('email'));
            window.location.href = `mailto:${button.getAttribute('email')}`;
        })
    })
}

function navClicks() {
    const homeImg = document.querySelectorAll("nav img.nav-home");
    homeImg.forEach(img => {
        img.addEventListener("click", () => {
            window.location.href = "/csmvhs/";
        })
    })

    const directs = document.querySelectorAll("nav a.direct");
    directs.forEach(dct => {
        dct.addEventListener("click", (e) => {
            e.preventDefault();
            if (dct.classList[0] === "nav-attendance") {
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSc6H-MgWrG5BaRCc-z8L2O5DqTlBGiM4N8D9c3w0OjDdfL4CQ/viewform", "_blank");
                return;
            }
            window.location.href = `/csmvhs/${(dct.classList[0]).substring(4)}`;
        })
    })

    const competitionsDropdownEls = document.querySelectorAll("nav a.nav-competitions a");
    // todo: dropdown clicks
}


local("init");
loadingCover();
randomBannerImage();
hideOnScroll();
navImage();
navShow();
navClicks();
officersContactButtons();