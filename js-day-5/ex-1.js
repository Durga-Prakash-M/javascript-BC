/*
write using async await

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v)  // returns a promise
    });
}

*/

let downloadFallbackData = async (url)=>{
    setTimeout(()=>{
      console.log("downloadFallbackData");
    },1000);
};

let processDataInWorker = async (v)=>{
  setTimeout(()=>{
    console.log("processDataInWorker");
  },1000);
};

let downloadData = async (url)=>{
  try{
    const randomBoolean = Math.random()>=0.5;
    if(randomBoolean){
      return processDataInWorker("data");
    }
    throw new Error("error");
  }
  catch{
    return downloadFallbackData(url);
  }
}


async function getProcessedData(url) {
  await downloadData(url) // returns a promise
}

getProcessedData();

