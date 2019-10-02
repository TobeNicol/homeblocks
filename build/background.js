chrome.runtime.onInstalled.addListener((obj)=>{
    console.log(obj.reason)
    if(obj.reason === 'install'){
       chrome.storage.local.set({shownBlocks:[]})
    }
})

