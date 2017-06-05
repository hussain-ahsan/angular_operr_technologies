/**
 * Created by ahsan on 5/06/17.
 */

var app = angular.module('angularApp', []);
app.controller('ToDoController', function($scope) {
  $scope.todoData = [];

  $scope.addToDo = function() {
    if ($scope.todo && $scope.todo != '') {
      var res = $scope.todoData.find(function(element){
        if(element.todoText == $scope.todo) return true;
      })

      if (res) {
        alert('Already Exist');
      } else {
        $scope.todoData.push({todoText: $scope.todo, done: false});
        $scope.todo = "";
      }
    }
  };

  $scope.remove = function() {
    var oldTodo = $scope.todoData;
    $scope.todoData = [];
    angular.forEach(oldTodo, function(todoitem) {
      if (!todoitem.done) $scope.todoData.push(todoitem);
      $scope.selectAll = false;
    });
  };

  $scope.optionToggled = function() {
    $scope.selectAll = true;
    angular.forEach($scope.todoData, function (item) {
      item.done = true;
    });
  }
});