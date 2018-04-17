$(document).ready(function(){
    // $(".submission").on("click", function(){

    //     $.post( "/api/survey", userSurvey, function( data ) {
    //         console.log(data)
    //     });
    // })
    $("#surveyForm").submit(function(e){
        e.preventDefault();
        // Capture User's option 
        // Store those values into an array
        // 
        console.log('submitted')
        var inputs = $('#surveyForm :selected')
        console.log(inputs)
    })

})