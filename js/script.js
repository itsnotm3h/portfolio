let info = [
    {
        name: "This Portfolio",
        summary: "A website about me.",
        technology: ["Javascript","Html/Css","jQuery",,"Bootstrap"],
        github: "https://github.com/itsnotm3h/trip-expense-logging-system",
        demo: ""
    },
    {
        name: "Behind the Painting",
        summary: "Users can write/expand stories inspired by paintings.",
        technology: ["Axios","Javascript","Html/Css","Bootstrap"],
        github: "https://github.com/itsnotm3h/CRUD-assignment-art-story-contest/deployments",
        demo: "https://itsnotm3h.github.io/CRUD-assignment-art-story-contest/"
    },
    {
        name: "Trip Expense Logging System",
        summary: "An command line interface application to log, calculate and print trip expenses.",
        technology: ["Java"],
        github: "https://github.com/itsnotm3h/trip-expense-logging-system",
        demo: ""
    },
    {
        name: "Restful.Api Routes",
        summary: "Creating routes to CRUD expenses in MongoDB database.",
        technology: ["Restful.api","MongoDb","Express","Javascript"],
        github: "https://github.com/itsnotm3h/database-RESTFUL",
        demo: ""
    },
    {
        name: "ITM Academy Attendance",
        summary: "Designing and application of MYSQL database to create a attendance taking system.",
        technology: ["Express.js","Handlebars","Javascript","MySQL"],
        github: "https://github.com/itsnotm3h/msql-assignment/tree/main",
        demo: ""
    }
    // { name: "Note Taking", summary: "Bootcamp Project", technology: [""], github: "", demo: "" },
    // { name: "Data", summary: "Bootcamp Project", technology: [""], github: "", demo: "" },
    // { name: "Eccomerce", summary: "Industry Project", technology: ["Html/Css", "React.js", "Bootstrap", "Express"], github: "", demo: "" },
    // { name: "PokeQuiz", summary: "Industry Project", technology: ["Html/Css", "Axios", "Bootstrap"], github: "", demo: "" },
]

$(".projectName").html(info[0].name);
$(".projectSummary").html(info[0].summary);



// try to return just the technology, and remove anything that is duplicated. 
//.flat() to return values as a string. 
//... new Set is to remove any duplicates. 
/* <div class="text-center font1 mainHeader">${technology[tech]}</div> */


// const technology = info.map(item => item.technology)
//     .flat()
//     .reduce((acc, item) => { acc[item] = (acc[item] || 0) + 1; return acc }, {});


// for (let tech in technology) {
//     if (tech != "") {
//         let htmlTag = `<div class="projectTagDivider px-3">
//               <div class="tag">${tech}:${technology[tech]} </div>
//             </div>`
//         $(".projectTags").append(htmlTag)
//         // console.log(Object.keys(technology)[tech]);
//     }
// }



const myCarousel = document.getElementById('projectCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
    let currentIndex = event.to;
    let tagLibrary = info[currentIndex].technology;
    let tagsHtml="";
    $(".projectName").html(info[currentIndex].name);
    $(".projectSummary").html(info[currentIndex].summary);

    for(let x in tagLibrary)
    {
        tagsHtml +=`<div class="tag">${tagLibrary[x]}</div>`
    }

    $(".projectTags").html(tagsHtml);


    let tech = info[currentIndex].technology;


    //use hmap to display the different tech used.
});


