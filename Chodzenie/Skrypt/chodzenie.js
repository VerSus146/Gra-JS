var przeciwnik1_żyje=1;
var przeciwnik2_żyje=1;
var zerosek = "";
var zeromin = "";
var zerogodz = "";

function OnLoad() {
}

setInterval(function CzasIData() {
    var currentDate = new Date();
    var element = document.getElementById("CzasIData");
    if(currentDate.getSeconds()<10){
        zerosek = "0";
    }
    else{
        zerosek = "";
    }
    
    if(currentDate.getMinutes()<10){
        zeromin = "0"
    } else {
        zeromin = "";
    }
    
    if(currentDate.getHours() <10) {
        zerogodz = "0";
    } else {
        zerogodz = "";
    }
    
    element.innerHTML = zerogodz + currentDate.getHours() + ":" + zeromin + currentDate.getMinutes() + ":" + zerosek + currentDate.getSeconds() + "<br>";
    element.innerHTML += currentDate.getDate() + "." + (currentDate.getMonth()+1) + "." + currentDate.getFullYear();
    }, 1000);

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
	yolo = canvas.getContext("2d"),
    Starsza_Pani = canvas.getContext("2d"),
    przeciwnik1 = canvas.getContext("2d"),
    przeciwnik2 = canvas.getContext("2d");


var x = 242,
    y = 578,
    velY = 0,
    velX = 0,
    speed = 2,
    friction = 0.8,
    keys = [];

function update() {
    requestAnimationFrame(update);
    
    if (keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }
    
    if (keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x >= 1095) {
        x = 1095;
    } else if (x <= 5) {
        x = 5;
    }

    if (y > 755) {
        y = 755;
    } else if (y <= 5) {
        y = 5;
    }
	
	
	   if (y>=66 && y<=178 && x>=865 && x<=1125) {
		y=95;
		x=853;
		speed=0;
		friction=0;
        document.getElementById("srodkowe_dolne_tekst").innerHTML = "Wpadles do wody.";
		setTimeout(function(){speed=2; friction=0.8 }, 2000);
        setTimeout(function(){document.getElementById("srodkowe_dolne_tekst").innerHTML = "";}, 10000);
		}
    
    if (y>=630 && y<=670 && x>=921 && x<=972 && przeciwnik1_żyje==1){
        przeciwnik1_żyje=0;
        document.getElementById("srodkowe_dolne_tekst").innerHTML = "Stajesz gotowy do walki!";
        speed=0;
		friction=0;
        setTimeout(function() {document.getElementById("containerchodzenie").style.display = "none"}, 5000);
        setTimeout(function() {document.getElementById("containerwalka").style.display = "block"}, 5000);
        Znikanie(1,20,50,50); //ID(1),Mana(20),Zycie(50),Stamina(50),Szczur na moście
    };
    
     if (y>=117 && y<=158 && x>=850 && x<=895 && przeciwnik2_żyje==1){
        przeciwnik2_żyje=0;
        document.getElementById("srodkowe_dolne_tekst").innerHTML = "Stajesz gotowy do walki!";
        speed=0;
		friction=0;
        setTimeout(function() {document.getElementById("containerchodzenie").style.display = "none"}, 5000);
        setTimeout(function() {document.getElementById("containerwalka").style.display = "block"}, 5000);
        Znikanie(2,0,20,100); //ID(2),Mana(0),Zycie(20),Stamina(100), żaba nad stawem
    };
    
    if (y>=476 && y<=536 && x>=454 && x<=515){
        document.getElementById("srodkowe_dolne_tekst").innerHTML = "Witasz się ze staruszką!";
        x=420;
        speed=0;
		friction=0;
        NPC(1);
    }
	
	
	//ctx czyszczacy
	ctx.clearRect(0, 0, 1100, 880);
	
	//jezioro
	yolo.beginPath();
	yolo.drawImage(document.getElementById("jezioro"),840,43,290,140);
	yolo.stroke();
	
	//Kolo
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
	ctx.fillStyle = "blue";
    ctx.fill();
    
    //Starsza Pani
    Starsza_Pani.drawImage(document.getElementById("Starsza_Pani"),460,480,50,50);
    
    //Szczur
    if(przeciwnik1_żyje==1){
    przeciwnik1.drawImage(document.getElementById("szczur"),920,621,50,50);
    }
    
    //Żaba
    if(przeciwnik2_żyje==1){
    przeciwnik2.drawImage(document.getElementById("zaba"),850,110,50,50);
    }
}

update();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

function questy() {
    var questy = document.getElementById("canvas");
    var questy_okno = document.getElementById("questy_okno");
    document.getElementById("questy_tresc").innerHTML = " "
    wyswietlono = false;
                    if (questy.style.display == "none") {
                        questy.style.display = "block";
                        questy_okno.style.display = "none";
                        
                    } else {
                        questy.style.display = "none";
                        questy_okno.style.display = "block";
                    }
};