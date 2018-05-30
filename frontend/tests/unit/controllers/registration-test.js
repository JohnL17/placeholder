import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | registration", function(hooks) {
  setupTest(hooks);

  test("Create a user if password does match", function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:registration");

    controller.set("model", {
      save: () => {
        assert.ok(true);
        return new Promise(res => res());
      },
      password: "1234qwer"
    });
    controller.set("confirmPassword", "1234qwer");
    controller.set("transitionToRoute", path => {
      assert.equal("login", path);
    });

    controller.send("createUser");
  });

  test("Show error if password does not match", function(assert) {
    assert.expect(1);

    const controller = this.owner.lookup("controller:registration");

    controller.set("model", {
      save: () => {
        assert.ok(true);
        return new Promise(res => res());
      },
      password: "1234qwer"
    });
    controller.set("confirmPassword", "1234abcd");
    controller.set("notify", {
      error: str => {
        assert.equal("Passwords do not match", str);
      }
    });

    controller.send("createUser");
  });
});
