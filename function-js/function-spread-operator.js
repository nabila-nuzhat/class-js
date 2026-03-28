// -----------Spread Operator: Passing items to a function :Deepseek example ------------

const scores = [95, 87, 92];

// Instead of: Math.max(95, 87, 92)
// You can "open" the array:
console.log(Math.max(...scores)); // 95
console.log(Math.max(scores)); // NaN