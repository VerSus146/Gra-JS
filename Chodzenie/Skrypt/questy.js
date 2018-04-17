var otrzymales_zadanie_tekst = "Nowe zadanie zostało dodane do twojego dziennika!";
var otrzymales_zadanie = otrzymales_zadanie_tekst.fontcolor("#993299");
// /\ Zadanie otrzymano
var IDnpc;
// /\ Globalne ID NPC
var wyswietlono=false;
    //Quest u Starszej Pani \/
var quest_wzieto1 = false;
//Zmienne do questów /\


function NPC(ID_npc){
    if(ID_npc==1){
        IDnpc=ID_npc;
setTimeout(function(){
    //Znikanie Canvasa, pojawianie rozmowy, blokowanie innych przycisków
         if(document.getElementById("canvas").style.display = "block"){
            document.getElementById("canvas").style.display = "none"
            document.getElementById("containerrozmowa").style.display = "block"
         } 
    }, 2000)
	//Wyłączenie Questów
	        document.getElementById("Zadania").disabled = "true"
    //Wybory
        //Quest
            if(!quest_wzieto1){
            document.getElementById("Wybor1").innerHTML = '<input onClick="DajQuesta()" type="button" value="1. Daj Questa"/>';
            } else {
            document.getElementById("Wybor1").innerHTML = '<input onClick="OddajQuesta()" type="button" value="1. Oddaj questa"/>'
            }
        //Quest zamknięcie
            document.getElementById("Wybor2").innerHTML = '<input onClick="" type="button" value="2. Mów żarta"/>';
            document.getElementById("Wybor3").innerHTML = '<input onClick="Nara()" type="button" value="3. Nara"/>';
    //Tekst NPC
         document.getElementById("rozmowa_avatar_npc").innerHTML = "<img src='Chodzenie_po_mapie/Chodzenie/zdj/Postacie/Babuszka.png' style='width: 100%; height: 100%;'/>"  
         document.getElementById("rozmowa_tekst_formatowanie").innerHTML = "Witaj! Oczekiwałam twojego przybycia. Andrzej mówił mi o tobie. Niestety, chciałam zrobić Ci herbatę z wody ze stawu na północy, ale szczur stoi mi na drodze.";   
}
};

function DajQuesta(){
    if(IDnpc==1){
        //Zmiana wartości zmiennej i tekst
    quest_wzieto1 = true;
    document.getElementById("rozmowa_tekst_formatowanie").innerHTML = "Widzę że od razu przechodzisz do rzeczy... Hehe. Na wschód jest most. Stoi tam jakiś taki brzydki szczur. Nie mogę przez niego przejść do mojego stawu. Proszę, zabij go. <br /> <br /> <br /> " + otrzymales_zadanie;
        //Dodanie przycisku
    document.getElementById("questy_zadania_przyciski").innerHTML = "<input type='button' value='Zabij szczura' style='height:33px; width:100%;  font-size: large;' onClick='Pokaz_tresc()' />";
    }
};

function OddajQuesta(){
    if(!przeciwnik1_żyje){
        //Zakończenie pozytywne
     document.getElementById("rozmowa_tekst_formatowanie").innerHTML = "Ahhh... Wreszcie się nim ktoś zajął. Proszę, wejdź to domu i weź ze skrzynki ciasto. Możesz też się przespać, wiem że przyszedłeś z daleka."
     document.getElementById("questy_zadania_przyciski").innerHTML = " ";
    } else {
        //Zakończenie negatywne
         document.getElementById("rozmowa_tekst_formatowanie").innerHTML = "Nie próbuj mnie okłamać! Przed chwilą pogryzł mi kostki! Idź i go zabij, raz a dobrze..."
    }
};
        
    function Pokaz_tresc(){
        //Status questa (Wykonany lub nie)
        var status = " ";
        if(IDnpc==1){
            if(!wyswietlono){
                if(!przeciwnik1_żyje){
                    status="Wykonane!"
                } else {
                    status="Niewykonane."
                }
                //Tekst treści questa
                document.getElementById("questy_tresc").innerHTML = "Starsza Pani poprosiła Ciebie o zabicie szczura obok mostu.<br /> <br /> Stan zadania: " + status;
                wyswietlono = true;
            }
            else{
                document.getElementById("questy_tresc").innerHTML = "";
                wyswietlono = false;
            }
        }
    };
	//Funkcja pożegnania
function Nara(){
    //Usuwanie bloków
	if(document.getElementById("canvas").style.display = "none"){
            document.getElementById("canvas").style.display = "block"
            document.getElementById("containerrozmowa").style.display = "none"
}
    //Przywrócenie możliwośći poruszania
speed=2; 
friction=0.8;
    //Odblokowanie przycisku questów i tekst pożegnalny
document.getElementById("srodkowe_dolne_tekst").innerHTML = "Żegnasz się ze Starszą Panią."
document.getElementById("Zadania").disabled = ""
};