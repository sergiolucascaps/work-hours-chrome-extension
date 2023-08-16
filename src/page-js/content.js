chrome.runtime.onMessage.addListener(async (request, sender, response) => {
    console.log('ANALIZE 2');
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
    var uiview = document.querySelector('[ui-view=time-adjustment-content-tab]')
    let rows = uiview
                .children.namedItem('row')
                .children.namedItem('container')
                .children.namedItem('tabela-pendencias')
                .children.namedItem('tbody')
                .children;


    for(let row in rows) {
        console.log(row);
    }
}