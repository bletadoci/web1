/*Duke supozuar se në dokumentin tonë (html) kemi disa elemente me tag-un div. Të shkruhet
kodi, duke perdorur librarinë jQuery, ashtu që: të gjitha elementet div që e përmbajne klasën
“color” dhe nuk e permbajnë klasën “black”, të kenë ngjyrë të kuqe.*/
$("div.color:not(.black)").css("color", "red");
//ne js e bon: documentGet...("id").style.color = "red";
/*Eshte dhene vargu:
const words = [&quot;Ushtrimet&quot;, &quot;me&quot;, &quot;reduce&quot;, &quot;funksionin&quot;]
Të përdoret funksioni reduce për t’i bashkuar fjalët në një fjali të vetme të ndara me hapësirë.*/
const words = ["Ushtrimet", "me", "reduce", "funksion"];
const ey = words.reduce((sup,val) =>{
    return sup + " " + val;
}) //sup e mban krejt - nese don me return veq direkt qashtu
/*Të shkruhet skripta ne JavaScript e cili, në momentin kur përdoruesi klikon butonin, lexon vlerën
nga input-i dhe:
 shfaq një njoftim (alert) nëse vlera është numër i plotëpjestueshëm me 5, ose
 nëse vlera është karakteri b ose c.
Nuk është e nevojshme të shkruhet kodi HTML.*/
const button = document.getElementById("button");
const input = document.querySelector('input');
button.addEventListener('click', ()=>{ //mrena kllapave qitet veq nese je tu dasht per event me
    //mar id, dmth qaty ku ka ndodh eventi po thojm
    const hi = input.value;
    const innumber = Number(hi);
    if(!(innumer % 5 == 0)){
        alert("Hello.");
    }
    else if(hi === "b" || hi === "c"){
        alert("Hello again.");
    }
});

/*Është dhëne vargu i stringjeve : [ ‘Uebi I’ , ‘Uebi II’, ‘Programimi i shperndare’,
‘Bazat e te dhenave’]. Krijoni një varg te ri i cili i ka të sortuara për nga gjatësia e stringut
(descending) vlerat nga vargu i dhëne i stringjeve. Krijoni një varg te ri i cili ruan gjatësinë e
secilit string. Më pas kalkuloni dhe shtypni gjatësinë mesatare te stringjeve. Për zgjidhje të
detyrës duhet të përdoren funksionet sort() , map() dhe reduce ().*/

const vargu = ['Uebi I', 'Uebi II', 'Programimi i shperndare', 'Bazat e te dhenave'];

// 1. Sortimi i vargut sipas gjatësisë (descending - nga më i gjati te më i shkurtri)
const varguSortuar = [...vargu].sort((a, b) => b.length - a.length);

// 2. Krijimi i një vargu të ri që ruan vetëm gjatësitë e stringjeve
const gjatesite = vargu.map(string => string.length);

// 3. Kalkulimi i gjatësisë mesatare duke përdorur reduce()
const shuma = gjatesite.reduce((acc, curr) => acc + curr, 0);
const mesatarja = shuma / gjatesite.length;

// Rezultatet
console.log("Vargu i sortuar (descending):", varguSortuar);
console.log("Vargu i gjatësive:", gjatesite);
console.log("Gjatësia mesatare:", mesatarja);

/*Të krijohet një komponente ne React e quajtur MessageBox qe shfaq një tekst të caktuar brenda
një elementi p dhe përdor një stil bazik për të ndryshuar ngjyrën e tekstit. Komponenti duhet të
përdoret të paktën një herë brenda komponentit kryesor App.*/
function MessageBox(props){
    const stiliTekstit = {
        color: props.ngjyra,
        fontSize: '18px'
    }
    return (
        <p style={stiliTekstit}>{props.teksti}</p>
    );
};
//export default MessageBox

function Appi(){
    return(
        <MessageBox color="red" teksti="Hello Guys."/>
    )
}

// Funksion ndihmës që kthen një Promise që zgjidhet pas 'ms' milisekondave
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function start() {
    // 1. Pret 3 sekonda (3000ms)
    await delay(3000); //resolve waits for the timer to be done, sends back signal and continues code
    
    // 2. Shtyp mesazhin në ekran (ose console)
    console.log("Funksioni filloj se ekzekutuari");
    document.body.innerHTML = "<h1>Funksioni filloj se ekzekutuari</h1>";

    // 3. Pret edhe 2 sekonda të tjera (2000ms)
    await delay(2000);

    // 4. Ndryshon lokacionin e faqes
    window.location.href = 'https://uni-pr.edu/';
}

// Thirrja e funksionit
start();

//window.location.href ="url" -> ose munesh me marr url qeshtu

function redirect() {
    // setTimeout pranon dy gjëra: funksionin që do kryhet dhe kohën në milisekonda
    setTimeout(function() {
        // Kjo ndodh pas 5 sekondave (5000ms)
        window.location.href = 'https://uni-pr.edu/';
    }, 5000);
}

// Thirrja e funksionit
redirect();

//Det
const zv = "Hello Bob, you are awesome!";
let vargi = zv.split(""); 

for (const i in vargi) {
    if (!(i % 2 === 0)) {
        vargi[i] = "*";
    }
}
const rezultati = vargi.join("");
console.log(rezultati);

