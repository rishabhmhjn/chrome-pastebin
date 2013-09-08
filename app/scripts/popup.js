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

// CpbApp.factory('formDataObject', function() {
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
    $scope.currentUser = localStorage["currentUser"] ? JSON.parse(localStorage["currentUser"]) : null;

    var paste = $scope.paste = {};
    $scope.pasteExpirePeriodConfig = PasteBin.config.pasteExpirePeriod;
    $scope.pastePrivateConfig = PasteBin.config.pastePrivate;
    $scope.pasteSyntaxConfig = PasteBin.config.syntaxOptions;

    paste.api_paste_expire_date = $scope.pasteExpirePeriodConfig[0].value;
    paste.api_paste_private = $scope.pastePrivateConfig[0].value;
    paste.api_paste_format = "text";

    var defaultPasteText = paste.api_paste_code = "Enter your code here";

    $scope.showOptions = true;

    $scope.cmOption = {
      lineNumbers: true,
      matchBrackets: true,
      tabMode: "indent",
      viewportMargin: Infinity,
    };

    $scope.inProgress = false;
    $scope.pasteResultUrl = "";
    $scope.submitPaste = function() {

      console.log(paste);

      if ($scope.inProgress) return;
      else $scope.inProgress = true;

      var data = {
        "api_dev_key": PasteBin.config.apiKey,
        "api_paste_code": paste.api_paste_code,
        "api_option": "paste",
        "api_paste_name": paste.api_paste_name,
        "api_paste_format ": paste.api_paste_format,
        "api_paste_private ": parseInt(paste.api_paste_private),
        "api_user_key": "2f46dc072d7268cc1e7f2a2161fcd42e",
        "api_paste_expire_date ": paste.api_paste_expire_date
      };

      // if (paste.api_paste_name) data.api_paste_name = paste.api_paste_name

      console.log(data);
      var params = $.param(data);
      $http({
        method: 'POST',
        url: PasteBin.config.apiPostUrl,
        data: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // transformRequest: formDataObject
      }).success(function(data, status, headers, config) {
        console.log(arguments);

        $scope.pasteResultUrl = data;
        $('#pasteResultUrl').focus();
        $scope.inProgress = false;
      }).error(function(data, status, headers, config) {
        console.log(arguments);

        // TODO handle error
        $scope.inProgress = false;
      });

    };

  }
]);



CpbApp.controller('LoginCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.currentUser = localStorage["currentUser"] ? JSON.parse(localStorage["currentUser"]) : null;

    // $scope.currentUser = {
    //   "user_name": "rishabhmhjn",
    //   "user_format_short": "",
    //   "user_expiration": "",
    //   "user_avatar_url": "http://pastebin.com/cache/a/254107.jpg",
    //   "user_private": "",
    //   "user_website": "",
    //   "user_email": "",
    //   "user_location": "",
    //   "user_account_type": ""
    // };

    $scope.loginForm = {
      "api_user_name": "",
      "api_user_password": "",
      "api_dev_key": PasteBin.config.apiKey,
    }

    var getUserInfo = function(api_user_key) {

      var data = {
        "api_user_key": api_user_key,
        "api_dev_key": PasteBin.config.apiKey,
        "api_option": "userdetails",
      };
      var params = $.param(data);

      $http({
        method: 'POST',
        url: PasteBin.config.apiPostUrl,
        data: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // transformRequest: formDataObject
      }).success(function(data, status, headers, config) {
        console.log(arguments);

        var user = JSON.parse(xml2json(parseXml(data))).user;
        console.log(user);

        $scope.currentUser = user;
        localStorage["currentUser"] = JSON.stringify(user);


        $scope.loginForm["api_user_name"] = "";
        $scope.loginForm["api_user_password"] = "";

        $scope.inProgress = false;
      }).error(function(data, status, headers, config) {
        console.log(arguments);

        // TODO handle error
        $scope.inProgress = false;
      });

    }

    $scope.inProgress = false;
    $scope.login = function() {
      if ($scope.inProgress) return;
      else $scope.inProgress = true;

      var params = $.param($scope.loginForm);
      $http({
        method: 'POST',
        url: PasteBin.config.apiLoginUrl,
        data: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // transformRequest: formDataObject
      }).success(function(data, status, headers, config) {
        console.log(arguments);
        getUserInfo(data);
      }).error(function(data, status, headers, config) {
        console.log(arguments);

        // TODO handle error
        $scope.inProgress = false;
      });
    };

    $scope.logout = function() {
      $scope.currentUser = null;
      delete localStorage["currentUser"];
    }
  }
]);