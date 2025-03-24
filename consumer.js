const { PartitionAssigners } = require("kafkajs");
const {kafka} = require("./client");

async function init() {
    const consumer = kafka.consumer({groupId: "rider-group-1"});
    console.log("Connecting to kafka consumer");
    await consumer.connect();
    console.log("Connected to kafka consumer");

    await consumer.subscribe({topics: ["rider-updates"], fromBeginning: true});

    await consumer.run( {
            eachMessage: async ({topic, Partition, message}) => {
                console.log(
                    ` [${topic}]: PART:${Partition}:`,
                    message.value.toString()
                );
                console.log("Message processed");
            },
});
   
}

init();