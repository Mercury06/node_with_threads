const { workerData, parentPort, BroadcastChannel } = require ("worker_threads")

console.log ("I`m worker!", workerData); 

parentPort.on('message', msg => {
    console.log('Message from parent:', msg)
});

setTimeout( () => {
    parentPort.postMessage('Hello parent, three seconds later...');
}, 3000);

const bc = new BroadcastChannel('channel1');

bc.postMessage('Worker 1 ready!');