export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((total, num) => total - num, numbers[0]);
}

export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((total, num) => {
    if (total === "Error: Division by zero" || num === 0) return "Error: Division by zero";
    return total / num;
  }, numbers[0]);
}

