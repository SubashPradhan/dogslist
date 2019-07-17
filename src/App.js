import React from 'react';
import DogsListContainer from './Component/DogListContainer'
import './App.css';
import {Route} from 'react-router-dom'
import DogBreedImagesContainer from './Component/DogBreedImagesContainer'

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path ="/" component={DogsListContainer} />
        <Route path ="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </main>

    </div>
  );
}

export default App;
