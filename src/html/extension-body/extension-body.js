class WorkHoursConfiguration {

    workload = 8;
    constructor(workload) {
        this.workload = workload;
    }

    setWorkload(workload) {
        let expression = new RegExp("^([0-9])");

        if(expression.test(workload)) alert("Alteração com sucesso !!!");
        else alert("Informar apenas números");
    }
}

let config = new WorkHoursConfiguration(8);

async function analizarBatidas() {
    const [currentTab] = await getCurrentTab();
    await chrome.tabs.sendMessage(currentTab.id, config);
}

async function getCurrentTab() {
    return await chrome.tabs.query({active: true, currentWindow: true});
}

function createElementsToModifyParams() {
    var section = document.getElementById("params");
    section.innerHTML = '';
    
    const parametersDiv = document.createElement("div");
    parametersDiv.id = "parameters";

    const fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerText = "Parâmetros";

    let hoursDiv = document.createElement("div");
    hoursDiv.id = "hours-div";

    let hoursField = document.createElement("input");
    hoursField.setAttribute("type", "text");
    hoursField.placeholder = "carga horária (dia)";
    hoursField.value = "8 horas";

    let chkExactDiv = document.createElement("div");
    chkExactDiv.id = "exact-div";

    let exactField = document.createElement("input");
    exactField.id = "exact-chk";
    exactField.setAttribute("type", "checkbox");

    let exactLabel = document.createElement("label");
    exactLabel.setAttribute("for", "exact-chk");
    exactLabel.textContent = "Horário exato?";

    let btnSave = document.createElement("button");
    btnSave.id = "btn-save";
    btnSave.innerText = "Salvar";

    chkExactDiv.appendChild(exactField);
    chkExactDiv.appendChild(exactLabel);
    hoursDiv.appendChild(hoursField);
    fieldset.appendChild(legend);
    fieldset.appendChild(hoursDiv);
    fieldset.appendChild(chkExactDiv);
    fieldset.appendChild(btnSave);
    parametersDiv.appendChild(fieldset);
    section.appendChild(parametersDiv);

    addSaveListener();
}

// add listeners

function addSaveListener() {
    document.getElementById("btn-save").addEventListener("click", async () => {
        alert("Is in TODO list...");
        var section = document.getElementById("params");
        section.innerHTML = '';
        //TODO: @sergiolucascaps - Implementar.
        // Pegar dados da caixa de texto e ckeckbox e salvar nas configurações.
    });
}

document.getElementById("btn-analize").addEventListener("click", async () => {
    await analizarBatidas()
});

document.getElementById("btn-modify-params").addEventListener("click", async () => {
    await createElementsToModifyParams();
});