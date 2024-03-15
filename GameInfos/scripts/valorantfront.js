
function getAgents() {
    fetchDados("agents");
}
const BASEADDRESS = "https://dash.valorant-api.com/v1/";
const VERB = "GET";

async function fetchDados() {
    const response = await fetch('http://localhost:3001/v1/agents');
    const dados = await response.json();
    console.log(dados);
  }