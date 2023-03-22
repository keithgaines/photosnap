const imagesContainer = document.getElementById('images-container');

// Example data array
const imageData = [
  {
    date: 'April 16th, 2020',
    title: 'The Mountains',
    artist: 'John Appleseeed',
    backgroundImageSrc: '../assets/stories/mobile/mountains.jpg'
  },
  {
    date: 'April 14th, 2020',
    title: 'Sunset Cityscapes',
    artist: 'Benjamin Cruz',
    backgroundImageSrc: '../assets/stories/mobile/cityscapes.jpg'
  },

  {
    date: '  April 11th 2020',
    title: ' 18 Days Voyage',
    artist: 'Alexei Borodin',
    backgroundImageSrc: '../assets/stories/mobile/18-days-voyage.jpg'
  },

  {
    date: 'April 9th 2020',
    title: 'Architecturals',
    artist: 'Samantha Brooke',
    backgroundImageSrc: '../assets/stories/mobile/architecturals.jpg'
  },

  {
    date: '  April 7th 2020',
    title: 'World Tour 2019',
    artist: 'Timothy Wagner',
    backgroundImageSrc: '../assets/stories/mobile/world-tour.jpg'
  },

  {
    date: 'April 3rd 2020',
    title: 'Unforeseen Corners',
    artist: 'William Malcolm',
    backgroundImageSrc: '../assets/stories/mobile/unforeseen-corners.jpg'
  },

  {
    date: 'March 29th 2020',
    title: 'King on Africa: Part II',
    artist: 'Tim Hillenburg',
    backgroundImageSrc: '../assets/stories/mobile/king-on-africa.jpg'
  },

  {
    date: 'March 21st 2020',
    title: 'The Trip to Nowhere',
    artist: 'Felicia Rourke',
    backgroundImageSrc: '../assets/stories/mobile/trip-to-nowhere.jpg'
  },

  {
    date: 'March 19th 2020',
    title: 'Rage of The Sea',
    artist: 'Mohammed Abdul',
    backgroundImageSrc: '../assets/stories/mobile/rage-of-the-sea.jpg'
  },

  {
    date: 'March 16th 2020',
    title: 'Running Free',
    artist: 'Michelle',
    backgroundImageSrc: '../assets/stories/mobile/running-free.jpg'
  },

  {
    date: 'March 11th 2020',
    title: 'Behind the Waves',
    artist: 'Lamarr Wilson',
    backgroundImageSrc: '../assets/stories/mobile/behind-the-waves.jpg'
  },

  {
    date: 'March 9th 2020',
    title: 'Calm Waters',
    artist: 'Samantha Brooke',
    backgroundImageSrc: '../assets/stories/mobile/calm-waters.jpg'
  },

  {
    date: 'March 5th 2020',
    title: 'The Milky Way',
    artist: 'Benjamin Cruz',
    backgroundImageSrc: '../assets/stories/mobile/milky-way.jpg'
  },

  {
    date: 'March 4th 2020',
    title: 'Night at The Dark Forest',
    artist: 'Mohammed Abdul',
    backgroundImageSrc: '../assets/stories/mobile/dark-forest.jpg'
  },

  {
    date: 'March 1st 2020',
    title: "Somwarpet’s Beauty",
    artist: 'Michelle',
    backgroundImageSrc: '../assets/stories/mobile/somwarpet.jpg'
  },

  {
    date: 'February 25th 2020',
    title: 'Land of Dreams',
    artist: 'William Malcolm',
    backgroundImageSrc: '../assets/stories/mobile/land-of-dreams.jpg'
  },

 
];

// Loop through the data array and create image elements
imageData.forEach(imageData => {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  imageWrapper.style.backgroundImage = `url(${imageData.backgroundImageSrc})`;

  const imageInfo = document.createElement('div');
  imageInfo.classList.add('image-info');

  const imageDate = document.createElement('div');
  imageDate.classList.add('image-date');
  imageDate.textContent = imageData.date;

  const imageTitle = document.createElement('h3');
  imageTitle.classList.add('image-title');
  imageTitle.textContent = imageData.title;

  const imageArtist = document.createElement('p');
  imageArtist.classList.add('image-artist');
  imageArtist.textContent = `by ${imageData.artist}`;

  const hr = document.createElement('hr');

  const imageBody = document.createElement('div');
  imageBody.classList.add('image-body');

  const readStory = document.createElement('p');
  readStory.classList.add('image-story');
  readStory.textContent = 'READ STORY';

  const imageArrow = document.createElement('img');
  imageArrow.classList.add('image-arrow');
  imageArrow.src = '../assets/shared/desktop/arrow.svg';
  imageArrow.alt = 'arrow';
  imageArrow.setAttribute('preserveAspectRatio', 'none');

  // Append child elements to their parents
  imageInfo.appendChild(imageDate);
  imageInfo.appendChild(imageTitle);
  imageInfo.appendChild(imageArtist);
  imageWrapper.appendChild(imageInfo);
  imageWrapper.appendChild(hr);
  imageBody.appendChild(readStory);
  imageBody.appendChild(imageArrow);
  imageWrapper.appendChild(imageBody);

  // Append the image element to the images container
  imagesContainer.appendChild(imageWrapper);
});
