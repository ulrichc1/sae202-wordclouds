import React, { useState } from 'react';
import './home.css';
import Hollande from './imgs/hollande.jpeg';
import WordcloudTotal from './imgs/all.png';
import Macron2Wordcloud from './imgs/macron_2.png';
import Macron1Wordcloud from './imgs/macron.png';
import HollandeWordcloud from './imgs/hollande.png';
import SarkozyWordcloud from './imgs/sarkozy.png';
import Chirac2Wordcloud from './imgs/chirac_2.png';
import Chirac1Wordcloud from './imgs/chirac_1.png';
import Mitterand2Wordcloud from './imgs/mitterand2.png';
import MitterandWordcloud from './imgs/mitterand.png';
import GiscardWordcloud from './imgs/giscard.png'
import Wordcloud from "./Wordcloud";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPresident, setSelectedPresident] = useState(null);
  const [selectedFirstPresident, setSelectedFirstPresident] = useState(null);
  const [selectedSecondPresident, setSelectedSecondPresident] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);

  const images = {
    'all': WordcloudTotal,
    'macron2': Macron2Wordcloud,
    'macron1': Macron1Wordcloud,
    'hollande': HollandeWordcloud,
    'sarkozy': SarkozyWordcloud,
    'chirac2': Chirac2Wordcloud,
    'chirac1': Chirac1Wordcloud,
    'mitterand2': Mitterand2Wordcloud,
    'mitterand1': MitterandWordcloud,
    'giscard': GiscardWordcloud,
  };

  const downloadImage = (id) => {
    const image = images[id];
    if (!image) {
      console.log('No image found for id', id);
      return;
    }

    const link = document.createElement('a');
    link.download = `wordcloud-${id}.png`;
    link.href = image;
    link.click();
    link.removeEventListener('click', downloadImage);
  }


  const handleOptionSelect = (event) => {
    setSelectedOption(event);
  };

  const handlePresidentSelect = (event) => {
    setSelectedPresident(event);
    setSelectedMode(null);
  };

  const handleFirstPresidentSelect = (event) => {
    setSelectedFirstPresident(event);
    setSelectedMode(null);
  };

  const handleSecondPresidentSelect = (event) => {
    setSelectedSecondPresident(event);
    setSelectedMode(null);
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  const handleRestart = () => {
    setSelectedOption(null);
    setSelectedPresident(null);
    setSelectedMode(null);
    setSelectedFirstPresident(null);
    setSelectedSecondPresident(null);
  };

  const affichePlot = () => {
    return (
      <>
      <img id="wordcloudTotal" src={WordcloudTotal} alt="plot"/>
        <div id="analyse">
        <div className="wordcloud-desc">
          <h4 className="legend"> Nuage de mots de toutes les allocutions présidentielles.</h4>
          <span>
          Nous pouvons analyser que les messages de vœux de Nouvel An adressés aux Français par les présidents de la République chaque année (combinés) mettent en évidence des thèmes récurrents tels que l'année, la France, la nation, l'espérance, le travail et l'avenir.

          Ces mots reflètent l'importance symbolique de cette occasion de faire un bilan annuel des évènements ayant eu lieu en France pendant l’année.

          Les présidents sont généralement optimistes concernant l’avenir de la France, pour rassurer les millions de téléspectateurs qui regardent l’allocution.
          De plus, les présidents abordent souvent des sujets de préoccupation majeure pour la société française tels que la solidarité, la liberté, l'économie et le social.

          Les idées dominantes dans les messages sont la sécurité, la politique, le travail, l'emploi, la société, la justice, la famille, le peuple, le bien-être, la paix, la croissance et les jeunes, ce dont la France a besoin pour contenir à se stabiliser en tant que puissance mondiale.
          De plus, les mots "travail" et "emploi" renvoient également au taux de chômage qui ne cesse de croître en France et aux promesses des présidents de créer de milliers de nouveaux emplois et postes pour réussir à combattre le chômage en France.
          Les mots tels que "compatriotes", "république", "nation", "français" et "société" reflètent également l'appartenance à la République française pour l'auditeur du discours, cela montre d’autant plus que les présidents français sont patriotiques.
          La présence de mots tels que "Europe" et "monde" reflète également l'importance de la France dans le contexte international et les défis à relever sur la scène mondiale, cela reflète également l’appartenance de la France dans l’Union Européenne (crée en 1993).
          Les thèmes de l'unité, de la paix et de la solidarité sont également récurrents dans les discours, reflétant les valeurs fondamentales de la nation française.
          Enfin, les messages de vœux des présidents de la République française mettent en évidence l'importance de la coopération internationale et de la diplomatie pour la France dans un monde en constante évolution.
          Les mots tels que "crise" et "réforme" reflètent également toutes les difficultés et changements rencontrées en France, notamment la crise pétrolière de 1973, la crise financière de 2008, la crise du COVID-19 (coronavirus) et les différentes réformes concernant la création de l’UE, la réforme des retraites, la réforme constitutionnelle de 2008 (passant officiellement le mandat présidentiel du septennat au quinquennat) etc..

          En résumé, les présidents de la Vème République Française profitent de l’allocution du Nouvel An afin de partager aux citoyens français (ou auditeurs) leurs objectifs et leurs ambitions pour l'année à venir, tout en soulignant les défis et les obstacles à surmonter en France, en Europe et dans le monde.

          </span>
          <button className="btn-download" onClick={() => downloadImage("all")} > Télécharger le nuage de mots </button>
        </div>
        </div>
      </>
    )
  }

  const renderWordcloud = (id) => {
    if (selectedMode === 'dynamique'){
        return (
            <div>
              <Wordcloud id={id} />
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots de toutes les allocutions présidentielles.</h4>
                <span>
          Nous pouvons analyser que les messages de vœux de Nouvel An adressés aux Français par les présidents de la République chaque année (combinés) mettent en évidence des thèmes récurrents tels que l'année, la France, la nation, l'espérance et l'avenir. Ces mots reflètent l'importance symbolique de cette occasion de faire un bilan annuel des évènements ayant eu lieu en France pour la nation française. Les présidents sont généralement optimistes concernant l’avenir de la France, pour rassurer les millions de téléspectateurs qui regardent l’allocution.
          De plus, les présidents abordent souvent des sujets de préoccupation majeure pour la société française tels que la solidarité, la liberté, l'économie et le social. Les idées dominantes dans les messages sont la sécurité, la politique, le travail, l'emploi, la société, la justice, la famille, le peuple, le bien-être, la paix, la croissance et les jeunes, ce dont la France a besoin pour contenir à se stabiliser en tant que puissance mondiale.
          Les mots tels que "compatriotes", "république", "nation", "français" et "société" reflètent également l'appartenance à la République française pour l'auditeur du discours. La présence de mots tels que "Europe" et "monde" reflète également l'importance de la France dans le contexte international et les défis à relever sur la scène mondiale.
          En effet, les présidents profitent souvent de cette occasion pour présenter leurs objectifs et leurs ambitions pour l'année à venir, tout en soulignant les défis et les obstacles à surmonter. La présence de mots tels que "Europe" et "monde" reflète également l'importance de la France dans le contexte international et les défis que la nation doit relever sur la scène mondiale. En effet, les présidents profitent souvent de cette occasion pour présenter leurs objectifs et leurs ambitions pour l'année à venir, tout en soulignant les défis et les obstacles à surmonter. Les thèmes de l'unité, de la paix et de la solidarité sont également récurrents dans les discours, reflétant les valeurs fondamentales de la nation française.
          Enfin, les messages de vœux des présidents de la République française mettent en évidence l'importance de la coopération internationale et de la diplomatie pour la France dans un monde en constante évolution. Les présidents profitent souvent de cette occasion pour présenter leurs objectifs et leurs ambitions pour l'année à venir, tout en soulignant les défis et les obstacles à surmonter.
          </span>
              </div>
            </div>
        )
    }
  }
  const renderOnlyOnePresident = () => {
    if (!selectedPresident) {
      return (
        <>
          <img src={Hollande} alt="Bug"/>
          <h3> Erreur d'affichage </h3>
            </>
      );
    }

    if (selectedPresident === '9') {
      return (
        <>
          <img src={Macron2Wordcloud} alt="Mandat 2 Macron Wordcloud" />
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend"> Nuage de mots d’Emmanuel Macron - 2e mandat (2022)</h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant la 1ère année du second mandat d’Emmanuel Macron (8ème  président de la Vème République française), les thèmes et idées majeurs sont l’engagement, le combat, l’école, le territoire, le travail, l’Europe, les enfants, la génération, la solidarité, le chômage, les réfugiées, l’inflation, l’armée, l’écologie, la confiance, la Russie, les médecins (santé) et la crise.
              Dans l’allocution présidentielle du 31 décembre 2022, Macron commence par une reconnaissance des différents groupes de personnes qui ont contribué à la sécurité et au bien-être du pays.
              Le président souligne également l'importance de l'unité nationale dans un monde difficile et incertain.
              Le président aborde ensuite les préoccupations pour l'année à venir, notamment les coupures d'électricité, les augmentations des prix de l'énergie, les vagues de Covid et la question des retraites.
               Il propose des solutions concrètes pour faire face à ces défis et insiste sur la nécessité de travailler ensemble pour transformer la France en une nation plus forte, plus juste et plus productive.
              Le président souligne également l'importance de la transition écologique et de la lutte contre les discriminations, tout en renforçant la confiance dans les grands services publics tels que l'éducation et la santé. Il appelle à une société plus juste, où l'égalité entre les femmes et les hommes est effective, et où la mobilité sociale est améliorée.
              Enfin, le président souligne le rôle de la France et de l'Europe dans la protection de la démocratie face aux régimes autoritaires et dans la lutte contre les défis mondiaux tels que la protection des enfants et de l'information libre et indépendante. Il appelle à l'engagement et au travail collectifs pour atteindre ces objectifs et pour assurer l'indépendance de la France dans tous les domaines.
          </span>
              <button className="btn-download" onClick={() => downloadImage("macron2")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '8') {
      return (
        <>
          <img src={Macron1Wordcloud} alt="Mandat 1 Macron Wordcloud"/>
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend-3"> Nuage de mots d’Emmanuel Macron (1er mandat)</h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat d’Emmanuel Macron (8ème président de la Vème République française), les thèmes et idées majeurs sont la culture, le travail, l’euro, l’Europe, le vaccin, la formation, l’avenir, l’ordre, le soin, le climat, le projet, l’économie et la lutte.

              Le premier mandat d'Emmanuel Macron a été marqué par plusieurs événements et initiatives importantes. Sur le plan économique, il a mis en place des réformes visant à moderniser l'économie française et à améliorer la compétitivité, notamment avec la loi travail, la réforme de l'assurance-chômage et la réforme des retraites (qui a toutefois suscité une forte opposition et qui n'a pas été au départ adoptée).

              En matière de politique européenne, Macron a plaidé pour une plus grande intégration européenne et a travaillé avec d'autres dirigeants européens pour renforcer l'Union européenne. Il a également lancé l'initiative "Europe En Marche" pour promouvoir la coopération entre les différents pays européens.

              Dans le contexte de la pandémie de COVID-19, Macron a pris des mesures pour limiter la propagation du virus, notamment en mettant en place un confinement national et en accélérant la campagne de vaccination. La question du vaccin a été une préoccupation majeure pendant son mandat, car la France a connu des retards dans la distribution des vaccins au début de la pandémie.
              Macron a également lancé des initiatives en matière de culture et d'éducation, avec notamment la création de l'Université européenne de la culture, l’élaboration du Pass Culture pour les jeunes ainsi que la réforme de la formation professionnelle.

              Sur le plan environnemental, il a pris des mesures pour lutter contre le changement climatique, notamment en organisant le One Planet Summit en 2017.

              En termes de sécurité, Macron a mis en place des mesures pour renforcer l'ordre public et lutter contre le terrorisme, notamment en créant un nouveau service national universel et en réformant le système de renseignement.

              Enfin, le thème de la "lutte" a également été présent dans son mandat, notamment avec la création du Service National Universel, la réforme de la justice, et la mise en place de plusieurs mesures pour lutter contre les discriminations et les violences faites aux femmes.

              Pour finir, le mandat d'Emmanuel Macron a été caractérisé par un ensemble de réformes économiques, des initiatives pour renforcer la coopération européenne, des mesures pour lutter contre la pandémie de COVID-19, des initiatives pour promouvoir la culture et l'éducation, des mesures pour lutter contre le changement climatique, des initiatives pour renforcer la sécurité et la lutte contre les discriminations et les violences faites aux femmes.
          </span>
              <button className="btn-download" onClick={() => downloadImage("macron1")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '7') {
      return (
        <>
          <img src={HollandeWordcloud} alt="Mandat Hollande Wordcloud" />
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend-4">  Nuage de mots de François Hollande </h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de François Hollande (7ème  président de la Vème République française), les thèmes et idées majeurs sont la croissance, l’investissement, la réussite, le devoir, les jeunes, l’euro, la liberté, la décision, les enterprises, le chômage, la sécurité, la famille et la responsabilité.

              Le mandat de François Hollande a été marqué par plusieurs événements et réformes importantes. En 2012, il a été élu président de la République française en battant Nicolas Sarkozy. Pendant son mandat, il a mis en place plusieurs mesures pour relancer l'économie française, qui était en difficulté, notamment en lançant un pacte de responsabilité pour encourager les entreprises à investir et à embaucher.


              François Hollande a également pris des mesures pour améliorer la situation des jeunes en France, en mettant en place des contrats d'avenir et des emplois d'avenir pour les jeunes les plus en difficulté. Il a également lancé une réforme du système éducatif français pour améliorer la réussite scolaire et réduire les inégalités.
              Sur le plan international, François Hollande a été très actif et a pris des positions fermes sur plusieurs sujets, tels que la crise en Ukraine et la lutte contre le terrorisme. Il a également été un fervent défenseur de l'Union européenne et de la monnaie unique, l'euro.
              En ce qui concerne les thèmes et idées majeurs identifiés dans le nuage de mots, on peut noter que la croissance et l'investissement étaient des enjeux majeurs pour François Hollande, comme en témoigne le pacte de responsabilité évoqué précédemment. La réussite et le devoir peuvent être reliés aux mesures prises pour améliorer la situation des jeunes et l'éducation. La liberté et la responsabilité pourraient être liées à la position de François Hollande sur la défense des droits de l'homme et la lutte contre le terrorisme. Enfin, le chômage et la sécurité étaient également des enjeux importants pour son mandat, comme en témoigne la mise en place de mesures pour lutter contre le chômage et la prise de position sur la lutte contre le terrorisme.

              </span>
              <button className="btn-download" onClick={() => downloadImage("hollande")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '6') {
      return (
        <>
          <img src={SarkozyWordcloud} alt="Mandat Sarkozy Wordcloud"/>
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend-4"> Nuage de mots de Nicolas Sarkozy </h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de Nicolas Sarkozy (6ème  président de la Vème République française), les thèmes et idées majeurs sont la réforme, la confiance, la crise financière, le devoir, le pouvoir, le respect, les difficultés, la justice, l’emploi, la politique, l’épreuve, le monde, la finance, les réformes et la responsabilité.
              Le mandat de Nicolas Sarkozy a été marqué par plusieurs événements et réformes. Il est arrivé au pouvoir en 2007, juste avant la crise financière mondiale de 2008, qui a eu un impact significatif sur l’économie française. Le gouvernement de Sarkozy a donc mis en place plusieurs mesures pour faire face à cette crise, notamment la réforme des retraites et la réduction des déficits publics.

              Le thème de la réforme est également central dans le mandat de Sarkozy, avec des mesures significatives prises dans des domaines tels que l’éducation, la justice et la santé. Le président a également mis l’accent sur la responsabilité individuelle et la confiance, avec des initiatives visant à encourager les citoyens à prendre en charge leur propre vie.
              La sécurité et la justice étaient également des préoccupations majeures pour Sarkozy, qui a mis en place plusieurs politiques pour lutter contre la criminalité et le terrorisme. L’emploi était également un enjeu important, avec des réformes visant à faciliter l’embauche et à encourager la création d’emplois.
              Enfin, sur la scène internationale, Sarkozy a travaillé à renforcer la position de la France dans le monde, en particulier dans les domaines de la finance et de l’économie mondiale. Il a également été actif dans les affaires internationales, en particulier en Afrique et au Moyen-Orient.

              </span>
              <button className="btn-download" onClick={() => downloadImage("sarkozy")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '5') {
      return (
        <>
          <img src={Chirac2Wordcloud} alt="Mandat 2 Chirac Wordcloud" />
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend-3"> Nuage de mots de Jacques Chirac (2e mandat) </h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 2e mandat de Jacques Chirac (5ème président de la Vème République française), les thèmes et idées majeurs sont l’emploi, le travail, l’industrie, le service, le respect, la reprise, les réformes, le projet, l’économie, le dynamisme, l’école, l’Europe, la paix, les difficultés, la nation, la violence, l’aide, l’enjeu et les victimes.
              En effet, le taux de chômage en France a continué d'augmenter pendant les premières années du mandat de Chirac, atteignant un sommet de 10,8 % en 2005, avant de commencer à diminuer progressivement.

              Le thème de l'industrie est également présent reflétant peut-être les préoccupations concernant la compétitivité de l'économie française à l'époque.

               En effet, le gouvernement de Chirac a mis en place des réformes économiques et sociales pour stimuler la croissance économique et améliorer la compétitivité de la France.

              Le respect est un autre thème important, qui peut refléter les préoccupations concernant le respect des droits de l'homme et des valeurs républicaines.

              Les thèmes des réformes et du projet reflètent également les efforts de Chirac pour mener des réformes économiques et sociales à grande échelle pour moderniser la France et améliorer la qualité de vie de ses citoyens (notamment par le passage du septennat au quinquennat du mandat présidentiel).

              Le thème de l'économie reflète les préoccupations concernant la croissance économique et la compétitivité de la France. Le dynamisme est un autre thème important, qui peut refléter les efforts de Chirac pour stimuler la croissance économique et moderniser l'économie française.

              Le thème de l'école peut refléter les préoccupations concernant l'éducation et la formation en France.
              Le thème de l'Europe reflète les préoccupations concernant l'avenir de l'Union européenne et l'intégration européenne.

              Le thème de la paix peut faire référence à la participation de la France à la guerre en Irak en 2003.

              Le thème de la violence concerne les préoccupations concernant la criminalité et la sécurité en France, en effet, il y a eu une préoccupation croissante de la société française pour les victimes de diverses formes de violence et de discrimination.

              </span>
              <button className="btn-download" onClick={() => downloadImage("chirac2")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '4') {
      return (
        <>
          <img src={Chirac1Wordcloud} alt="Mandat 1 Chirac Wordcloud"/>
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend-3"> Nuage de mots de Jacques Chirac (1er mandat) </h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat de Jacques Chirac (5ème  président de la Vème République française), les thèmes et idées majeurs sont l’euro, la nation, la sécurité, le temps, le service, le progrès, l’avenir, le respect, l’énergie, l’Europe, l’ambition, l’emploi, la liberté, la solidarité, la chance, le travail, le chômage, le siècle, la chaleur et l’initiative.
              La France a adopté l’euro, monnaie unique en 1999, ce qui a eu un impact important sur l'économie et la politique monétaire du pays.
              La nation et la sécurité étaient également des thèmes importants pendant ce mandat.
              Le gouvernement a renforcé les mesures de sécurité intérieure pour lutter contre la criminalité et le terrorisme.
              La France a également été confrontée à des défis liés à l'immigration et à l'intégration des minorités ethniques.
              Le temps, le service, le progrès, l'avenir et l'énergie étaient des thèmes liés au développement économique et technologique. Le gouvernement a pris des mesures pour stimuler l'économie et encourager l'innovation et l'entrepreneuriat.
              L'Europe et l'ambition étaient également des thèmes importants pendant ce mandat.
              La France a joué un rôle actif dans la construction européenne et dans la promotion de la coopération internationale.
              En termes d'emploi et de chômage, qui étaient également des thèmes du nuage de mots, le gouvernement a pris des mesures pour réduire le taux de chômage élevé qui persistait depuis plusieurs années.
              Cela incluait des politiques visant à encourager la création d'emplois et à soutenir les travailleurs en difficulté.
              La liberté, la solidarité et la chance étaient des thèmes liés à la cohésion sociale et à la politique sociale. Le gouvernement a pris des mesures pour promouvoir la justice sociale et la protection des personnes vulnérables.

              </span>
              <button className="btn-download" onClick={() => downloadImage("chirac1")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '3') {
      return (
        <>
          <img src={Mitterand2Wordcloud} alt="Mandat 2 Mitterand Wordcloud" />
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend-3"> Nuage de mots de François Mitterrand (2e mandat) </h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant du 2è mandat de François Mitterrand (4ème président de la Vème République française), les thèmes et idées majeurs sont le chômage, la guerre, la sécurité, le travail, le peuple, le droit, l’Europe, l’union, le combat, la croissance, la justice, la paix, l’effort et le chômage.
              Le taux de chômage a augmenté considérablement en France pendant cette période. Malgré les efforts déployés par le gouvernement pour stimuler la croissance économique et créer des emplois, le chômage est resté élevé tout au long du mandat.

              La guerre du Golfe, qui a eu lieu en 1990-1991, a également été un événement important pendant ce mandat. La France a participé à cette guerre en envoyant des troupes en Irak.

              En termes de sécurité, la France a été confrontée à plusieurs défis, notamment la lutte contre le terrorisme. Le gouvernement a renforcé les mesures de sécurité intérieure pour lutter contre le terrorisme et la criminalité organisée.

              L'Europe et l'union étaient également des thèmes majeurs pendant ce mandat. La France a joué un rôle important dans la création de l'Union européenne (crée le 1 novembre 1993) et dans la mise en place de politiques économiques et monétaires communes.

              Le gouvernement a également pris des mesures pour renforcer l'indépendance de la justice et améliorer l'accès à la justice pour tous. La France a également été impliquée dans des efforts de maintien de la paix dans différents conflits à travers le monde.

              </span>
              <button className="btn-download" onClick={() => downloadImage("mitterand2")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '2') {
      return (
        <>
          <img src={MitterandWordcloud} alt="Mandat 1 Mitterand Wordcloud"/>
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend"> Nuage de mots de François Mitterrand (1er mandat) </h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat de François Mitterrand (4ème  président de la Vème République française), les thèmes et idées majeurs sont la politique, le travail, le peuple, la sécurité, l’histoire, la démocratie, la famille, l’inflation, la crise, le monde, le chômage et la défense.
              Mitterrand a lancé un programme de nationalisations de grandes entreprises, ainsi qu'une politique de relance économique visant à réduire le chômage et l'inflation. Cela est en lien avec les thèmes du travail, de l'inflation et du chômage.

              Cependant, ces politiques ont été confrontées à des défis tels que la crise économique mondiale et la hausse du taux d'intérêt, qui ont finalement obligé le gouvernement à adopter des politiques plus restrictives. Cela est en lien avec les thèmes de la crise et du monde.
              Mitterrand a également mis en place des réformes importantes, notamment dans les domaines de l'éducation, de la santé et de la culture. Il a également introduit des lois visant à renforcer les droits des travailleurs et à améliorer les conditions de travail. Cela est en lien avec les thèmes du travail et du peuple.
              Sur le plan international, le premier mandat de Mitterrand a été marqué par des événements tels que l'arrivée au pouvoir de Ronald Reagan aux États-Unis, la guerre en Afghanistan et la crise des missiles de l'OTAN en Europe. Mitterrand a également joué un rôle important dans la construction de l'Union européenne, notamment en participant à la signature du traité de Maastricht en 1986. Cela est en lien avec le thème du monde.
              Enfin, le premier mandat de Mitterrand a également été marqué par des événements tels que l'attentat de la rue des Rosiers en 1982, qui a choqué la France, ainsi que par des scandales politiques tels que l'affaire des écoutes de l'Élysée en 1983. Cela est en lien avec les thèmes de la sécurité et de la démocratie.
              </span>
              <button className="btn-download" onClick={() => downloadImage("mitterand1")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }

    if (selectedPresident === '1') {
      return (
        <>
          <img src={GiscardWordcloud} alt="Mandat Giscard Wordcloud"/>
          <div id="analyse">
            <div className="wordcloud-desc">
              <h4 className="legend"> Nuage de mots des allocutions de Valéry Giscard d’Estaing </h4>
              <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de Valéry Giscard d’Estaing (3ème président de la Vème République française), les thèmes et idées majeurs sont la liberté, la crise, le travail, la paix, les problèmes, l’unité, l’économie et les difficultés.
              Les thèmes et idées majeurs identifiés dans le nuage de mots, tels que la liberté, la crise, le travail, la paix, les problèmes, l'unité, l'économie et les difficultés, peuvent être liés à plusieurs événements importants qui ont eu lieu pendant son mandat.
              Par exemple, la crise pétrolière, qui a débuté en 1973, a eu un impact considérable sur l'économie française et européenne, et peut expliquer la présence des thèmes de crise, d'économie et de difficultés dans le nuage de mots. La réforme de l'éducation, la création du RMI et l'abolition de la peine de mort peuvent également expliquer la présence des thèmes de liberté et de travail.
              La formation du G7 et l'adhésion de l'Espagne et du Portugal à la CEE peuvent expliquer la présence du thème d'unité dans le nuage de mots, alors que la guerre froide, la Guerre du Vietnam, la révolution iranienne et la crise des otages américains en Iran peuvent expliquer la présence des thèmes de paix et de problèmes.
              </span>
              <button className="btn-download" onClick={() => downloadImage("giscard")} > Télécharger le nuage de mots </button>
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  const renderFirstPresident = () => {
    if (!selectedFirstPresident) {
      return (
        <>
          <img src={Hollande} alt="Bug"/>
        </>
      );
    }

    if (selectedFirstPresident === '9') {
      return (
          <>
            <img src={Macron2Wordcloud} alt="Mandat 2 Macron Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots d’Emmanuel Macron - 2e mandat (2022)</h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant la 1ère année du second mandat d’Emmanuel Macron (8ème  président de la Vème République française), les thèmes et idées majeurs sont l’engagement, le combat, l’école, le territoire, le travail, l’Europe, les enfants, la génération, la solidarité, le chômage, les réfugiées, l’inflation, l’armée, l’écologie, la confiance, la Russie, les médecins (santé) et la crise.
              Dans l’allocution présidentielle du 31 décembre 2022, Macron commence par une reconnaissance des différents groupes de personnes qui ont contribué à la sécurité et au bien-être du pays.
              Le président souligne également l'importance de l'unité nationale dans un monde difficile et incertain.
              Le président aborde ensuite les préoccupations pour l'année à venir, notamment les coupures d'électricité, les augmentations des prix de l'énergie, les vagues de Covid et la question des retraites.
               Il propose des solutions concrètes pour faire face à ces défis et insiste sur la nécessité de travailler ensemble pour transformer la France en une nation plus forte, plus juste et plus productive.
              Le président souligne également l'importance de la transition écologique et de la lutte contre les discriminations, tout en renforçant la confiance dans les grands services publics tels que l'éducation et la santé. Il appelle à une société plus juste, où l'égalité entre les femmes et les hommes est effective, et où la mobilité sociale est améliorée.
              Enfin, le président souligne le rôle de la France et de l'Europe dans la protection de la démocratie face aux régimes autoritaires et dans la lutte contre les défis mondiaux tels que la protection des enfants et de l'information libre et indépendante. Il appelle à l'engagement et au travail collectifs pour atteindre ces objectifs et pour assurer l'indépendance de la France dans tous les domaines.
          </span>
                <button className="btn-download" onClick={() => downloadImage("macron2")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '8') {
      return (
          <>
            <img src={Macron1Wordcloud} alt="Mandat 1 Macron Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots d’Emmanuel Macron (1er mandat)</h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat d’Emmanuel Macron (8ème président de la Vème République française), les thèmes et idées majeurs sont la culture, le travail, l’euro, l’Europe, le vaccin, la formation, l’avenir, l’ordre, le soin, le climat, le projet, l’économie et la lutte.

              Le premier mandat d'Emmanuel Macron a été marqué par plusieurs événements et initiatives importantes. Sur le plan économique, il a mis en place des réformes visant à moderniser l'économie française et à améliorer la compétitivité, notamment avec la loi travail, la réforme de l'assurance-chômage et la réforme des retraites (qui a toutefois suscité une forte opposition et qui n'a pas été au départ adoptée).

              En matière de politique européenne, Macron a plaidé pour une plus grande intégration européenne et a travaillé avec d'autres dirigeants européens pour renforcer l'Union européenne. Il a également lancé l'initiative "Europe En Marche" pour promouvoir la coopération entre les différents pays européens.

              Dans le contexte de la pandémie de COVID-19, Macron a pris des mesures pour limiter la propagation du virus, notamment en mettant en place un confinement national et en accélérant la campagne de vaccination. La question du vaccin a été une préoccupation majeure pendant son mandat, car la France a connu des retards dans la distribution des vaccins au début de la pandémie.
              Macron a également lancé des initiatives en matière de culture et d'éducation, avec notamment la création de l'Université européenne de la culture, l’élaboration du Pass Culture pour les jeunes ainsi que la réforme de la formation professionnelle.

              Sur le plan environnemental, il a pris des mesures pour lutter contre le changement climatique, notamment en organisant le One Planet Summit en 2017.

              En termes de sécurité, Macron a mis en place des mesures pour renforcer l'ordre public et lutter contre le terrorisme, notamment en créant un nouveau service national universel et en réformant le système de renseignement.

              Enfin, le thème de la "lutte" a également été présent dans son mandat, notamment avec la création du Service National Universel, la réforme de la justice, et la mise en place de plusieurs mesures pour lutter contre les discriminations et les violences faites aux femmes.

              Pour finir, le mandat d'Emmanuel Macron a été caractérisé par un ensemble de réformes économiques, des initiatives pour renforcer la coopération européenne, des mesures pour lutter contre la pandémie de COVID-19, des initiatives pour promouvoir la culture et l'éducation, des mesures pour lutter contre le changement climatique, des initiatives pour renforcer la sécurité et la lutte contre les discriminations et les violences faites aux femmes.
          </span>
                <button className="btn-download" onClick={() => downloadImage("macron1")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '7') {
      return (
          <>
            <img src={HollandeWordcloud} alt="Mandat Hollande Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend">  Nuage de mots de François Hollande </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de François Hollande (7ème  président de la Vème République française), les thèmes et idées majeurs sont la croissance, l’investissement, la réussite, le devoir, les jeunes, l’euro, la liberté, la décision, les enterprises, le chômage, la sécurité, la famille et la responsabilité.

              Le mandat de François Hollande a été marqué par plusieurs événements et réformes importantes. En 2012, il a été élu président de la République française en battant Nicolas Sarkozy. Pendant son mandat, il a mis en place plusieurs mesures pour relancer l'économie française, qui était en difficulté, notamment en lançant un pacte de responsabilité pour encourager les entreprises à investir et à embaucher.


              François Hollande a également pris des mesures pour améliorer la situation des jeunes en France, en mettant en place des contrats d'avenir et des emplois d'avenir pour les jeunes les plus en difficulté. Il a également lancé une réforme du système éducatif français pour améliorer la réussite scolaire et réduire les inégalités.
              Sur le plan international, François Hollande a été très actif et a pris des positions fermes sur plusieurs sujets, tels que la crise en Ukraine et la lutte contre le terrorisme. Il a également été un fervent défenseur de l'Union européenne et de la monnaie unique, l'euro.
              En ce qui concerne les thèmes et idées majeurs identifiés dans le nuage de mots, on peut noter que la croissance et l'investissement étaient des enjeux majeurs pour François Hollande, comme en témoigne le pacte de responsabilité évoqué précédemment. La réussite et le devoir peuvent être reliés aux mesures prises pour améliorer la situation des jeunes et l'éducation. La liberté et la responsabilité pourraient être liées à la position de François Hollande sur la défense des droits de l'homme et la lutte contre le terrorisme. Enfin, le chômage et la sécurité étaient également des enjeux importants pour son mandat, comme en témoigne la mise en place de mesures pour lutter contre le chômage et la prise de position sur la lutte contre le terrorisme.

              </span>
                <button className="btn-download" onClick={() => downloadImage("hollande")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '6') {
      return (
          <>
            <img src={SarkozyWordcloud} alt="Mandat Sarkozy Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots de Nicolas Sarkozy </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de Nicolas Sarkozy (6ème  président de la Vème République française), les thèmes et idées majeurs sont la réforme, la confiance, la crise financière, le devoir, le pouvoir, le respect, les difficultés, la justice, l’emploi, la politique, l’épreuve, le monde, la finance, les réformes et la responsabilité.
              Le mandat de Nicolas Sarkozy a été marqué par plusieurs événements et réformes. Il est arrivé au pouvoir en 2007, juste avant la crise financière mondiale de 2008, qui a eu un impact significatif sur l’économie française. Le gouvernement de Sarkozy a donc mis en place plusieurs mesures pour faire face à cette crise, notamment la réforme des retraites et la réduction des déficits publics.

              Le thème de la réforme est également central dans le mandat de Sarkozy, avec des mesures significatives prises dans des domaines tels que l’éducation, la justice et la santé. Le président a également mis l’accent sur la responsabilité individuelle et la confiance, avec des initiatives visant à encourager les citoyens à prendre en charge leur propre vie.
              La sécurité et la justice étaient également des préoccupations majeures pour Sarkozy, qui a mis en place plusieurs politiques pour lutter contre la criminalité et le terrorisme. L’emploi était également un enjeu important, avec des réformes visant à faciliter l’embauche et à encourager la création d’emplois.
              Enfin, sur la scène internationale, Sarkozy a travaillé à renforcer la position de la France dans le monde, en particulier dans les domaines de la finance et de l’économie mondiale. Il a également été actif dans les affaires internationales, en particulier en Afrique et au Moyen-Orient.

              </span>
                <button className="btn-download" onClick={() => downloadImage("sarkozy")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '5') {
      return (
          <>
            <img src={Chirac2Wordcloud} alt="Mandat 2 Chirac Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots de Jacques Chirac (2e mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 2e mandat de Jacques Chirac (5ème président de la Vème République française), les thèmes et idées majeurs sont l’emploi, le travail, l’industrie, le service, le respect, la reprise, les réformes, le projet, l’économie, le dynamisme, l’école, l’Europe, la paix, les difficultés, la nation, la violence, l’aide, l’enjeu et les victimes.
              En effet, le taux de chômage en France a continué d'augmenter pendant les premières années du mandat de Chirac, atteignant un sommet de 10,8 % en 2005, avant de commencer à diminuer progressivement.

              Le thème de l'industrie est également présent reflétant peut-être les préoccupations concernant la compétitivité de l'économie française à l'époque.

               En effet, le gouvernement de Chirac a mis en place des réformes économiques et sociales pour stimuler la croissance économique et améliorer la compétitivité de la France.

              Le respect est un autre thème important, qui peut refléter les préoccupations concernant le respect des droits de l'homme et des valeurs républicaines.

              Les thèmes des réformes et du projet reflètent également les efforts de Chirac pour mener des réformes économiques et sociales à grande échelle pour moderniser la France et améliorer la qualité de vie de ses citoyens (notamment par le passage du septennat au quinquennat du mandat présidentiel).

              Le thème de l'économie reflète les préoccupations concernant la croissance économique et la compétitivité de la France. Le dynamisme est un autre thème important, qui peut refléter les efforts de Chirac pour stimuler la croissance économique et moderniser l'économie française.

              Le thème de l'école peut refléter les préoccupations concernant l'éducation et la formation en France.
              Le thème de l'Europe reflète les préoccupations concernant l'avenir de l'Union européenne et l'intégration européenne.

              Le thème de la paix peut faire référence à la participation de la France à la guerre en Irak en 2003.

              Le thème de la violence concerne les préoccupations concernant la criminalité et la sécurité en France, en effet, il y a eu une préoccupation croissante de la société française pour les victimes de diverses formes de violence et de discrimination.

              </span>
                <button className="btn-download" onClick={() => downloadImage("chirac2")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '4') {
      return (
          <>
            <img src={Chirac1Wordcloud} alt="Mandat 1 Chirac Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots de Jacques Chirac (1er mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat de Jacques Chirac (5ème  président de la Vème République française), les thèmes et idées majeurs sont l’euro, la nation, la sécurité, le temps, le service, le progrès, l’avenir, le respect, l’énergie, l’Europe, l’ambition, l’emploi, la liberté, la solidarité, la chance, le travail, le chômage, le siècle, la chaleur et l’initiative.
              La France a adopté l’euro, monnaie unique en 1999, ce qui a eu un impact important sur l'économie et la politique monétaire du pays.
              La nation et la sécurité étaient également des thèmes importants pendant ce mandat.
              Le gouvernement a renforcé les mesures de sécurité intérieure pour lutter contre la criminalité et le terrorisme.
              La France a également été confrontée à des défis liés à l'immigration et à l'intégration des minorités ethniques.
              Le temps, le service, le progrès, l'avenir et l'énergie étaient des thèmes liés au développement économique et technologique. Le gouvernement a pris des mesures pour stimuler l'économie et encourager l'innovation et l'entrepreneuriat.
              L'Europe et l'ambition étaient également des thèmes importants pendant ce mandat.
              La France a joué un rôle actif dans la construction européenne et dans la promotion de la coopération internationale.
              En termes d'emploi et de chômage, qui étaient également des thèmes du nuage de mots, le gouvernement a pris des mesures pour réduire le taux de chômage élevé qui persistait depuis plusieurs années.
              Cela incluait des politiques visant à encourager la création d'emplois et à soutenir les travailleurs en difficulté.
              La liberté, la solidarité et la chance étaient des thèmes liés à la cohésion sociale et à la politique sociale. Le gouvernement a pris des mesures pour promouvoir la justice sociale et la protection des personnes vulnérables.

              </span>
                <button className="btn-download" onClick={() => downloadImage("chirac1")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '3') {
      return (
          <>
            <img src={Mitterand2Wordcloud} alt="Mandat 2 Mitterand Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots de François Mitterrand (2e mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant du 2è mandat de François Mitterrand (4ème président de la Vème République française), les thèmes et idées majeurs sont le chômage, la guerre, la sécurité, le travail, le peuple, le droit, l’Europe, l’union, le combat, la croissance, la justice, la paix, l’effort et le chômage.
              Le taux de chômage a augmenté considérablement en France pendant cette période. Malgré les efforts déployés par le gouvernement pour stimuler la croissance économique et créer des emplois, le chômage est resté élevé tout au long du mandat.

              La guerre du Golfe, qui a eu lieu en 1990-1991, a également été un événement important pendant ce mandat. La France a participé à cette guerre en envoyant des troupes en Irak.

              En termes de sécurité, la France a été confrontée à plusieurs défis, notamment la lutte contre le terrorisme. Le gouvernement a renforcé les mesures de sécurité intérieure pour lutter contre le terrorisme et la criminalité organisée.

              L'Europe et l'union étaient également des thèmes majeurs pendant ce mandat. La France a joué un rôle important dans la création de l'Union européenne (crée le 1 novembre 1993) et dans la mise en place de politiques économiques et monétaires communes.

              Le gouvernement a également pris des mesures pour renforcer l'indépendance de la justice et améliorer l'accès à la justice pour tous. La France a également été impliquée dans des efforts de maintien de la paix dans différents conflits à travers le monde.

              </span>
                <button className="btn-download" onClick={() => downloadImage("mitterand2")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '2') {
      return (
          <>
            <img src={MitterandWordcloud} alt="Mandat 1 Mitterand Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots de François Mitterrand (1er mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat de François Mitterrand (4ème  président de la Vème République française), les thèmes et idées majeurs sont la politique, le travail, le peuple, la sécurité, l’histoire, la démocratie, la famille, l’inflation, la crise, le monde, le chômage et la défense.
              Mitterrand a lancé un programme de nationalisations de grandes entreprises, ainsi qu'une politique de relance économique visant à réduire le chômage et l'inflation. Cela est en lien avec les thèmes du travail, de l'inflation et du chômage.

              Cependant, ces politiques ont été confrontées à des défis tels que la crise économique mondiale et la hausse du taux d'intérêt, qui ont finalement obligé le gouvernement à adopter des politiques plus restrictives. Cela est en lien avec les thèmes de la crise et du monde.
              Mitterrand a également mis en place des réformes importantes, notamment dans les domaines de l'éducation, de la santé et de la culture. Il a également introduit des lois visant à renforcer les droits des travailleurs et à améliorer les conditions de travail. Cela est en lien avec les thèmes du travail et du peuple.
              Sur le plan international, le premier mandat de Mitterrand a été marqué par des événements tels que l'arrivée au pouvoir de Ronald Reagan aux États-Unis, la guerre en Afghanistan et la crise des missiles de l'OTAN en Europe. Mitterrand a également joué un rôle important dans la construction de l'Union européenne, notamment en participant à la signature du traité de Maastricht en 1986. Cela est en lien avec le thème du monde.
              Enfin, le premier mandat de Mitterrand a également été marqué par des événements tels que l'attentat de la rue des Rosiers en 1982, qui a choqué la France, ainsi que par des scandales politiques tels que l'affaire des écoutes de l'Élysée en 1983. Cela est en lien avec les thèmes de la sécurité et de la démocratie.
              </span>
                <button className="btn-download" onClick={() => downloadImage("mitterand1")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedFirstPresident === '1') {
      return (
          <>
            <img src={GiscardWordcloud} alt="Mandat Giscard Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots des allocutions de Valéry Giscard d’Estaing </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de Valéry Giscard d’Estaing (3ème président de la Vème République française), les thèmes et idées majeurs sont la liberté, la crise, le travail, la paix, les problèmes, l’unité, l’économie et les difficultés.
              Les thèmes et idées majeurs identifiés dans le nuage de mots, tels que la liberté, la crise, le travail, la paix, les problèmes, l'unité, l'économie et les difficultés, peuvent être liés à plusieurs événements importants qui ont eu lieu pendant son mandat.
              Par exemple, la crise pétrolière, qui a débuté en 1973, a eu un impact considérable sur l'économie française et européenne, et peut expliquer la présence des thèmes de crise, d'économie et de difficultés dans le nuage de mots. La réforme de l'éducation, la création du RMI et l'abolition de la peine de mort peuvent également expliquer la présence des thèmes de liberté et de travail.
              La formation du G7 et l'adhésion de l'Espagne et du Portugal à la CEE peuvent expliquer la présence du thème d'unité dans le nuage de mots, alors que la guerre froide, la Guerre du Vietnam, la révolution iranienne et la crise des otages américains en Iran peuvent expliquer la présence des thèmes de paix et de problèmes.
              </span>
                <button className="btn-download" onClick={() => downloadImage("giscard")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }
    return null;
  };

  const renderSecondPresident = () => {
    if (!selectedSecondPresident) {
      return (
        <>
          <img src="./imgs/hollande.jpeg" alt="Bug"/>
        </>
      );
    }

    if (selectedSecondPresident === '9') {
      return (
          <>
            <img src={Macron2Wordcloud} alt="Mandat 2 Macron Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots d’Emmanuel Macron - 2e mandat (2022)</h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant la 1ère année du second mandat d’Emmanuel Macron (8ème  président de la Vème République française), les thèmes et idées majeurs sont l’engagement, le combat, l’école, le territoire, le travail, l’Europe, les enfants, la génération, la solidarité, le chômage, les réfugiées, l’inflation, l’armée, l’écologie, la confiance, la Russie, les médecins (santé) et la crise.
              Dans l’allocution présidentielle du 31 décembre 2022, Macron commence par une reconnaissance des différents groupes de personnes qui ont contribué à la sécurité et au bien-être du pays.
              Le président souligne également l'importance de l'unité nationale dans un monde difficile et incertain.
              Le président aborde ensuite les préoccupations pour l'année à venir, notamment les coupures d'électricité, les augmentations des prix de l'énergie, les vagues de Covid et la question des retraites.
               Il propose des solutions concrètes pour faire face à ces défis et insiste sur la nécessité de travailler ensemble pour transformer la France en une nation plus forte, plus juste et plus productive.
              Le président souligne également l'importance de la transition écologique et de la lutte contre les discriminations, tout en renforçant la confiance dans les grands services publics tels que l'éducation et la santé. Il appelle à une société plus juste, où l'égalité entre les femmes et les hommes est effective, et où la mobilité sociale est améliorée.
              Enfin, le président souligne le rôle de la France et de l'Europe dans la protection de la démocratie face aux régimes autoritaires et dans la lutte contre les défis mondiaux tels que la protection des enfants et de l'information libre et indépendante. Il appelle à l'engagement et au travail collectifs pour atteindre ces objectifs et pour assurer l'indépendance de la France dans tous les domaines.
          </span>
                <button className="btn-download" onClick={() => downloadImage("macron2")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '8') {
      return (
          <>
            <img src={Macron1Wordcloud} alt="Mandat 1 Macron Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots d’Emmanuel Macron (1er mandat)</h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat d’Emmanuel Macron (8ème président de la Vème République française), les thèmes et idées majeurs sont la culture, le travail, l’euro, l’Europe, le vaccin, la formation, l’avenir, l’ordre, le soin, le climat, le projet, l’économie et la lutte.

              Le premier mandat d'Emmanuel Macron a été marqué par plusieurs événements et initiatives importantes. Sur le plan économique, il a mis en place des réformes visant à moderniser l'économie française et à améliorer la compétitivité, notamment avec la loi travail, la réforme de l'assurance-chômage et la réforme des retraites (qui a toutefois suscité une forte opposition et qui n'a pas été au départ adoptée).

              En matière de politique européenne, Macron a plaidé pour une plus grande intégration européenne et a travaillé avec d'autres dirigeants européens pour renforcer l'Union européenne. Il a également lancé l'initiative "Europe En Marche" pour promouvoir la coopération entre les différents pays européens.

              Dans le contexte de la pandémie de COVID-19, Macron a pris des mesures pour limiter la propagation du virus, notamment en mettant en place un confinement national et en accélérant la campagne de vaccination. La question du vaccin a été une préoccupation majeure pendant son mandat, car la France a connu des retards dans la distribution des vaccins au début de la pandémie.
              Macron a également lancé des initiatives en matière de culture et d'éducation, avec notamment la création de l'Université européenne de la culture, l’élaboration du Pass Culture pour les jeunes ainsi que la réforme de la formation professionnelle.

              Sur le plan environnemental, il a pris des mesures pour lutter contre le changement climatique, notamment en organisant le One Planet Summit en 2017.

              En termes de sécurité, Macron a mis en place des mesures pour renforcer l'ordre public et lutter contre le terrorisme, notamment en créant un nouveau service national universel et en réformant le système de renseignement.

              Enfin, le thème de la "lutte" a également été présent dans son mandat, notamment avec la création du Service National Universel, la réforme de la justice, et la mise en place de plusieurs mesures pour lutter contre les discriminations et les violences faites aux femmes.

              Pour finir, le mandat d'Emmanuel Macron a été caractérisé par un ensemble de réformes économiques, des initiatives pour renforcer la coopération européenne, des mesures pour lutter contre la pandémie de COVID-19, des initiatives pour promouvoir la culture et l'éducation, des mesures pour lutter contre le changement climatique, des initiatives pour renforcer la sécurité et la lutte contre les discriminations et les violences faites aux femmes.
          </span>
                <button className="btn-download" onClick={() => downloadImage("macron1")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '7') {
      return (
          <>
            <img src={HollandeWordcloud} alt="Mandat Hollande Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend">  Nuage de mots de François Hollande </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de François Hollande (7ème  président de la Vème République française), les thèmes et idées majeurs sont la croissance, l’investissement, la réussite, le devoir, les jeunes, l’euro, la liberté, la décision, les enterprises, le chômage, la sécurité, la famille et la responsabilité.

              Le mandat de François Hollande a été marqué par plusieurs événements et réformes importantes. En 2012, il a été élu président de la République française en battant Nicolas Sarkozy. Pendant son mandat, il a mis en place plusieurs mesures pour relancer l'économie française, qui était en difficulté, notamment en lançant un pacte de responsabilité pour encourager les entreprises à investir et à embaucher.


              François Hollande a également pris des mesures pour améliorer la situation des jeunes en France, en mettant en place des contrats d'avenir et des emplois d'avenir pour les jeunes les plus en difficulté. Il a également lancé une réforme du système éducatif français pour améliorer la réussite scolaire et réduire les inégalités.
              Sur le plan international, François Hollande a été très actif et a pris des positions fermes sur plusieurs sujets, tels que la crise en Ukraine et la lutte contre le terrorisme. Il a également été un fervent défenseur de l'Union européenne et de la monnaie unique, l'euro.
              En ce qui concerne les thèmes et idées majeurs identifiés dans le nuage de mots, on peut noter que la croissance et l'investissement étaient des enjeux majeurs pour François Hollande, comme en témoigne le pacte de responsabilité évoqué précédemment. La réussite et le devoir peuvent être reliés aux mesures prises pour améliorer la situation des jeunes et l'éducation. La liberté et la responsabilité pourraient être liées à la position de François Hollande sur la défense des droits de l'homme et la lutte contre le terrorisme. Enfin, le chômage et la sécurité étaient également des enjeux importants pour son mandat, comme en témoigne la mise en place de mesures pour lutter contre le chômage et la prise de position sur la lutte contre le terrorisme.

              </span>
                <button className="btn-download" onClick={() => downloadImage("hollande")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '6') {
      return (
          <>
            <img src={SarkozyWordcloud} alt="Mandat Sarkozy Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots de Nicolas Sarkozy </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de Nicolas Sarkozy (6ème  président de la Vème République française), les thèmes et idées majeurs sont la réforme, la confiance, la crise financière, le devoir, le pouvoir, le respect, les difficultés, la justice, l’emploi, la politique, l’épreuve, le monde, la finance, les réformes et la responsabilité.
              Le mandat de Nicolas Sarkozy a été marqué par plusieurs événements et réformes. Il est arrivé au pouvoir en 2007, juste avant la crise financière mondiale de 2008, qui a eu un impact significatif sur l’économie française. Le gouvernement de Sarkozy a donc mis en place plusieurs mesures pour faire face à cette crise, notamment la réforme des retraites et la réduction des déficits publics.

              Le thème de la réforme est également central dans le mandat de Sarkozy, avec des mesures significatives prises dans des domaines tels que l’éducation, la justice et la santé. Le président a également mis l’accent sur la responsabilité individuelle et la confiance, avec des initiatives visant à encourager les citoyens à prendre en charge leur propre vie.
              La sécurité et la justice étaient également des préoccupations majeures pour Sarkozy, qui a mis en place plusieurs politiques pour lutter contre la criminalité et le terrorisme. L’emploi était également un enjeu important, avec des réformes visant à faciliter l’embauche et à encourager la création d’emplois.
              Enfin, sur la scène internationale, Sarkozy a travaillé à renforcer la position de la France dans le monde, en particulier dans les domaines de la finance et de l’économie mondiale. Il a également été actif dans les affaires internationales, en particulier en Afrique et au Moyen-Orient.

              </span>
                <button className="btn-download" onClick={() => downloadImage("sarkozy")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '5') {
      return (
          <>
            <img src={Chirac2Wordcloud} alt="Mandat 2 Chirac Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots de Jacques Chirac (2e mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 2e mandat de Jacques Chirac (5ème président de la Vème République française), les thèmes et idées majeurs sont l’emploi, le travail, l’industrie, le service, le respect, la reprise, les réformes, le projet, l’économie, le dynamisme, l’école, l’Europe, la paix, les difficultés, la nation, la violence, l’aide, l’enjeu et les victimes.
              En effet, le taux de chômage en France a continué d'augmenter pendant les premières années du mandat de Chirac, atteignant un sommet de 10,8 % en 2005, avant de commencer à diminuer progressivement.

              Le thème de l'industrie est également présent reflétant peut-être les préoccupations concernant la compétitivité de l'économie française à l'époque.

               En effet, le gouvernement de Chirac a mis en place des réformes économiques et sociales pour stimuler la croissance économique et améliorer la compétitivité de la France.

              Le respect est un autre thème important, qui peut refléter les préoccupations concernant le respect des droits de l'homme et des valeurs républicaines.

              Les thèmes des réformes et du projet reflètent également les efforts de Chirac pour mener des réformes économiques et sociales à grande échelle pour moderniser la France et améliorer la qualité de vie de ses citoyens (notamment par le passage du septennat au quinquennat du mandat présidentiel).

              Le thème de l'économie reflète les préoccupations concernant la croissance économique et la compétitivité de la France. Le dynamisme est un autre thème important, qui peut refléter les efforts de Chirac pour stimuler la croissance économique et moderniser l'économie française.

              Le thème de l'école peut refléter les préoccupations concernant l'éducation et la formation en France.
              Le thème de l'Europe reflète les préoccupations concernant l'avenir de l'Union européenne et l'intégration européenne.

              Le thème de la paix peut faire référence à la participation de la France à la guerre en Irak en 2003.

              Le thème de la violence concerne les préoccupations concernant la criminalité et la sécurité en France, en effet, il y a eu une préoccupation croissante de la société française pour les victimes de diverses formes de violence et de discrimination.

              </span>
                <button className="btn-download" onClick={() => downloadImage("chirac2")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '4') {
      return (
          <>
            <img src={Chirac1Wordcloud} alt="Mandat 1 Chirac Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots de Jacques Chirac (1er mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat de Jacques Chirac (5ème  président de la Vème République française), les thèmes et idées majeurs sont l’euro, la nation, la sécurité, le temps, le service, le progrès, l’avenir, le respect, l’énergie, l’Europe, l’ambition, l’emploi, la liberté, la solidarité, la chance, le travail, le chômage, le siècle, la chaleur et l’initiative.
              La France a adopté l’euro, monnaie unique en 1999, ce qui a eu un impact important sur l'économie et la politique monétaire du pays.
              La nation et la sécurité étaient également des thèmes importants pendant ce mandat.
              Le gouvernement a renforcé les mesures de sécurité intérieure pour lutter contre la criminalité et le terrorisme.
              La France a également été confrontée à des défis liés à l'immigration et à l'intégration des minorités ethniques.
              Le temps, le service, le progrès, l'avenir et l'énergie étaient des thèmes liés au développement économique et technologique. Le gouvernement a pris des mesures pour stimuler l'économie et encourager l'innovation et l'entrepreneuriat.
              L'Europe et l'ambition étaient également des thèmes importants pendant ce mandat.
              La France a joué un rôle actif dans la construction européenne et dans la promotion de la coopération internationale.
              En termes d'emploi et de chômage, qui étaient également des thèmes du nuage de mots, le gouvernement a pris des mesures pour réduire le taux de chômage élevé qui persistait depuis plusieurs années.
              Cela incluait des politiques visant à encourager la création d'emplois et à soutenir les travailleurs en difficulté.
              La liberté, la solidarité et la chance étaient des thèmes liés à la cohésion sociale et à la politique sociale. Le gouvernement a pris des mesures pour promouvoir la justice sociale et la protection des personnes vulnérables.

              </span>
                <button className="btn-download" onClick={() => downloadImage("chirac1")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '3') {
      return (
          <>
            <img src={Mitterand2Wordcloud} alt="Mandat 2 Mitterand Wordcloud" />
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots de François Mitterrand (2e mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant du 2è mandat de François Mitterrand (4ème président de la Vème République française), les thèmes et idées majeurs sont le chômage, la guerre, la sécurité, le travail, le peuple, le droit, l’Europe, l’union, le combat, la croissance, la justice, la paix, l’effort et le chômage.
              Le taux de chômage a augmenté considérablement en France pendant cette période. Malgré les efforts déployés par le gouvernement pour stimuler la croissance économique et créer des emplois, le chômage est resté élevé tout au long du mandat.

              La guerre du Golfe, qui a eu lieu en 1990-1991, a également été un événement important pendant ce mandat. La France a participé à cette guerre en envoyant des troupes en Irak.

              En termes de sécurité, la France a été confrontée à plusieurs défis, notamment la lutte contre le terrorisme. Le gouvernement a renforcé les mesures de sécurité intérieure pour lutter contre le terrorisme et la criminalité organisée.

              L'Europe et l'union étaient également des thèmes majeurs pendant ce mandat. La France a joué un rôle important dans la création de l'Union européenne (crée le 1 novembre 1993) et dans la mise en place de politiques économiques et monétaires communes.

              Le gouvernement a également pris des mesures pour renforcer l'indépendance de la justice et améliorer l'accès à la justice pour tous. La France a également été impliquée dans des efforts de maintien de la paix dans différents conflits à travers le monde.

              </span>
                <button className="btn-download" onClick={() => downloadImage("mitterand2")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '2') {
      return (
          <>
            <img src={MitterandWordcloud} alt="Mandat 1 Mitterand Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend"> Nuage de mots de François Mitterrand (1er mandat) </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le 1er mandat de François Mitterrand (4ème  président de la Vème République française), les thèmes et idées majeurs sont la politique, le travail, le peuple, la sécurité, l’histoire, la démocratie, la famille, l’inflation, la crise, le monde, le chômage et la défense.
              Mitterrand a lancé un programme de nationalisations de grandes entreprises, ainsi qu'une politique de relance économique visant à réduire le chômage et l'inflation. Cela est en lien avec les thèmes du travail, de l'inflation et du chômage.

              Cependant, ces politiques ont été confrontées à des défis tels que la crise économique mondiale et la hausse du taux d'intérêt, qui ont finalement obligé le gouvernement à adopter des politiques plus restrictives. Cela est en lien avec les thèmes de la crise et du monde.
              Mitterrand a également mis en place des réformes importantes, notamment dans les domaines de l'éducation, de la santé et de la culture. Il a également introduit des lois visant à renforcer les droits des travailleurs et à améliorer les conditions de travail. Cela est en lien avec les thèmes du travail et du peuple.
              Sur le plan international, le premier mandat de Mitterrand a été marqué par des événements tels que l'arrivée au pouvoir de Ronald Reagan aux États-Unis, la guerre en Afghanistan et la crise des missiles de l'OTAN en Europe. Mitterrand a également joué un rôle important dans la construction de l'Union européenne, notamment en participant à la signature du traité de Maastricht en 1986. Cela est en lien avec le thème du monde.
              Enfin, le premier mandat de Mitterrand a également été marqué par des événements tels que l'attentat de la rue des Rosiers en 1982, qui a choqué la France, ainsi que par des scandales politiques tels que l'affaire des écoutes de l'Élysée en 1983. Cela est en lien avec les thèmes de la sécurité et de la démocratie.
              </span>
                <button className="btn-download" onClick={() => downloadImage("mitterand1")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }

    if (selectedSecondPresident === '1') {
      return (
          <>
            <img src={GiscardWordcloud} alt="Mandat Giscard Wordcloud"/>
            <div id="analyse">
              <div className="wordcloud-desc">
                <h4 className="legend-2"> Nuage de mots des allocutions de Valéry Giscard d’Estaing </h4>
                <span>
              Ici, nous pouvons nous analyser que dans le nuage de mots du mandat représentant le mandat de Valéry Giscard d’Estaing (3ème président de la Vème République française), les thèmes et idées majeurs sont la liberté, la crise, le travail, la paix, les problèmes, l’unité, l’économie et les difficultés.
              Les thèmes et idées majeurs identifiés dans le nuage de mots, tels que la liberté, la crise, le travail, la paix, les problèmes, l'unité, l'économie et les difficultés, peuvent être liés à plusieurs événements importants qui ont eu lieu pendant son mandat.
              Par exemple, la crise pétrolière, qui a débuté en 1973, a eu un impact considérable sur l'économie française et européenne, et peut expliquer la présence des thèmes de crise, d'économie et de difficultés dans le nuage de mots. La réforme de l'éducation, la création du RMI et l'abolition de la peine de mort peuvent également expliquer la présence des thèmes de liberté et de travail.
              La formation du G7 et l'adhésion de l'Espagne et du Portugal à la CEE peuvent expliquer la présence du thème d'unité dans le nuage de mots, alors que la guerre froide, la Guerre du Vietnam, la révolution iranienne et la crise des otages américains en Iran peuvent expliquer la présence des thèmes de paix et de problèmes.
              </span>
                <button className="btn-download" onClick={() => downloadImage("giscard")} > Télécharger le nuage de mots </button>
              </div>
            </div>
          </>
      );
    }
    return null;
  }
  
  const renderOptions = () => {
    if (selectedOption === 1) {
      return (
        <div id="selection2">
          <h2>Sélectionnez un mode d'affichage:</h2>
          <ul>
            <li>
              <input type="radio" name="mode" value="dynamique" checked={false}  onChange={() => handleModeSelect('dynamique')} />
              <label htmlFor="dynamique">Affichage dynamique</label>
            </li>
            <li>
              <input type="radio" name="mode" value="image" checked={false}  onChange={() => handleModeSelect('statique')} />
              <label htmlFor="image">Affichage statique</label>
            </li>
          </ul>
          {selectedMode && (
            <button id="restart" onClick={handleRestart}>
              Recommencez
            </button>
          )}
        </div>
      );
    } else if (selectedOption === 2) {
      return (
        <div id="selectedOption2">
          <h2>Sélectionnez deux mandats :</h2>
          <div id="deuxmandats">
          <div id="premierMandat">
            <div>
              <p> Emmanuel Macron </p>
              <ul>
              <li>
                <img src={require('./imgs/macron2.jpg')}  alt="Emmanuel Macron" />
                  <input type="radio" name="mandat1" value="9" onChange={() => handleFirstPresidentSelect('9')} />
                  <label htmlFor="mandat1">Mandat 2 (2022-Maintenant)</label>
                </li>
                <li> 
                <img src={require('./imgs/macron1.jpeg')}  alt="Emmanuel Macron" />
                  <input type="radio" name="mandat1" value="8" onChange={() => handleFirstPresidentSelect('8')} />
                  <label htmlFor="mandat1">Mandat 1 (2017-2022)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> François Hollande </p>
              <ul>
                <li>
                <img src={require('./imgs/hollande.jpeg')}  alt="François Hollande" />
                  <input type="radio"  name="mandat1" value="7" onChange={() => handleFirstPresidentSelect('7')} />
                  <label htmlFor="mandat1">Mandat 1 (2012-2017)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Nicolas Sarkozy </p>
              <ul>
                <li>
                <img src={require('./imgs/sarkozy.jpeg')}  alt="Nicolas Sarkozy" />
                  <input type="radio" name="mandat1" value="6" onChange={() => handleFirstPresidentSelect('6')} />
                  <label htmlFor="mandat1">Mandat 1 (2007-2012)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Jacques Chirac </p>
              <ul>
              <li>
                <img src={require('./imgs/chirac2.jpg')}  alt="Jacques Chirac" />
                  <input type="radio" name="mandat1" value="5" onChange={() => handleFirstPresidentSelect('5')} />
                  <label htmlFor="mandat1">Mandat 2 (2002-2007)</label>
                </li>
                <li>
                <img src={require('./imgs/chirac1.jpeg')}  alt="Jacques Chirac" />
                  <input type="radio" name="mandat1" value="4" onChange={() => handleFirstPresidentSelect('4')} />
                  <label htmlFor="mandat1">Mandat 1 (1995-2002)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> François Mitterand </p>
              <ul>
              <li>
                <img src={require('./imgs/mitterand2.jpg')}  alt="François Mitterand" />
                  <input type="radio" name="mandat1" value="3" onChange={() => handleFirstPresidentSelect('3')} />
                  <label htmlFor="mandat1">Mandat 2 (1988-1995)</label>
                </li>
                <li>
                <img src={require('./imgs/mitterand1.jpeg')}  alt="François Mitterand" />
                  <input type="radio" name="mandat1" value="2" onChange={() => handleFirstPresidentSelect('2')} />
                  <label htmlFor="mandat1">Mandat 1 (1981-1988)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Valéry Giscard D'Estaing </p>
              <ul>
                <li>
                <img src={require('./imgs/giscard.jpeg')}  alt="Valery Giscard D'Estaing" />
                  <input type="radio" name="mandat1" value="1" onChange={() => handleFirstPresidentSelect('1')} />
                  <label htmlFor="mandat1">Mandat 1 (1974-1981)</label>
                </li>
              </ul>
            </div>
          </div>
          <div id="secondMandat">
            <div>
            <p> Emmanuel Macron </p>
              <ul>
                <li>
                <img src={require('./imgs/macron2.jpg')}  alt="Emmanuel Macron" />
                  <input type="radio" name="mandat2" value="9" onChange={() => handleSecondPresidentSelect('9')} />
                  <label htmlFor="mandat2">Mandat 2 (2022-Maintenant)</label>
                </li>
                <li> 
                <img src={require('./imgs/macron1.jpeg')}  alt="Emmanuel Macron" />
                  <input type="radio" name="mandat2" value="8" onChange={() => handleSecondPresidentSelect('8')} />
                  <label htmlFor="mandat2">Mandat 1 (2017-2022)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> François Hollande </p>
              <ul>
                <li>
                <img src={require('./imgs/hollande.jpeg')}  alt="François Hollande" />
                  <input type="radio" name="mandat2" value="7" onChange={() => handleSecondPresidentSelect('7')} />
                  <label htmlFor="mandat2">Mandat 1 (2012-2017)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Nicolas Sarkozy </p>
              <ul>
                <li>
                <img src={require('./imgs/sarkozy.jpeg')}  alt="Nicolas Sarkozy" />
                  <input type="radio" name="mandat2" value="6" onChange={() => handleSecondPresidentSelect('6')} />
                  <label htmlFor="mandat2">Mandat 1 (2007-2012)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Jacques Chirac </p>
              <ul>
                <li>
                <img src={require('./imgs/chirac2.jpg')}  alt="Jacques Chirac" />
                  <input type="radio" name="mandat2" value="5" onChange={() => handleSecondPresidentSelect('5')} />
                  <label htmlFor="mandat2">Mandat 2 (2002-2007)</label>
                </li>
                <li>
                <img src={require('./imgs/chirac1.jpeg')}  alt="Jacques Chirac" />
                  <input type="radio"  name="mandat2" value="4" onChange={() => handleSecondPresidentSelect('4')} />
                  <label htmlFor="mandat2">Mandat 1 (1995-2002)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> François Mitterand </p>
              <ul>
                <li>
                <img src={require('./imgs/mitterand2.jpg')}  alt="François Mitterand" />
                  <input type="radio" name="mandat2" value="3" onChange={() => handleSecondPresidentSelect('3')} />
                  <label htmlFor="mandat2">Mandat 2 (1988-1995)</label>
                </li>
                <li>
                <img src={require('./imgs/mitterand1.jpeg')}  alt="François Mitterand" />
                  <input type="radio" name="mandat2" value="2" onChange={() => handleSecondPresidentSelect('2')} />
                  <label htmlFor="mandat2">Mandat 1 (1981-1988)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Valéry Giscard D'Estaing </p>
              <ul>
                <li>
                <img src={require('./imgs/giscard.jpeg')}  alt="Valery Giscard D'Estaing" />
                  <input type="radio" name="mandat2" value="1" onChange={() => handleSecondPresidentSelect('1')} />
                  <label htmlFor="mandat2">Mandat 1 (1974-1981)</label>
                </li>
              </ul>
            </div>
          </div>
          </div>
          {selectedFirstPresident && selectedSecondPresident && (
            <button id="confirm2" onClick={() => setSelectedOption(1)}>
              Confirmer
            </button>
          )}
        </div>
      );
    } else if (selectedOption === 3) {
      return (
        <>
          <div id="unMandat">
            <h2>Sélectionnez un mandat présidentiel :</h2>
            <div>
            <p> Emmanuel Macron </p>
              <ul>
              <li>
                <img className="img2" src={require('./imgs/macron2.jpg')}  alt="Emmanuel Macron" />
                  <input type="radio" name="mandat2" value="9" onChange={() => handlePresidentSelect('9')} />
                  <label htmlFor="mandat2">Mandat 2 (2022-Maintenant)</label>
                </li>
                <li> 
                <img className="img2" src={require('./imgs/macron1.jpeg')}  alt="Emmanuel Macron" />
                  <input type="radio" name="mandat2" value="8" onChange={() => handlePresidentSelect('8')} />
                  <label htmlFor="mandat2">Mandat 1 (2017-2022)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> François Hollande </p>
              <ul>
                <li>
                <img className="img2" src={require('./imgs/hollande.jpeg')}  alt="François Hollande" />
                  <input type="radio" name="mandat2" value="7" onChange={() => handlePresidentSelect('7')} />
                  <label htmlFor="mandat2">Mandat 1 (2012-2017)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Nicolas Sarkozy </p>
              <ul>
                <li>
                <img className="img2" src={require('./imgs/sarkozy.jpeg')}  alt="Nicolas Sarkozy" />
                  <input type="radio" name="mandat2" value="6" onChange={() => handlePresidentSelect('6')} />
                  <label htmlFor="mandat2">Mandat 1 (2007-2012)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Jacques Chirac </p>
              <ul>
                <li>
                <img className="img2" src={require('./imgs/chirac2.jpg')}  alt="Jacques Chirac" />
                  <input type="radio"  name="mandat2" value="5" onChange={() => handlePresidentSelect('5')} />
                  <label htmlFor="mandat2">Mandat 2 (2002-2007)</label>
                </li>
                  <li>
                <img className="img2" src={require('./imgs/chirac1.jpeg')}  alt="Jacques Chirac" />
                  <input type="radio" name="mandat2" value="4" onChange={() => handlePresidentSelect('4')} />
                  <label htmlFor="mandat2">Mandat 1 (1995-2002)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> François Mitterand </p>
              <ul>
                <li>
                <img className="img2" src={require('./imgs/mitterand2.jpg')}  alt="François Mitterand" />
                  <input type="radio" name="mandat2" value="2" onChange={() => handlePresidentSelect('3')} />
                  <label htmlFor="mandat2">Mandat 2 (1988-1995)</label>
                </li>
                <li>
                <img className="img2" src={require('./imgs/mitterand1.jpeg')}  alt="François Mitterand" />
                  <input type="radio" name="mandat2" value="3" onChange={() => handlePresidentSelect('2')} />
                  <label htmlFor="mandat2">Mandat 1 (1981-1988)</label>
                </li>
              </ul>
            </div>
            <div>
            <p> Valéry Giscard D'Estaing </p>
              <ul>
                <li>
                <img className="img2" src={require('./imgs/giscard.jpeg')}  alt="Valery Giscard D'Estaing" />
                  <input type="radio" name="mandat2" value="1" onChange={() => handlePresidentSelect('1')} />
                  <label htmlFor="mandat2">Mandat 1 (1974-1981)</label>
                </li>
              </ul>
            </div>
          </div>
          {selectedPresident && (
            <button id="confirm-bis" onClick={() => setSelectedOption(1)}>
              Confirmer
            </button>
          )}
        </>
      );
    } else {
      return (
        <div id="selection1">
          <h2>Sélectionnez un type de nuage de mots :</h2>
          <ul>
            <li>
              <input type="radio" name="option" value="1" checked={false} onChange={() => handleOptionSelect(1)} />
              <label htmlFor="1">Mandat total</label>
            </li>
            <li>
              <input type="radio" name="option" value="2" checked={false}  onChange={() => handleOptionSelect(2) } />
              <label htmlFor="2">Mandat comparatif (entre deux mandats)</label>
            </li>
            <li>
              <input type="radio" name="option" value="3" checked={false} onChange={() => handleOptionSelect(3)} />
              <label htmlFor="3">Mandat solo</label>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div id="home">
      <div id="header">
      <h1>Allocutions Présidentielles - Nuage de mots </h1>
      </div>
      <div id="wdc">
      {renderOptions()}
      {selectedOption && selectedMode && selectedFirstPresident && selectedSecondPresident && (
      <div id='comparatif'>
        <div className="comparatif-item">
        {renderFirstPresident()}
        </div>
        <div className="comparatif-item">
        {renderSecondPresident()}
        </div>
      </div>
      )}
      {selectedOption && selectedMode && selectedPresident && (
      <div id="mandatsolo">
        {renderOnlyOnePresident()}
      </div>
      )}
      {selectedOption && selectedMode && !selectedFirstPresident && !selectedSecondPresident && !selectedPresident && (selectedMode === "statique") && (
      <div id="mandattotal">
        {affichePlot()}
      </div>
      )}
        {selectedOption && selectedMode && !selectedFirstPresident && !selectedSecondPresident && !selectedPresident && (selectedMode === "dynamique") && (
            <div id="mandattotal">
              {renderWordcloud("0")}
            </div>
        )}
</div>
    </div>
  );
};

export default Home;