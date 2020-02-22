var app = angular.module("demoApp", ["ngRoute"])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "home.html",
        controller: "defaultController" 
    })
    .when("/login", {
        templateUrl: "login.html",
        controller: "loginController"
    })
    .when("/register", {
        templateUrl: "register.html",
        controller: "registerController"
    })
})
app.controller("defaultController", function($scope) {
    $scope.items = [
        { image: "1.jpg", title: "Watch, Enjoy and Make Money!", text: "Here at BetFree we like when things go fast, therefore you can play at our online matches without any complicated registrations and also get the money easily when you win. We have also eliminated all wagering requirements on our bonuses, so you can focus on playing and having fun. We at BetFree like to give you great choices. We want you to be as good as possible and leave nothing to chance, but always stay at the forefront when it comes to new games and offers. At BetFree you miss nothing, on the contrary, we do everything to make your time last longer" },     
    ]
    $scope.matches = [
        { title: "Hottest's matches of today", text: "Barcelona - Real Madrid", text1: "Manchester - Liverpool", text2: "AC Milan - Juventus", text3: "Bayern Munich - Shalke", text4: "Chelsea - Arsenal", title1: "Watch Online", image: "2.jpg"}
    ]
})
app.controller("myClubs", function($scope) {
    $scope.results = [
      {
        "Club" : "Real Madrid - Barcelona",
        "Results" : "1.2 | 2.5 | 1.5"
      },
      {
        "Club" : "Manchester United - Liverpool",
        "Results" : "1.3 | 2.1 | 1.8 "
      },
      {
        "Club" : "Bayern Munich - Shalke",
        "Results" : "1.1 | 3.9 | 3.1"
      },
      {
        "Club" : "AC Milan - Juventus",
        "Results" : "2.4 | 4.5 | 2.7"
      }
    ]
  });
app.directive("appheader", function() {
    return {
        template: '<header><nav class="navbar navbar-expand-lg navbar-light bg-primary"><div class="container"><div><a class="navbar-brand" href="#">BetFree</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button></div><div><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="#/!">Home<span class="sr-only">(current)</span></a></li> <li class="nav-item"><a class="nav-link" href="#!login">Login</a></li><li class="nav-item"><a class="nav-link" href="#!register">Register</a> </li> </ul></div></div></div></nav></header>'
    }
})
app.directive("appfooter", function() {
    return {
        template: '<footer class="page-footer text-center font-small dark bg-primary"><h4>Contact</h4><p>Email: info@betfree.com</p><p>Phone: +044 55 66 77</p><br><div class="footer-copyright text-center py-3">© 2020 Copyright. All Right Reserved.<a href="https://Betfree.com/"> BetFree.com</a></div></footer>'
    }
})
app.directive("applogin", function(){
    return {
        template: ' <div class="container"><div class="col-md-6 col-md-offset-3"><div class="panel panel-primary"><div class="panel-heading elave">Login Page</div><div class="panel-body"><form onsubmit="validate" action="index.html" id="registration"><label>Email</label><input type="email" class="form-control" name="email" placeholder="Email"><br><label>Password</label><input type="password" class="form-control" id="password1" name="password1" placeholder="Password"><br><a href="index.html"><button type="submit" id="selectButton" class="btn btn-primary ese">Login</button></a></form></div></div></div></div>'
    }
})
app.directive("appregister", function(){
    return {
        template: ' <div class="container"><div class="col-md-6 col-md-offset-3"><div class="panel panel-primary"><div class="panel-heading elave">Registration</div><div class="panel-body"><form onsubmit="validate" action="index.html" id="registration"><label>Firstname</label><input type="text" class="form-control" name="firstname" id="firstname" placeholder="Firstname" /><br><label>Lastname</label><input type="text" class="form-control" id="lastname" name="lastname" placeholder="Lastname"><br><label>Email</label><input type="email" class="form-control" name="email" placeholder="Email"><br><label>Password</label><input type="password" class="form-control" id="password" name="password" placeholder="Password"><br><label>Confirm Password</label><input type="password" class="form-control" name="confirm" placeholder="Confirm Password"><br><label>Bank account</label><input class="form-control" id="message" name="message" placeholder="Enter your bank account"></input><br><label>Birth Date</label><input type="date" class="form-control" id="birth" name="birth"><br><div class="gender"><label class="radio-inline"><input type="radio" name="gender" class="form-contorl">Male</label><label class="radio-inline"><input type="radio" name="gender" class="form-contorl">Female</label><label class="radio-inline"><input type="radio" name="gender" class="form-contorl">Other</label></div><br><select class="form-control" name="country"><option value="0" selected="" disabled="">Select your country</option><option>Sweden</option><option>Norway</option><option>Denmark</option></select><br><label for="policy">I accept the terms of condition and policies.</label><input type="checkbox" id="policy" name="policy"><br><a href="index.html"><button type="submit" id="selectButton" class="btn btn-primary es">Register</button></a></form></div></div></div></div>'
    }
})





