import './App.css';
import Friend from './1-NewFriend';
import DogGallery from './2-DogGallery';
import RandomJoke from './3-RandomJoke';

function App() {
  return (
    <div className="App">
      <h3 className="exHeader">Exercise-1</h3>
      <Friend />
      <h3 className="exHeader">Exercise-2</h3>
      <DogGallery />
      <h3 className="exHeader">Exercise-3</h3>
      <RandomJoke />
    </div>
  );
}

export default App;
