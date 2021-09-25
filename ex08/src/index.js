var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop){
    // Only change code below this line
    var ifName = false, ifProp = false;
    for(var i=0; i<contacts.length; i++){
        if(contacts[i].firstName === name){
            ifName = true;
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            }
        }
    }
    if(!ifName){
        return "No such contact";
    }
    if(!ifProp){
        return "No such property";
    }
    // Only change code above this line
}

console.log(lookUpProfile("John", "likes"));
module.exports = lookUpProfile;