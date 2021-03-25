// Import components
import HobbyList from './1-extremeHobbies';
import Guarantee from './2-customerService';
import Counter from './3-higherThanTen';
// Import images
import imgShipping from './images/f-delivery.png';
import imgCoin from './images/coin.png';
import imgChat from './images/chat.png';
import './App.css';

const guaranteeDetails = [
  {
    img: imgShipping,
    title: "Free shipping",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa."
  },
  {
    img: imgCoin,
    title: "100% Money back",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa."
  },
  {
    img: imgChat,
    title: "Online support 24/7",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa."
  }
];

function App() {
  return (
    <div className="App">
      <h3 className="exercise-header">Exercise-1</h3>
      <HobbyList />

      <h3 className="exercise-header">Exercise-2</h3>
      <div className="guarantee">
        {guaranteeDetails.map(item => <Guarantee details={item} />)}
      </div>

      <h3 className="exercise-header">Exercise-3</h3>
      <Counter />
    </div>
  );
}

export default App;
