'use strict';

angular.module('jsHomework0806App')
    .controller('0806homeworkCtrl', function ($scope,$interval) {
        // 初始化
        var automatic;
        var change = function(){
            $scope.picSrc = $scope.pics[$scope.num].src;
            $scope.picIndex = $scope.num+1;
        };
        $scope.pics = [{'name':'pic1','src':"images/01.jpg"},{'name':'pic1','src':"images/02.jpg"},{'name':'pic1','src':"images/03.jpg"}];
        $scope.isAutomatic = false;
        $scope.num = 0;
        change();
        $scope.picTotal = $scope.pics.length;

        //方法
        $scope.leftBtn = function(){
            $scope.num--;
            change();
        };

        $scope.rightBtn = function(){
            $scope.num++;
            change();
        };

        $scope.automatic = function(){
            $scope.isAutomatic = true;
            automatic = $interval(function(){
                if($scope.num>=2){
                    $scope.num = 0;
                    change();
                }else{
                    $scope.num++;
                    change();
                }
            },1000);
        };

        $scope.stop = function(){
            $scope.isAutomatic = false;
            $interval.cancel(automatic);
            automatic = undefined;
        };
    });
