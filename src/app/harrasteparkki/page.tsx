import styles from "../page.module.css";
import TextComponent from "../components/textComponent";
import Header from "../components/headerComponent"
import Footer from "../components/footerComponent"
import TextCardComponent from "../components/textCardComponent";
import Navigation from "../components/navComponent"

export default function Harrasteparkki() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>HARRASTEPARKKI</h1>
      <h2>Klassikkoajoneuvojen näyttelyalue yläkatsomossa</h2>
      <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Ilmoittautuminen Harrasteajoneuvoparkkiin" headerText="" bodyText={"Harrasteajoneuvoparkki 30-vuotiaille ja sitä vanhemmille harrasteajoneuvoille on varattu näyttelyalue harjun laelta ja hyppyrimäen luona molempina päivinä klo 9.00–17.00.\n Näytteille sopii 110 ajoneuvoa per päivä, joten alueelle tulee ilmoittautua ennakkoon. Lauantain osalta ilmoittautuminen tulee tehdä viimeistään perjantaina 16.8. klo 20.00 ja sunnuntaille lauantaina 17.8. klo 20.00 mennessä oheisesta linkistä. Mitä aikaisemmin ilmoittaudut sitä todennäköisemmin saat ajoneuvosi alueelle (huom. mikäli et saa ilmoittaumisen vahvistuksesta sähköpostiviestiä, etkä löydä sitä myöskään roskapostilaatikosta ota yhteyttä mikkotapani.karppanen(at)gmail.com).\n Mikäli olet ilmoittautunut etkä pääse jostain pakottavasta syystä paikalle toivomme, että peruutat osallistumisen, jotta voimme antaa paikan toiselle ajoneuvolle. Peruminen tai mahdollinen muutos ilmoittautumistietoihin tehdään sähköpostitse ilmoittautumisen yhteydessä saadun linkin kautta.\n Ajo näyttelyalueelle tapahtuu Hiihtomäentietä pitkin (opastus liikenteenohjaajat/kyltit). Pääsylippu tulee ostaa ennakkoon Lippuagentilta (linkki tulossa). Huom. koko autokunnalla tulee olla pääsyliput tapahtumaan saavuttaessa.\n Kilparadan tapahtumien seuraaminen onnistuu hienosti alueelta sillä varikko, lähtö- ja maalisuorat sekä merkittävä osa radasta avautuu katsojille ylätasanteelta."} pictureLink=""/>
      <h2>Pääsylippumyynti</h2>
      <TextComponent pictureOnRight={false} containsLinkButton={true} buttonText="Pääsylippumyyntiin" headerText="" bodyText={"Pääsylipun ostaneille on saatavilla portilla/HRF:n teltalla ilmaiseksi monisivuinen ohjelmalehti.\n Hinnat: 25 eur/päivä, viikonloppu 35 eur, alle 12-vuotiaat huoltajan seurassa ilmaiseksi."} pictureLink=""/>
      </main>
    </div>
  );
}