export default function(server) {
  server.createList("post", 10);
  server.createList("comment", 10);
  server.createList("album", 10);
  server.createList("photo", 10);
  server.create("user", 1);
}
