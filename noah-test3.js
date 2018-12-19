/////////
//Test1//
/////////

function lightSwitch(){
  let lightsOn = false;
  return function() {
    if(lightsOn){
      console.log("The lights are on");
      lightsOn = false;
    } else {
      console.log("The lights are off");
      lightsOn = true;
    }
  }
}

let createdSwitch = lightSwitch();
console.log("first switch trigger")
createdSwitch();
//should output: 'Lights On!'
console.log("second switch trigger")
createdSwitch();
//should output: 'Lights Off!'
