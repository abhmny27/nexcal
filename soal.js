// File: soal.js
const soalData = [
    {
        id: 1,
        soal: "Tentukan turunan dari f(x) = x^2 + 3x - 5",
        options: [
            { label: "A", text: "2x + 3" },
            { label: "B", text: "2x - 5" },
            { label: "C", text: "x^2 + 3" },
            { label: "D", text: "2x" }
        ],
        jawaban: "A",
        pembahasan: "f'(x) = 2x + 3"
    },
    {
        id: 2,
        soal: "Jika f(x) = (2x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "4x + 1" },
            { label: "B", text: "8x + 4" },
            { label: "C", text: "4x^2 + 4" },
            { label: "D", text: "8x + 2" }
        ],
        jawaban: "B",
        pembahasan: "Turunan f(x) = 4x^2 + 4x + 1 adalah f'(x) = 8x + 4. (Gunakan aturan rantai: 2(2x+1) * 2)"
    },
    {
        id: 3,
        soal: "Tentukan turunan dari f(x) = cos(3x)",
        options: [
            { label: "A", text: "3 sin(3x)" },
            { label: "B", text: "-sin(3x)" },
            { label: "C", text: "-3 sin(3x)" },
            { label: "D", text: "3 cos(3x)" }
        ],
        jawaban: "C",
        pembahasan: "Turunan cos(u) adalah -u' sin(u). Jadi, f'(x) = -3 sin(3x)."
    },
    {
        id: 4,
        soal: "Tentukan turunan dari f(x) = sin(4x)",
        options: [
            { label: "A", text: "4 cos(4x)" },
            { label: "B", text: "-4 cos(4x)" },
            { label: "C", text: "cos(4x)" },
            { label: "D", text: "4 sin(4x)" }
        ],
        jawaban: "A",
        pembahasan: "Turunan sin(u) adalah u' cos(u). Jadi, f'(x) = 4 cos(4x)."
    },
    {
        id: 5,
        soal: "Tentukan turunan dari f(x) = 5x^2 + 3x - 5",
        options: [
            { label: "A", text: "10x - 5" },
            { label: "B", text: "10x" },
            { label: "C", text: "5x + 3" },
            { label: "D", text: "10x + 3" }
        ],
        jawaban: "D",
        pembahasan: "Turunkan suku per suku: (2*5)x + 3 - 0 = 10x + 3."
    },
    {
        id: 6,
        soal: "Jika f(x) = (6x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "36x + 6" },
            { label: "B", text: "72x + 12" },
            { label: "C", text: "12x + 1" },
            { label: "D", text: "72x + 6" }
        ],
        jawaban: "B",
        pembahasan: "Jabarkan f(x) = 36x^2 + 12x + 1, maka f'(x) = 72x + 12. Atau gunakan aturan rantai."
    },
    {
        id: 7,
        soal: "Tentukan turunan dari f(x) = cos(7x)",
        options: [
            { label: "A", text: "7 sin(7x)" },
            { label: "B", text: "-7 cos(7x)" },
            { label: "C", text: "-7 sin(7x)" },
            { label: "D", text: "7 cos(7x)" }
        ],
        jawaban: "C",
        pembahasan: "Gunakan aturan f(x) = cos(ax) -> f'(x) = -a sin(ax). f'(x) = -7 sin(7x)."
    },
    {
        id: 8,
        soal: "Tentukan turunan dari f(x) = sin(8x)",
        options: [
            { label: "A", text: "8 cos(8x)" },
            { label: "B", text: "-8 cos(8x)" },
            { label: "C", text: "8 sin(8x)" },
            { label: "D", text: "-8 sin(8x)" }
        ],
        jawaban: "A",
        pembahasan: "Gunakan aturan f(x) = sin(ax) -> f'(x) = a cos(ax). f'(x) = 8 cos(8x)."
    },
    {
        id: 9,
        soal: "Tentukan turunan dari f(x) = 9x^2 + 3x - 5",
        options: [
            { label: "A", text: "9x + 3" },
            { label: "B", text: "18x - 5" },
            { label: "C", text: "18x + 3" },
            { label: "D", text: "18x" }
        ],
        jawaban: "C",
        pembahasan: "Turunkan secara langsung: (2*9)x + 3 = 18x + 3."
    },
    {
        id: 10,
        soal: "Jika f(x) = (10x + 1)^2, tentukan f'(x)",
        options: [
            { label: "A", text: "20x + 1" },
            { label: "B", text: "100x + 20" },
            { label: "C", text: "200x + 10" },
            { label: "D", text: "200x + 20" }
        ],
        jawaban: "D",
        pembahasan: "Jabarkan f(x) = 100x^2 + 20x + 1, maka f'(x) = 200x + 20."
    }
];