import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import ImageComponent from './ImageCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageComponent 
    title='The Mountains' 
    artist='John Appleseeed' 
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
  </React.StrictMode>
);
