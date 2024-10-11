"use strict";
const firstLine = 'Experience Real';
const secondLine = 'Estate Agility';
function createLetterElement(letter, index) {
    const letterElement = document.createElement('h1');
    letterElement.classList.add('hero__bigText--letter');
    letterElement.textContent = letter;
    // Apply dynamic style with transform and delay based on the index
    letterElement.style.transform = `translateY(calc(10px + ${index}px * 20px)) rotateZ(calc(25deg + ${index} * 6deg))`;
    letterElement.style.animationDelay = `${index * 0.1}s`;
    return letterElement;
}
function addTextToLine(lineId, text) {
    const line = document.getElementById(lineId);
    if (line) {
        [...text].forEach((letter, index) => {
            const letterElement = createLetterElement(letter === ' ' ? '\u00A0' : letter, index);
            line.appendChild(letterElement);
        });
    }
}
addTextToLine('hero-big-line-1', firstLine);
addTextToLine('hero-big-line-2', secondLine);
const addAnimationToHeadings = (className) => {
    const heroContainerContent = document.querySelector(className);
    const allWordsInHeroContainer = heroContainerContent.querySelectorAll('.hero__container--word');
    const flattenedLetters = [];
    allWordsInHeroContainer.forEach((eachWord, wordIndex) => {
        const lettersInGivenWord = eachWord.querySelectorAll('.letter');
        // let currentTransformY: number;
        lettersInGivenWord.forEach((eachLetter, letterIndex) => {
            flattenedLetters.push(eachLetter);
        });
    });
    flattenedLetters.forEach((eachLetter, letterIndex) => {
        const transformationValue = 100 + (letterIndex + 1) * 10;
        eachLetter.style.transform = `translateY(${transformationValue}px) rotateZ(calc(${letterIndex} * 8deg))`;
        eachLetter.style.animationDelay = `calc(0.03s * ${letterIndex})`;
    });
};
document.addEventListener('DOMContentLoaded', () => {
    addAnimationToHeadings('.hero__container--content');
    addAnimationToHeadings('.hero__container--content-loader');
});
