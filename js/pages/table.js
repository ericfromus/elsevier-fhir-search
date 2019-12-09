import { getConditions } from './../services/apiServices.js'

export function drawTable(patient) {
    let tablespace = $('#search')
    
    let table = '<div id="display">'
              +  `<h3 id="patientName">${patient.resource.name[0].given[0]} ${patient.resource.name[0].family[0]}</h3>`
              + `<h5 id="patientGender">Gender: <span id="genderData">${patient.resource.gender}</span></h5>`
              +  `<h5 id="patientDOB">Date of Birth: <span id="DOBData">${patient.resource.birthDate}</span></h5>`
              +  `<button data-link=${patient.fullUrl} id="seeMore">View Conditions</button><div>`;

    tablespace.after(table);
    $('div#display').on('click', '#seeMore', (e) => {
        console.log(e);
        let link = e.target.dataset.link;
        getConditions(link);
    })
}

// $('div#display').on('click', $('#seeMore'), (e) => {
//     console.log(e);
//     let link = e.target.data.value;
//     getConditions(link);
// })