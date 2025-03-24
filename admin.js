//create topics

const {kafka} = require("./client");
async function init() {
    const admin = kafka.admin();
    console.log("Connecting to kafka admin");
    await admin.connect();
    console.log("Connected to kafka admin");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });

    console.log("Topic created successfully [rider-updates]");
    console.log("Disconnecting admin");
    await admin.disconnect();
}

init();