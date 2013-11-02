NewsReader.Views.ShowFeed = Backbone.View.extend({
  template: JST['feeds/show'],

  initialize: function() {
    // this.listenTo(this.model.entries, 'add remove sync', this.render);
    // this.listenTo(this.model.entries, 'change', this.render);
  },

  render: function() {
    var renderedContent = this.template({
      feed: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});