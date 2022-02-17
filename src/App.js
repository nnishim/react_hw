import "./App.css";
import Card from "./components/Card/Card.jsx";
import pizza from "./components/Card/img/pizza.jpg";
import tortellini from "./components/Card/img/tortellini.jpg";
import cake from "./components/Card/img/cake.jpg";
import fire from "./components/Card/img/icon3.svg";
import organic from "./components/Card/img/icon2.svg";
import wheate from "./components/Card/img/icon1.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Card
          img={pizza}
          title="Pepperoni Pizza"
          icon1={fire}
          icon2={wheate}
          info="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
          cook1="265 Cal"
          cook2="P/F/C: 12/10/31"
          cook3="53.8 °C"
          price="$23.90"
        />
      <Card
          img={tortellini}
          title="Tortellini"
          icon1={fire}
          icon3={organic}
          icon2={wheate}
          info="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
          cook1="270 Cal"
          cook2="P/F/C: 18/4/41"
          cook3="42.4 °C"
          price="$17.90"
        />
      <Card
          img={cake}
          title="Strawberry Cake"
          icon2={wheate}
          info="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
          cook1="346 Cal"
          cook2="P/F/C: 6/14/49"
          cook3="13.9 °C"
          price="$13.90"
        />
      </div>
    </div>
  );
}

export default App;
