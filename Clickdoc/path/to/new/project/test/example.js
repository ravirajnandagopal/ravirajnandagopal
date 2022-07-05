const assert = require("assert");
 
describe("CGM test", function() {
    it("CGM test", function() {
        browser.url("https://demo.clickdoc.de/cd-de/");
		//wait: 5000;
	    $('#a.menu-link.ng-tns-c75-1').click();
	    //browser.pause(10000);
		$('#search-query-typeahead').setValue("Peter test");  
		//wait: 5000;
		browser.keys("\uE007"); 
		$('#h2.contact-title').toHaveText('dr peter test');
		$('#div.contact-header__content-titles').toHaveText('dr Peter Test ABD');
		
    });
});