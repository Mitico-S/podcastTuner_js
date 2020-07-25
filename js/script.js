var inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
var rangeFrequency = document.querySelector('#rangeFrequency');
var divPodcast = document.querySelector('#divPodcast');

function start() {
  rangeFrequency.addEventListener('input', handleRangeValueChange);
}

start();

function handleRangeValueChange(event) {
  var currentFrequency = event.target.value;
  inputCurrentFrequency.value = currentFrequency + ' Mhz';

  findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {}
