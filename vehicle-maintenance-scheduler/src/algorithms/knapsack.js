export const optimizeTasks = (tasks, maxHours) => {
  const n = tasks.length;

  const dp = Array.from({ length: n + 1 }, () => Array(maxHours + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { estimatedHours, impactScore } = tasks[i - 1];

    for (let w = 0; w <= maxHours; w++) {
      if (estimatedHours <= w) {
        dp[i][w] = Math.max(
          impactScore + dp[i - 1][w - estimatedHours],

          dp[i - 1][w],
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let w = maxHours;

  const selectedTasks = [];

  let totalHoursUsed = 0;

  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedTasks.push(tasks[i - 1]);

      totalHoursUsed += tasks[i - 1].estimatedHours;

      w -= tasks[i - 1].estimatedHours;
    }
  }

  return {
    selectedTasks,
    totalImpact: dp[n][maxHours],
    totalHoursUsed,
    unusedHours: maxHours - totalHoursUsed,
    efficiency: ((totalHoursUsed / maxHours) * 100).toFixed(2) + "%",
  };
};
