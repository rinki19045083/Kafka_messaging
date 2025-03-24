const {kafka} = require("./client");

async function init() {
    const producer = kafka.producer();
    
    console.log("Connecting to kafka producer");
    await producer.connect();
    console.log("Connected to kafka producer");


    await producer.send({
        topic: 'rider-updates',
        messages:[
            {
               key: 'location-update', value: JSON.stringify({name: 'Tony', location: 'pune'}),
            }

        ]

    })

    await producer.disconnect();
}

init();