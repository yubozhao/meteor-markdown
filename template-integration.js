if (Package.ui) {
  var UI = Package.ui.UI;
  var HTML = Package.htmljs.HTML;
  Package.ui.Handlebars.registerHelper('markdown', UI.block(function () {
    var self = this;
    return function () {
      var text = UI.toRawText(self.__content, self /*parentComponent*/);

      return HTML.Raw(Markdown(text));
    }
  }));
}
