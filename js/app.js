// success function will change innerhtml of box id
function success_function(response){
box[`innerHTML`] = `<h2>${response[`data`][`activity`]}</h2>`;
}
// failure function will print request failed if something goes wrong with api
function failure_function(response){
box[`innerHTML`] = `<h2>Request Failed</h2>`;
}
// function start axios will run axios request once executed
function start_axios(){
    axios.request({
        url: `http://www.boredapi.com/api/activity/`
    }).then(success_function).catch(failure_function);
}
// button has a value of start axion which is infact a button 
// button will listen for an event click
let button = document.getElementById(`start_axion`);
button.addEventListener(`click`,start_axios);
// box is declared to store value of box id to help display innerhtml
let box = document.getElementById(`box`);
