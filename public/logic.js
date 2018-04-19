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
        var sendData={scores:[]}; 
        for (var i=0; i<inputs.length; i++ ) {
            sendData.scores.push (parseInt(inputs[i].text)) 
        }
        console.log(sendData); 
        $.post("/api/survey", sendData, function(data){
            console.log(data); 
            

        } ) 
    })

})