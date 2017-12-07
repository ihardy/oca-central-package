(function(){
"use strict";
'use strict';

/************************************* BEGIN Bootstrap Script ************************************/

/*
 * This line must come first, and declares the dependencies of
 * the central package (i.e. which customizations are included).
 */

angular.module('centralCustom', ['toggleInstitutions']);

/************************************* END Bootstrap Script ************************************/

/************************************* BEGIN Config Options ************************************/

/*
 * This code allows configuration of the central package's customizations
 * with default values for the Alliance, if desired.
 */

/************************************* END Config Options *************************************/

/************************************* BEGIN Customization Modules *****************************/

/*
 * This code powers the actual customizations being offered in the central
 * package. It generally should not be edited.
 */

/*
 * Toggle institutions (hide/show summit libraries)
 * https://github.com/alliance-pcsg/primo-explore-toggle-institutions
 */
angular
  .module('toggleInstitutions', [])
  .component('toggleInstitutions', {
    bindings: {
      startHidden: '<'
    },
    template: `
		<md-button class="md-raised" ng-click="$ctrl.toggleLibs()" id="summitButton"
      aria-controls="summitLinks" aria-expanded=false aria-label="Show/Hide Summit Libraries">
 			{{$ctrl.showLibs ? 'Hide Summit Libraries' : 'Show Summit Libraries'}}
 			<span aria-hidden=true>{{$ctrl.showLibs ? '&laquo;' : '&raquo;'}}</span>
		</md-button>`,
    controller: function() {
      this.$onInit = function() {
        this.showLibs = this.startHidden === false ? true : false
        this.button = angular.element(document.querySelector('prm-alma-more-inst-after button'))
        this.tabs = angular.element(document.querySelector('prm-alma-more-inst md-tabs'))
        this.tabs.attr('id', 'summitLinks')
        this.button.parent().after(this.tabs)
        if (!this.showLibs) this.tabs.addClass('hide')
      }
      this.toggleLibs = function() {
        this.showLibs = !this.showLibs
        this.tabs.hasClass('hide') ?
        this.tabs.removeClass('hide') && this.button.attr('aria-expanded', true) :
        this.tabs.addClass('hide') && this.button.attr('aria-expanded', false)
      }
    }
  })

/************************************* END Customization Modules *****************************/
})();
