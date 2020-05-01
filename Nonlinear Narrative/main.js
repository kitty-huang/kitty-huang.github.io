
$(document).ready(function(){
  var video = document.getElementById('vid');
  var option1 = $("#option1");
  var option2 = $("#option2");
  var option3 = $("#option3");
  option1.hide();
  option2.hide();
  option3.hide();

  option1.click(function(){
    sceneIndex = scene[sceneIndex].option1result;
    loadscene();
  });

  option2.click(function(){
    sceneIndex = scene[sceneIndex].option2result;
    loadscene();
  });

  option3.click(function(){
    sceneIndex = scene[sceneIndex].option3result;
    loadscene();
  });

  loadscene();

  function loadscene () {
    video.src = scene[sceneIndex].vid;
    video.play();

    option1.hide();
    option2.hide();
    option3.hide();

    setTimeout(function () {
      if(scene[sceneIndex].option1){
        option1.show();
        option1.html("<h1>"+scene[sceneIndex].option1+"</h1");
      }
      if(scene[sceneIndex].option2){
        option2.show();
        option2.html("<h1>"+scene[sceneIndex].option2+"</h1");
      }
      if(scene[sceneIndex].option3){
        option3.show();
        option3.html("<h1>"+scene[sceneIndex].option3+"</h1");
      }
    }, scene[sceneIndex].videoTime*1000);

  }

});

var sceneIndex = 1;

var scene = [];

scene[0] ={
}

scene[1] = {
  vid : "Scene 1.mp4",
  option1 : "Avocado Toast",
  option2 : "Cereal",
  option1result: 2,
  option2result: 2,
  videoTime : 12
}

scene[2] = {
  vid : "Scene 2.mp4",
  option1 : "Emails",
  option2 : "Cleanup",
  option3: "Shopping",
  option1result: 3,
  option2result: 3,
  option3result: 3,
  videoTime : 8
}

scene[3] = {
  vid : "Scene 3.mp4",
  option1 : "Type in username/password",
  option2 : "Pushoff update",
  option1result: 5,
  option2result: 4,
  videoTime : 10
}

scene[4] = {
  vid : "Scene 4.mp4",
  option1 : "Type in username/password",
  option2 : "Pushoff update",
  option1result: 5,
  option2result: 5,
  videoTime : 5
}

scene[5] = {
  vid : "Scene 5.mp4",
  option1 : "Watch Youtube",
  option2 : "Debate on Twitter",
  option3 : "Log a game online",
  option1result: 6,
  option2result: 6,
  option3result: 6,
  videoTime : 7
}
