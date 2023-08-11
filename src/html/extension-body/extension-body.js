async function analizarBatidas() {
    const [currentTab] = await getCurrentTab();
    console.log(currentTab);
    await chrome.tabs.sendMessage(currentTab.id, {hello: "World", message: "Minha mensagem legal"});
}

async function getCurrentTab() {
    return await chrome.tabs.query({active: true, currentWindow: true});
}

// add listeners
document.getElementById("btn-analize").addEventListener("click", async () => {
    const [currentTab] = await getCurrentTab();
    await chrome.tabs.sendMessage(currentTab.id, {hello: "World", message: "Minha mensagem legal"});
});