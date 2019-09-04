var alert;

function doHomework(subject, callback) {
 
 console.log("Check1");
  callback();
}



doHomework('math', function() {
 // alert('Finished my homework');
 console.log("Check2");
});

