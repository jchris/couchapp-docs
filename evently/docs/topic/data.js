function(e, p) {
  var doc = $$(this).app.ddoc.docs[p.id];
  var converter = new Showdown.converter();
  var html = converter.makeHtml(doc);
  return {
    html : html
  };
};