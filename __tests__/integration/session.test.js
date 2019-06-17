const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("Shoud receive JWT token when authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Antonio Rodrigo",
      email: "rodrigobuchecha@hotmail.com",
      password_hash: "afasdfasdf7891451"
    });

    console.log(user);

    expect(user.email).toBe("rodrigobuchecha@hotmail.com");
  });
});
