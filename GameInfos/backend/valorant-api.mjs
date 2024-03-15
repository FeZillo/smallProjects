const BASEADDRESS = "https://dash.valorant-api.com/v1/";
const VERB = "GET";

async function fetchDados(endpoint){
    const dados = await fetch(BASEADDRESS + endpoint, { method: VERB });
    const AGENTS = await dados.json();
    console.log(AGENTS);
}

export default {
    fetchDados
}