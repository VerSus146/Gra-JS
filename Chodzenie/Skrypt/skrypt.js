//Zmienne    
	
				var glebokie_uzyto = 0;
				var krwawienie_obrazenia = 3;
				var obrona = 0;
                var ID_potwora,
                    Zycie_potwora,
                    Mana_potwora,
                    Stamina_potwora,
                    ostatnie_tchnienie;
                

//kolory
			
				var stamina_tekst = "staminy"
				var zielonykolor = stamina_tekst.fontcolor("#46e540");
				var mana_tekst = "many"
				var niebieskikolor = mana_tekst.fontcolor("#50b4ff");
				var obrazeniatekst =  "HP";
				var czerwonykolor = obrazeniatekst.fontcolor("#ea2e2e");
            
//On load       
 
            function Znikanie(ID,Mana,Zycie,Stamina) {
                // Przypisanie
                ID_potwora=ID;
                Zycie_potwora=Zycie;
                Mana_potwora=Mana;
                Stamina_potwora=Stamina;
                // Zycie przeciwnika
                document.getElementById("wyswietl_zycie_przeciwnika").innerHTML = Zycie_potwora + " / " + Zycie;
                document.getElementById("zycie_przeciwnika").max = Zycie_potwora;
                document.getElementById("zycie_przeciwnika").value = Zycie_potwora;
                //Stamina przeciwnika
                document.getElementById("wyswietl_kondycje_przeciwnika").innerHTML = Stamina_potwora + " / " + Stamina;
                document.getElementById("kondycja_przeciwnika").max = Stamina_potwora;
                document.getElementById("kondycja_przeciwnika").value = Stamina_potwora;
                //Mana przeciwnika
                document.getElementById("wyswietl_mane_przeciwnika").innerHTML = Mana_potwora + " / " + Mana;
                document.getElementById("mana_przeciwnika").max = Mana_potwora;
                document.getElementById("mana_przeciwnika").value = Mana_potwora;
                //Zdjęcie przeciwnika
                if (ID_potwora==1){
                ostatnie_tchnienie = Math.floor(Math.random() * (4-1) +1); // Rand 3-1
                document.getElementById("avatar_przeciwnika").innerHTML = "<img src='Chodzenie_po_mapie/Chodzenie/zdj/szczur.png' style='width: 100%; height: 100%;'/>"
                } else if(ID_potwora==2){
                ostatnie_tchnienie = Math.floor(Math.random() * (3-1) +1); // Rand 2-1
                document.getElementById("avatar_przeciwnika").innerHTML = "<img src='Chodzenie_po_mapie/Chodzenie/zdj/Walka/Zaba.png' style='width: 100%; height: 100%;'/>"
                }
                //Wywołanie
                Przedmioty();
                Czary();
                
            };
        
//Auto scroll
		
            function setup(){
                var pole_tekstowe = document.getElementById("pole_tekstowe");
                pole_tekstowe.scrollTop = pole_tekstowe.scrollHeight;
                if(document.getElementById("zycie_postaci").value==0){
                    document.write("Ju Ar Ded XD");
                }
            };
            
//Atak 
    
            function AtakWRecz() {
				
				var pasek_kondycji_postaci = document.getElementById("kondycja_postaci");
				var pasek_zycia_przeciwnika = document.getElementById("zycie_przeciwnika");
				
                if(pasek_kondycji_postaci.value<25) {
                        document.getElementById('pole_tekstowe').innerHTML += "Nie masz wystarczającej ilości " + zielonykolor + ".  <br /> <br />";
                    setup();
                }
                    else {

							var obrazenia = Math.floor(Math.random() * (6-1) +1); // Rand 5-1
							var obrazeniatekst =  obrazenia + " HP";
							var czerwonykolor = obrazeniatekst.fontcolor("#ea2e2e");
							
								pasek_kondycji_postaci.value -=25;
                                pasek_zycia_przeciwnika.value -= obrazenia;
						
						document.getElementById('pole_tekstowe').innerHTML += "Zaatakowałeś za " + czerwonykolor + ". <br /> <br />" ;
                        document.getElementById("wyswietl_kondycje").innerHTML = pasek_kondycji_postaci.value + "/100";
                        document.getElementById("wyswietl_zycie_przeciwnika").innerHTML = pasek_zycia_przeciwnika.value + "/" + Zycie_potwora;
                        setup();
                        Tura();
                        
                }
                              
                             };
   
//Odpoczynek
   
            function Odpoczynek() {
				
				var pasek_kondycji_postaci= document.getElementById("kondycja_postaci");
				
                pasek_kondycji_postaci.value= 100;
             document.getElementById("wyswietl_kondycje").innerHTML = pasek_kondycji_postaci.value + "/100";
             document.getElementById('pole_tekstowe').innerHTML += "Pomijasz kolejkę i odpoczywasz. <br />Uzupełniasz pasek " + zielonykolor + ". <br /> <br />";
                setup();
                Tura();

                
};

//Menu Magia

            function Czary() {
				var poleprzedmioty = document.getElementById("Przedmioty");
                var menu_czary = document.getElementById("Magia");
                    if (menu_czary.style.display == "none") {
                    menu_czary.style.display = "block";
                    } else {
                        menu_czary.style.display = "none";
                    } 
                if (menu_czary.style.display == "block") {
                        poleprzedmioty.style.display = "none"
                        
                }   else if (menu_czary.style.display == "none") {
                            poleprzedmioty.style.display = "none"
                            }
                    };

 //Menu przedmioty
            function Przedmioty() {
                var menu_czary = document.getElementById("Magia");
                var poleprzedmioty = document.getElementById("Przedmioty");
                if (poleprzedmioty.style.display == "none") {
                    menu_czary.style.display = "none";
                    poleprzedmioty.style.display = "block";
                } else {
                    poleprzedmioty.style.display ="none";
                }
            };
                    
//Kula ognia

            function kula_ognia() {
				
				var pasek_many_postaci = document.getElementById("mana_postaci");
				var pasek_zycia_przeciwnika =   document.getElementById("zycie_przeciwnika");
				
                if(pasek_many_postaci.value<35){
                    document.getElementById('pole_tekstowe').innerHTML += "Nie posiadasz wystarczającej ilości " + niebieskikolor + ". <br /> <br />"; 
                    setup();
                    Czary();
                }
                    else {  
					
							var obrazenia = 35;
							var obrazeniatekst = obrazenia + " HP"
							var czerwonykolor = obrazeniatekst.fontcolor ("#ea2e2e")
							
                            document.getElementById('pole_tekstowe').innerHTML += "Rzuciłeś kulę ognia i zadałeś " + czerwonykolor + ". <br /> <br />" ;
                                pasek_many_postaci.value -=35;
                                pasek_zycia_przeciwnika.value -= obrazenia;
								
                            document.getElementById("wyswietl_mane").innerHTML = pasek_many_postaci.value + "/100"; 
                            document.getElementById("wyswietl_zycie_przeciwnika").innerHTML = pasek_zycia_przeciwnika.value + "/" + Zycie_potwora;
                        setup();
                        Czary();
                        Tura();
                        
                    }
                
};
               

            function kula_ognia_opis_wysk(x) { 
			
                var mana_tekst = "many"
                var niebieskikolor = mana_tekst.fontcolor("#50b4ff");
				
                document.getElementById("opis_czarow").innerHTML = "Koszt : 35 " + niebieskikolor;
            };

            function kula_ognia_opis_znik(x) {
                document.getElementById("opis_czarow").innerHTML = "";
};

 //Tura przeciwnika po kliknięciu przycisku
	
			function Tura() {
                var menu_przedmioty = document.getElementById("Przedmioty")
                var menu_czary = document.getElementById("Magia");
                var poleaakcji = document.getElementById("pole_akcji");
                    if (poleaakcji.style.display == "none") {
                        menu_przedmioty.style.display = "none";
                        poleaakcji.style.display = "block";
                        menu_czary.style.display = "none";
                    } else {
                        poleaakcji.style.display = "none";
                        menu_przedmioty.style.display = "none";
                        menu_czary.style.display = "none";
                    }
                    setTimeout(function(){
                    if (krwawienie.value>0){
                                    var pasek_zycia_postaci = document.getElementById("zycie_postaci");
                                    pasek_zycia_postaci.value-=3;
                                    var obrazeniatekst = krwawienie_obrazenia + " HP"
                                    var obrazeniakolor= obrazeniatekst.fontcolor("#ea2e2e");
                                    document.getElementById("wyswietl_zycie").innerHTML = pasek_zycia_postaci.value + "/100"
                                    document.getElementById("pole_tekstowe").innerHTML += "Krwawisz, przez co tracisz " + obrazeniakolor + ". <br /> <br />";
                                }
                        }, 1500);
                    Tura_przeciwnika();
                
};

            function Tura_przeciwnika() {
                
               // Mózg szczura 
				if(ID_potwora==1){

				
    setTimeout(function(){ 
                //przypisanie
                var pasek_zycia_postaci = document.getElementById("zycie_postaci");
                var pasek_kondycji_przeciwnika = document.getElementById("kondycja_przeciwnika");
                var pasek_zycia_przeciwnika = document.getElementById("zycie_przeciwnika");
                var krwawienie = document.getElementById("krwawienie");
                // Ostatnie tchnienie
                if(pasek_zycia_przeciwnika.value==0 && ostatnie_tchnienie==1) {
                                    alert("Trafiłeś w ogon i nie zabiłeś szczura. Ten wciąż krwawiąćy szczur rzuca się na Ciebie ostatnimi siłami.");
                                    pasek_zycia_przeciwnika.value+=10;
                                    ostatnie_tchnienie =3;
                                document.getElementById("wyswietl_zycie_przeciwnika").innerHTML = pasek_zycia_przeciwnika.value + "/" + Zycie_potwora;
                //Śmierć wroga
                                } else if(pasek_zycia_przeciwnika.value==0){
                                    setTimeout(function(){speed=2; friction=0.8 }, 2000);
                                   
                                    document.getElementById("pole_tekstowe").innerHTML = "";
                                    document.getElementById("containerwalka").style.display = "none";
                                    document.getElementById("containerchodzenie").style.display = "block";
                                    document.getElementById("srodkowe_dolne_tekst").innerHTML = "Zabiłeś szczura. :)";
                //Głębokie rany
                                } else if (glebokie_uzyto==0 && pasek_zycia_przeciwnika.value*2<pasek_zycia_postaci.value && pasek_kondycji_przeciwnika.value>20) {
                                    var atak_przeciwnika = Math.floor(Math.random() * (4-1) +1); // Rand 3-1
                                    var obrazenia_tekst = atak_przeciwnika*3 + " HP"
                                    var obrazeniakolor = obrazenia_tekst.fontcolor ("#ea2e2e")
                                    
                                    pasek_zycia_postaci.value -= atak_przeciwnika*3;
                                        pasek_kondycji_przeciwnika.value -=20;
                                            document.getElementById("wyswietl_zycie").innerHTML = pasek_zycia_postaci.value + "/100";
                                            document.getElementById("wyswietl_kondycje_przeciwnika").innerHTML = pasek_kondycji_przeciwnika.value + "/" + Stamina_potwora
                                                document.getElementById("pole_tekstowe").innerHTML += "Szczur skacze Ci na rękę. Zadaje " + obrazeniakolor + ". Ponad to sprawia że krwawisz. <br /> <br />";
                                            
									krwawienie.value=4; 
                                    glebokie_uzyto++;
                                    setup();
									Debuff();
							
                     
                                    
                                     } 
                                    //Atak
                                    else if (pasek_kondycji_przeciwnika.value>15){
                                    var atak_przeciwnika = Math.floor(Math.random() * (4-1) +1); // Rand 3-1
                                    var obrazenia_tekst = atak_przeciwnika + " HP"
                                    var obrazeniakolor = obrazenia_tekst.fontcolor ("#ea2e2e")
                                    
                                    pasek_zycia_postaci.value -= atak_przeciwnika;
                                    pasek_kondycji_przeciwnika.value -=15;
                                        document.getElementById("wyswietl_zycie").innerHTML = pasek_zycia_postaci.value + "/100"
                                        document.getElementById("wyswietl_kondycje_przeciwnika").innerHTML = pasek_kondycji_przeciwnika.value + "/" + Stamina_potwora
                                            document.getElementById("pole_tekstowe").innerHTML += "Szczur gryzie za " + obrazeniakolor + ". <br /> <br />";
                                    
                                    setup();
                                    Debuff();
								
                                    
                }              
                                    //Odpoczynek
                                    else if(pasek_kondycji_przeciwnika.value<=15) {
                                    pasek_kondycji_przeciwnika.value = 100;
                                        document.getElementById("wyswietl_kondycje_przeciwnika").innerHTML = pasek_kondycji_przeciwnika.value + "/" + Stamina_potwora
                                        document.getElementById("pole_tekstowe").innerHTML += "Szczur odpoczywa. Uzupełnił pasek " + zielonykolor + ". <br /> <br />";
                                     glebokie_uzyto--;
                                setup();
                                Debuff();
								
                }
				
			//Debuffy	
			function Debuff(){
                krwawienie.value--;
				    if (krwawienie.value==0) {
				        krwawienie.style.display = "none";
			}        else if(krwawienie.style.display = "none" && krwawienie.value>=0){
				krwawienie.style.display = "block"
			}
	};
                            
                    
        
               //Znikanie pól przedmiotów i magii 
              var x = document.getElementById("pole_akcji");
                    if (x.style.display == "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                      
         }, 1500) };  

                //Mózg żaby
                if (ID_potwora==2){
				
    setTimeout(function(){ 
                //przypisanie
                var pasek_zycia_postaci = document.getElementById("zycie_postaci");
                var pasek_kondycji_przeciwnika = document.getElementById("kondycja_przeciwnika");
                var pasek_zycia_przeciwnika = document.getElementById("zycie_przeciwnika");
                var krwawienie = document.getElementById("krwawienie");
                // Ostatnie tchnienie
                if(pasek_zycia_przeciwnika.value==0 && ostatnie_tchnienie==1) {
                                    alert("Twój atak ześlizguje się po skórze żaby. Robi zeza rozbierznego i odzyskuje całe życie.");
                                    pasek_zycia_przeciwnika.value+=20;
                                    ostatnie_tchnienie =2;
                                document.getElementById("wyswietl_zycie_przeciwnika").innerHTML = pasek_zycia_przeciwnika.value + "/" + Zycie_potwora;
                //Śmierć wroga
                                } else if(pasek_zycia_przeciwnika.value==0){
                                    setTimeout(function(){speed=2; friction=0.8 }, 2000);
                                   
                                    document.getElementById("pole_tekstowe").innerHTML = "";
                                    document.getElementById("containerwalka").style.display = "none";
                                    document.getElementById("containerchodzenie").style.display = "block";
                                    document.getElementById("srodkowe_dolne_tekst").innerHTML = "Zabiłeś żabę. :)";
                                } 
                                    //Atak
                                    else if (pasek_kondycji_przeciwnika.value>15){
                                    var atak_przeciwnika = Math.floor(Math.random() * (16-5) +5); // Rand 15-5
                                    var obrazenia_tekst = atak_przeciwnika + " HP"
                                    var obrazeniakolor = obrazenia_tekst.fontcolor ("#ea2e2e")
                                    
                                    pasek_zycia_postaci.value -= atak_przeciwnika;
                                    pasek_kondycji_przeciwnika.value -=atak_przeciwnika*2;
                                        document.getElementById("wyswietl_zycie").innerHTML = pasek_zycia_postaci.value + "/100"
                                        document.getElementById("wyswietl_kondycje_przeciwnika").innerHTML = pasek_kondycji_przeciwnika.value + "/" + Stamina_potwora
                                            document.getElementById("pole_tekstowe").innerHTML += "Żaba policzkuje Cię jezykiem za " + obrazeniakolor + ". <br /> <br />";
                                    
                                    setup();
                                    Debuff();
								
                                    
                }              
                                    //Odpoczynek
                                    else if(pasek_kondycji_przeciwnika.value<=15) {
                                    pasek_kondycji_przeciwnika.value = 100;
                                        document.getElementById("wyswietl_kondycje_przeciwnika").innerHTML = pasek_kondycji_przeciwnika.value + "/" + Stamina_potwora
                                        document.getElementById("pole_tekstowe").innerHTML += "Żaba nadyma się i wydaje dziwny dźwięk. Odpoczywa i odnawia pasek " + zielonykolor + ". <br /> <br />";
                                     glebokie_uzyto--;
                                setup();
                                Debuff();
								
                }
				
			//Debuffy	
			function Debuff(){
                krwawienie.value--;
				    if (krwawienie.value==0) {
				        krwawienie.style.display = "none";
			}        else if(krwawienie.style.display = "none" && krwawienie.value>=0){
				krwawienie.style.display = "block"
			}
	};
                            
                    
        
               //Znikanie pól przedmiotów i magii 
              var x = document.getElementById("pole_akcji");
                    if (x.style.display == "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                      
         }, 1500) }
    //Mózg kolejnego potwora
                
    //Zamknięcie tury przeciwnika \/ Jeżeli chcesz skopiować zachowanie potwora to polecam wszystko powyżej komentarza "Mózg kolejnego potwora" aż do "Mózg żaby"
                };