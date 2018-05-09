$.get("https://gist.githubusercontent.com/IgorDubinin/7a68c5e6afa107b904b431d916b8bd63/raw/cb50c618ddbdc3bca2c3f15511534a655383ed04/test.json", function (jsonData){
	var dataReceived = JSON.parse(jsonData);
	var data = dataReceived[0]['Data']['Report'];
	
	$.views.settings.allowCode(true);
	//сфера деятельности
	var okvedListTemplate = $("#okvedListTemplate");
	var okvedListElem = $(".okved-list");
	okvedListElem.append(okvedListTemplate.render(data));
	
	//полное название компании
	var companyNameTemplate = $("#companyNameTemplate");
	var companyNameElem = $(".company-name");
	companyNameElem.append(companyNameTemplate.render(data['FullNameRus']));
	
	//краткое название компании
	var companyShortNameTemplate = $("#companyShortNameTemplate");
	var companyShortNameElem = $(".short-name-company");
	companyShortNameElem.append(companyShortNameTemplate.render(data['ShortNameRus']));
	
	//список лидеров
	var leaderListTemplate = $("#leaderListTemplate");
	var leaderListElem = $(".leader-list");
	leaderListElem.append(leaderListTemplate.render(data));
	
	//совет директоров
	var boardOfDirectorsTemplate = $("#boardOfDirectorsTemplate");
	var boardOfDirectorsElem = $(".board-of-directors");
	boardOfDirectorsElem.append(boardOfDirectorsTemplate.render(data['BoardOfDirectors']));
	
	//исполнительный орган
	var executiveBodyTemplate = $("#executiveBodyTemplate");
	var executiveBodyElem = $(".executive-body");
	executiveBodyElem.append(executiveBodyTemplate.render(data['ExecutiveBody']));
	
	//лица без варранта
	var personsWithoutWarrantTemplate = $("#personsWithoutWarrantTemplate");
	var personsWithoutWarrantElem = $(".persons-without-warrant");
	personsWithoutWarrantElem.append(personsWithoutWarrantTemplate.render(data['PersonsWithoutWarrant']));
	
	//юр. адрес
	var legalAddressesTemplate = $("#legalAddressesTemplate");
	var legalAddressesElem = $(".legal-addresses");
	legalAddressesElem.append(legalAddressesTemplate.render(data['LegalAddresses']));
	
	//доп. адрес
	var adjustAddressesTemplate = $("#adjustAddressesTemplate");
	var adjustAddressesElem = $(".adjust-addresses");
	adjustAddressesElem.append(adjustAddressesTemplate.render(data['AdjustAddress']));
	
	//номера телефонов
	//CheckPhone(data.PhoneList);
	var phoneListTemplate = $("#phoneListTemplate");
	var phoneListElem = $(".phone-list");
	phoneListElem.append(phoneListTemplate.render(data));
	
	//факс
	var faxListTemplate = $("#faxListTemplate");
	var faxListElem = $(".fax-list");
	faxListElem.append(faxListTemplate.render(data));
	
	//email
	var companyEmailTemplate = $("#companyEmail");
	var companyEmailElem = $(".company-email");
	companyEmailElem.append(companyEmailTemplate.render(data.Email));
	
	//адрес сайта
	var companySiteTemplate = $("#companySite");
	var companySiteElem = $(".company-site");
	companySiteElem.append(companySiteTemplate.render(data.Www));
	
	//гос контракты 94
	var federalLaw94Template = $("#federalLaw94");
	var federalLaw94Elem = $(".federal-law94");
	federalLaw94Elem.append(federalLaw94Template.render(data));
	
	//гос контракты 223
	var companySiteTemplate = $("#federalLaw223");
	var companySiteElem = $(".federal-law223");
	companySiteElem.append(companySiteTemplate.render(data));
})
.fail(function() {
	$("#exTab2").html("<h2>Извините, произошла ошибка.</h2>");
  });
  
function CheckPhone(phoneList){
	var array = [];
	var index = 0;	
	for(var i in phoneList){
		if(phoneList[i]["@Status"] != null){
			array[index]=phoneList[i];
			index++;
		}
	}
	var phoneListTemplate = $("#phoneListTemplate");
	var phoneListElem = $(".phone-list");
	var listPhone = {array};
	phoneListElem.append(phoneListTemplate.render(listPhone));
}
