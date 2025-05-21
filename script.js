// membuat declarate js berupa 'let' karena tidak constant (belum klik/sudah klik) //
let diklik = false; // kondisi belum diklik; //
let step = 0; // ada beberapa step yang mau dihasilkan; //


/* pembelajaran, gini caranya buat statement, dari tadi salah muluk; 
1. menyimpan variabel dalam function yg ga diubah, tetap tampilan awal;
2. pada function panggil Id section js di bagin body html element <div> dengan Id selector;
3. membuat query selector js utk perintah pada header dan paragraf dengan class selector pd html; */


// start efek typing pas open page //
window.onload = () => {
    aturanMengetik();
}


// membuat function pertama aturanMengetik //
function aturanMengetik(callback = null) {
    const message = document.getElementById('message'); 
    const header= message.querySelector('.headerContent'); 
    const paragraf= message.querySelector('.paragrafContent');
    
    const headerText= 'haloo! selamat datang ^^';
    const paragrafText= 'btw baymax mau ngucapin sesuatu nih buat kamu!';

    header.textContent = ''; // pakenya text.Content bukan inner.Text soalnya biar ada spasi //
    paragraf.textContent = '';

    let i = 0;


    function mengetikHeader()
    {
        if (i < headerText.length) {
            header.textContent += headerText.charAt(i);
            i++;
            setTimeout(mengetikHeader, 50);
        } else {
            i = 0; // mereset index untuk bagian paragraf//
            mengetikParagraf();
        }
    }


    function mengetikParagraf()
    {
        if(i < paragrafText.length) {
            paragraf.textContent += paragrafText.charAt(i);
            i++;
            setTimeout(mengetikParagraf, 50);
        } else {
            if (callback) callback(); // menyetop klo udah selesai tujuannya //
        }   
    }

    
    mengetikHeader();
}


// membuat fungsi 2 aturanKlik //
function aturanKlik() {
    const message = document.getElementById('message'); // document: seluruh wakil content html; //
    let header= message.querySelector('.headerContent'); // dalamnya document tadi kan ada 'message'; // 
    let paragraf= message.querySelector('.paragrafContent'); 
    let button= document.getElementById('buttonContent');
    let helloAudio = document.getElementById('audioHelloBaymax'); // dia muncul karena button kan, so relate; //
    let confettiAudio = document.getElementById('audioConfetti'); 


// memanggil variabel yg udah disimpan di function 2 dan mau diubah kaya gmn //
if (step === 0 && !diklik) {
    helloAudio.play();
    header.innerText = 'hi! balalala~'
    paragraf.innerText = `❤️(  ⚫︎ー⚫︎  )`;
    button.innerText = 'klik sini  ദ്ദി(˵•̀ ᴗ -˵)';
    diklik = true;
    step++;
} 


else if (step === 1 && !diklik) { 
    header.innerText = 'yeyy!';
    paragraf.innerText = 'klik sekali lagi nih! skuy!';
    button.innerText = 'klik lagi dong! plss ˃͈◡˂͈ ';
    diklik = false;
    step++;
}


else if (step === 2 && !diklik) {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    confettiAudio.play();
    header.innerText = 'Selamat Ulang Tahun!';
    paragraf.innerText = 'baymax berdoa, semoga kamu selalu sehat dan bahagia'; 
    button.innerText = 'HBD kamu ◜⁠‿⁠◝⁠';
    diklik = true;
    step++;
}


else if (step === 3 && !diklik) step = 1;
diklik= false;
}
