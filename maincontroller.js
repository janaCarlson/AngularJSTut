/**
 * this assigns a controller called MainController to the MyTutorialApp
 * application.  The scope variable (parameter to the controller function) we
 * use to assign all out controller variables which will then make them available within
 * the #content DIV in the HTML page.
 */
app.controller("MainController", function($scope) {
    //created a scope variable and assigns a string to it
    $scope.understand = "What would you like to say?";
    $scope.inputValue = "";
    $scope.selectedPerson = 0;
    $scope.selectedGenre = null;
    $scope.people = [
        {
            id: 0,
            name: 'Jana',
            music: [
                'Rock',
                'Metal',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 1,
            name: 'Chris',
            music: [
                'Indie',
                'Drumstep',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 2,
            name: 'Harry',
            music: [
                'Rock',
                'Metal',
                'Thrash Metal',
                'Heavy Metal'
            ],
            live: true
        },
        {
            id: 3,
            name: 'Allyce',
            music: [
                'Pop',
                'RnB',
                'Hip Hop'
            ],
            live: true
        }
    ];
    $scope.newPerson = null;
    $scope.addNew = function() {
        if ($scope.newPerson != null && $scope.newPerson != "") {
            $scope.people.push({
                id: $scope.people.length,
                name: $scope.newPerson,
                live: true,
                music:[$scope.newMusic]
            });
        }
    } ;
    $scope.removeItemNow = function(index) {
        $scope.people.splice(index, 1);
    } ;

        $scope.colors = [
            {name:'black', shade:'dark', used:'true'},
            {name:'white', shade:'light', used:'true'},
            {name:'red', shade:'dark', used:'true'},
            {name:'blue', shade:'dark', used:'true'},
            {name:'yellow', shade:'light', used:'true'}
        ];



        $scope.selectItem = function (color) {
            color.used = true;
        }
});