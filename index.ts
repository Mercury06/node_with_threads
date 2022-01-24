const { Worker, BroadcastChannel } = require ( "worker_threads");
const path = require ('path');
console.log (path.basename(__filename))
console.log (' I`m from index');
const worker = new Worker ('./worker.ts', {
    workerData: 5
});

worker.on("message", msg => {
    console.log('Message from worker:', msg)
});

worker.postMessage('Hello worker!');

const bc = new BroadcastChannel('channel1');

bc.onmessage = (msg) => {
    console.log('In parent:', msg.data);
}