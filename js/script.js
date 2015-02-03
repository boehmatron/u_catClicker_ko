var ViewModel = function(){

	this.currentCat = ko.observable( new Cat({
		clickCount : 0,
	 	name: "tabby",
	 	imgSrc: "https://d13yacurqjgara.cloudfront.net/users/285475/screenshots/1910598/bad_snap.gif",
	 	imgAttribution: "Bad Snap",
	 	nicknames: ["Lilly", "Lucy", "Nora"] 
	}) );
	
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	}

}

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

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

}

ko.applyBindings(new ViewModel());