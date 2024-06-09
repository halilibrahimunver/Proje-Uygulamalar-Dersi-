const copluk1 = document.querySelector('.copluk-1');
const copluk2 = document.querySelector('.copluk-2');
const copKutusu1 = document.getElementById('cop-kutusu-1');
const copKutusu2 = document.getElementById('cop-kutusu-2');
const oyunAlani = document.querySelector('.oyun-alani');
const puanGosterge = document.querySelector('.puan');
const sureGosterge = document.querySelector('.sure');
let puan = 0;
let sure = 45;
let interval;

// Çöp resimleri
const copResimUrl = ['/static/imgs/cop/cam.png', '/static/imgs/cop/plastik.png', '/static/imgs/cop/kagit.png'];

// Çöp resimlerini oluştur
const copResimleri = [];
for (let i = 0; i < 10; i++) {
  const copResim = document.createElement('img');
  copResim.src = copResimUrl[Math.floor(Math.random() * copResimUrl.length)];
  copResim.alt = 'Çöp';
  copResim.classList.add('cop');
  copResim.style.left = `${Math.random() * (oyunAlani.clientWidth - 50)}px`;
  copResim.style.top = `${Math.random() * (oyunAlani.clientHeight - 50)}px`;
  copResim.draggable = true;
  oyunAlani.appendChild(copResim);
  copResimleri.push(copResim);
}

// Süreyi başlat
function sureyiBaslat() {
  interval = setInterval(() => {
    sure--;
    sureGosterge.textContent = `Süre: ${sure}`;
    if (sure <= 0) {
      clearInterval(interval);
      if (puan < 10) {
        alert(`Üzgünüz, kaybettiniz! Toplam puanınız: ${puan}`);
      } else {
        alert(`Tebrikler! Toplam puanınız: ${puan}`);
      }
      resetGame();
    }
  }, 1000);
}

function resetGame() {
  puan = 0;
  sure = 45;
  puanGosterge.textContent = `Puan: ${puan}`;
  sureGosterge.textContent = `Süre: ${sure}`;
  copResimleri.forEach(cop => {
    cop.style.display = 'block';
    cop.style.left = `${Math.random() * (oyunAlani.clientWidth - 50)}px`;
    cop.style.top = `${Math.random() * (oyunAlani.clientHeight - 50)}px`;
  });
  sureyiBaslat();
}

// Çöp resmini sürükleme
copResimleri.forEach(copResim => {
  copResim.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', copResim.src);
    copResim.classList.add('tutuluyor');
  });

  copResim.addEventListener('dragend', () => {
    copResim.classList.remove('tutuluyor');
  });
});

// Çöp resmini fareyle üzerine getirme
oyunAlani.addEventListener('dragover', (e) => {
  e.preventDefault();
});

// Çöp resmini bırakma
oyunAlani.addEventListener('drop', (e) => {
  e.preventDefault();
  const copResim = document.querySelector('.cop.tutuluyor');
  if (copResim) {
    const copResimRect = copResim.getBoundingClientRect();
    const copluk1Rect = copluk1.getBoundingClientRect();
    const copluk2Rect = copluk2.getBoundingClientRect();

    // Çöp kutusuna bırakıldığında
    if (
      copResimRect.left >= copluk1Rect.left - copResimRect.width &&
      copResimRect.left <= copluk1Rect.right + copResimRect.width &&
      copResimRect.top >= copluk1Rect.top - copResimRect.height &&
      copResimRect.top <= copluk1Rect.bottom + copResimRect.height
    ) {
      copResim.style.display = 'none';
      puan++;
      puanGosterge.textContent = `Puan: ${puan}`;
      copKutusu1.src = '/static/imgs/cop/cop.png';
    }

    if (
      copResimRect.left >= copluk2Rect.left - copResimRect.width &&
      copResimRect.left <= copluk2Rect.right + copResimRect.width &&
      copResimRect.top >= copluk2Rect.top - copResimRect.height &&
      copResimRect.top <= copluk2Rect.bottom + copResimRect.height
    ) {
      copResim.style.display = 'none';
      puan++;
      puanGosterge.textContent = `Puan: ${puan}`;
      copKutusu2.src = '/static/imgs/cop/cop.png';
    }

    copResim.classList.remove('tutuluyor');  // Bu satır burada tekrar eklenmiştir.
  }
});

// Çöp kovalarını hareket ettirme
function hareketEttir() {
  setInterval(() => {
    copluk1.style.left = `${Math.random() * (oyunAlani.clientWidth - copluk1.clientWidth)}px`;
    copluk1.style.top = `${Math.random() * (oyunAlani.clientHeight - copluk1.clientHeight)}px`;

    copluk2.style.left = `${Math.random() * (oyunAlani.clientWidth - copluk2.clientWidth)}px`;
    copluk2.style.top = `${Math.random() * (oyunAlani.clientHeight - copluk2.clientHeight)}px`;
  }, 2000);
}

sureyiBaslat();
hareketEttir();
