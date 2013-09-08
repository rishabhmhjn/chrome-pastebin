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
    $scope.error = "";

    var paste = $scope.paste = {};
    $scope.pasteExpirePeriodConfig = angular.copy(PasteBin.config.pasteExpirePeriod);
    $scope.pastePrivateConfig = angular.copy(PasteBin.config.pastePrivate);
    $scope.pasteSyntaxConfig = angular.copy(PasteBin.config.syntaxOptions);

    if ($scope.currentUser == null) {
      $scope.pastePrivateConfig[2]["disabled"] = true;
    }

    paste.api_paste_expire_date = localStorage["api_paste_expire_date"] || $scope.pasteExpirePeriodConfig[0].value;
    paste.api_paste_private = localStorage["api_paste_private"] || $scope.pastePrivateConfig[0].value;
    paste.api_paste_format = localStorage["api_paste_format"] || "text";
    paste.api_paste_name = localStorage["api_paste_name"] || "";


    var defaultPasteText = paste.api_paste_code = "Enter your code here";

    $scope.showOptions = false;

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
      $scope.error = "";

      var data = {
        "api_dev_key": PasteBin.config.apiKey,
        "api_paste_code": paste.api_paste_code,
        "api_option": "paste",
        "api_paste_name": paste.api_paste_name.trim(),
        "api_paste_format": paste.api_paste_format,
        "api_paste_private": parseInt(paste.api_paste_private),
        "api_user_key": "2f46dc072d7268cc1e7f2a2161fcd42e",
        "api_paste_expire_date": paste.api_paste_expire_date
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


        if (data && data.search(/Bad/) != 0) {
          $scope.pasteResultUrl = data;
          $('#pasteResultUrl').focus();
        } else {
          $scope.error = data;
        }
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

    $scope.error = "";
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
      "api_user_password": ""
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
        if (user) {
          console.log(user);
          $scope.currentUser = user;
          localStorage["currentUser"] = JSON.stringify(user);
          $scope.loginForm["api_user_name"] = "";
          $scope.loginForm["api_user_password"] = "";
        }
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

      $scope.error = "";
      var data = {
        "api_user_name": $scope.loginForm.api_user_name.trim(),
        "api_user_password": $scope.loginForm.api_user_password.trim(),
        "api_dev_key": PasteBin.config.apiKey
      };
      console.log(data);
      var params = $.param(data);
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
        if (data && data.search(/Bad/) != 0) {
          getUserInfo(data);
        } else {
          // TODO handle error
          $scope.inProgress = false;
          $scope.error = data;
        }
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

CpbApp.controller('PasteOptionsCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.currentUser = localStorage["currentUser"] ? JSON.parse(localStorage["currentUser"]) : null;

    var paste = $scope.paste = {};
    $scope.pasteExpirePeriodConfig = angular.copy(PasteBin.config.pasteExpirePeriod);
    $scope.pastePrivateConfig = angular.copy(PasteBin.config.pastePrivate);
    $scope.pasteSyntaxConfig = angular.copy(PasteBin.config.syntaxOptions);

    if ($scope.currentUser == null) {
      $scope.pastePrivateConfig[2]["disabled"] = true;
    }

    var setOptions = function() {
      paste.api_paste_expire_date = localStorage["api_paste_expire_date"] || $scope.pasteExpirePeriodConfig[0].value;
      paste.api_paste_private = localStorage["api_paste_private"] || $scope.pastePrivateConfig[0].value;
      paste.api_paste_format = localStorage["api_paste_format"] || "text";
      paste.api_paste_name = localStorage["api_paste_name"] || "";
    };

    $scope.saveOption = function(key) {
      console.log(key);
      localStorage[key] = paste[key];
    }


    $scope.resetOptions = function() {
      angular.forEach(paste, function(value, key) {
        delete localStorage[key];
      });
      setOptions();
    };

    setOptions();
  }
]);