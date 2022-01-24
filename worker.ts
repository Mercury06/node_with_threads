const { workerData, parentPort } = require ("worker_threads")

console.log ("I`m worker!", workerData); 

parentPort.on('message', msg => {
    console.log('Message from parent:', msg)
});

setTimeout( () => {
    parentPort.postMessage('Hello parent, three seconds later...');
}, 3000);