// console.log("Hello World!");
// console.log("I am Nisha Kedia");
// console.log("Deloitte first study project");

// //git commands to push code ----
// //git add .
// //git commit -m "some commit message"
// //git push



$(document).ready(function () {
    $("btn").click(function () {
        let uid = $("#userId").val();
        console.log(uid);
        $.get(`https://jsonplaceholder.typicode.com/users/${uid}`, function (data, status, abc) {
            $("#username").text(data.name);
            $("#useremail").text(data.email);
            console.log(data);
            console.log(abc.status);
            console.log(status);
        })
            .fail(function (error) {
                $("#username").text('data not found!');
                console.log(error);
            });
    });
})