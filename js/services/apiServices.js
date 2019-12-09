import { callPoint } from './../test-ui.js';
import { drawTable } from './../pages/table.js';

console.log('services loaded')
export async function getPatientData(firstName, lastName) {
    let url = `${callPoint}/Patient?given=${firstName}&family=${lastName}`
    let dataCall = fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        return response.json()
    }).then(info => {
        
        if (info.total > 0) {
           console.log(info.entry[0])
           drawTable(info.entry[0]);
        } else {
            $('#search').after('<h3 id="message">There are no patients matching search!</h3>')
            $('#message').fadeOut(3000);
            
        }
        
        
    })  
}

