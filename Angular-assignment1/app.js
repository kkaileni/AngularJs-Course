(function() {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
        $scope.luncharray = "";
        $scope.length = 0;
        $scope.message = "";
        $scope.MsgStyle = { "color": "red" };
        // length ignores blank spaces 
        $scope.getLength = function() {
            var splitArray = getArray($scope.luncharray);

            for (var i = splitArray.length - 1; i >= 0; i--) {
                if (splitArray[i].trim() == "") {
                    splitArray.splice(i, 1);
                    i + 1;
                }
            }
            $scope.length = splitArray.length;
            var style = getMsgStyle(splitArray.length);
            $scope.MsgStyle = style;
            var message = $scope.message;
            var btnstyle = getBtnStyle(message)
            $scope.BtnStyle = btnstyle;

        };

        function getArray(array) {
            var temparray = array.split(",");
            return temparray;
        }

        function getMsgStyle(length) {
            var style1 = { "color": "green" };
            var style2 = { "color": "red" };
            if (length == 0) {
                $scope.message = "Enter Data";
                return style2;
            }
            if (length <= 3 && length != 0) {
                $scope.message = "Enjoy!!";
                return style1;
            }
            if (length > 3) {
                $scope.message = "Too Much!!";
                return style2;
            }

        }

        function getBtnStyle(message) {
            var style3 = { "border-color": "green" };
            var style4 = { "border-color": "red" };
            if (message === "Enjoy!!" || message === "Too Much!!") {
                return style3;
            }
            if (message === "Enter Data") {
                return style4;
            }
        }
    };

})();
