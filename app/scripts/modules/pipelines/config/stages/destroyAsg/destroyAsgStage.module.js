'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.pipelines.stage.destroyAsg', [
  require('./destroyAsgStage.js'),
  require('../stage.module.js'),
  require('../core/stage.core.module.js'),
  require('../../../../core/account/account.module.js'),
  require('../../../../utils/lodash.js'),
]).name;
