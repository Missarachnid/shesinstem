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


    // ADD DATA TO FIREBASE (FOR DATA INITIALIZATION ONLY)

    function addProfessionalsData() {

        name = 'Chasity Wright';
        title = 'Tech CEO and Founder';
        imgUrl =
            'http://drive.google.com/uc?export=view&amp;id=0B49S6PJi30xWb1RKTklGcFpqTW8';
        videoUrl = 'https://www.youtube.com/embed/UmRgv-Gmgws';
        bio =
            'Chasity is the CEO and Founder of Wright Tek Consulting Group. She is also a veteran of the United States Air Force.';
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
        description =
            'Study the characteristics and habitats of animals and wildlife.';
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
