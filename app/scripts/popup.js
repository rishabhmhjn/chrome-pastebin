'use strict';


var CpbApp = angular.module('CpbApp', ['ui.codemirror']);


CpbApp.directive('optionsDisabled', function($parse) {
  var disableOptions = function(scope, attr, element, data, fnDisableIfTrue) {
    // refresh the disabled options in the select element.
    $("option[value!='?']", element).each(function(i, e) {
      var locals = {};
      locals[attr] = data[i];
      $(this).attr("disabled", fnDisableIfTrue(scope, locals));
    });
  };
  return {
    priority: 0,
    require: 'ngModel',
    link: function(scope, iElement, iAttrs, ctrl) {
      // parse expression and build array of disabled options
      var expElements = iAttrs.optionsDisabled.match(/^\s*(.+)\s+for\s+(.+)\s+in\s+(.+)?\s*/);
      var attrToWatch = expElements[3];
      var fnDisableIfTrue = $parse(expElements[1]);
      scope.$watch(attrToWatch, function(newValue, oldValue) {
        if (newValue)
          disableOptions(scope, expElements[2], iElement, newValue, fnDisableIfTrue);
      }, true);
      // handle model updates properly
      scope.$watch(iAttrs.ngModel, function(newValue, oldValue) {
        var disOptions = $parse(attrToWatch)(scope);
        if (newValue)
          disableOptions(scope, expElements[2], iElement, disOptions, fnDisableIfTrue);
      });
    }
  };
});
// app.factory('formDataObject', function() {
//   return function(data) {
//     var fd = new FormData();
//     angular.forEach(data, function(value, key) {
//       fd.append(key, value);
//     });
//     return fd;
//   };
// });



CpbApp.controller('SubmitPasteCtrl', ['$scope', '$http',
  function($scope, $http) {
    // $scope.syntaxOptions = syntaxOptions;

    var paste = $scope.paste = {};
    $scope.pasteExpirePeriodConfig = PasteBin.config.pasteExpirePeriod;
    $scope.pastePrivateConfig = PasteBin.config.pastePrivate;
    $scope.pasteSyntaxConfig = PasteBin.config.syntaxOptions;

    paste.api_paste_expire_date = $scope.pasteExpirePeriodConfig[0].value;
    paste.api_paste_private = $scope.pastePrivateConfig[0].value;
    paste.api_paste_format = "";

    var defaultPasteText = paste.api_paste_code = "Enter your code here";



    $scope.showOptions = true;

    $scope.cmOption = {
      lineNumbers: true,
      matchBrackets: true,
      tabMode: "indent",
      viewportMargin: Infinity,
    };


    // The ui-codemirror option
    // $scope.cmOption = {
    //   lineNumbers: true,
    //   matchBrackets: true,
    //   tabMode: "indent",
    //   mode: paste.Syntax,
    //   viewportMargin: Infinity,
    //   onLoad: function(_cm) {
    //     console.log(arguments);
    //     $scope.onModeChanged = function() {
    //       var mode = paste.Syntax;
    //       console.log(mode);
    //       console.log(arguments);
    //       if (PasteBin.config.availableSyntax[mode]) {
    //         var scriptUrl = '/bower_components/Codemirror/mode/' + mode + '/' + mode + '.js';
    //         $.getScript(scriptUrl).done(function(data, success) {
    //           console.log(arguments);
    //           if (success) _cm.setOption('mode', mode);
    //           else _cm.setOption('mode', '');
    //         }).fail(function(jqxhr, settings, exception) {
    //           console.log(arguments);
    //         });
    //       } else {
    //         _cm.setOption('mode', "");
    //       }
    //     };
    //   }
    // };

    $scope.inProgress = false;
    $scope.pasteResultUrl = "";
    $scope.submitPaste = function() {

      console.log(paste);

      if ($scope.inProgress) return;
      else $scope.inProgress = true;

      var xsrf = $.param({
        "api_dev_key": PasteBin.config.apiKey,
        "api_paste_code": paste.api_paste_code,
        "api_option": "paste",
        "api_paste_name ": paste.api_paste_name,
        "api_paste_format ": paste.api_paste_format,
        "api_paste_private ": paste.api_paste_private,
        "api_paste_expire_date ": paste.api_paste_expire_date
      });
      $http({
        method: 'POST',
        url: PasteBin.config.newPasteUrl,
        data: xsrf,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).
      success(function(data, status, headers, config) {
        console.log(arguments);

        $scope.pasteResultUrl = data;
        $('#pasteResultUrl').focus();
        $scope.inProgress = false;
      }).
      error(function(data, status, headers, config) {
        console.log(arguments);

        // TODO handle error
        $scope.inProgress = false;
      });
    };

  }
]);