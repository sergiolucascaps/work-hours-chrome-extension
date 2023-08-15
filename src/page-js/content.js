chrome.runtime.onMessage.addListener(async (request, sender, response) => {
    if(true) { // se estiver na tela de marcação de batidas vai percorrer a grid e marcar os dias com marcação errada
        SearchForMismarks();
    }
    else if(true) { // se estiver na tela de ajuste de batida, vai fazer o ajuste necessário

    }
})

function SearchForMismarks() {
    const mismarks = GetMismarks();
}

function GetMismarks() {
    
}