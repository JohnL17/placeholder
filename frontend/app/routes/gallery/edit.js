import Route from "@ember/routing/route";

export default Route.extend({
  model({ album_id }) {
    return this.get("store").findRecord("album", album_id);
  }
});
