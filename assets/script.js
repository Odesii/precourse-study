const topics = ["HTML", "CSS", "Git", "JavaScript"];

const randomtopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}


function selectTopics() {
    if (randomtopic === "HTML") {
        console.log("I'm learning HTML");
    } else if (randomtopic === "CSS") {
        console.log("I'm learning CSS");
    } else if (randomtopic === "Git") {
        console.log("I'm learning Git");
    } else if (randomtopic === "JavaScript") {
        console.log("I'm learning JavaScript");
    } else {
        console.log("You've Angered the Old Ones!");
    }
}
console.log(" all the topics we learned so far")
listTopics();

console.log("what topic we are learning today?");
selectTopics();