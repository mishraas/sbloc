angular.module('core').factory('AuthService', ['$q', '$http', '$cookies', function($q, $http, $cookies) {
    function isLoggedIn() {        
        return _getUserCookies() ? true : false;
    }

    function login(user) {

        // create a new instance of deferred
        var deferred = $q.defer();


        // send a post request to the server
        $http.post('/api/login', {
                email: user.email,
                password: user.password              
        })
            // handle success
            .success(function(data, status) {
                if (status === 200 && data) {
                    console.log("data",data);
                    _setUserCookies(JSON.stringify(data));
                    deferred.resolve();
                } else {
                    _resetUserCookies();
                    deferred.reject();
                }
            })
            // handle error
            .error(function() {
                _resetUserCookies();
                deferred.reject();
            });

        // return promise object
        return deferred.promise;

    }

    function logout() {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a get request to the server
        $http.get('/user/logout')
            // handle success
            .success(function() {
                _resetUserCookies();
                deferred.resolve();
            })
            // handle error
            .error(function() {
                _resetUserCookies();
                deferred.reject();
            });

        // return promise object
        return deferred.promise;

    }

     function getUserDetail(){
       // return new UserEntity(_getUserCookies());   
       return   _getUserCookies();          
    }

    function _setUserCookies(user){
       $cookies.putObject('user',user);
    }

    function _getUserCookies(){
        return $cookies.get('user');
    }

    function _resetUserCookies(){
        $cookies.remove('user');        
    }


    // return available functions for use in the controllers
    return ({
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        getUserDetail:getUserDetail

    });

}]);


angular.module('core').factory('AuthhttpIntercepter', ['$location', '$cookies', '$injector', function($location, $cookies, $injector) {

    return {
        request: function(config) {

            var AuthService = $injector.get('AuthService');

            if (AuthService.isLoggedIn()) {
                // just to prevent linting error
                console.log("iscookiesSet",AuthService.isLoggedIn() );
                return config;
            } else {
                console.log("iscookiesSet",AuthService.isLoggedIn() );

                $location.path('/login');
            }
            return config;
        },

        requestError: function(config) {

            return config;
        },

        response: function(res) {
          //401,403
            return res;
        },

        responseError: function(res) {
            return res;
        }
    };
}]);

