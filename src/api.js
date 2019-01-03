const API_URL = "https://bde.lan.lesfurets.com/api/vehicules/auto/descriptions";

export const fetchModeles = (marque, callback) =>
    fetch(API_URL + "?marque=" + marque, {
        method: "GET",
    }).then(res => res.json().then(modeles => callback(modeles)));

export const fetchVehicules = (marque, modele, callback) =>
    fetch(API_URL + "?marque=" + marque + "&modele=" + btoa(modele) + "&query=versions", {
        method: "GET"
    }).then(res => res.json().then(vehicules => callback(vehicules)));