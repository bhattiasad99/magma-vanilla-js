const firstLine: string = 'Experience Real';
const secondLine: string = 'Estate Agility';

function createLetterElement(letter: string, index: number): HTMLElement {
    const letterElement: HTMLElement = document.createElement('h1');
    letterElement.classList.add('hero__bigText--letter');
    letterElement.textContent = letter;

    // Apply dynamic style with transform and delay based on the index
    letterElement.style.transform = `translateY(calc(10px + ${index}px * 20px)) rotateZ(calc(25deg + ${index} * 6deg))`;
    letterElement.style.animationDelay = `${index * 0.1}s`;

    return letterElement;
}

function addTextToLine(lineId: string, text: string): void {
    const line: HTMLElement | null = document.getElementById(lineId);
    if (line) {
        [...text].forEach((letter, index) => {
            const letterElement: HTMLElement = createLetterElement(letter === ' ' ? '\u00A0' : letter, index);
            line.appendChild(letterElement);
        });
    }
}

addTextToLine('hero-big-line-1', firstLine);
addTextToLine('hero-big-line-2', secondLine);

const addAnimationToHeadings = (className: string) => {
    const heroContainerContent = document.querySelector(className) as HTMLElement;

    const allWordsInHeroContainer = heroContainerContent.querySelectorAll('.hero__container--word') as NodeListOf<HTMLElement>;

    const flattenedLetters: HTMLElement[] = [];

    allWordsInHeroContainer.forEach((eachWord, wordIndex) => {
        const lettersInGivenWord = eachWord.querySelectorAll('.letter') as NodeListOf<HTMLElement>;
        // let currentTransformY: number;

        lettersInGivenWord.forEach((eachLetter, letterIndex) => {
            flattenedLetters.push(eachLetter);
        })
    })

    flattenedLetters.forEach((eachLetter, letterIndex) => {
        const transformationValue = 100 + (letterIndex + 1) * 10
        eachLetter.style.transform = `translateY(${transformationValue}px) rotateZ(calc(${letterIndex} * 8deg))`

        eachLetter.style.animationDelay = `calc(0.03s * ${letterIndex})`
    })
}

document.addEventListener('DOMContentLoaded', () => {
    addAnimationToHeadings('.hero__container--content');
    addAnimationToHeadings('.hero__container--content-loader');
})
