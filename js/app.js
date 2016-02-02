/**
 * Created by Admin on 22.01.2016.
 */
var app = angular.module("SampleApp", []);

app.controller("SampleAppCtrl", function ($scope) {

    $scope.answers = [{ 1: "Answer 2-1", 2: "Answer 1-3", 3: "Answer 1-3", 4: "Answer 1-3" },
        { 1: "Answer 2-1", 2: "Answer 2-2" , 3: "Answer 2-3", 4: "Answer 2-4"},
        { 1: "Answer 3-1", 2: "Answer 3-2" , 3: "Answer 3-3", 4: "Answer 3-4"},
        { 1: "Answer 4-1", 2: "Answer 4-2" , 3: "Answer 4-3", 4: "Answer 4-4"}];

    $scope.questions =
        [{ display: "Что такое однонаправленная привязка, какие способы использования данной привязки в AngularJS Вы знаете?", value: "1" },
            { display: "Что такое двунаправленная привязка, какие способы использования двунаправленной привязки Вы знаете?", value: "2" },
            { display: "Что такое partial view? Какие директивы используются для их применения?", value: "3" },
            { display: "В чем разница между ng-include ng-switch?", value: "4" },
            { display: "Зачем использовать ng-cloak?", value: "5" }];
    $scope.userAnswers = [];

    $scope.mode = $scope.questions[0];
});