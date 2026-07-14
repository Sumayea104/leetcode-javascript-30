# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function subsequencePairCount(nums: number[]): number {
    const MOD = 1_000_000_007;
    const m = Math.max(...nums);

    // Precompute gcd table
    const gcdTable = Array.from({ length: m + 1 }, () =>
        new Array<number>(m + 1).fill(0)
    );

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= m; j++) {
            let a = i;
            let b = j;

            while (b !== 0) {
                const t = b;
                b = a % b;
                a = t;
            }

            gcdTable[i][j] = a;
        }
    }

    let dp = Array.from({ length: m + 1 }, () =>
        new Array<number>(m + 1).fill(0)
    );

    dp[0][0] = 1;

    for (const num of nums) {

        const next = Array.from({ length: m + 1 }, () =>
            new Array<number>(m + 1).fill(0)
        );

        for (let g1 = 0; g1 <= m; g1++) {

            const nextG1 = gcdTable[g1][num];

            const dpRow = dp[g1];
            const nextRow = next[g1];
            const nextG1Row = next[nextG1];

            for (let g2 = 0; g2 <= m; g2++) {

                const ways = dpRow[g2];

                if (ways === 0) continue;

                // 1. Ignore current number
                nextRow[g2] = (nextRow[g2] + ways) % MOD;

                // 2. Put into first subsequence
                nextG1Row[g2] = (nextG1Row[g2] + ways) % MOD;

                // 3. Put into second subsequence
                const nextG2 = gcdTable[g2][num];
                nextRow[nextG2] = (nextRow[nextG2] + ways) % MOD;
            }
        }

        dp = next;
    }

    let answer = 0;

    for (let g = 1; g <= m; g++) {
        answer = (answer + dp[g][g]) % MOD;
    }

    return answer;
}
```