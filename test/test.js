const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Products API", () => {
  /*
    Test GET Route
    */

  describe("GET /api/product", () => {
    it("It should get all products", (done) => {
      chai
        .request(app)
        .get("/api/product")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("data");
          response.body.should.be.a("object");
          done();
        });
    });
  });

  /*
    Test GET Route (id)
    */

  describe("GET /api/product/:id", () => {
    it("It should get a single product", (done) => {
      let id = "645fcc13e36b9f794bb5971c";
      chai
        .request(app)
        .get("/api/product/" + id)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("data");
          response.body.should.be.a("object");
          done();
        });
    });
  });
  /*
    Test POST Route
    */
  describe("POST /api/product", () => {
    it("It should create a single product", (done) => {
      let id = "645fcc13e36b9f794bb5971c";
      const sampleProduct = {
        name: "Dal makhni ",
        price: 250,
        description: "BEST Product it is !",
      };

      chai
        .request(app)
        .post("/api/product/")
        .send(sampleProduct)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("data");
          response.body.should.be.a("object");

          done();
        });
    });
  });
  /*
    Test PATCH Route
    */
  describe("PATCH /api/product/:id", () => {
    let id = "645fcc13e36b9f794bb5971c";
    const sampleProduct = {
      name: "Dal makhni ",
      price: 250,
      description: "BEST Product it is !",
    };
    it("It should update a single product", (done) => {
      chai
        .request(app)
        .patch("/api/product/" + id)
        .send(sampleProduct)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.property("data");
          response.body.should.be.a("object");
          done();
        });
    });
  });
});
