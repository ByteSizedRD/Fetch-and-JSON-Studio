window.addEventListener("load", function() {
    console.log('window loaded');

fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then( function(json) {
        const div = document.getElementById("container");

        for (let i = 0; i < json.length; i++) {
           let astronaut= document.createElement('div')
            astronaut.className = 'astronaut';

            astronaut.innerHTML = 
            `
            <div class="bio">
               <h3>${json[i].firstName} ${json[i].lastName}</h3>
               <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li>Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills.join(', ')}</li>
               </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            `

         div.appendChild(astronaut)

    
        }
     });
}); 
});