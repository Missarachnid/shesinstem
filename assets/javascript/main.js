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
    var careerTypeSelected;

    $('select').material_select();

    $(".dropdown-button").dropdown({hover: false, belowOrigin: true, constrain_width: false, alignment: 'right'});

    $(".button-collapse").sideNav();


    // Load top 4 Professionals
    loadTop4Proffesionals();

    // Load selected career type
    careerTypeSelected = localStorage.getItem("careerTypeSelected");
    loadCareerBySelected(careerTypeSelected);


    // function to load all professionals

    function loadTop4Proffesionals() {
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
            var pName = $("<h4>").addClass("text-center").append(name);
            var pImg = $("<img>").attr("src", imgUrl).addClass(
                "professional-media");
            var pTitle = $("<p>").addClass("profile text-center").append(title);
            var pBio = $("<p>").addClass("profile").append(bio);
            var pVideo = $("<iframe>").attr("src", videoUrl).attr("frameborder",
                0).attr('allowFullScreen', '').addClass(
                "professional-media card-video");

            var cardTitle = $("<div>").addClass("card-content").append(pName,
                pTitle);
            var cardImg = $("<div>").addClass("card-image").append(pImg);
            var cardBody = $("<div>").addClass("card-content card-body-text").append(
                pBio);
            var cardVideo = $("<div>").addClass("card-image").append(pVideo);
            var boxDiv = $("<div>").addClass("card").append(cardTitle, cardImg,
                cardBody, cardVideo);
            var colDiv = $("<div>").addClass("professional-card col-sm-6 col-md-3 col-lg-2").append(boxDiv);

            //Append data to featured women div
            $("#featured-women").append(colDiv);
        });
    }


    // function to load specific career
    function loadCareerBySelected(x) {
        database.ref('/Careers').orderByChild("type").equalTo(x).on(
            "child_added",
            function (snapshot) {
                // Store data in variables
                sv = snapshot.val();
                title = sv.title;
                description = sv.description;
                education = sv.education;
                imgUrl = sv.image_url;

                console.log(sv);
                //Append data to html


                //Create html variables for data
                var cTitle = $("<h4>").addClass("text-center").append(title);
                var cImg = $("<img>").attr("src", imgUrl).addClass(
                    "professional-media");
                var cDescr = $("<p>").addClass("profile").append(description);
                var cEduc = $("<p>").addClass("profile").append(education);

                var cardTitle = $("<div>").addClass("card-content").append(cTitle);
                var cardImg = $("<div>").addClass("card-image").append(cImg);
                var cardBody = $("<div>").addClass("card-content card-body-text").append(
                    cDescr, cEduc);
                var boxDiv = $("<div>").addClass("card hoverable").append(cardTitle, cardImg, cardBody);
                var colDiv = $("<div>").addClass("professional-card col-sm-6 col-md-3 col-lg-2").append(boxDiv);

                //Append data to featured women div
                $("#featured-careers").append(colDiv);


            });
        if (careerTypeSelected === 'S') {
            $("#career-type").append("Science ");

        }
        else if (careerTypeSelected === 'T') {
            $("#career-type").append("Technology ");

        }
        else if (careerTypeSelected === 'E') {
            $("#career-type").append("Engineering ");

        }
        else if (careerTypeSelected === 'M') {
            $("#career-type").append("Mathematics ");

        }

    }


    // Srollfire for pop-up toasts
    var options = [{
        selector: '.stem-link-container',
        offset: 120,
        callback: function () {
            Materialize.toast(
                "Click the letters to explore your options.",
                4500);
            console.log("scroll fire trigger");
        }
    }, {
        selector: '.soc-media',
        offset: 0,
        callback: function () {
            Materialize.toast("Connect with us on social media!",
                4500);
            console.log("scroll fire trigger");
        }
    },];
    Materialize.scrollFire(options);


    $('#stem-link-container').on('click', '.stem-letter', function () {
        careerTypeSelected = $(this).attr("type");
        // Clear sessionStorage
        localStorage.clear();
        // Store all content into sessionStorage
        localStorage.setItem("careerTypeSelected", careerTypeSelected);


    });


    $(".dropdown-button").click(function () {

        console.log("HI")
    });


});
