import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
  title(i) {
    return `Comment ${i}`;
  },
  email(i) {
    return faker.list.random(
      "test@test.com",
      "example@example.com",
      "test@example.com"
    )(i);
  },
  body: "Hello World",
  postId: 1
});
