(function(){
"use strict";
'use strict';

/************************************* BEGIN Bootstrap Script ************************************/

/*
 * This line must come first, and declares the dependencies of
 * the local package (i.e. which customizations are included).
 */

var app = angular.module('viewCustom', ['toggleInstitutions']);

/************************************* END Bootstrap Script ************************************/

/************************************* BEGIN Config Options ************************************/

/*
 * This code allows configuration of the central and local package's
 * customizations with custom values.
 */

app.component('prmAlmaMoreInstAfter', { template: '<toggle-institutions />' });

/************************************* END Config Options ************************************/
})();