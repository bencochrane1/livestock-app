angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.purchaseTab = true;

  $scope.toggleTab = toggleTab;

  function toggleTab(tab) {
    if (tab === 'purchase') {
      $scope.purchaseTab = true; 
      console.log('$scope.purchaseTab', $scope.purchaseTab);
    } else {
      $scope.purchaseTab = false;
      console.log('$scope.purchaseTab', $scope.purchaseTab);
    }
  }





  // $scope.groups = [];
  // for (var i=0; i<10; i++) {
  //   $scope.groups[i] = {
  //     name: i,
  //     items: []
  //   };
  //   for (var j=0; j<3; j++) {
  //     $scope.groups[i].items.push(i + '-' + j);
  //   }
  // }

  $scope.totalShown = true;

  $scope.purchases = [
    {
      name: 'Purchase Outputs',
      items: [
        {
          name: 'Cattle Value',
          totalValue: 59310,
          perHeadValue: 4236.43,
          unit: "$"
        },
        {
          name: 'Agent Commission',
          totalValue: 1.4,
          perHeadValue: 1.4,
          unit: "%"
        },
        {
          name: 'Net Cattle Value',
          totalValue: 58479,
          perHeadValue: 4100,
          unit: "$"
        }      
      ]
    }, 
    {
      name: 'Purchase Inputs',
      items: []
    },     
  ];
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */

   $scope.togglePerHeadOrTotal  = togglePerHeadOrTotal;

   function togglePerHeadOrTotal(input) {
    if (input === 'perHead') {
      $scope.totalShown = false;
    } else if (input === 'total') {
      $scope.totalShown = true;
    }
   }


  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };







})

.controller('SearchCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Wagyu', id: 1 },
    { title: 'Herefords', id: 2 },
    { title: 'Brahman', id: 3 },
    { title: 'Braford', id: 4 },
    { title: 'Santa Gertrudis', id: 5 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
