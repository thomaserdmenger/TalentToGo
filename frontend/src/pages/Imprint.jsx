import HeroVideo from "../components/HeroVideo";
import { homeDataHeroDE, homeDataHeroES } from "../data/homeData";
import { navigationDE, navigationES } from "../data/navigation";

const Imprint = () => {
  return (
    <>
      <header>
        <HeroVideo
          homeDataHeroDE={homeDataHeroDE}
          homeDataHeroES={homeDataHeroES}
          navigationDE={navigationDE}
          navigationES={navigationES}
        />
      </header>
      <main className="pt-36 max-w-[1440px] px-4 lg:px-12 mx-auto pb-12">
        <h1 className="font-bold text-2xl mb-2">Impressum</h1>
        <section className="flex flex-col gap-2">
          <p className="mb-4">Angaben gemäß § 5 Digitale-Dieste-Gesetz (DDG):</p>
          <div className="mb-2">
            <h2 className="font-bold text-lg">TalentToGo</h2>
            <p>Holztor 19</p>
            <p>99820 Hörselberg-Hainich</p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Vertreten durch:</h2>
            <p>Katharina Wenzel</p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Kontakt</h2>
            <p>Telefon: </p>
            <p>E-Mail: katharina.wenzel@talentogo.de</p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Registereintrag</h2>
            <p>Eintragung im Handelsregister</p>
            <p>Registergericht: </p>
            <p>Registernummer: </p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Umsatzsteuer</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Katharina Wenzel</p>
            <p>Holztor 19</p>
            <p>99820 Hörselberg-Hainich</p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit: http://ec.europa.eu/consumers/odr Unsere E-Mail-Adresse finden Sie oben im
              Impressum.
            </p>
            <p>
              Gemäß § 36 des Verbraucherstreitbeilegungsgesetzes sind wir verpflichtet, darauf
              hinzuweisen, dass wir zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle weder bereit noch verpflichtet sind.
            </p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Haftung für Inhalte</h2>
            <p>
              Der Betreiber der Onlineangebote (Katharina Wenzel) übernimmt keinerlei Gewähr für die
              Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
              Informationen. Haftungsansprüche gegen den Betreiber, welche sich auf Schäden
              materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der
              dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger
              Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des
              Betreibers kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden
              vorliegt.
            </p>
            <p>
              Alle Angebote sind freibleibend und unverbindlich. Der Betreiber behält es sich
              ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte
              Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise
              oder endgültig einzustellen.
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Haftung für Links</h2>
            <p>
              Bei direkten oder indirekten Verweisen auf fremde Webseiten („Hyperlinks“), die
              außerhalb des Verantwortungsbereiches des Betreibers liegen, würde eine
              Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Betreiber
              von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die
              Nutzung im Falle rechtswidriger Inhalte zu verhindern.
            </p>
            <p>
              Der Betreiber erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine
              illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und
              zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften
              Seiten hat der Betreiber keinerlei Einfluss.
            </p>
            <p>
              Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller
              verlinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese
              Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und
              Verweise sowie für Fremdeinträge in vom Betreiber eingerichteten Gästebüchern,
              Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von
              Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind.
            </p>
            <p>
              Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden,
              die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen,
              haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der
              über Links auf die jeweilige Veröffentlichung lediglich verweist.
            </p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
          <div className="mb-2">
            <h2 className="font-bold text-lg">Rechtswirksamkeit dieses Haftungsausschlusses</h2>
            <p>
              Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem
              aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses
              Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
              sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit
              davon unberührt.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Imprint;
