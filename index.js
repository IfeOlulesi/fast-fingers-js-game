window.onload = function () {

  alert("Okay guys, Ive worked on the responsiveness for mobile devices just as i said i would...hope you guys like it  :) Dont forget to upvote!!");

  var sWidth = window.innerWidth;

  //for small devices, phones of course  :)
  //fix the if statement for square on line 54
  if (sWidth < 768) {

    //the function below generates random colors ;)
    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
      }
      return color;
    }

    var createdTime;
    var clickedTime;
    var howSlow;
    var highScore;
    var newHighScore;

    //the function below creates the shapes, postitions them and changes their color dynamically
    function appear() {

      var x = Math.random();

      x = 4000 * x;

      var y = Math.random();

      y = 9 * y;

      var create = setTimeout(function () {
        //this function creates the shape

        if (y >= 6.0) {
          //for circle
          document.getElementById('box1').style.borderRadius = "25px";
          document.getElementById('box1').style.width = "50px";
          document.getElementById('box1').style.height = "50px";

        } else if (y > 4.0, y < 6.0) {
          //for curvy rectangle
          document.getElementById('box1').style.borderRadius = "25px";
          document.getElementById('box1').style.width = "100px";
          document.getElementById('box1').style.height = "50px";

        } else {
          //for square
          document.getElementById('box1').style.borderRadius = "4px";
          document.getElementById('box1').style.width = "50px";
          document.getElementById('box1').style.height = "50px";
        }

        var t = Math.random();
        t = 300 * t;

        var l = Math.random();
        l = 380 * l;

        document.getElementById('box1').style.top = t + "px";

        document.getElementById('box1').style.left = l + "px";

        document.getElementById('box1').style.backgroundColor = getRandomColor();

        document.getElementById('box1').style.display = "block";

        createdTime = Date.now();

      }, x);

    }




    //this segment describes what is to be done when the shapes are clicked
    document.getElementById('box1').onclick = function () {

      //this function tells when the shape has been clicked
      clickedTime = Date.now();

      howSlow = (clickedTime - createdTime) / 1000;
      //this part sets high score
      if (!highScore) highScore = howSlow;

      if (howSlow < highScore) {
        highScore = howSlow;
      }

      document.getElementById("hscore").innerHTML = " " + highScore + "s";

      document.getElementById("boom").innerHTML = " " + howSlow + "s";

      this.style.display = "none";

      appear();
    }

    appear();
  }

  //for tablets, super huge phones hehe!!!
  else if (sWidth >= 768, sWidth < 1200) {

    alert("screen size: medium devices");

    //the function below generates random colors ;)
    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
      }
      return color;
    }

    var createdTime;
    var clickedTime;
    var howSlow;
    var highScore;
    var newHighScore;

    //the function below creates the shapes and change their color dynamically
    function appear() {

      var x = Math.random();

      x = 4000 * x;

      var y = Math.random();

      y = 9 * y;

      setTimeout(function () {
        //this function creates the shape

        if (y > 6) {
          //for circle
          document.getElementById('box1').style.borderRadius = "50px";
          document.getElementById('box1').style.width = "100px";


        } else if (y > 3, y < 6) {
          //for curvy rectangle
          document.getElementById('box1').style.borderRadius = "50px";
          document.getElementById('box1').style.width = "200px";

        } else {
          //for square
          document.getElementById('box1').style.borderRadius = "0";
          document.getElementById('box1').style.width = "100px";

        }

        var t = Math.random();

        t = 400 * t;

        var l = Math.random();

        l = 600 * l;

        document.getElementById('box1').style.top = t + "px";

        document.getElementById('box1').style.left = l + "px";

        document.getElementById('box1').style.backgroundColor = getRandomColor();

        document.getElementById('box1').style.display = "BLOCK";

        createdTime = Date.now();
      }, x);
    }

    //this segment describes what is to be done when the shapes are clicked
    document.getElementById('box1').onclick = function () {

      //this function tells when the shape has been clicked
      clickedTime = Date.now();

      howSlow = (clickedTime - createdTime) / 1000;
      //this part sets high score
      if (!highScore) highScore = howSlow;

      if (howSlow < highScore) {
        highScore = howSlow;
      }

      document.getElementById("hscore").innerHTML = " " + highScore + "s";

      document.getElementById("boom").innerHTML = " " + howSlow + "s";

      this.style.display = "none";

      appear();
    }

    appear();
  }

  //for laptops, desktops
  else if (sWidth >= 1200) {

    alert("Screen size: large devices");

    //the function below generates random colors ;)
    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
      }
      return color;
    }

    var createdTime;
    var clickedTime;
    var howSlow;
    var highScore;
    var newHighScore;

    //the function below creates the shapes and change their color dynamically
    function appear() {

      var x = Math.random();

      x = 4000 * x;

      var y = Math.random();

      y = 9 * y;

      setTimeout(function () {
        //this function creates the shape

        if (y > 6) {
          //for circle
          document.getElementById('box1').style.borderRadius = "50px";
          document.getElementById('box1').style.width = "100px";


        } else if (y > 3, y < 6) {
          //for curvy rectangle
          document.getElementById('box1').style.borderRadius = "50px";
          document.getElementById('box1').style.width = "200px";

        } else {
          //for square
          document.getElementById('box1').style.borderRadius = "0";
          document.getElementById('box1').style.width = "100px";

        }

        var t = Math.random();

        t = 400 * t;

        var l = Math.random();

        l = 600 * l;

        document.getElementById('box1').style.top = t + "px";

        document.getElementById('box1').style.left = l + "px";

        document.getElementById('box1').style.backgroundColor = getRandomColor();

        document.getElementById('box1').style.display = "BLOCK";

        createdTime = Date.now();
      }, x);
    }

    //this segment describes what is to be done when the shapes are clicked
    document.getElementById('box1').onclick = function () {

      //this function tells when the shape has been clicked
      clickedTime = Date.now();

      howSlow = (clickedTime - createdTime) / 1000;
      //this part sets high score
      if (!highScore) highScore = howSlow;

      if (howSlow < highScore) {
        highScore = howSlow;
      }

      document.getElementById("hscore").innerHTML = " " + highScore + "s";

      document.getElementById("boom").innerHTML = " " + howSlow + "s";

      this.style.display = "none";

      appear();
    }

    appear();
  }
}