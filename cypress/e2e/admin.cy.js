describe("when testing the admin page", () => {
  beforeEach(() => {
    cy.visitAdminPage();
  });

  it("should create a new product when using the create product modal", () => {
    cy.contains("button", "Add a new product").click();
    cy.contains("Add a new product...");

    cy.fixture("products").then((products) => {
      const product = products[0];

      cy.get("input[name=name]").type(product.name);
      cy.get("input[name=description]").type(product.description);
      cy.get("input[name=price]").clear().type(product.price);
      cy.get("input[name=imageUrl]").type(product.imageUrl, { delay: 0 });

      cy.contains("button", "Add product").click();

      cy.contains(product.name);
      cy.contains(product.description);
      cy.contains(`$${product.price}`);
      cy.get("img").should("have.attr", "src", product.imageUrl);
    });
  });

  it("should edit a product when using the edit product modal", () => {
    cy.fixture("products").then((products) => {
      const oldProduct = products[0];
      cy.createNewProduct(oldProduct);

      cy.contains("button", "EDIT").click();
      cy.contains("Editing this product...");

      const newProduct = products[1];

      cy.get("input[name=name]").clear().type(newProduct.name);
      cy.get("input[name=description]").clear().type(newProduct.description);
      cy.get("input[name=price]").clear().type(newProduct.price);
      cy.get("input[name=imageUrl]")
        .clear()
        .type(newProduct.imageUrl, { delay: 0 });

      cy.contains("button", "Update product").click();

      cy.contains(newProduct.name);
      cy.contains(newProduct.description);
      cy.contains(`$${newProduct.price}`);
      cy.get("img").should("have.attr", "src", newProduct.imageUrl);

      cy.contains(`/^${oldProduct.name}$/`).should("not.exist");
      cy.contains(oldProduct.description).should("not.exist");
      cy.contains(`$${oldProduct.price}`).should("not.exist");
      cy.get("img").should("not.have.attr", "src", oldProduct.imageUrl);
    });
  });

  it("deletes a product when clicking the delete button", () => {
    cy.fixture("products").then((products) => {
      const product = products[0];

      cy.createNewProduct(product);

      cy.contains("button", "delete", { matchCase: false }).click();

      cy.contains(`/^${product.name}$/`).should("not.exist");
      cy.contains(product.description).should("not.exist");
      cy.contains(`$${product.price}`).should("not.exist");
      cy.get("img").should("not.exist");
    });
  });
});
