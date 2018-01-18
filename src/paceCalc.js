
function parseTime(time) {
  let timeUnits = (time+"").split(':').map(v => parseInt(v))
  if (timeUnits.length === 3) {
    return timeUnits[0] * 3600 + timeUnits[1] * 60 + timeUnits[2];
  } else if (timeUnits.length === 2) {
    return timeUnits[0] * 60 + timeUnits[1];
  } else {
    return parseInt(time) * 60; //We will think that were minutes
  }
}

export default (time, distance) => {
  let secPace = parseTime(time) / distance
  let secModuloPace = Math.round(secPace % 60);
  console.log(secModuloPace, secPace);
  let minutes = Math.floor(secPace / 60);
  let seconds = secModuloPace < 9 ? ('0' + (secModuloPace + '')) : secModuloPace;

  return minutes + ':' + seconds;
}