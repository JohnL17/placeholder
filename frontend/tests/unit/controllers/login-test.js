import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | login", function(hooks) {
  setupTest(hooks);

  test("User gets authenticated", async function(assert) {
    assert.expect(3);

    const controller = this.owner.lookup("controller:login");

    await controller.set("session", {
      authenticate: str => {
        assert.equal("authenticator:jwt", str);
      }
    });
    controller.set("identification", "username");
    controller.set("password", "1234qwer");
    controller.set("getProperties", (identification, password) => {
      assert.equal("identification", identification);
      assert.equal("password", password);
    });

    controller.send("authenticate");
  });

  test("Show error if username and password are wrong", function(assert) {
    assert.expect(3);

    const controller = this.owner.lookup("controller:login");

    controller.set("identification", "notusername");
    controller.set("password", "notpassword");
    controller.set("getProperties", async (identification, password) => {
      identification = await controller.get("identification");
      password = await controller.get("password");
      assert.notEqual("username", identification);
      assert.notEqual("1234qwer", password);
    });

    controller.send("authenticate");

    controller.set("notify", {
      error: str => {
        assert.equal("Wrong username or password", str);
      }
    });
  });
});
