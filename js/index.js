$(document).ready(function(){
    
    $("#myBtn-register").click(function(){
        $("#myModal-register").modal();

    });
    $("#myBtn-login").click(function(){
        $("#myModal-login").modal();
    });



	
	$("#opener-register").click(function(){
		var email = $("#register-email").val();
        var password = $("#register-password").val();
        // var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/");
        var ref = new Firebase("https://flickering-torch-1772.firebaseio.com/");

        ref.createUser({
        	email: email,
        	password: password
        }, function(error,userData) {
        	if (error) {
        		console.log("Error creating user:", error);

        	} else {
        		console.log("Successfully created user account :", userData.uid);
        	}

        });
		return false;
	});




	$("#opener-login").click(function(){
		var email = $("#login-email").val();
        var password = $("#login-password").val();
        // var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/");
        var ref = new Firebase("https://flickering-torch-1772.firebaseio.com/");

        ref.authWithPassword({
        	email: email,
        	password: password
        }, function(error,authData) {
        	if (error) {
        		console.log("Error login user:", error);

        	} else {
        		console.log("Successfully created user account :", authData);
        		window.location.href="logout.html";
        	}

        });
		return false;
	});




    $("#opener-logout").click(function() {

        // var ref = new Firebase("https://incandescent-inferno-8183.firebaseio.com/");
        var ref = new Firebase("https://flickering-torch-1772.firebaseio.com/");
        ref.unauth();

        window.location.href="http://www.google.com";
        alert("already logged out!");
        });



    
});




$(function(){


    $("#launcher").click(function(){
        $("#dialog-1").dialog("open");
    });
    $("#datepicker-1").datepicker();
    var searchDBString =[
    "html",
    "Java",
    "JavaScript",
    "JSON",
    "jQuery",
    "css",
    "JSON",

    ];
    $("#autocomplete-1").autocomplete({
        source: searchDBString,
    });
    

    $("#accordion-1").accordion({
        collapsible:true,

});



});







