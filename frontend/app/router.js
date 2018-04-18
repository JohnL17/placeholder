import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("posts", function() {
    this.route("show", { path: ":id" });
    this.route("new");
    this.route("edit", { path: ":post_id/edit" });
  });
  this.route("about");
  this.route("gallery", function() {
    this.route("show", { path: ":id" });
    this.route("new");
    this.route("edit", { path: ":album_id/edit" });
    this.route("upload", { path: ":album_id/upload" });
  });
});

export default Router;
