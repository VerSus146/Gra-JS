<html>
<head>
<meta charset="UTF-8">
<Title>Chodzenie po mapie</Title>
<link rel="Stylesheet" type="text/css" href="Chodzenie_po_mapie/Chodzenie/Style/chodzenie.css">
<link rel="Stylesheet" type="text/css" href="Chodzenie_po_mapie/Chodzenie/Style/questy.css">
<link rel="Stylesheet" type="text/css" href="Chodzenie_po_mapie/Chodzenie/Style/style.css">

<?php
include 'config.php';
?>

</head>
    
    
<body onLoad="OnLoad();">
    
<!-- Składzik na mapę -->
    
<img id="jezioro" width="220" height="277" src="Chodzenie_po_mapie/Chodzenie/zdj/jezioro.png" alt="Jezioro z wielorybem" style="display: none;" >
    
<!-- Składzik na postacie -->
    
<img id="szczur" src="Chodzenie_po_mapie/Chodzenie/zdj/szczur.png" alt="Szczur" style="display: none;"/>
<img id="zaba" src="Chodzenie_po_mapie/Chodzenie/zdj/zaba.png" alt="Szczur" style="display: none;"/>
<img id="Starsza_Pani" src="Chodzenie_po_mapie/Chodzenie/zdj/Postacie/Babuszka.png" style="display: none;"/>
    

<!-- Chodzenie po mapie -->
    
    
<div id="containerchodzenie">

<div id="gorne_menu">

<div id="lewe_menu">
<br />
<input id="Zadania" type="button" onClick="questy();" value="Zadania" style="width: 200px; height: 30px;"/>
</div>
    
<div id="prawe_menu">
12312312312
</div>
    
<div id="canvasdiv">

<canvas id="canvas" height="760px" width="1100px">
</canvas>
    
<!-- Questy -->
    
<div id="questy_okno">

<div id="questy_naglowek">
Zadania
</div>

<div id="questy_zadania">
    <div id="questy_zadania_przyciski">
    </div>  
</div>  
    
<div id="questy_tresc">
</div>

</div>

<!-- Koniec questów -->    

    
<!-- Rozmowa -->
<div id="containerrozmowa">

<div id="rozmowa_npc"> 

<div id="rozmowa_avatar_npc">
</div>    
    
<div id="rozmowa_tekst">
<div id="rozmowa_tekst_formatowanie">
</div>
</div> 
 
</div>    
 
<div id="rozmowa_postac">
    
<div id="rozmowa_wybory">
<span id="Wybor1"></span> <br /> <br />
<span id="Wybor2"></span> <br /> <br />
<span id="Wybor3"></span> <br /> <br />
<span id="Wybor4"></span> <br /> <br />
</div>
    
</div>    
    
</div>
    
<!-- Koniec rozmowy -->    
    
</div>

</div>

<div id="dolne_menu">

<div id="prawe_dolne_menu">
<div id="CzasIData">
</div>
</div>        
    
<div id="lewe_dolne_menu">
<?php
$wynik = mysql_query("SELECT * FROM przeciwnicy") 
or die('Błąd zapytania'); 

    while($r = mysql_fetch_array($wynik)) { 
        echo $r[1]; 
    } 
?>
</div>    
    
<div id="srodkowe_dolne_menu">
<div id="srodkowe_dolne_tekst">
</div>
</div>
    
</div>    
    
</div>

    
<!-- Koniec chodzenia po mapie -->
    
<!-- Walka -->
  

<div id="containerwalka">
    <div id="avatar_przeciwnika">
    </div>
    <div id="avatar_postaci">
        <img src="Chodzenie_po_mapie/Chodzenie/zdj/bohaterzy/ja.jpg" style="width: 100%; height: 100%;" />
    </div>
    <div id="status_postaci">
        <div id="paski_zki">
                <div id="pasek_zycia_postaci">
                <p id="wyswietl_zycie">100/100</p>
                <progress id="zycie_postaci" max="100" value="100"></progress>
                </div>
            <br />
            <br />
                <div id="pasek_many_postaci">
                <p id="wyswietl_mane">100/100</p>
                <progress id="mana_postaci" max="100" value="100"></progress>
                </div>
            <br />
            <br />
                <div id="pasek_kondycji_postaci">
                <p id="wyswietl_kondycje">100/100</p>
                <progress id="kondycja_postaci" max="100" value="100"></progress>
                </div>
        </div>
    </div>   
        <div id="status_przeciwnika">
            <div id="paski_zki">
                <div id="pasek_zycia_przeciwnika">
                <p id="wyswietl_zycie_przeciwnika">100/100</p>
                <progress id="zycie_przeciwnika" max="100" value="100"></progress>
                </div>
            <br />
            <br />
                <div id="pasek_many_przeciwnika">
                <p id="wyswietl_mane_przeciwnika">100/100</p>
                <progress id="mana_przeciwnika" max="100" value="100"></progress>
                </div>
            <br />
            <br />
                <div id="pasek_kondycji_przeciwnika">
                <p id="wyswietl_kondycje_przeciwnika"></p>
                <progress id="kondycja_przeciwnika" max="100" value="100"></progress>
                </div>
            </div>
        </div>
            <div id="pole_tekstowe">
            </div> 
        <div id="pole_akcji"> 
            <div id="Debuffy">
                <div id="Debuffy_naglowek">
                    Debuffy
                </div>
                <div id="krwawienie"><img src="Chodzenie_po_mapie/Chodzenie/zdj/Debuffy/krwawienie.jpg" style="width: 40px" value="0"/>
                </div>
            </div>
            <div id="akcja">  
                <br />
                <br />
                <input type="button" id="przycisk_atak" value="Atak wręcz" onClick="AtakWRecz();" style="width:100px; height: 50px;"/> 
                <input type="button" id="przycisk_odpoczynek" value="Odpoczynek" onClick="Odpoczynek();" style="width:100px; height: 50px;"/><br /> <br />
                <input type="button" id="przycisk_przedmioty" value="Przedmioty" onClick="Przedmioty();" style="width:100px; height: 50px;"/>
                <input type="button" id="przycisk_magia" value="Magia" onClick="Czary();" style="width:100px; height: 50px;"/>
            </div>
                <div id="Przedmioty">
                </div>
                <div id="Magia">
                    <input type="button" id="przycisk_kula_ognia" value="Kula ognia" onClick="kula_ognia();" style="width:100px; height: 50px;" onMouseOver="kula_ognia_opis_wysk(this)" onMouseOut="kula_ognia_opis_znik(this)"/>
                    <div id="opis_czarow">
                    </div>
                </div>
        </div>
</div>


<!-- Koniec walki -->

    
<!-- Początek tworzenia postaci -->
<div id="containertworzeniepostaci">

    
    
</div>    
<!-- Koniec tworzenia postaci -->    
        
<script type="text/javascript" src="Chodzenie_po_mapie/Chodzenie/Skrypt/skrypt.js">
</script>
<script type="text/javascript" src="Chodzenie_po_mapie/Chodzenie/Skrypt/chodzenie.js">
</script>
<script type="text/javascript" src="Chodzenie_po_mapie/Chodzenie/Skrypt/questy.js">
</script>
<script type="text/javascript" src="Chodzenie_po_mapie/Chodzenie/Skrypt/jquery.js"></script>

</body>
</html>