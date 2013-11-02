window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch({
      success: function() {
        new NewsReader.AppRouter();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});