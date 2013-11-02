NewsReader.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "feedIndex",
    "feeds/:id/entries" : "showFeed"
  },

  feedIndex: function() {
    var feedIndexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    this._swapView(feedIndexView);
  },

  showFeed: function(id) {
    var feedShowView = new NewsReader.Views.ShowFeed({
      model: NewsReader.feeds.where( {id: parseInt(id)} )
    });

    this._swapView(feedShowView);
  },


  ///////////////////////////////////////////////////

  _swapView: function(newView) {
    if (this._prevView) {
      this._prevView.remove();
    }

    this._prevView = newView;
    $('body').html(newView.render().$el);
  }
});