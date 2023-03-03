const Employee = require("../src/lib/Employee");

const mockEmployee = new Employee("Jane", 1, "kenaa@example.com");

describe("Testing employee class", () => {
  it("Contains a name", () => {
    expect(mockEmployee.getName()).toEqual(expect.any(String));
  });

  it("Name is longer than 2 chars", () => {
    expect(mockEmployee.getName().length).toBeGreaterThanOrEqual(2);
  });

  it("Does the employee have an id?", () => {
    expect(mockEmployee.getId()).toEqual(expect.any(Number));
  });

  it("Does the employee have an email?", () => {
    expect(mockEmployee.getEmail()).toContainEqual(
      expect.stringContaining("@", ".")
    );
  });

  it("Does the employee have a role?", () => {
    expect(mockEmployee.getRole()).toMatch("Employee");
  });
});
