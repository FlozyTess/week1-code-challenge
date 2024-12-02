//Speed detector
function detectSpeed(speed){
    const speedLimit = 70;
    const demeritPointCutoff = 12;
    const pointPerExcessSpeed = 5;
    //check if speed is below or equal to the speed limit
    if (speed <= speedLimit){
        console.log("Ok");
    } else {
          //calculate excess Speed
          const excessSpeed= speed - speedLimit;
          //calculate the demerit Points(1point for every 5km/s above speed limit)
          const demeritPoints= Math.floor (excessSpeed / pointPerExcessSpeed);

          //check if the demerit Points exceed cutoff
          if (demeritPoints >= demeritPointCutoff){
            console.log("License suspended");
           } else{
                console.log(`points: ${demeritPoints}`);
            }
    }   
    
}
// Test call
detectSpeed(120);
detectSpeed(20);
detectSpeed(70);