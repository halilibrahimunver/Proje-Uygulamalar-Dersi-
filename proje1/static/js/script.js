// Orman Ekosistemi ve Biodiversite hakkında bilgi alma işlevi
function getEcosystemInfo() {
    alert("Ormanlar, dünyadaki yaşamın büyük bir bölümünü barındırır. Farklı bitki ve hayvan türlerinin yanı sıra mantarlar ve mikroorganizmalar gibi çok çeşitli canlıları desteklerler. Ormanların çeşitliliği, biyolojik çeşitliliğin korunması için kritik öneme sahiptir.");
}

// Ekolojik Hizmetler hakkında bilgi alma işlevi
function getEcologicalServicesInfo() {
    alert("Ağaçlar ve ormanlar, ekosistem hizmetleri sağlarlar. Bunlar arasında karbon depolama, suyun temizlenmesi, hava kalitesinin iyileştirilmesi ve toprak erozyonunun önlenmesi gibi faydalar bulunur. Bu ekolojik hizmetler, insanların sağlığı ve refahı için hayati öneme sahiptir.");
}

// Ormanlar hakkında bilgi alma işlevi
function getForestAnatomyInfo() {
    alert("Ağaçların yapısal özellikleri ve işlevleri hakkında bilgi verilebilir. Kökler, gövde, yapraklar, çiçekler ve meyveler gibi ağaç parçalarının görevleri ve adaptasyonları hakkında detaylı bilgi sunulabilir.");
}

// Ağaç kesimi hakkında bilgi alma işlevi
function getDeforestationEffectsInfo() {
    alert("Kontrolsüz ağaç kesimi ve ormansızlaşmanın çevreye ve insanlara olan etkileri üzerinde durulabilir. Bunlar arasında habitat kaybı, iklim değişikliği, sel riskinin artması ve biyoçeşitliliğin azalması gibi konuları ele alabilirsiniz.");
}

// Sürdürülebilir ormancılık hakkında bilgi alma işlevi
function getSustainableForestryInfo() {
    alert("Ağaçların sürdürülebilir şekilde yönetilmesi için uygulanan çeşitli stratejileri açıklayabilirsiniz. Bu stratejiler arasında ormansızlaşmanın önlenmesi, ağaçlandırma ve erozyon kontrolü gibi yöntemler bulunur.");
}

// Ağaçları koruma ve restorasyon çalışmaları hakkında bilgi alma işlevi
function getConservationRestorationInfo() {
    alert("Ağaçların korunması ve yeniden doğaya kazandırılması için yapılan çeşitli projeleri ve çalışmaları tanıtabilirsiniz. Bu çalışmalar, yerel topluluklar, sivil toplum kuruluşları ve hükümetler tarafından yürütülmektedir.");
}

// Nesli tükenen hayvanlar hakkında bilgi alma işlevi
function getEndangeredAnimalsInfo() {
    alert("Nesli tükenen hayvanlar, insan etkisi nedeniyle yaşam alanlarının yok olması, avlanma, kirlilik ve iklim değişikliği gibi faktörlerden dolayı sayıları azalan hayvan türleridir. Bu türlerin korunması için acil önlemler alınması gerekmektedir.");
}

// Nesli tükenen hayvanların korunması hakkında bilgi alma işlevi
function getEndangeredAnimalsConservationInfo() {
    alert("Nesli tükenen hayvanların korunması için birçok proje ve çalışma yürütülmektedir. Bunlar arasında yaşam alanlarının korunması, yasadışı avlanmanın önlenmesi, türlerin yeniden üretimi ve bilinçlendirme kampanyaları bulunmaktadır.");
}

// Doğal yaşam hakkında bilgi alma işlevi
function getNaturalLifeInfo() {
    alert("Doğal yaşam alanları, birçok canlı türüne ev sahipliği yapar ve ekosistemlerin korunması için önemlidir. Ormanlar, nehirler, göller, çayırlar ve denizler gibi çeşitli habitatlar, farklı hayvan ve bitki türlerinin yaşamını destekler.");
}

// Doğal yaşamın tehditleri hakkında bilgi alma işlevi
function getNaturalLifeThreatsInfo() {
    alert("Doğal yaşamı tehdit eden birçok faktör bulunmaktadır. Bunlar arasında habitat kaybı, kirlilik, iklim değişikliği, yasadışı avlanma ve türler arası rekabet gibi etkenler yer almaktadır.");
}

// Bağlantıları dinlemek için olay dinleyicilerini ekleyin
document.getElementById("orman-ekosistemi").addEventListener("click", getEcosystemInfo);
document.getElementById("ekolojik-hizmetler").addEventListener("click", getEcologicalServicesInfo);
document.getElementById("agac-anatomisi").addEventListener("click", getForestAnatomyInfo);
document.getElementById("agac-kesimi").addEventListener("click", getDeforestationEffectsInfo);
document.getElementById("surdurulebilir-ormancilik").addEventListener("click", getSustainableForestryInfo);
document.getElementById("koruma-ve-restorasyon").addEventListener("click", getConservationRestorationInfo);
document.getElementById("nesli-tukenen-hayvanlar-link").addEventListener("click", getEndangeredAnimalsInfo);
document.getElementById("nesli-tukenen-hayvanlar-korunma-link").addEventListener("click", getEndangeredAnimalsConservationInfo);
document.getElementById("dogal-yasam-link").addEventListener("click", getNaturalLifeInfo);
document.getElementById("dogal-yasam-tehditleri-link").addEventListener("click", getNaturalLifeThreatsInfo);
