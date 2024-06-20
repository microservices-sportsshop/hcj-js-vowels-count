document.addEventListener("DOMContentLoaded", () => {
    const btnCheck = document.querySelector(".btn");
    const btnReset = document.querySelector(".reset");
    const result = document.querySelector(".result");

    const isPalindrome = (str) => {
        const len = str.length;
        const start = str.substring(0, Math.floor(len / 2)).toLowerCase();
        const end = str.substring(len - Math.floor(len / 2)).toLowerCase();
        const reverseEnd = [...end].reverse().join("");
        return start === reverseEnd;
    };

    const checkPalindrome = () => {
        const word = document.querySelector(".input-text").value.trim();

        if (word === "") {
            result.innerHTML = "Please enter a word.";
            return;
        }

        result.innerHTML = `${word.toUpperCase()} is ${isPalindrome(word) ? '' : 'NOT '}a palindrome`;
    };

    const resetForm = () => {
        document.querySelector(".input-text").value = "";
        result.innerHTML = "Enter a word to verify whether it is a Palindrome OR not";
    };

    btnCheck.addEventListener("click", checkPalindrome);
    btnReset.addEventListener("click", resetForm);
});
