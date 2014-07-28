'use strict';

/**
 * @ngdoc service
 * @name diaWebApp.dateService
 * @description
 * # dateService
 * Service in the diaWebApp.
 */
angular.module('diaWebApp')
  .service('dateService', function dateService() {

  	var monthString = {
  		0: 'January',
  		1: 'February',
  		2: 'March',
  		3: 'April', 
  		4: 'May',
  		5: 'June',
  		6: 'July',
  		7: 'August',
  		8: 'September',
  		9: 'October',
  		10: 'November',
  		11: 'December'
  	};

  	var dayString = {
  		0: 'Mon',
  		1: 'Tue',
  		2: 'Wed',
  		3: 'Thu',
  		4: 'Fri',
  		5: 'Sat',
  		6: 'Sun'
  	};

    function processDate(date) {
    	var day = date.getDay();
    	var month = date.getMonth();
    	var dateNum = date.getDate();
    	var year = date.getUTCFullYear();
    	var suffix = {
    		1: 'st',
    		2: 'nd',
    		3: 'rd'
    	};
    	var dateSuffix;
    	if (suffix[dateNum]) {
    		dateSuffix = suffix[dateNum];
    	} else {
    		dateSuffix = 'th';
    	}
    	return dayString[day] + ', ' + dateNum + dateSuffix + ' ' + monthString[month] + ' ' + year;
    }

    this.formatDate = processDate;

    return this; 
  });
