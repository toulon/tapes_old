directory.ShellView = Backbone.View.extend({

    initialize: function () {
 //       this.searchResults = new directory.EmployeeCollection();
  //      this.searchresultsView = new directory.EmployeeListView({model: this.searchResults, className: 'dropdown-menu'});
    },

    render: function () {
        this.$el.html(this.template());
        $('.navbar-search', this.el).append(this.searchresultsView.render().el);
        return this;
    },

});