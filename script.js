// ===============================
// ISI SURAT
// ===============================
let isiSurat = `
Hai Kamu Ibu Isti Yang Suka Pulih BT nya dipagi hari ❤️

Terima kasih sudah menjadi bagian dari hidup aku, yang selalu ngerti aku, dan selalu feedback sama aku.

Maafin aku yang selalu bikin BT kamu, tanpa mengurangi rasa sayang dan cinta aku ke kamu jika aku lagi marah ataupun kesel ke kamu.

Jujur semenjak adanya kamu, aku selalu bersemangat dan pengen berusaha terus untuk gapai semua impian aku supaya bisa mencapai tujuan kita.

Kalau semuanya diceritakan mungkin bakal penuh dan panjang. Intinya aku sayang sama kamu mau kamu gimana pun, asal JANGAN BOHONG. Selebihnya biar hati yang melakukan dan berbicara.

Love u sayang, sama-sama terus yaa, kan mau bisnis bareng aku, segerakan ya buuu waktu tuh berjalan.

Semangat, nggak boleh putus di tengah. Kita punya tujuan yang masih panjang.

Aku sayang kamu, kamu sayang aku juga nggak? 🥺❤️

Jawabnya by WA aja yaa...
`;

// ===============================
// ISI PESAN TERAKHIR
// ===============================

let isiPesan = `
Selamat ulang tahun sayangku 🎂❤️

Hari ini adalah hari spesial karena seseorang yang sangat berarti hadir di dunia.

Terima kasih karena sudah menjadi tempat pulang, teman bercerita, dan alasan untuk terus berusaha menjadi lebih baik.

Aku mungkin belum bisa jadi yang diinginkan banget, tapi dengan kamu ngomong ke aku pasti aku lakukan untuk dievaluasi, 

Semoga di usia yang baru, semua impianmu satu per satu bisa tercapai.

Tetap menjadi perempuan yang kuat, baik, tidak egois, dan selalu membawa kebahagiaan bagi orang-orang di sekitar termasuk aku hehe.

Aku harap kita masih bisa terus bersama dengan segala situasinya

jadilah pribadi kamu, jangan selalu kuat dihadapan orang, sekarang kamu ada aku kapanpun bisa cerita bisa bilang, kamu bisa sembuh dari ..... biar aku bantu, dan harus tetep berani bicara walaupun masalah kecil, jika tidak sekarang mau kapan berani bicara masalah? mau sampe kapan mendem masalah sendirian? aku yahh sayangg (

bertahap yahh sekarang kehidupannya mulai diatur, mungkin kamu masih suka terulang kebiasaan waktu dulu, tapi mulai 22 juni 2026 kamu harus udah bisa mengatur semuanya dan membuang hal kebiasaan dulu, oke sayangg ingett tuh dengerin tuhh, awas lupa ahh

Aku sayang kamu, hari ini, besok, dan seterusnya ❤️
`;


// Menyimpan interval agar tidak bentrok
let typing;


// ===============================
// BUKA MENU
// ===============================

function bukaMenu() {

    document.getElementById("opening")
    .classList.add("hilang");


    setTimeout(() => {

        document.getElementById("menu")
        .classList.add("aktif");

    }, 600);

}


// ===============================
// BUKA HALAMAN
// ===============================

function bukaHalaman(namaHalaman) {


    document.getElementById("menu")
    .classList.remove("aktif");


    let halaman = document.getElementById(namaHalaman);


    setTimeout(() => {

        halaman.classList.add("aktif");


        if (namaHalaman === "surat") {

            ketikSurat();

        }


        if (namaHalaman === "pesan") {

            ketikPesan();

        }


    }, 300);

}


// ===============================
// KEMBALI KE MENU
// ===============================

function kembaliMenu() {


    clearInterval(typing);


    document.querySelectorAll(".halaman")
    .forEach(item => {

        item.classList.remove("aktif");

    });


    setTimeout(() => {

        document.getElementById("menu")
        .classList.add("aktif");

    }, 300);

}


// ===============================
// EFEK MENGETIK SURAT
// ===============================

function ketikSurat() {


    clearInterval(typing);


    let teks = document.getElementById("teks-surat");


    teks.innerHTML = "";


    let i = 0;


    typing = setInterval(() => {


        if (i < isiSurat.length) {


            teks.innerHTML += isiSurat.charAt(i);


            i++;


        } else {


            clearInterval(typing);


        }


    }, 50);

}


// ===============================
// EFEK MENGETIK PESAN
// ===============================

function ketikPesan() {


    clearInterval(typing);


    let teks = document.getElementById("teks-pesan");


    let ttd = document.querySelector(".ttd");


    teks.innerHTML = "";


    if (ttd) {
        ttd.classList.remove("muncul");
    }


    let i = 0;


    typing = setInterval(() => {


        if (i < isiPesan.length) {


            teks.innerHTML += isiPesan.charAt(i);


            i++;


        } else {


            clearInterval(typing);


            if (ttd) {

                ttd.classList.add("muncul");

            }

        }


    }, 40);

}


// ===============================
// MUSIC PLAYER
// ===============================

function toggleMusic() {


    let lagu = document.getElementById("lagu");


    let tombol = document.getElementById("btnMusic");


    let cover = document.querySelector(".cover img");



    if (lagu.paused) {


        lagu.play();


        cover.classList.add("berputar");


        tombol.innerHTML = "⏸ Pause Lagu";


    } else {


        lagu.pause();


        cover.classList.remove("berputar");


        tombol.innerHTML = "▶ Putar Lagu";


    }

}
// ===============================
// BACKGROUND LOVE & BIRTHDAY
// ===============================

const background = document.querySelector(".background-love");

const emoji = [
    "❤️", "💖", "💕", "💘",
    "💝", "🎂", "🎈", "🎁",
    "✨", "🌸", "🧸"
];

for (let i = 0; i < 100; i++) {

    let item = document.createElement("span");

    item.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];

    item.style.left = Math.random() * 100 + "%";
    item.style.fontSize = (20 + Math.random() * 25) + "px";
    item.style.animationDuration = (6 + Math.random() * 8) + "s";
    item.style.animationDelay = Math.random() * 8 + "s";

    background.appendChild(item);
}