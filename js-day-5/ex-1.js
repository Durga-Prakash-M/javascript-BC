let downloadFallbackData = async (url)=>{
    
};
let processDataInWorker = async (v)=>{

};
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v)  // returns a promise
    });
}

let getProcessedData1 = async (url)=>{

}

