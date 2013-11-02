NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  entries: function() {
    if (!this._feedEntries) {
      this._feedEntries = new NewsReader.Collections.Entries([],{feed: this});
    }

    return this._feedEntries;
  }

})