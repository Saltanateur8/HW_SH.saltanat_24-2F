const stdin = prompt("Введите текст для обработки ")
document.getElementById("textcontent").innerText = stdin
const textarea = document.getElementById("textcontent")
const text = textarea.textContent

function markWordsSize8(){
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 8) {
            words[i] = '<mark>' + words[i] + '</mark>';
        }
    }

    textarea.innerHTML = words.join(' ');
}

function markWordsWithVowelStart() {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        const firstChar = words[i][0];
        if (vowels.includes(firstChar.toLowerCase())) {
            words[i] = '<mark>' + words[i] + '</mark>'; // если слово начинается на гласную, добавляем HTML-тег <mark>
        }
    }

    textarea.innerHTML = words.join(' ');
}

function markWordsWithTsyasEnd() {
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        const lastChars = words[i].slice(-4);
        if (lastChars === 'ться' || lastChars === 'тся') {
            words[i] = '<mark>' + words[i] + '</mark>';
        }
    }

    textarea.innerHTML = words.join(' ');
}

const checkboxes = document.querySelectorAll('input[type="checkbox"][data-group="checkbox-group"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
        if (checkbox.checked && checkbox.id === "mark_size") {
            markWordsSize8();
        }else if(checkbox.checked && checkbox.id === "mark_vowel_start"){
            markWordsWithVowelStart()
        }else if(checkbox.checked && checkbox.id ==="mark_tsyas_end"){
            markWordsWithTsyasEnd()
        }
    });
});



