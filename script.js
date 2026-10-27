
const textInput = document.getElementById("textInput");
const characters = document.getElementById("characters");
const charactersNoSpaces = document.getElementById("charactersNoSpaces");
const words = document.getElementById("words");
const sentences = document.getElementById("sentences");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");

function updateCounts() {
    const text = textInput.value;

    // Count characters, including spaces and line breaks.
    characters.textContent = Array.from(text).length;

    // Count characters after removing all whitespace.
    charactersNoSpaces.textContent = Array.from(
        text.replace(/\s/g, "")
    ).length;

    // Trim the text so extra spaces do not create extra words.
    const trimmedText = text.trim();
    const wordList = trimmedText
        ? trimmedText.split(/\s+/)
        : [];

    words.textContent = wordList.length;

    // Count groups of text ending in ., ! or ?
    const sentenceList = trimmedText.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
    sentences.textContent = sentenceList
        .filter(sentence => sentence.trim().length > 0)
        .length;

    status.textContent = text.length === 0
        ? "Ready to count"
        : "Counts updated live";
}

textInput.addEventListener("input", updateCounts);

clearBtn.addEventListener("click", () => {
    textInput.value = "";
    updateCounts();
    textInput.focus();
});

updateCounts();
