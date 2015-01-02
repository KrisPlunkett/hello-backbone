(function($){

	var listView = Backbone.View.extend({
		el : $('body'),

		initialize: function(){
			_.bindAll(this, 'render');

			this.render();
		},

		render: function(){
			$(this.el).append("<h1>Hey World!</h1>");
		}


	});

	var listView = new listView();

})(jQuery);