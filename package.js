// Source: https://github.com/chjj/marked

Package.describe("Github flavor Markdown parser");

Package.on_use(function (api) {
  api.add_files('marked.js', ['server', 'client']);
  api.add_files('markdown.js', ['server', 'client']);
  api.export('Markdown', ['server', 'client']);

  api.use("ui", "client", {weak: true});
  api.add_files("template-integration.js", "client");
});
