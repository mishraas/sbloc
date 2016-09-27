angular.module('core').factory('AuthService', ['$q', '$http', '$cookies', function($q, $http, $cookies) {

    function isLoggedIn() {
        return $cookies.get('user-token') ? true : false;
    }

    function login(user) {

        // create a new instance of deferred
        var deferred = $q.defer();


        // send a post request to the server
        $http.post('/api/login', {
                email: user.email,
                password: user.password,
                role: user.userRole
        })
            // handle success
            .success(function(data, status) {
                if (status === 200 && data) {
                    $cookies.put('user-token', data["user-token"]);
                    $cookies.put('user-role', data["role"]);
                    deferred.resolve();
                } else {

                    deferred.reject();
                }
            })
            // handle error
            .error(function() {
                user = false;
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
$cookies.remove('user-token');
$cookies.remove('user-role');
                deferred.resolve();
            })
            // handle error
            .error(function() {

                deferred.reject();
            });

        // return promise object
        return deferred.promise;

    }
    // return available functions for use in the controllers
    return ({
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout

    });

}]);


angular.module('core').factory('AuthhttpIntercepter', ['$location', '$cookies', '$injector', function($location, $cookies, $injector) {

    return {
        request: function(config) {

            var AuthService = $injector.get('AuthService');

            if (AuthService.isLoggedIn()) {
                // just to prevent linting error
                return config;
            } else {
                $location.path('/login');
            }
            return config;
        },

        requestError: function(config) {

            return config;
        },

        response: function(res) {
           /* $cookies.put('user-token', res["data"]["user-token"]);
            $cookies.put('user-role', res["data"]["role"]);
            */
            return res;
        },

        responseError: function(res) {
            return res;
        }
    };
}]);

