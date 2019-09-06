$(document).ready(function(){
    $("#submitform").click(function(e)
    {
    var MyForm = JSON.stringify($("#myform").serializeJSON());
    console.log(MyForm);
     $.ajax(
     {
     url : "/",
     type: "POST",
     data : MyForm,
    
     });
     e.preventDefault(); //STOP default action
    
    });
    });