function() {
  var docs = $$(this).app.ddoc.docs;
  var dnames = [];
  $.forIn(docs, function(d) {
    dnames.push({
      title: d,
      href : "#/topic/"+encodeURIComponent(d)
      });
  });
  return {docs:dnames};
};