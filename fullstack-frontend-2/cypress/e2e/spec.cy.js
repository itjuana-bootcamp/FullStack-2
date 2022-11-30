describe("empty spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  it.skip("fails", () => {
    expect(true).to.equal(false);
  });
});
