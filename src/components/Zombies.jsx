import "./Zombies.css";
import biter from "../assets/biter.png";
import gasTank from "../assets/gas-tank.png";
import viral from "../assets/viral.png";
import bolter from "../assets/bolter.png";
import bomber from "../assets/bomber.png";
import screamer from "../assets/screamer.png";
import demolisher from "../assets/demolisher.png";
import volatile from "../assets/volatile.png";

export default function Zombies() {
  const zombies = [
    {
      id: 1,
      image: biter,
      name: "Biter",
      agression: "Yüksek",
      threat: "Düşük",
      weapons: "Çene, eller ve yakın dövüş silahları",
      description:
        "Bu zombiler Dying Light oyununda en sık gördüğümüz zombilerdir. Harran Virüsü'nden dolayı beyin fonksiyonları çok yavaşlamıştır. Ayırtım güçleri yoktur. Oldukça yavaş hareket ederler. Biterlar yakınlarında hareket eden ve enfekte olmayan her şeye saldırırlar. Elleriyle kurbanlarını yakalayıp ısırmaya çalışırlar. Zaman zaman refleksel olarak ellerinde tuttukları yakın dövüş silahlarını düşmanlarına fırlatabilirler.",
    },
    {
      id: 2,
      name: "Gas Tank",
      image: gasTank,
      agression: "Düşük",
      threat: "Orta",
      weapons: "Eller",
      description:
        "Hazmat giyen ve arkalarında bulunan gaz tankı ile hareket eden bu zombiler giydikleri kıyafetten dolayı ısıramazlar. Yalnızca yakınlarında bulunan ve enfekte olmayan canlılara elleriyle saldırırlar. Arkalarında bulunan tüp tankı isabet aldığında patlar ve zombiyi havaya uçurur. Tabi ortaya çıkan ses dalgası davetsiz misafirleri olay yerine çeker. Yavaş hareket ettiklerinden ve ısıramadıklarından dolayı pek tehdit oluşturmazlar.",
    },
    {
      id: 3,
      image: viral,
      name: "Viral",
      agression: "Orta",
      threat: "Orta",
      weapons: "Eller",
      description:
        "Viraller yeni zombiye dönüşmüş kimselerdir. Yeni dönüştükleri için zaman zaman insansı refleksler gösterebilirler. Hatta hasar aldıklarında bazen konuşabilirler. Viraller sese karşı duyarlıdır. Ses duyduklarında hemen o bölgeye koşarlar. Eğer enfekte olmayan bir canlı görürlerse üzerlerine koşup ona elleriyle saldırırlar. Ne var ki viraller ısırmazlar.",
    },
    {
      id: 4,
      image: bolter,
      name: "Bolter",
      agression: "Yok",
      threat: "Düşük",
      weapons: "Yok",
      description:
        "Yalnız geceleri ortaya çıkan bu enfekte oldukça korkaktır. Geceleri beslenmek için dışarı çıkar. Eğer enfekte olmayan birisi yanına yaklaşırsa ve onu fark ederse hemen olay yerinden kaçar.Bolterların korkup kaçması Dying Light'ın en tehlikeli zombilerinden olan volatile'ları olay yerine çeker.",
    },
    {
      id: 5,
      image: bomber,
      name: "Bomber",
      agression: "Yüksek",
      threat: "Orta",
      weapons: "Patlayan organlar",
      description:
        "Bomberlar yavaş hareket eden ve genelde sabit duran zombilerdir. Bunlar enfekte olmayan bir canlı görürlerse canlının yanına gidip organlarını patlatırlar ve canlıya büyük zarar verirler. Bomberlar ok/ateşli silah gibi menzilli ekipmanlarla kolayca imha edilebilir. Bu zombiler dar alanlarda/kapalı mekanlarda oldukça tehlikelidirler.",
    },
    {
      id: 6,
      image: screamer,
      name: "Screamer",
      agression: "Yok",
      threat: "Orta",
      weapons: "Yüksek sesli çığlık",
      description:
        "Screamerlar Harran Virüsü'ne yakalanmış küçük yaştaki çocuklardır. Genellikle binaların içinde bulunan çocuk odalarında görülürler. Screamerlar enfekte olmayan birini gördüklerinde yüksek sesli bir çığlık atarlar ve enfekte olmayan kişiyi paralize ederler. Enfekte olmayanları ısırma girişiminde bulunmazlar.",
    },
    {
      id: 7,
      image: demolisher,
      name: "Demolisher",
      agression: "Yüksek",
      threat: "Yüksek",
      weapons: "Kollar, ağır inşaat objeleri, boğa koşusu",
      description:
        "Demolisherlar uzun boylu ve iri yapılıdırlar. Enfekte olmayan kişilere karşı oldukça saldırgandırlar. Eğer enfekte olmayan kişi uzaktaysa etraflarındaki ağır inşaat objelerini onlara fırlatırlar. Eğer enfekte olmayan kişi yakınlarındaysa kollarıyla ters vuruş yaparlar. Zaman zaman boğa koşusu yaparak enfekte olmayan kişiyi geri savururlar.",
    },
    {
      id: 8,
      image: volatile,
      name: "Volatile",
      agression: "Çok yüksek",
      threat: "Çok yüksek",
      weapons: "Çene, eller, asidik balgam",
      description:
        "Dying Light evreninin en tehlikeli zombileri volatilerlardır. UV ışığına duyarlı olduklarından yalnızca geceleri ortaya çıkarlar. Oldukça hızlı hareket ederler. Geceleri enfekte olmayan bir kişiyi fark ettiklerinde saldırırlar. Eğer enfekte olmayan kişi biraz uzak mesafede ise üzerine atılıp onu parçalamaya çalışır. Daha da uzaktaysa asidik balgam fırlatır. Ayrıca güçlü kollarıyla kurbana vururlarsa büyük hasar verirler. Enfekte olmayanlar geceleri dışarı çıkacaksa bunlardan birine görünmeden ilerlemelidir.",
    },
  ];

  return zombies.map((zombie) => (
    <div key={zombie.id} className="zombies">
      <img src={zombie.image} alt="Zombie image" />
      <h1>{zombie.name}</h1>
      <p>
        <strong>Agresiflik:</strong> {zombie.agression}
      </p>
      <p>
        <strong>Tehlike seviyesi:</strong> {zombie.threat}
      </p>
      <p>
        <strong>Kullandığı silahlar:</strong> {zombie.weapons}
      </p>
      <p>{zombie.description}</p>
    </div>
  ));
}
