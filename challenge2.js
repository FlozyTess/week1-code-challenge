//Speed detector
function detectSpeed(speed){
    const speedLimit = 70;
    const demeritPointCutoff = 12;
    const pointPerExcessSpeed = 5;
    //check if speed is below or equal to the speed limit
    if (speed <= speedLimit){
        console.log("Ok");
    } else {
          //calculate excess speed
          const excessSpeed= speed - speedLimit;
          //calculate the demerit points(1point for every 5km/s above speed limit)
          const demeritpoints= math.floor (excessspeed / pointPerExcessSpeed);

          //chec
    }
}