/* değişkenler */ 
var MenuControl = document.getElementById("MenuControl");
var Menutext = document.getElementById("Menutext");
var Menubar = document.getElementById("menubar");
var logoid = document.getElementById("logo");
var Logotext = document.getElementById("Logotext");
var listelement = document.getElementsByTagName("LI");

function MenuClick() {
    
    MenuControl.classList.toggle("hamburger-open");
    MenuControl.classList.toggle("hamburger-close");

    Menutext.classList.toggle("menubar-close");

    Menubar.classList.toggle("menubar-open");

    /* logo close open */ 
    
    logoid.classList.toggle("logo-close");
    
    
    Logotext.classList.toggle("text-close");
    Logotext.classList.toggle("Logotext");

}

function MenuTemizle() {
        /* liste temizleme */ 
        for(let baslangic = 0; baslangic<listelement.length; baslangic++) {
            var listeremoveelement = listelement[baslangic];
            if(baslangic<=4) {
                if(listeremoveelement.classList.length >0 && listeremoveelement.classList.length <=1) {
                    listeremoveelement.classList.remove("listitem");
                }
            }
        }
}

document.getElementById("MenuControl").addEventListener("click", MenuClick);
document.getElementById("MenuControl").addEventListener("click", MenuTemizle);

for (let sayi = 0; sayi<listelement.length; sayi++) {
    var listItem = listelement[sayi];
    
    if(sayi==5) {
        listItem.addEventListener("click",MenuClick);
        function style() {
            listelement[0].classList.toggle("listitem");
        }
        listItem.addEventListener("click",style);
    }else if (sayi==6) {
        listItem.addEventListener("click",MenuClick);
        function style() {
            listelement[1].classList.toggle("listitem");
        }
        listItem.addEventListener("click",style);
    }else if (sayi==7) {
        listItem.addEventListener("click",MenuClick);
        function style() {
            listelement[2].classList.toggle("listitem");
        }
        listItem.addEventListener("click",style);
    }else if (sayi==9) {
        listItem.addEventListener("click",MenuClick);
        function style() {
            listelement[4].classList.toggle("listitem");
        }
        listItem.addEventListener("click",style);
    }
}


