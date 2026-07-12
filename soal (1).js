// File: soal.js
const soalData = [
    {
        id: 1,
        soal: "Tentukan turunan dari f(x) = x^2 + 3x - 5",
        options: [
            { label: "A", text: "2x" },
            { label: "B", text: "2x + 3" },
            { label: "C", text: "x^2 + 3" },
            { label: "D", text: "2x - 5" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 2x + 3"
    },
    {
        id: 2,
        soal: "Jika f(x) = (2x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "4x + 1" },
            { label: "B", text: "4x^2 + 4" },
            { label: "C", text: "8x + 2" },
            { label: "D", text: "8x + 4" }
        ],
        jawaban: "D",
        pembahasan: "f(x) = 4x^2 + 4x + 1, maka f'(x) = 8x + 4"
    },
    {
        id: 3,
        soal: "Tentukan turunan dari f(x) = cos(3x)",
        options: [
            { label: "A", text: "3 cos(3x)" },
            { label: "B", text: "-3 sin(3x)" },
            { label: "C", text: "-sin(3x)" },
            { label: "D", text: "3 sin(3x)" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = -3 sin(3x)"
    },
    {
        id: 4,
        soal: "Tentukan turunan dari f(x) = sin(4x)",
        options: [
            { label: "A", text: "cos(4x)" },
            { label: "B", text: "4 cos(4x)" },
            { label: "C", text: "4 sin(4x)" },
            { label: "D", text: "-4 cos(4x)" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 4 cos(4x)"
    },
    {
        id: 5,
        soal: "Tentukan turunan dari f(x) = 5x^2 + 3x - 5",
        options: [
            { label: "A", text: "10x + 3" },
            { label: "B", text: "10x - 5" },
            { label: "C", text: "10x" },
            { label: "D", text: "5x + 3" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 10x + 3"
    },
    {
        id: 6,
        soal: "Jika f(x) = (6x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "72x + 6" },
            { label: "B", text: "12x + 1" },
            { label: "C", text: "36x + 6" },
            { label: "D", text: "72x + 12" }
        ],
        jawaban: "D",
        pembahasan: "f(x) = 36x^2 + 12x + 1, maka f'(x) = 72x + 12"
    },
    {
        id: 7,
        soal: "Tentukan turunan dari f(x) = cos(7x)",
        options: [
            { label: "A", text: "7 cos(7x)" },
            { label: "B", text: "7 sin(7x)" },
            { label: "C", text: "-7 sin(7x)" },
            { label: "D", text: "-7 cos(7x)" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = -7 sin(7x)"
    },
    {
        id: 8,
        soal: "Tentukan turunan dari f(x) = sin(8x)",
        options: [
            { label: "A", text: "8 cos(8x)" },
            { label: "B", text: "8 sin(8x)" },
            { label: "C", text: "-8 sin(8x)" },
            { label: "D", text: "-8 cos(8x)" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 8 cos(8x)"
    },
    {
        id: 9,
        soal: "Tentukan turunan dari f(x) = 9x^2 + 3x - 5",
        options: [
            { label: "A", text: "18x + 3" },
            { label: "B", text: "18x - 5" },
            { label: "C", text: "9x + 3" },
            { label: "D", text: "18x" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 18x + 3"
    },
    {
        id: 10,
        soal: "Jika f(x) = (10x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "200x + 10" },
            { label: "B", text: "20x + 1" },
            { label: "C", text: "100x + 10" },
            { label: "D", text: "200x + 20" }
        ],
        jawaban: "D",
        pembahasan: "f(x) = 100x^2 + 20x + 1, maka f'(x) = 200x + 20"
    },
    {
        id: 11,
        soal: "Tentukan turunan dari f(x) = cos(11x)",
        options: [
            { label: "A", text: "-11 sin(11x)" },
            { label: "B", text: "11 sin(11x)" },
            { label: "C", text: "-11 cos(11x)" },
            { label: "D", text: "11 cos(11x)" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = -11 sin(11x)"
    },
    {
        id: 12,
        soal: "Tentukan turunan dari f(x) = sin(12x)",
        options: [
            { label: "A", text: "12 cos(12x)" },
            { label: "B", text: "12 sin(12x)" },
            { label: "C", text: "-12 cos(12x)" },
            { label: "D", text: "-12 sin(12x)" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 12 cos(12x)"
    },
    {
        id: 13,
        soal: "Tentukan turunan dari f(x) = 13x^2 + 3x - 5",
        options: [
            { label: "A", text: "26x" },
            { label: "B", text: "26x + 3" },
            { label: "C", text: "26x - 5" },
            { label: "D", text: "13x + 3" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 26x + 3"
    },
    {
        id: 14,
        soal: "Jika f(x) = (14x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "196x + 14" },
            { label: "B", text: "392x + 14" },
            { label: "C", text: "28x + 1" },
            { label: "D", text: "392x + 28" }
        ],
        jawaban: "D",
        pembahasan: "f(x) = 196x^2 + 28x + 1, maka f'(x) = 392x + 28"
    },
    {
        id: 15,
        soal: "Tentukan turunan dari f(x) = cos(15x)",
        options: [
            { label: "A", text: "15 cos(15x)" },
            { label: "B", text: "-15 cos(15x)" },
            { label: "C", text: "-15 sin(15x)" },
            { label: "D", text: "15 sin(15x)" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = -15 sin(15x)"
    },
    {
        id: 16,
        soal: "Tentukan turunan dari f(x) = sin(16x)",
        options: [
            { label: "A", text: "16 cos(16x)" },
            { label: "B", text: "-16 sin(16x)" },
            { label: "C", text: "-16 cos(16x)" },
            { label: "D", text: "16 sin(16x)" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 16 cos(16x)"
    },
    {
        id: 17,
        soal: "Tentukan turunan dari f(x) = 17x^2 + 3x - 5",
        options: [
            { label: "A", text: "34x + 3" },
            { label: "B", text: "17x + 3" },
            { label: "C", text: "34x - 5" },
            { label: "D", text: "34x" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 34x + 3"
    },
    {
        id: 18,
        soal: "Jika f(x) = (18x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "36x + 1" },
            { label: "B", text: "648x + 18" },
            { label: "C", text: "648x + 36" },
            { label: "D", text: "324x + 18" }
        ],
        jawaban: "C",
        pembahasan: "f(x) = 324x^2 + 36x + 1, maka f'(x) = 648x + 36"
    },
    {
        id: 19,
        soal: "Tentukan turunan dari f(x) = cos(19x)",
        options: [
            { label: "A", text: "19 sin(19x)" },
            { label: "B", text: "19 cos(19x)" },
            { label: "C", text: "-19 cos(19x)" },
            { label: "D", text: "-19 sin(19x)" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = -19 sin(19x)"
    },
    {
        id: 20,
        soal: "Tentukan turunan dari f(x) = sin(20x)",
        options: [
            { label: "A", text: "20 sin(20x)" },
            { label: "B", text: "20 cos(20x)" },
            { label: "C", text: "-20 sin(20x)" },
            { label: "D", text: "-20 cos(20x)" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 20 cos(20x)"
    },
    {
        id: 21,
        soal: "Tentukan turunan dari f(x) = 21x^2 + 3x - 5",
        options: [
            { label: "A", text: "42x + 3" },
            { label: "B", text: "21x + 3" },
            { label: "C", text: "42x" },
            { label: "D", text: "42x - 5" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 42x + 3"
    },
    {
        id: 22,
        soal: "Jika f(x) = (22x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "968x + 22" },
            { label: "B", text: "44x + 1" },
            { label: "C", text: "968x + 44" },
            { label: "D", text: "484x + 22" }
        ],
        jawaban: "C",
        pembahasan: "f(x) = 484x^2 + 44x + 1, maka f'(x) = 968x + 44"
    },
    {
        id: 23,
        soal: "Tentukan turunan dari f(x) = cos(23x)",
        options: [
            { label: "A", text: "23 sin(23x)" },
            { label: "B", text: "23 cos(23x)" },
            { label: "C", text: "-23 sin(23x)" },
            { label: "D", text: "-23 cos(23x)" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = -23 sin(23x)"
    },
    {
        id: 24,
        soal: "Tentukan turunan dari f(x) = sin(24x)",
        options: [
            { label: "A", text: "-24 cos(24x)" },
            { label: "B", text: "24 cos(24x)" },
            { label: "C", text: "24 sin(24x)" },
            { label: "D", text: "-24 sin(24x)" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 24 cos(24x)"
    },
    {
        id: 25,
        soal: "Tentukan turunan dari f(x) = 25x^2 + 3x - 5",
        options: [
            { label: "A", text: "50x - 5" },
            { label: "B", text: "25x + 3" },
            { label: "C", text: "50x + 3" },
            { label: "D", text: "50x" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = 50x + 3"
    },
    {
        id: 26,
        soal: "Jika f(x) = (26x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "1352x + 26" },
            { label: "B", text: "1352x + 52" },
            { label: "C", text: "52x + 1" },
            { label: "D", text: "676x + 26" }
        ],
        jawaban: "B",
        pembahasan: "f(x) = 676x^2 + 52x + 1, maka f'(x) = 1352x + 52"
    },
    {
        id: 27,
        soal: "Tentukan turunan dari f(x) = cos(27x)",
        options: [
            { label: "A", text: "-27 sin(27x)" },
            { label: "B", text: "27 sin(27x)" },
            { label: "C", text: "-27 cos(27x)" },
            { label: "D", text: "27 cos(27x)" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = -27 sin(27x)"
    },
    {
        id: 28,
        soal: "Tentukan turunan dari f(x) = sin(28x)",
        options: [
            { label: "A", text: "-28 cos(28x)" },
            { label: "B", text: "-28 sin(28x)" },
            { label: "C", text: "28 sin(28x)" },
            { label: "D", text: "28 cos(28x)" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = 28 cos(28x)"
    },
    {
        id: 29,
        soal: "Tentukan turunan dari f(x) = 29x^2 + 3x - 5",
        options: [
            { label: "A", text: "58x" },
            { label: "B", text: "29x + 3" },
            { label: "C", text: "58x - 5" },
            { label: "D", text: "58x + 3" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = 58x + 3"
    },
    {
        id: 30,
        soal: "Jika f(x) = (30x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "900x + 30" },
            { label: "B", text: "1800x + 60" },
            { label: "C", text: "1800x + 30" },
            { label: "D", text: "60x + 1" }
        ],
        jawaban: "B",
        pembahasan: "f(x) = 900x^2 + 60x + 1, maka f'(x) = 1800x + 60"
    },
    {
        id: 31,
        soal: "Tentukan turunan dari f(x) = cos(31x)",
        options: [
            { label: "A", text: "-31 cos(31x)" },
            { label: "B", text: "31 cos(31x)" },
            { label: "C", text: "31 sin(31x)" },
            { label: "D", text: "-31 sin(31x)" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = -31 sin(31x)"
    },
    {
        id: 32,
        soal: "Tentukan turunan dari f(x) = sin(32x)",
        options: [
            { label: "A", text: "-32 cos(32x)" },
            { label: "B", text: "32 sin(32x)" },
            { label: "C", text: "-32 sin(32x)" },
            { label: "D", text: "32 cos(32x)" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = 32 cos(32x)"
    },
    {
        id: 33,
        soal: "Tentukan turunan dari f(x) = 33x^2 + 3x - 5",
        options: [
            { label: "A", text: "66x" },
            { label: "B", text: "66x + 3" },
            { label: "C", text: "33x + 3" },
            { label: "D", text: "66x - 5" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 66x + 3"
    },
    {
        id: 34,
        soal: "Jika f(x) = (34x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "1156x + 34" },
            { label: "B", text: "2312x + 68" },
            { label: "C", text: "2312x + 34" },
            { label: "D", text: "68x + 1" }
        ],
        jawaban: "B",
        pembahasan: "f(x) = 1156x^2 + 68x + 1, maka f'(x) = 2312x + 68"
    },
    {
        id: 35,
        soal: "Tentukan turunan dari f(x) = cos(35x)",
        options: [
            { label: "A", text: "35 cos(35x)" },
            { label: "B", text: "35 sin(35x)" },
            { label: "C", text: "-35 sin(35x)" },
            { label: "D", text: "-35 cos(35x)" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = -35 sin(35x)"
    },
    {
        id: 36,
        soal: "Tentukan turunan dari f(x) = sin(36x)",
        options: [
            { label: "A", text: "-36 cos(36x)" },
            { label: "B", text: "-36 sin(36x)" },
            { label: "C", text: "36 cos(36x)" },
            { label: "D", text: "36 sin(36x)" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = 36 cos(36x)"
    },
    {
        id: 37,
        soal: "Tentukan turunan dari f(x) = 37x^2 + 3x - 5",
        options: [
            { label: "A", text: "74x - 5" },
            { label: "B", text: "74x" },
            { label: "C", text: "37x + 3" },
            { label: "D", text: "74x + 3" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = 74x + 3"
    },
    {
        id: 38,
        soal: "Jika f(x) = (38x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "76x + 1" },
            { label: "B", text: "2888x + 76" },
            { label: "C", text: "1444x + 38" },
            { label: "D", text: "2888x + 38" }
        ],
        jawaban: "B",
        pembahasan: "f(x) = 1444x^2 + 76x + 1, maka f'(x) = 2888x + 76"
    },
    {
        id: 39,
        soal: "Tentukan turunan dari f(x) = cos(39x)",
        options: [
            { label: "A", text: "-39 sin(39x)" },
            { label: "B", text: "-39 cos(39x)" },
            { label: "C", text: "39 cos(39x)" },
            { label: "D", text: "39 sin(39x)" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = -39 sin(39x)"
    },
    {
        id: 40,
        soal: "Tentukan turunan dari f(x) = sin(40x)",
        options: [
            { label: "A", text: "-40 cos(40x)" },
            { label: "B", text: "40 cos(40x)" },
            { label: "C", text: "40 sin(40x)" },
            { label: "D", text: "-40 sin(40x)" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 40 cos(40x)"
    },
    {
        id: 41,
        soal: "Tentukan turunan dari f(x) = 41x^2 + 3x - 5",
        options: [
            { label: "A", text: "41x + 3" },
            { label: "B", text: "82x + 3" },
            { label: "C", text: "82x - 5" },
            { label: "D", text: "82x" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 82x + 3"
    },
    {
        id: 42,
        soal: "Jika f(x) = (42x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "84x + 1" },
            { label: "B", text: "1764x + 42" },
            { label: "C", text: "3528x + 42" },
            { label: "D", text: "3528x + 84" }
        ],
        jawaban: "D",
        pembahasan: "f(x) = 1764x^2 + 84x + 1, maka f'(x) = 3528x + 84"
    },
    {
        id: 43,
        soal: "Tentukan turunan dari f(x) = cos(43x)",
        options: [
            { label: "A", text: "-43 cos(43x)" },
            { label: "B", text: "43 cos(43x)" },
            { label: "C", text: "43 sin(43x)" },
            { label: "D", text: "-43 sin(43x)" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = -43 sin(43x)"
    },
    {
        id: 44,
        soal: "Tentukan turunan dari f(x) = sin(44x)",
        options: [
            { label: "A", text: "-44 cos(44x)" },
            { label: "B", text: "44 cos(44x)" },
            { label: "C", text: "44 sin(44x)" },
            { label: "D", text: "-44 sin(44x)" }
        ],
        jawaban: "B",
        pembahasan: "f'(x) = 44 cos(44x)"
    },
    {
        id: 45,
        soal: "Tentukan turunan dari f(x) = 45x^2 + 3x - 5",
        options: [
            { label: "A", text: "90x + 3" },
            { label: "B", text: "90x" },
            { label: "C", text: "90x - 5" },
            { label: "D", text: "45x + 3" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 90x + 3"
    },
    {
        id: 46,
        soal: "Jika f(x) = (46x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "92x + 1" },
            { label: "B", text: "4232x + 46" },
            { label: "C", text: "2116x + 46" },
            { label: "D", text: "4232x + 92" }
        ],
        jawaban: "D",
        pembahasan: "f(x) = 2116x^2 + 92x + 1, maka f'(x) = 4232x + 92"
    },
    {
        id: 47,
        soal: "Tentukan turunan dari f(x) = cos(47x)",
        options: [
            { label: "A", text: "47 cos(47x)" },
            { label: "B", text: "47 sin(47x)" },
            { label: "C", text: "-47 sin(47x)" },
            { label: "D", text: "-47 cos(47x)" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = -47 sin(47x)"
    },
    {
        id: 48,
        soal: "Tentukan turunan dari f(x) = sin(48x)",
        options: [
            { label: "A", text: "-48 sin(48x)" },
            { label: "B", text: "-48 cos(48x)" },
            { label: "C", text: "48 cos(48x)" },
            { label: "D", text: "48 sin(48x)" }
        ],
        jawaban: "C",
        pembahasan: "f'(x) = 48 cos(48x)"
    },
    {
        id: 49,
        soal: "Tentukan turunan dari f(x) = 49x^2 + 3x - 5",
        options: [
            { label: "A", text: "98x" },
            { label: "B", text: "49x + 3" },
            { label: "C", text: "98x - 5" },
            { label: "D", text: "98x + 3" }
        ],
        jawaban: "D",
        pembahasan: "f'(x) = 98x + 3"
    },
    {
        id: 50,
        soal: "Jika f(x) = (50x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "5000x + 100" },
            { label: "B", text: "100x + 1" },
            { label: "C", text: "2500x + 50" },
            { label: "D", text: "5000x + 50" }
        ],
        jawaban: "A",
        pembahasan: "f(x) = 2500x^2 + 100x + 1, maka f'(x) = 5000x + 100"
    }
]