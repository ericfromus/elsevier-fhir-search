import { getPatientData } from './apiServices.js'

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



