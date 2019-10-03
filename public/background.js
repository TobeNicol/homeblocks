chrome.runtime.onInstalled.addListener((obj)=>{
    console.log(obj.reason)
    if(obj.reason === 'install'){
       chrome.storage.local.set({shownBlocks:[], backgroundUrl: 'https://images.unsplash.com/photo-1531278520962-fcf47a2faea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'})
    }
})

