angular
    .module('myApp', [])
    .controller('myCtrl', function ($scope) {
        $scope.maleOrFemale = function (gender) {
            if (gender === "male") {
                $('#inputs').show();
                $('#male-story').show();
                $('#female-story').hide();
            } else if (gender === "female") {
                $('#inputs').show();
                $('#female-story').show();
                $('#male-story').hide();
            }
        }
    });
