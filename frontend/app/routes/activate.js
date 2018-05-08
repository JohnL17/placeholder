import Route from "@ember/routing/route";
import fetch from "fetch";

export default Route.extend({
  model({ uid, token }) {
    const data = {
      data: {
        type: "activation-views",
        attributes: {
          uid,
          token
        }
      }
    };

    return fetch("/api/v1/auth/activate", {
      method: "post",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      },
      body: JSON.stringify(data)
    });
  }
});
