class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for (const s of strs) {
            const orderedChars = s.split("").reduce((acc, cur) => { return [cur.charCodeAt(0) - "a".charCodeAt(0), ...acc]}, []).sort().join(",");
            map[orderedChars] 
                ? map[orderedChars].push(s) 
                : map[orderedChars] = [s];
        }

        return Object.values(map)
    }
}
