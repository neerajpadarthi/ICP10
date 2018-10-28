angular.module('search',[])
    .controller('indexctrl', function($scope, $http) {
        $scope.getSearchResult = function() {
            $http.get('http://127.0.0.1:8083/servergoogle?searchtext='+$scope.searchDestination).success(function (data) {
                try {
                    console.log(data);
                    $scope.searchDescription = data.itemListElement[0].result.detailedDescription.articleBody;
                    $scope.description = "Description:";
                    $scope.wiki = data.itemListElement[0].result.detailedDescription.url;
                    $scope.wikiheading = "Explore " + $scope.searchDestination + " wiki in the following link";
                    $scope.searchimage = data.itemListElement[0].result.image.contentUrl;
                }
                catch (err) {
                    // document.getElementById("errormsg").innerHTML = "Please Correct your search item";
                }
            })
        }
    })
function hideFunction() {
    var x = document.getElementById("resDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}


// 'use strict'
// angular.module('know', [])
//
//     .controller('knowctrl', function($scope, $http) {
//         $scope.a=false;
//         $scope.getdetails = function () {
//             $http.get("http://127.0.0.1:8083/servergoogle?searchtext="+$scope.search).then(function (t) {
//                 console.log(t);
//                 $scope.nam=t.data.itemListElement[0].result.name;
//                 $scope.x = t.data.itemListElement[0].result.description;
//                 $scope.y=t.data.itemListElement[0].result.detailedDescription.url;
//                 $scope.a=true;
//
//             }).catch(function (err) {
//                 console.log(err.message);
//             })
//         }
//     })