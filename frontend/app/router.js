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
    this.route("comment", { path: ":post_id/comment" });
  });
  this.route("about");
  this.route("gallery", function() {
    this.route("show", { path: ":id" });
    this.route("new");
    this.route("edit", { path: ":album_id/edit" });
    this.route("upload", { path: ":album_id/upload" });
  });
  this.route("login");
  this.route("registration");
  this.route("activate", { path: "/activate/:uid/:token" });
  this.route("me");
});

export default Router;
