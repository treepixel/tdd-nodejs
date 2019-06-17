const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("Should encrypt user password", async () => {
    const user = await User.create({
      name: "Antonio Rodrigues",
      email: "antonio.rodrigues_tga@hotmail.com",
      password: "123123"
    });

    const compareHash = await bcrypt.compare("123123", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
