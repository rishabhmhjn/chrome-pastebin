'use strict';


var CpbApp = angular.module('CpbApp', ['ui.codemirror']);



CpbApp.controller('SubmitPasteCtrl', ['$scope',
  function($scope) {
    // $scope.mode = "javascript";
    // $scope.syntaxOptions = syntaxOptions;

    // // The ui-codemirror option
    // $scope.cmOption = {
    //   lineWrapping: true,
    //   lineNumbers: true,
    //   matchBrackets: true,
    //   tabMode: "indent",
    //   // mode: "javascript",
    //   mode: $scope.mode,
    //   viewportMargin: Infinity,
    //   onLoad: function() {
    //     console.log(arguments);

    //     $scope.onModeChanged = function(_cm) {
    //       console.log($scope.mode);
    //       if (availableSyntax[$scope.mode]) {
    //         var script = '/bower_components/Codemirror/mode/' + $scope.mode + '/' + $scope.mode + '.js';
    //         $.getScript(script, function(data, success) {
    //           if (success) _cm.setOption('mode', mode);
    //           else _cm.setOption('mode', 'clike');
    //         });
    //       } else {
    //         _cm.setOption('mode', "");
    //       }
    //     };
    //   }
    // };

    $scope.pasteExpireDateConfig = PasteBin.config.pasteExpireDate;

    $scope.pasteExpireDate = $scope.pasteExpireDateConfig[0].value;

    $scope.cmOption = {
      lineNumbers: true,
      matchBrackets: true,
      tabMode: "indent"
    };


  }
]);