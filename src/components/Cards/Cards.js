import Line from "../Line/Line";
import Card from "../Card/Card";
import Potato from "../../images/snack/Картошка.png";
import Chicken from "../../images/snack/ЧикенСтрипсы.png";
import BBQ from "../../images/snack/Крылья.png";
import Pelm from "../../images/snack/Пельмешки.png";
//import PotatoBall from "../../images/snack/Шарики.png";
import Oil from "../../images/snack/Оливки.png";
import Cheese from "../../images/snack/Палочки.png";
import Shrimp from "../../images/snack/Креветки.png";
import Ramen from "../../images/Soup/Рамен.png";
import Okroshka from "../../images/Soup/Окрошка-Кур.png";
import OkroshkaKrev from "../../images/Soup/Окрошка-Крев.png";
import RamenKor from "../../images/Soup/Кор-Рамен.png";
import Tom from "../../images/Soup/Том-Ям.png";
import BoulKur from "../../images/Salad/Боул-кур.png";
import SaladBak from "../../images/Salad/ХрустБаклажаны.png";
import Poke from "../../images/Salad/Поке.png";
import BoulGov from "../../images/Salad/БейбиКартофель.png";
import Derevenskaya from "../../images/Pizza/Деревенская.png";
import Grib from "../../images/Pizza/Грибная.png";
import Kur from "../../images/Pizza/ВяленыеТоматы.png";
import Pepperoni from "../../images/Pizza/Пепперони.png";
import Rukola from "../../images/Pizza/Руккола.png";
import Jo from "../../images/Pizza/СлоппиДжо.png";
import SandwichKur from "../../images/Street/СэндвичКур.png";
import SandwichTun from "../../images/Street/СэндвичТунец.png";
import Chesseburger from "../../images/Street/Чизбургер.png";
import ChickenBurger from "../../images/Street/ЧикенбургерСоусЦезарь.png";
import BurgerBekon from "../../images/Street/БургерБекон.png";
import BurgerCheese from "../../images/Street/БургерСырный.png";
import SmashBurger from "../../images/Street/Смэш-бургер.png";
import BurgerPaper from "../../images/Street/БургерЛуковымКонфи.png";
import BurgerGrib from "../../images/Street/БургерГрибной.png";
import BurgerVorchester from "../../images/Street/БургерЛукомВорчестер.png";
import KurTer from "../../images/Wheat/КурТерияки.png";
import KurCurry from "../../images/Wheat/КурицаКарри.png";
import ShrimpCheese from "../../images/Wheat/КреветкаКремЧиз.png";
import ShrimpSpice from "../../images/Wheat/КреветкаСпайси.png";
import GovKimchi from "../../images/Wheat/ГовядинаКимчи.png";
import Karbonara from "../../images/Egg/КорКарбонара.png";
import Kochhudjan from "../../images/Egg/Кочхуджан.png";
import Moti from "../../images/Desert/Моти.png";
import IceCream from "../../images/Desert/ice.png";
import Bomb from "../../images/Desert/Сырники.png";
import Mini from "../../images/Desert/Панкейки.png";
import PotatoBall2 from '../../images/snack/Шарики2.png'

const Cards = () => {
  return (
    <div className="cards">
      <h2 id="snack" className="cards__title">
        Закуски
      </h2>
      <Line />
      <div className="cards__block cards__snack">
        <Card
          image={Potato}
          name={"Картофель фри"}
          information={
            "Хрустящая золотистая картошечка с ароматной солью и соусом на выбор"
          }
          price={"180 р."}
        />
        <Card
          image={PotatoBall2}
          name={"Картофельные шарики"}
          information={
            "Нежные картофельные шарики с хрустящей корочкой и сырной начинкой"
          }
          price={"250 р."}
        />
        <Card
          image={Oil}
          name={"Сет оливок"}
          information={"Ассорти из маринованных оливок с лимоном и специями"}
          price={"300 р."}
        />
        <Card
          image={Pelm}
          name={"Жареные пельмешки"}
          information={"Аппетитные жареные пельмени с хрустящей корочкой"}
          price={"380 р."}
        />
        <Card
          image={Chicken}
          name={"Чикен стрипсы"}
          information={
            "Нежные куриные полоски в хрустящей панировке с чесночным соусом"
          }
          price={"380 р."}
        />
        <Card
          image={Cheese}
          name={"Сырные палочки"}
          information={"Хрустящие палочки с тягучей сырной начинкой"}
          price={"450 р."}
        />
        <Card
          image={BBQ}
          name={"Крылья BBQ"}
          information={
            "Аппетитные куриные крылышки в пикантном соусе барбекю с кунжутом"
          }
          price={"490 р."}
        />
        <Card
          image={Shrimp}
          name={"Креветки Бэнг-бэнг"}
          information={
            "Крупные креветки в остро-сладком соусе с кунжутом и зеленым луком"
          }
          price={"690 р."}
        />
      </div>
      <Line />
      <h2 id="soup" className="cards__title">
        Супы
      </h2>
      <Line />
      <div className="cards__block cards__soup">
        <Card
          image={Ramen}
          name={"Рамен"}
          information={
            "Бульон куриный, лапша яичная, маринованные яйцо, филе куринное, соевый соус, кунжут, лук зеленый"
          }
          price={"350 р."}
        />
        <Card
          image={Okroshka}
          name={"Окрошка с курицей"}
          information={
            "Бульон куриный, сметана, майонез, картофель, огурец, редис, филе куриное, зелень, горчица"
          }
          price={"350 р."}
        />
        <Card
          image={OkroshkaKrev}
          name={"Окрошка с креветкой"}
          information={
            "Бульон куриный, сметана, майонез, картофель, огурец, редис, креветки, зелень, васаби"
          }
          price={"450 р."}
        />
        <Card
          image={RamenKor}
          name={"Корейский рамен \u{1F525}"}
          information={
            "Бульон, говядина, лапша яичная, маринованное яйцо, грибы вешенка, кимчи, сыр чеддер, кукуруза, соевый соус, кинза, кунжут"
          }
          price={"550 р."}
        />
        <Card
          image={Tom}
          name={"Том Ям \u{1F525}"}
          information={
            "Бульон том ям, кокосовое молоко, листья лайма, вешенки, креветки, кальмары, помидоры черри, кинза"
          }
          price={"550 р."}
        />
      </div>
      <Line />
      <h2 id="salad" className="cards__title">
        Салаты
      </h2>
      <Line />
      <div className="cards__block cards__salad">
        <Card
          image={BoulKur}
          name={"Боул с курицей су-вид"}
          information={
            "Кус-кус, куриное филе, куриные яйца, соус Цезарь, соус Песто, шампиньоны, салат Айсберг, помидоры черри"
          }
          price={"550 р."}
        />
        <Card
          image={SaladBak}
          name={"Салат с хрустящими баклажанами"}
          information={
            "Баклажаны, крем-чиз, черри, сладкий чили, руккола, салат лолло роса, шпинат, кинза, соус медово-горчичный"
          }
          price={"550 р."}
        />
        <Card
          image={Poke}
          name={"Поке с креветкой"}
          information={
            "Рис, креветка, крем-чиз, чука, авокадо, огурец кимчи, нори, соус терияки"
          }
          price={"580 р."}
        />
        <Card
          image={BoulGov}
          name={"Боул с говядиной и бейби-картофелем"}
          information={
            "Мини-картофель, говядина, соленый огурец, салат лолло роса, соус томатный, соус тар-тар, соус медово-горчичный"
          }
          price={"650 р."}
        />
      </div>
      <Line />
      <h2 id="pizza" className="cards__title">
        Пицца
      </h2>
      <Line />
      <div className="cards__block cards__pizza">
        <Card
          image={Derevenskaya}
          name={"Деревенская"}
          information={
            "Томатная основа, колбаски охотничьи, маринованные огурчики, красный лук, помидор, соус чесночный, моцарелла"
          }
          price={"650 р."}
        />
        <Card
          image={Grib}
          name={"Грибная с копчённой курицей"}
          information={
            "Грибной соус, моцарелла, шампиньоны, копченая курица, пармезан"
          }
          price={"650 р."}
        />
        <Card
          image={Kur}
          name={"Курица и вяленые томаты"}
          information={
            "Томатная основа, курица карри, вяленые томаты, моцарелла, чеддер, базилик"
          }
          price={"750 р."}
        />
        <Card
          image={Pepperoni}
          name={"Пепперони"}
          information={"Томатная основа, пепперони, моцарелла"}
          price={"750 р."}
        />
        <Card
          image={Rukola}
          name={"Ветчина и руккола"}
          information={
            "Сливочная основа, ветчина, помидор, моцарелла, пармезан, руккола, перец болгарский, соус песто, бальзамический соус"
          }
          price={"750 р."}
        />
        <Card
          image={Jo}
          name={"Слоппи Джо"}
          information={
            "Томатная основа, моцарелла, чеддер, лук красный, халапеньо, помидоры, говяжья котлета, соус гриль"
          }
          price={"850 р."}
        />
      </div>
      <Line />
      <h2 id="street" className="cards__title">
        Стрит
      </h2>
      <Line />
      <div className="cards__block cards__street">
        <Card
          image={Potato}
          name={"Тарелка фри с пепперони"}
          information={
            "Хрустящий картофель фри с острыми колбасками пепперони, сыром моцарелла и соусом ранч"
          }
          price={"450 р."}
        />
        <Card
          image={Potato}
          name={"Тарелка фри с охотничьими колбасками"}
          information={
            "Золотистая картошечка с ароматными охотничьими колбасками"
          }
          price={"490 р."}
        />
        <Card
          image={Potato}
          name={"Тарелка фри с беконовым джемом"}
          information={
            "Картофель фри с нежным беконовым джемом, копченым сыром и зеленым луком"
          }
          price={"490 р."}
        />
        <Card
          image={Potato}
          name={"Тарелка фри со смэш-котлетой"}
          information={
            "Аппетитная порция картофеля фри с сочной котлетой из говядины, сыром чеддер и фирменным соусом"
          }
          price={"750 р."}
        />
        <Card
          image={SandwichKur}
          name={"Сэндвич с курицей и песто"}
          information={
            "Пшенично-ржаной хлеб, курица су-вид, сыр моцарелла, соус песто"
          }
          price={"450 р."}
        />
        <Card
          image={SandwichTun}
          name={"Сэндвич с тунцом"}
          information={
            "Пшенично-ржаной хлеб, фарш из тунца, сыр моцарелла, сыр чеддер"
          }
          price={"550 р."}
        />
        <Card
          image={Chesseburger}
          name={"Чизбургер"}
          information={
            "Булочка бриошь, свино-говяжья котлета, соус классика, лук красный, помидор, маринованный огурец"
          }
          price={"450 р."}
        />
        <Card
          image={ChickenBurger}
          name={"Чикенбургер с соусом цезарь"}
          information={
            "Булочка бриошь, куриная котлета в панировке, соус цезарь, картофель фри"
          }
          price={"550 р."}
        />
        <Card
          image={BurgerBekon}
          name={"Бургер с беконом гриль"}
          information={
            "Булочка бриошь, котлета говяжья, бекон, лук красный, огурчики кимчиЮ соус гриль, картофель фри"
          }
          price={"690 р."}
        />
        <Card
          image={BurgerCheese}
          name={"Бургер в сырной тарелке"}
          information={
            "Булочка бриошь, котлета говяжья, бекон, соус кимчи, лук красный, огурцы маринованные, картофель фри"
          }
          price={"750 р."}
        />
        <Card
          image={SmashBurger}
          name={"Смэш-бургер с беконовым джемом"}
          information={
            "Булочка бриошь, беконовый джем, соус кимчи, лук красный, огурцы маринованные, картофель фри"
          }
          price={"750 р."}
        />
        <Card
          image={BurgerPaper}
          name={"Бургер с печёным перцем"}
          information={
            "Булочка бриошь, котлета говяжья, перец печеный, луковый конфитюр, соус BBQ, соус медово-горчичный"
          }
          price={"750 р."}
        />
        <Card
          image={BurgerGrib}
          name={"Бургер в тарелке с грибным соусом"}
          information={
            "Булочка бриошь, котлета говяжья, соус грибной, моцарелла, картофель фри"
          }
          price={"780 р."}
        />
        <Card
          image={BurgerVorchester}
          name={"Бургер с карамелизированным луком ворчестер"}
          information={
            "Булочка бриошь, котлета говяжья, лук ворчестер, мёд, бекон, сыр чеддер"
          }
          price={"870 р."}
        />
      </div>
      <Line />
      <h2 id="wheat" className="cards__title">
        Лапша пшеничная
      </h2>
      <Line />
      <div className="cards__block cards__noodles_wheat">
        <Card
          image={KurTer}
          name={"Курица терияки"}
          information={
            "Куриное филе, перец болгарский, стручковая фасоль, древесный гриб, терияки, кинза, кунжут"
          }
          price={"450 р."}
        />
        <Card
          image={KurCurry}
          name={"Курицца карри"}
          information={
            "Куриное филе, стручковая фасоль, перец болгарский, древесный гриб, брокколи, молоко кокосове, карри, кукуруза, кинза, кунжут"
          }
          price={"450 р."}
        />
        <Card
          image={ShrimpCheese}
          name={"Креветка и крем чиз"}
          information={
            "Креветка, крем-чиз, стручковая фасоль, перец болгарский, шампиньоны, брокколи, кинза, кунжут"
          }
          price={"550 р."}
        />
        <Card
          image={ShrimpSpice}
          name={"Креветка спайси"}
          information={
            "Креветка, брокколи, древесный гриб, стручковая фасоль, спайси, молоко кокосовое, кинза, кунжут"
          }
          price={"580 р."}
        />
        <Card
          image={GovKimchi}
          name={"Говядина кимчи \u{1F525}"}
          information={
            "Говядина, паста кимчи, древесный гриб, стручковая фасоль, болгарский перец"
          }
          price={"580 р."}
        />
      </div>
      <Line />
      <h2 id="egg" className="cards__title">
        Лапша яичная
      </h2>
      <Line />
      <div className="cards__block cards__noodles_egg">
        <Card
          image={Karbonara}
          name={"Корейская карбонара"}
          information={
            "Лапша яичная, соус сырный, сыр чеддер, сыр пармезан, сливки, бекон, яйцо"
          }
          price={"450 р."}
        />
        <Card
          image={Kochhudjan}
          name={"Кочхуджан с охотничьими колбасками \u{1F525}"}
          information={
            "Лапша яичная, сливки, соус кочхуджан, сыр моцарелла, сыр чеддер, колбаски охотничьи"
          }
          price={"590 р."}
        />
      </div>
      <Line />
      <h2 id="desert" className="cards__title">
        Десерты
      </h2>
      <Line />
      <div className="cards__block cards__dessert">
        <Card
          image={Moti}
          name={"Моти (нутелла, манго, малина)"}
          information={
            "Нежные японские моти с начинкой на выбор: воздушная нутелла, освежающее манго или кисло-сладкая малина"
          }
          price={"150 р."}
        />
        <Card
          image={IceCream}
          name={"Мороженое"}
          information={
            "Кремовое мороженое с разными вкусами"
          }
          price={"250 р."}
        />
        <Card
          image={Bomb}
          name={"Сырники-бомбочки с манговой сгущёнкой"}
          information={
            "Воздушные сырники с хрустящей корочкой, подаются с необычной манговой сгущёнкой и свежей мятой"
          }
          price={"350 р."}
        />
        <Card
          image={Mini}
          name={"Мини-панкейки с кремом из маскарпоне"}
          information={
            "Небольшие пушистые панкейки с нежным кремом из маскарпоне, политые кленовым сиропом и посыпанные сахарной пудрой"
          }
          price={"380 р."}
        />
      </div>
    </div>
  );
};

export default Cards;
