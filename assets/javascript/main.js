$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCIrDfTGspIC5888qUdMI4M1DyiKp9ZiyI",
        authDomain: "shesinstem01.firebaseapp.com",
        databaseURL: "https://shesinstem01.firebaseio.com",
        projectId: "shesinstem01",
        storageBucket: "shesinstem01.appspot.com",
        messagingSenderId: "1073750951149"
    };
    firebase.initializeApp(config);

    // Assign the reference to the database to a variable named 'database'
    var database = firebase.database();

    // Initialize Global Variables
    var name;
    var title;
    var imgUrl;
    var videoUrl;
    var bio;
    var education;
    var description;
    var id;
    var sv;


    // function to load all professionals
    database.ref('/Professionals').limitToFirst(4).on("child_added", function (snapshot) {
        // Store data in variable sv
        sv = snapshot.val();
        name = sv.name;
        title = sv.title;
        imgUrl = sv.image_url;
        videoUrl = sv.video_url;
        bio = sv.bio;
        education = sv.education;

        //Create html variables for data
        var pName = $("<h3>").addClass("text-center").append(name);
        var pImg = $("<img>").attr("src", imgUrl).addClass("professional-media");
        var pTitle = $("<p>").addClass("profile text-center").append(title);
        var pBio = $("<p>").addClass("profile").append(bio);
        var pVideo = $("<iframe>").attr("src", videoUrl).attr("frameborder", 0).attr('allowFullScreen', '').addClass("professional-media card-video");

        var cardTitle = $("<div>").addClass("card-content").append(pName, pTitle);
        var cardImg = $("<div>").addClass("card-image").append(pImg);
        var cardBody = $("<div>").addClass("card-content card-body-text").append(pBio);
        var cardVideo = $("<div>").addClass("card-image").append(pVideo);
        var boxDiv = $("<div>").addClass("card").append(cardTitle, cardImg, cardBody, cardVideo);
        var colDiv = $("<div>").addClass("col-sm-6 col-md-3").append(boxDiv);

        //Append data to featured women div
        $("#featured-women").prepend(colDiv);
    });

    // function to load specific professional
    database.ref('/Professionals').orderByChild("identifier").equalTo('P001').on("child_added", function (snapshot) {
        // Store data in variables
        sv = snapshot.val();
        name = sv.name;
        title = sv.title;
        imgUrl = sv.image_url;
        videoUrl = sv.video_url;
        bio = sv.bio;
        education = sv.education;
    });


    // function to load all careers
    //Title

    database.ref('/Careers').on("child_added", function (snapshot) {
        // Store data in variable sv
        sv = snapshot.val();
        title = sv.title;

        // Check that data was loaded correctly
        console.log('TITLE: ' + title);

        //Append New rows to employee tables body

    });

    // function to load specific career
    //Title
    //Description
    //Education Requirements
    database.ref('/Careers').orderByChild("identifier").equalTo('C001').on("child_added", function (snapshot) {
        // Store data in variables
        sv = snapshot.val();
        title = sv.title;
        description = sv.description;
        education = sv.education;


        //Append data to html

    });


    // ADD DATA TO FIREBASE (FOR DATA INITIALIZATION ONLY)

    function addProfessionalsData() {

        name = 'Chasity Wright';
        title = 'Tech CEO and Founder';
        imgUrl = 'http://drive.google.com/uc?export=view&amp;id=0B49S6PJi30xWb1RKTklGcFpqTW8';
        videoUrl = 'https://www.youtube.com/embed/UmRgv-Gmgws';
        bio = 'Chasity is the CEO and Founder of Wright Tek Consulting Group. She is also a veteran of the United States Air Force.';
        education = '';
        id = 'P004';

        // Send data to firebase
        database.ref('/Professionals').push({
            identifier: id,
            name: name,
            title: title,
            image_url: imgUrl,
            video_url: videoUrl,
            bio: bio,
            education: education
        });

    }


    function addCareerData() {

        title = 'Zoologist';
        description = 'Study the characteristics and habitats of animals and wildlife.';
        imgUrl = '';
        education = '';
        id = 'C003';

        // Send data to firebase
        database.ref('/Careers').push({
            identifier: id,
            title: title,
            description: description,
            image_url: imgUrl,
            education: education
        });

    }


    // addCareerData();
    // addProfessionalsData();

});
