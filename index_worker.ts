const { Worker, BroadcastChannel, isMainThread, workerData } = require ( "worker_threads");

const bc = new BroadcastChannel('channel1');

if (isMainThread) {
    console.log (' I`m from index');
    const worker = new Worker ('./worker.ts', {
        workerData: 5
    });
    bc.onmessage = (msg) => {
        console.log('In parent:', msg.data);
    }
} else {
    console.log ("I`m worker!", workerData);     
    bc.postMessage('Worker 1 ready!');
}




