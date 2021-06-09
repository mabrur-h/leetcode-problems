const change = function(amount, coins) {
    if (amount === 0 && amount === coins[0]) return 1;

    const dp = new Array(amount + 1).fill(0);

    dp[0] = 1;
    for (let item of coins) {
        for (let i = 1; i <= amount; i++) {
            if (i >= item) {
                dp[i] += dp[i - item];
            }
        }
    }
    return dp[amount]
};
