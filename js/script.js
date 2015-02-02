var ViewModel = function(){
	
	this.clickCount = ko.observable(0);
	this.level = ko.observable("newborn");
	this.levelsArray = ko.observableArray();
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('https://d13yacurqjgara.cloudfront.net/users/285475/screenshots/1910598/bad_snap.gif');
	this.imgAttribution = ko.observable('Bad Snap');

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);

		switch (this.clickCount()) {
			case 2: 
			this.level("teen");
			break;
		}

	}

}

ko.applyBindings(new ViewModel());