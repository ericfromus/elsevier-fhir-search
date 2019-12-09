import { getPatientData, getConditions } from './apiServices.js'

export var patientSearch = false
export var patientData;
let patientName;
let firstName, lastName;
$('div#search').on('click', '#searchButton', () => {
    firstName = $('input[name="firstName"]').val().toUpperCase();
    lastName = $('input[name="lastName"]').val().toUpperCase();
    patientName = `${firstName} ${lastName}`
    console.log(patientName)
    if (!(firstName === undefined) && !(lastName === undefined)) {
        patientSearch = true;
    }
    if (patientSearch === true) {
        console.log(patientName)
        $('div#display').remove()
        patientData = getPatientData(firstName, lastName)
    }
}) 
console.log(patientData)
$('div#display').on('click', '#seeMore', (e) => {
    console.log(e);
    let link = e.target.data.value;
    getConditions(link);
})


