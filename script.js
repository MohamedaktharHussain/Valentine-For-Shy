/* LOGIN */

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function(){

    const pass = document.getElementById("password").value.trim();

    if(pass === "1828"){
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainSite").style.display = "block";
    }
    else{
        document.getElementById("error").innerHTML = "Wrong password 😅";
    }
});

/* BUTTONS */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const letter = document.getElementById("loveLetter");
const album = document.getElementById("album");
const videoSection = document.getElementById("videoSection");
const gallery = document.getElementById("gallery");

yesBtn.addEventListener("click", function(){
    result.innerHTML = "You said YES 💜";
    letter.style.display = "block";
    videoSection.style.display = "block";
    album.style.display = "block";
    loadImages();
});

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton(){
    let x = Math.random()*250 - 125;
    let y = Math.random()*200 - 100;
    noBtn.style.transform = `translate(${x}px,${y}px)`;
}

/* LOAD 49 PHOTOS */

function loadImages(){

    gallery.innerHTML="";

    for(let i=1;i<=49;i++){

        let container=document.createElement("div");
        container.className="photoBox";

        let img=document.createElement("img");
        img.src="images/"+i+".jpg";

        img.onerror=function(){
            this.style.display="none";
        };

        container.appendChild(img);
        gallery.appendChild(container);
    }
}
