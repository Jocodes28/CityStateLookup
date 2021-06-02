"use strict"

let cityStates = [ 
    {
        state: "Alaska",
        stateAbbr: "AK",
        cities: ["Anchorage","Cordova","Fairbanks"],
    },
    {
        state: "Delaware",
        stateAbbr: "DE",
        cities: ["Wilmington","Dover","Newark","Milford"],
    },
    {
        state: "Florida",
        stateAbbr: "FL",
        cities: ["Jacksonville","Miami","Tampa"],
    },
    {
        state: "Georgia",
        stateAbbr: "GA",
        cities: ["Atlanta","Augusta","Macon","Athens"],
    },
    {
        state: "Idaho",
        stateAbbr: "ID",
        cities: ["Boise","Meridian","Nampa"],
    },
    {
        state: "Kentucky",
        stateAbbr: "KY",
        cities: ["Louisville","Lexington","Bowling Green","Owensboro"],
    },
    {
        state: "North Carolina",
        stateAbbr: "NC",
        cities: ["Charlotte","Raleigh","Durham"],
    },
    {
        state: "Ohio",
        stateAbbr: "OH",
        cities: ["Minerva","Columbus","Oberlin","Plymouth"],
    },
    {
        state: "Rhode Island",
        stateAbbr: "RI",
        cities: ["Providence","Warwick","Cranston"],
    },
    {
        state: "Virginia",
        stateAbbr: "VA",
        cities: ["Danville","Richmond","Roanoke","Winchester"],
    }
];

window.onload = function () {
    //load the dropdown with the states
    loadStatesDropdown();

    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = stateDropdownChanged;

    const cityDropdown = document.getElementById("cityDropdown");
    cityDropdown.onchange = cityDropdownChanged;
}

function loadStatesDropdown() {

    const stateDropdown = document.getElementById("stateDropdown");

    addSelectStateFirstOptionToCityDropdown();

    //add a "Select One..." option
    let selectOneOption = document.createElement("option"); //creates <option> element 
    selectOneOption.textContent = "Select One...";
    selectOneOption.value  = "";
    stateDropdown.appendChild(selectOneOption);

    //creates option for each state in the array
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(theOption);
    }
    
}

function stateDropdownChanged() {

    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");

    //erase previous team message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    
    cityDropdown.options.length = 0;
    
    //gets the value of the selected item (ex. KY for Kentucky, NC for North Carolina)
    let selectedState = stateDropdown.value;

    if (selectedState == "") {
        addSelectStateFirstOptionToCityDropdown();
        return;
    }
    
    //find the state in the array that matches the selected item
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr 
        == selectedState);

    //add a "select state First..." <option>
    let selectOneOption = document.createElement("option"); //creates <option> element
    selectOneOption.textContent = "Select One...";
    selectOneOption.value  = "";
    cityDropdown.appendChild(selectOneOption);

    //loops thru the cities in the selected states and creates options
    //and add then to the citiies dropdown
    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        cityDropdown.appendChild(theOption);
    }

}

function cityDropdownChanged() {

    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");

    //erase previous message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";

    let selectedCity = cityDropdown.value;

    //if "select one..." is picked, just exit the function
    if (selectedCity == "") {
        return;
    }

    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;

    selectedState = stateDropdown.value;

    let message = "State: " + selectedState + "<br>" + "City: " + selectedCity;
    messagePara.innerHTML = message;
}

function  addSelectStateFirstOptionToCityDropdown() {
    const cityDropdown = document.getElementById("cityDropdown");

    // Add a "Select state first..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select state first...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);
}