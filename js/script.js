let info = [
    {
        name: "This Portfolio",
        summary: "A website about me.",
        image: "./img/portfoilo.png",
        technology: ["Javascript", "Html/Css", "jQuery", , "Bootstrap"],
        github: "https://github.com/itsnotm3h/portfolio",
        demo: ""
    },
    {
        name: "Behind the Painting",
        summary: "Users can write/expand stories inspired by paintings.",
        image: "./img/artContest.png",
        technology: ["Axios", "Javascript", "Html/Css", "Bootstrap"],
        github: "https://github.com/itsnotm3h/CRUD-assignment-art-story-contest/",
        demo: "https://itsnotm3h.github.io/CRUD-assignment-art-story-contest/"
    },
    {
        name: "Trip Expense Logging System",
        summary: "An command line interface application to log, calculate and print trip expenses.",
        image: "./img/inteliJ.png",
        technology: ["Java"],
        github: "https://github.com/itsnotm3h/trip-expense-logging-system",
        demo: ""
    },
    {
        name: "Restful.Api Routes",
        summary: "Creating routes to CRUD expenses in MongoDB database.",
        image: "./img/mongoDB.png",
        technology: ["Restful.api", "MongoDb", "Express", "Javascript"],
        github: "https://github.com/itsnotm3h/database-RESTFUL",
        demo: ""
    },
    {
        name: "PokeQuiz",
        summary: "Explore map and capture Pokemon by answering a math quizzes to catch 'em all!",
        image: "./img/pokeQuiz.png",
        technology: ["Javascript", "Bootstrap", "Leaflet", "PokeAPI"],
        github: "https://github.com/itsnotm3h/industryproject",
        demo: "https://itsnotm3h.github.io/industryproject/"
    }
]

$(".projectName").html(info[0].name);
$(".projectSummary").html(info[0].summary);
$(".github").off("click").on("click", function () {
    window.open(info[0].github);
});



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


function setCarousell(item, index) {

    let html = "";
    let active = "";

    if (index == 0) {
        active = "active";
    }

    html = `<div class="carousel-item ${active}" data-bs-toggle="modal" data-bs-target="#exampleModal" id="slide${index + 1}">
    <a href="${item.github}" target="_blank"><img src="${item.image}" class="img-fluid" alt="${item.name}"></a>
    </div>`;

    $(".carousel-inner").append(html);

}

const technology = info.map(setCarousell);





const myCarousel = document.getElementById('projectCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
    let currentIndex = event.to;
    let tagLibrary = info[currentIndex].technology;
    let tagsHtml = "";
    $(".projectName").html(info[currentIndex].name);
    $(".projectSummary").html(info[currentIndex].summary);

    for (let x in tagLibrary) {
        tagsHtml += `<div class="tag">${tagLibrary[x]}</div>`
    }

    $(".projectTags").html(tagsHtml);

    $(".github").off("click").on("click", function () {
        window.open(info[currentIndex].github);
        console.log(info[currentIndex].github);
    });

    let demoURL = info[currentIndex].demo;

    if (demoURL != "") {

        $(".demo").removeClass("d-none");
        $(".demo").off("click").on("click", function () {
            window.open(demoURL);
            console.log(demoURL);

        })
    }
    else {
        $(".demo").addClass("d-none");
    }



    // let tech = info[currentIndex].technology;


    //use hmap to display the different tech used.
});


