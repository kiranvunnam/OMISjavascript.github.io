"use strict";
        var $ = function(id) 
		{
            return document.getElementById(id);
        };
        var calculateFutureValue = function(investment,rate,years) {
			var fv=investment;
            for(var i=1;i<=years;i++){
				fv = fv + (fv*rate/100);
			 }
            fv=parseFloat(fv);
			fv = fv.toFixed(2);
			return fv;
		};
		var futureEntries = function() {
            var investment = parseFloat($("investment").value);
            var rate = parseFloat($("rate").value);
            var years = parseInt($("years").value);
            var errormsg1="Investment must be numeric and grater than 0 and less than or equal to 100000";
			var errormsg2 = "Rate must be numeric and grater than 0 and less than or equal to 15"
			var errormsg3 = "Years must be numeric and grater than 0 and less than or equal to 50"

            if (isNaN(investment) || investment < 0 || investment > 100000) 
			{
                alert(errormsg1);
                $("investment").focus();
            } 
			else if (isNaN(rate) || rate < 0 || rate > 15) 
			{
                alert(errormsg2);
                $("rate").focus();
            } 
			else if (isNaN(years) || years < 0 || years > 50) 
			{
                alert(errormsg3);
                $("years").focus();
            }
            else 
			{
                $("future_value").value = calculateFutureValue(investment, rate,years);
            }    
        };
		window.onload = function() {
            $("calculate").onclick = futureEntries;
            //$("miles").focus();
        };var $ = function(id) {
    return document.getElementById(id);
};

