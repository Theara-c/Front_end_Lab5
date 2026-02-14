import { Card } from "./components/Card";
import { cards } from "./data";


 
function App() {
  return (
  <>
  {/* Your code  here */}
  <header>
      <h1>❤️❤️Welcome to Our Dating App❤️❤️</h1></header>
  <div className="cards-views">
    <div className="cards-display">
    { cards.map((card) => <Card name = {card.name} title = {card.title} description = {card.description}
     image={ {src: card.image.src, alt: card.image.alt}} />)}
    </div>
  </div>
  
  </>
  );
}

export default App;
