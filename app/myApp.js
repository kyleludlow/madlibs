angular
    .module('myApp', ['ngMessages'])
    .controller('myCtrl', function ($scope) {
        $scope.submitForm = function () {

            if ($scope.userInputForm.$valid) {
                console.log('The form is valid');
                $scope.display = 1;
            } else {
                console.log('The form is not valid');
            }
        };

        $scope.maleOrFemale = function (gender) {

            if (gender === "male") {
                $('#male-story').show();
                $('#female-story').hide();
            } else if (gender === "female") {
                $('#female-story').show();
                $('#male-story').hide();
            }
        };
        $scope.reset = function () {
            console.log('Reset!');
            $scope.display = 0;
            $scope.name = null;
            $scope.jobTitle = null;
            $scope.tediousTask = null;
            $scope.dirtyTask = null;
            $scope.celebrity = null;
            $scope.uselessSkill = null;
            $scope.obnoxiousCelebrity = null;
            $scope.hugeNumber = null;
            $scope.adjective = null;
        };
        $scope.display = 0;
        $('#female-story').hide();
    });
