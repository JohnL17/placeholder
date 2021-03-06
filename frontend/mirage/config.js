export default function() {
  this.passthrough("/write-coverage");
  this.namespace = "/api/v1/";
  this.timing = 400;

  this.get("/users");
  this.get("/users/:id");
  this.get("/posts");
  this.post("/posts");
  this.get("/posts/:id");
  this.patch("/posts/:id");
  this.delete("/posts/:id");
  this.get("/comments");
  this.post("/comments");
  this.get("/comments/:id");
  this.get("/albums");
  this.post("/albums");
  this.get("/albums/:id");
  this.patch("/albums/:id");
  this.delete("/albums/:id");
  this.get("/photos");
  this.post("/photos");
  this.get("/photos/:id");
  this.get("/auth/me", schema => {
    return schema.users.first();
  });
  this.post("/auth/activate", () => ({
    data: { uid: 1, token: "123qwe" }
  }));
}
