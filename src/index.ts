import * as angular from 'angular';
import 'angular-ui-router';
import {routingConfig} from './configuration/routing';

import {App} from 'components/app/App';
import {AppService} from 'shared/AppService';

angular.module('app', ['ui.router']).config(routingConfig)
    .component('app', new App())
    .factory('AppService', AppService);