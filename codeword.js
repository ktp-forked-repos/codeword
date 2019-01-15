var vm = new Vue({
    el: '#codeword',
    data: {
        input: {
            // Mapping of numbers to letters
            1: "X", 2: "", 3: "", 4: "", 5: "", 6: "",
            7: "", 8: "", 9: "", 10: "", 11: "", 12: "",
            13: "", 14: "", 15: "", 16: "", 17: "", 18: "",
            19: "", 20: "", 21: "", 22: "", 23: "", 24: "",
            25: "", 26: "",
        },
        letters: {
            A:0, B:0, C:0, D:0, E:0, F:0, G:0, H:0, 
            I:0, J:0, K:0, L:0, M:0, N:0, O:0, P:0, 
            Q:0, R:0, S:0, T:0, U:0, V:0, W:0, X:1,
            Y:0, Z:0 
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
    },
    methods: {
        isDone: function(num) {
            const letter = this.input[num];
            console.log(letter, this.letters[letter])
            if (letter && this.letters[letter] > 1) {
                return { duplicated: true };
            } else {
                return  { done: letter };
            }
        }
    },
    watch: {
        'input.1': (val, oldVal) => validateInput(val, oldVal, 1),
        'input.2': (val, oldVal) => validateInput(val, oldVal, 2),
        'input.3': (val, oldVal) => validateInput(val, oldVal, 3),
        'input.4': (val, oldVal) => validateInput(val, oldVal, 4),
        'input.5': (val, oldVal) => validateInput(val, oldVal, 5),
        'input.6': (val, oldVal) => validateInput(val, oldVal, 6),
        'input.7': (val, oldVal) => validateInput(val, oldVal, 7),
        'input.8': (val, oldVal) => validateInput(val, oldVal, 8),
        'input.9': (val, oldVal) => validateInput(val, oldVal, 9),
        'input.10': (val, oldVal) => validateInput(val, oldVal, 10),
        'input.11': (val, oldVal) => validateInput(val, oldVal, 11),
        'input.12': (val, oldVal) => validateInput(val, oldVal, 12),
        'input.13': (val, oldVal) => validateInput(val, oldVal, 13),
        'input.14': (val, oldVal) => validateInput(val, oldVal, 14),
        'input.15': (val, oldVal) => validateInput(val, oldVal, 15),
        'input.16': (val, oldVal) => validateInput(val, oldVal, 16),
        'input.17': (val, oldVal) => validateInput(val, oldVal, 17),
        'input.18': (val, oldVal) => validateInput(val, oldVal, 18),
        'input.19': (val, oldVal) => validateInput(val, oldVal, 19),
        'input.20': (val, oldVal) => validateInput(val, oldVal, 20),
        'input.21': (val, oldVal) => validateInput(val, oldVal, 21),
        'input.22': (val, oldVal) => validateInput(val, oldVal, 22),
        'input.23': (val, oldVal) => validateInput(val, oldVal, 23),
        'input.24': (val, oldVal) => validateInput(val, oldVal, 24),
        'input.25': (val, oldVal) => validateInput(val, oldVal, 25),
        'input.26': (val, oldVal) => validateInput(val, oldVal, 26),
    }
});

function validateInput(val, oldVal, num) {
    let validated = val;

    // Make sure we only have a single character
    if (val.length > 1) {
        validated = val[val.length - 1];
    }

    // Make sure letter is capitalised
    validated = validated.toUpperCase();

    // Make sure letter is valid
    if (vm.letters[validated] === undefined) {
        validated = oldVal;
        return;
    }

    // Unmark old value
    if (vm.letters[oldVal] !== undefined) {
        vm.letters[oldVal]--;
    }
    
    // Convert letter to validated value if it is different
    if (validated !== val) {
        vm.input[num] = validated;
        // Mark new value
        vm.letters[validated]++;
    }
}