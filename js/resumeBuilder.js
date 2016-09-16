var bio = {
    "name": "Andrew Kim",
    "role": "Web Developer",
    "welcomeMessage": "Hello! Welcome to my resume! I'm using it to learn Web Development haha.",
    "biopic": "images/fry.jpg",

    "contacts": {
        "mobile": "555 - 555 5555",
        "email": "andrewdeekim@gmail.com",
        "github": "github.com/andrewdeekim",
        "location": "Northridge, CA"
    },

    "skills": ["programming", "having fun", "learning", "bowling"],

    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedPic);
        $("#header").append(formattedMessage);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        for (var contact in formattedContactInfo) {
            $("#topContacts").append(formattedContactInfo[contact]);
            $("#footerContacts").append(formattedContactInfo[contact]);
        }

        //display skills
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var skill in bio.skills) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }

    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Children's Hunger Fund",
        "title": "Front End Web Developer Intern",
        "location": "Sylmar, CA",
        "dates": "July 2015 - September 2015",
        "description": "I learned how to use JS, CSS, HTML, and Node.js"
    }],

    "display": function() {

        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            for (var i in work.jobs) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

                var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

                $(".work-entry:last").append(formattedEmployerWorkTitle);
                $(".work-entry:last").append(formattedWorkLocation);
                $(".work-entry:last").append(formattedDatesWorked);
                $(".work-entry:last").append(formattedWorkDescription);
            }
        }
    }
};

work.display();

var projects = {
    "project": [{
        "title": "Resume builder",
        "date": "September 2016",
        "description": "I made a resume builder using JS, HTML, AJAX, and CSS",
        "images": ""
    }],

    "display": function() {
        for (var i in projects.project) {

            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].date);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.project[i].images.length > 0) {
                for (var image in projects.project[i].images) {
                    var formattedImage = HTMLprojectImage.repace("%data%", projects.project[i].images[image]);
                    $(".project-entry:last").appened(formattedImage);
                }
            }
        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "Univeristy of California Los Angeles",
        "location": "Westwood, CA",
        "dates": "September 2012 - June 2016",
        "major": ["Computational Mathematics"],
        "degree": "B.S."
    }],

    "display": function() {
        if (education.schools.length > 0) {

            $("#education").append(HTMLschoolStart);

            for (var i in education.schools) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

                $(".education-entry:last").append(formattedSchoolName);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolMajor);
                $(".education-entry:last").append(formattedSchoolDegree);
            }
        }
    }
};

education.display();

function inName() {
    var names = bio.name.split(" ");
    var first = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    var last = names[1].toUpperCase();
    return first + " " + last;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
