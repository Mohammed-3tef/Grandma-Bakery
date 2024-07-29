let currentIndex = 0;
const slides = document.querySelector(".slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function nextImg () {
    currentIndex = (currentIndex + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevImg () {
    currentIndex =
    currentIndex == 0
        ? slides.children.length - 1
        : (currentIndex - 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

const offers = [
    {
        Image: "Images/Offers/Bread.svg",
        Name: "Bread",
    },
    {
        Image: "Images/Offers/Cookies.svg",
        Name: "Cookies",
    },
    {
        Image: "Images/Offers/Marcon.svg",
        Name: "Marcon",
    },
    {
        Image: "Images/Offers/Pretzel.svg",
        Name: "Pretzel",
    },
    {
        Image: "Images/Offers/Cupcakes.svg",
        Name: "Cupcakes",
    },
    {
        Image: "Images/Offers/Cakes.svg",
        Name: "Cakes",
        
    }
];

offers.forEach((item) => {
    document.getElementById("offerDetails").innerHTML += 
    `
        <div class="offerCard">
            <img src="${item.Image}" class="offerImage" alt="${item.Name}">
            <div style="padding-top: 1.5rem;">
                <a href=""> <p class="offerName">${item.Name}</p> </a>
            </div>
        </div>
        
        <style>
            .offerCard {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: fit-content; 
                justify-content: space-between;
                max-height: fit-content; 
                background: transparent;
                padding: 1.25rem; 
                a {
                    color: black;
                    text-decoration: none;
                    transition: 350ms;
                    .offerName {
                        font-size: 1.25rem;
                        text-align: center;
                    }
                }
                .offerImage {
                    max-width: 80%;
                    max-height: 80%;
                }
            }
            a:hover {color: rgb(229, 134, 8);}
            
            @media (max-device-width: 800px){
                .offerCard {
                    max-width: fit-content;
                }
            }
        </style>
    `
});


nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);