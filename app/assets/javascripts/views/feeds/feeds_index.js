NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feeds/index'],

  initialize: function() {
    this.listenTo(this.collection, "add remove sync", this.render);
    this.listenTo(this.collection, "change", this.render);
  },

  // events: {
  //   "click .add_feed" : "addNewFeed"
  // },

  render: function() {
    var renderedContent = this.template({
      title: "All Feeds",
      feeds: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  // addNewFeed: function() {
  //
  // }
});