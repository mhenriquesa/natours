import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $(".card");

		this.hideInitally();
		this.createWayPoints();
	}

	hideInitally() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWayPoints() {
		this.itemsToReveal.each(function() {
			let currentItem = this;
			new Waypoint({
				element: currentItem,
				offset: "65%",
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				}
			});
		});

	}

}

export default RevealOnScroll;