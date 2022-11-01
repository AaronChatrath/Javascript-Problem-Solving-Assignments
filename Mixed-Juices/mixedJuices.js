/*
Instructions
Your friend Li Mei runs a juice bar where she sells delicious mixed fruit juices.
You are a frequent customer in her shop and realized you could make your friend's
life easier. You decide to use your coding skills to help Li Mei with her job.

1. Determine how long it takes to mix a juice
2. Replenish the lime wedge supply
3. Finish up the shift
*/

//https://exercism.org/tracks/javascript/exercises/mixed-juices


//1. Determine how long it takes to mix a juice
function timeToMixJuice(juice){
    switch (juice) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Pure Strawberry Joy':
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;    
        case 'All of Nothing':
            return 5;   
        default:
            return 2.5;
    }
}

console.log(timeToMixJuice('Green Garden'));


//2. Replenish the lime wedge supply
function limesToCut(noOfWedgesNeeded,limes){
    //create object for lime sizes
    limeSizes = {
        small: 6,
        medium:8,
        large: 10,
    };

    //Need to count the number of limes needed for the number of wedges we have
    count = 0;
    //count the number of wedges we currently have
    totalWedges = 0;

    //go through each lime size in the array and add it the totalWedges until
    //totalWedges is greater than or equal to noOfWedgesNeeded
    for(let lime of limes){
        if(totalWedges < noOfWedgesNeeded){
            totalWedges+=limeSizes[lime];
            count+=1;
        }
        else{
            break;
        }
    }
    return count;

}

console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));


//3. Finish up the shift
function remainingOrders(minsLeft, juices){
    //go through the juices in the array of juices and see how many
    //juices can be made within the minsLeft
    //return the juices that can't be made within that time  
    while(juices){
        if (minsLeft - timeToMixJuice(juices[0])>=0) {
            minsLeft-= timeToMixJuice(juices[0]);
            juices.shift();
        } else{
            break;
        }
    }
    return juices;
}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));