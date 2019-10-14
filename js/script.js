
const app = angular.module('app', []);

app.controller('matrixController', function($scope, $timeout) {

    $scope.numberOfRows = 3;
    $scope.numberOfColumns = 3;
    $scope.matrixUI = [
        {
            value: 1,
            color: '#FFFFFF'
        },
        {
            value: 2,
            color: '#FFFFFF'
        },
        {
            value: 3,
            color: '#FFFFFF'
        },
        {
            value: 4,
            color: '#FFFFFF'
        },
        {
            value: 5,
            color: '#FFFFFF'
        },
        {
            value: 6,
            color: '#FFFFFF'
        },
        {
            value: 7,
            color: '#FFFFFF'
        },
        {
            value: 8,
            color: '#FFFFFF'
        },
        {
            value: 9,
            color: '#FFFFFF'
        }


    ]

    $scope.matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    $scope.addColumn = function() {

        if ($scope.numberOfColumns >= 20) return;

        $scope.numberOfColumns++;

        for (var i = 0; i < $scope.numberOfRows; i++) {
            $scope.matrix.push(1)

            $scope.matrixUI.push({
                value: 1,
                color: '#FFFFFF'
            })
        }

    }

    $scope.removeColumn = function() {

        if ($scope.numberOfColumns <= 3) return;

        $scope.numberOfColumns--;

        for (var i = 0; i < $scope.numberOfRows; i++) {
            $scope.matrixUI.pop()
        }

    }

    $scope.addRow = function() {

        if ($scope.numberOfRows >= 20) return;

        $scope.numberOfRows++;

        for (var i = 0; i < $scope.numberOfColumns; i++) {
            $scope.matrix.push(1)

            $scope.matrixUI.push({
                value: 1,
                color: '#FFFFFF'
            })
        }

    }

    $scope.removeRow = function() {

        if ($scope.numberOfRows <= 3) return;

        $scope.numberOfRows--;

        for (var i = 0; i < $scope.numberOfColumns; i++) {
            $scope.matrixUI.pop()
        }

    }

    $scope.incrementCell = function($index) {

        if ($scope.matrix[$index] >= 99) return;
        $scope.matrix[$index] += 1;
        $scope.matrixUI[$index].value += 1;
    }

    $scope.decrementCell = function($index) {

        if ($scope.matrix[$index] <= 1) return;
        $scope.matrix[$index] -= 1;
        $scope.matrixUI[$index].value -= 1;
    }

    $scope.findMinPath = function() {

        $scope.resetMatrixColors();

       var path = findMinPath($scope.matrix, $scope.numberOfColumns, $scope.numberOfRows);

       for (var i = 0; i < path.length; i++) {
           setPathColors(i);
       }

       function setPathColors(i) {
            $timeout(function() {
                $scope.matrixUI[path[i]].color = '#8bc34a';
            }, (200 * i))
       }
    }

    $scope.resetMatrixColors = function() {
        for (var i = 0; i < $scope.matrix.length; i++) {
            $scope.matrixUI[i].color = '#FFFFFF';
        }
    }

    $scope.resetMatrix = function() {
        for (var i = 0; i < $scope.matrix.length; i++) {
            $scope.matrix[i] = 1;
            $scope.matrixUI[i].color = '#FFFFFF';
            $scope.matrixUI[i].value = 1;
        }
    }

    $scope.fillMatrix = function() {
        for (var i = 0; i < $scope.matrix.length; i++) {

            var number = Math.floor(Math.random() * 98) + 1;

            $scope.matrix[i] = number;
            $scope.matrixUI[i].color = '#FFFFFF';
            $scope.matrixUI[i].value = number;
        }
    }

})