import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageComponent from './ImageCard';
import StoriesImage from './StoriesImage.jsx';


const Home = () => {
  return (
    <>
      <ImageComponent 
        title='The Mountains' 
        artist='John Appleseed' 
        backgroundImageSrc={'../assets/stories/mobile/mountains.jpg'}
      />
      <ImageComponent 
        title='Sunset Cityscapes' 
        artist='Benjamin Cruz' 
        backgroundImageSrc={'../assets/stories/mobile/cityscapes.jpg'}
      />
      <ImageComponent 
        title='18 Days Voyage' 
        artist='Alexei Borodin' 
        backgroundImageSrc={'../assets/stories/mobile/18-days-voyage.jpg'}
      />
      <ImageComponent 
        title='Architecturals' 
        artist='Samantha Brooke' 
        backgroundImageSrc={'../assets/stories/mobile/architecturals.jpg'}
      />
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


