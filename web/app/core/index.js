'use strict';

require('./core.module');
require('./core.config');
require('./core.component');
require('./services/core.apiCallService');
require('./services/core.loanService');
require('./services/core.authService');
module.exports = angular.module('core');