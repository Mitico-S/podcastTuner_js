//
//

var inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
var rangeFrequency = document.querySelector('#rangeFrequency');
var divPodcast = document.querySelector('#divPodcast');

function start() {
  rangeFrequency.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(event) {
  var currentFrequency = event.target.value;
  inputCurrentFrequency.value = currentFrequency + ' Mhz';

  findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {
  var foundPodcast = null;

  console.log(realPodcasts);
  for (var i = 0; i < realPodcasts.length; i++) {
    var currentPodcast = realPodcasts[i];

    if (realPodcasts[i].id === frequency) {
      foundPodcast = currentPodcast;

      break;
    }
  }

  if (foundPodcast) {
    renderPodcast(foundPodcast);
  } else {
    divPodcast.innerHTML = '<p>Nenhum podcast encontrado</p>';
  }
}

function renderPodcast(podcast) {
  divPodcast.innerHTML = '';

  var img = document.createElement('img');
  img.src = './img/' + podcast.img;
  img.alt = 'Podcast' + podcast.title;
  img.title = 'Podcast' + podcast.title;

  var title = document.createElement('h2');
  title.textContent = podcast.title;

  var description = document.createElement('h2');
  description.textContent = podcast.description;

  divPodcast.appendChild(img);
  divPodcast.appendChild(title);
  divPodcast.appendChild(description);
}

start();
