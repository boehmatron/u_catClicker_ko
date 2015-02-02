var ViewModel = function(){

	this.currentCat = ko.observable( new Cat() );
	
	this.incrementCounter = function(){
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	}

}

var Cat = function() {
	this.clickCount = ko.observable(0);
	this.title = ko.observable("newborn");
	this.levelsArray = ko.observableArray();
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('https://d13yacurqjgara.cloudfront.net/users/285475/screenshots/1910598/bad_snap.gif');
	this.imgAttribution = ko.observable('Bad Snap');

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();

		switch (clicks) {
			case 0:
				title= "newborn";
				return title;
				break;
			case 1: 
				title ="teen";
				return title;
				break;
		}
	}, this);

	this.nicknames = ko.observableArray([
			{name: "Lilly"},
			{name: "Lucy"},
			{name: "Nora"}
		]);
}

ko.applyBindings(new ViewModel());