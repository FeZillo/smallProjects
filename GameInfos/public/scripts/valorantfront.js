const { fetchDados } = require("../../backend/valorant.js").default;

function getAgents(){
    fetchDados("agents");
}