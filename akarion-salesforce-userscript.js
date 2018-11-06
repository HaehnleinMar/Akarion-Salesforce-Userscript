// ==UserScript==
// @name         Akarion Salesforce Default Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://akarion.lightning.force.com/lightning/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function search(key, value, searchArray){
    for (var i=0; i < searchArray.length; i++) {
      if (searchArray[i][key] === value) {
        return searchArray[i];
      }
    }
  }

  var sfNavItems = document.getElementsByClassName('slds-context-bar__label-action dndItem');

  var timeCardNavItem = search('href', 'https://akarion.lightning.force.com/lightning/o/allTimeCard__c/home', sfNavItems);
  var timeSheetNavItem = search('href', 'https://akarion.lightning.force.com/lightning/o/allTimeSheet__c/home', sfNavItems);

  timeCardNavItem.onclick  = function(){ window.location.href = 'https://akarion.lightning.force.com/lightning/o/allTimeCard__c/list?filterName=00B0N000006hX8lUAE'; };
  timeSheetNavItem.onclick = function(){ window.location.href = 'https://akarion.lightning.force.com/lightning/o/allTimeSheet__c/list?filterName=00B0N000006i0MrUAI'; };
})();
