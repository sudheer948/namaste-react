import { Sum } from "../Sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = Sum(1, 2);
  expect(result).toBe(3);
});
