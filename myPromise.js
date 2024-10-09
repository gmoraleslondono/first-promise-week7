const amIGoingOut = new Promise((resolve, reject) => {
  let isTheWeatherGood;

  const chancesOfRain = Math.random(1, 10) * 10;
  //   console.log(chancesOfRain);

  if (chancesOfRain > 3) {
    isTheWeatherGood = false;
  } else {
    isTheWeatherGood = true;
  }

  if (isTheWeatherGood) {
    resolve("I am going out today.");
    // console.log("I am going out today.");
  } else {
    reject("I will stay cosy at home.");
    // console.log("I will stay cosy at home.");
  }
});
