const id = localStorage.getItem("id:");
app.controller("detailCtrl", function ($scope, $http) {
  $http
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(function (response) {
      console.log(response.data);
      $scope.data = response.data;
    });
});
