var vm = new Vue({
    el: '#codeword',
    data: {
        code: {
            // Mapping of numbers to letters
            1: "X", 2: "", 3: "", 4: "", 5: "", 6: "",
            7: "", 8: "", 9: "", 10: "", 11: "", 12: "",
            13: "", 14: "", 15: "", 16: "", 17: "", 18: "",
            19: "", 20: "", 21: "", 22: "", 23: "", 24: "",
            25: "", 26: "",
        },
        grid: [
            // Grid representing the crossword. 0 is a filled block
            [10, 15, 14, 10, 22, 19, 0, 21, 9, 15, 26, 17, 5, 9, 4],
            [3, 0, 0, 3, 0, 17, 0, 22, 0, 0, 12, 0, 15, 0, 17],
            [17, 4, 4, 14, 10, 12, 4, 24, 0, 14, 6, 7, 14, 4, 16],
            [5, 0, 0, 10, 0, 23, 0, 24, 0, 0, 15, 0, 21, 0, 3],
            [0, 0, 18, 14, 13, 12, 0, 14, 15, 16, 9, 4, 17, 19, 24],
            [18, 0, 0, 7, 0, 0, 0, 4, 0, 9, 0, 0, 19, 0, 0],
            [12, 21, 6, 9, 19, 19, 8, 0, 19, 22, 6, 18, 12, 10, 24],
            [12, 0, 0, 24, 0, 25, 0, 0, 0, 16, 0, 12, 0, 0, 17],
            [15, 14, 19, 12, 6, 22, 11, 0, 19, 12, 9, 20, 12, 12, 11],
            [0, 0, 17, 0, 0, 9, 0, 19, 0, 0, 0, 12, 0, 0, 8],
            [2, 9, 7, 19, 12, 24, 24, 14, 0, 6, 14, 7, 11, 0, 0],
            [14, 0, 12, 0, 1, 0, 0, 10, 0, 9, 0, 7, 0, 0, 19],
            [7, 12, 4, 16, 24, 3, 0, 10, 14, 4, 2, 12, 24, 24, 17],
            [17, 0, 10, 0, 15, 0, 0, 12, 0, 18, 0, 15, 0, 0, 16],
            [14, 5, 12, 15, 9, 24, 14, 15, 0, 14, 1, 8, 16, 12, 4]
        ]
    }
});