import styles from "../page.module.css";
import TextCardComponent from "../components/textCardComponent";
import TextComponent from "../components/textComponent";
import Image from "next/image";
import DoubleTextCard from "../components/doubleTextCardSmall";

export default function Kilpailijoille() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image className="" src="/images/kilpailijoille_header.png" alt="" width="1730" height="800" style={{alignSelf: 'center'}}></Image>
        <h1 className={styles.headerTitle}>KILPAILIJOILLE</h1>
        <div className={styles.sectionTitle}>
          <div className={styles.underline}>
          </div>
        </div>
        <TextComponent pictureOnRight={true} containsLinkButton={true} buttonText="Lisätietoja" headerText={"Nopeimmat kierrosajat"} bodyText={"Kilpailuun hyväksytään vain kirjalliset sähköisellä lomakkeella tehdyt ilmoittautumiset. Jotta ilmoittautuminen on pätevä tulee lomake olla kaikilta tarvittavilta osilta täytetty ja osallistumismaksu maksettu ajallaan. Ilmoittautumispäivän jälkeen maksaneilta peritään lisämaksu."} pictureLink="/images/kilpailijoille.png" />
        <TextCardComponent containsLinkButton={true} buttonText=" Kilpailija-aikojen seurantajärjestelmään" headerText={" Kilpailija-aikojen seurantajärjestelmään"} bodyText={"Tämän toiminnallisuuden avulla voit hakea ja tarkastella parhaita aikojasi valitsemillasi radoilla ja haluamiltasi vuosilta."} buttonLinkDestination="/laptime" />
        <div className={styles.sectionTitle}>
          <div className={styles.underline}>
          </div>
        </div>
        <h2 className={styles.secondTitle}>Huomioitavaa</h2>
        <DoubleTextCard boxHeaderText="Tulokset ajantasaisesti kisaviikonloppuna" boxBodyText= {"HRF:llä on kilpailussa reaaliaikainen ajanoton seuranta. Tuloksia voi seurata kilpailun aikana mobiililaitteilla \n\n Race-Monitor -sovelluksella, jonka voi ladata (Android, iOS ja Windows Phone -laitteille) ja web-selaimella (selaimessa on oltava Flash-tuki)."} firstBoxHasButton={true} firstBoxButtonText="Lisätietoja" secondBoxHeaderText="Tulokset kilpailujen jälkeen" secondBoxBodyText="Kilpailun tulokset ovat nähtävissä internetissä MYLAPS Speedhive -sivustolla." secondBoxHasButton={true} secondBoxButtonText="Lisätietoja"></DoubleTextCard>
        <TextCardComponent containsLinkButton={false} headerText={"Suljettu harjoittelu Ahvenistolla ennen kisaa - ei yleisöpäivä"} bodyText={"Ahvenisto Race Circuin ratayhtiö järjestää kilpailijoillemme perjantaina 16.8. harjoittelumahdollisuuden. Harjoittelumaksu on 100 euroa ja se maksetaan kahvion kassalle. Melurajana on sama 110db kuin kilpailupäivinä. Äänimittauksen tulee olla suoritettuna hyväksytysti ennen radalle menoa. Harjoittelu tapahtuu klo 10.00–17.00 välisenä aikana ryhmittäin. Muut tätä aikaisemmat harjoitteluajankohdat löytyvät Ahveniston moottoriradan sivustolta."}/>
        <TextCardComponent containsLinkButton={false} headerText={"Kilpailutoimisto avoinna 16.–18.8."} bodyText={"Perjantai 18.00–20.00 (kilpailuun ilmoittautuminen klo 18.00–20.00)Lauantai 8.00–18.00 (kilpailuun ilmoittautuminen klo 8.00–10.00)Sunnuntai 9.00–17.00 \n(* Ilmoittauduttaessa tarvittavat asiapaperit: Ajokortti (tai kuvallinen henkilötodistus), HTP–passi tai HRF-dokumentti tai katsastuskortti autoyksilöstä riippuen, kuitti osallistumismaksusta ja vakuutustodistus sekä mahdollinen depytanttikortti."}/>
        <TextCardComponent containsLinkButton={false} headerText={"Katsastusajat"} bodyText={"Perjantai 18.00–20.00 Lauantai 8.00–13.00Kilpailija ei saa osallistua virallisiin harjoituksiin eikä kilpailuun autolla, jota ei ole katsastuksessa hyväksytty kilpailuun. Esikatsastus suoritetaan aikataulun mukaisesti varikkopaikoilla.\n Ajoissa ilmoittautuneet kilpailijat saavat sähköpostitse ennen kilpailua kilpailija- ja ohjaajakokousinfot. Tutustukaa niihin jo ennen Ahvenistolle saapumista ja ottakaa mukaan kilpailupaikalle."}/>
      </main>
    </div>
  );
}