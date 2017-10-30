function sample() {

    console.log('Start : ' , a);
    if (true) {
        let a = 10;
        console.log('Inside if block : ' , a);
    }

    console.log('Outside if block : ' , a);
}

sample();

console.log('Outside function : ' , a);