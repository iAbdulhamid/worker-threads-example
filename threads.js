const { 
    isMainThread,
    workerData,
    Worker 
} = require('worker_threads');

if (isMainThread) {
    console.log(`Main!   ${process.pid}`);
    new Worker(__filename, {         // current file: threads.js
        workerData: [2, 5, 1, 9, 3]
    });     
    
    new Worker(__filename, {         // current file: threads.js
        workerData: [2, 12, 1, 9, 7]
    }); 
} else {
    console.log(`Worker! ${process.pid}`);
    console.log(`${workerData} is sorted to ${workerData.sort()}`);
}
