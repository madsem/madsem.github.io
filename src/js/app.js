// imports
import 'alpinejs'

// Custom JS
const currentDate = new Date();
const browserLang = navigator.language;
const dateLocaleOptions = {
    dayName: {
        weekday: 'long',
    },
    monthName: {
        month: 'long',
    },
};

const dayName = getLocalizedDateName(dateLocaleOptions.dayName);
const monthName = getLocalizedDateName(dateLocaleOptions.monthName);
const currentYear = currentDate.getFullYear();

const dayElems = document.querySelectorAll('.dayName');
const monthElems = document.querySelectorAll('.monthName');
const yearElems = document.querySelectorAll('.currentYear');

function getLocalizedDateName(localeOption) {
    return currentDate.toLocaleDateString(browserLang, localeOption);
}

function createSpan(value) {
    let span = document.createElement('span');
    span.textContent = value;
    return span;
}

dayElems.forEach((elem) => {
    elem.appendChild(createSpan(dayName));
});

monthElems.forEach((elem) => {
    elem.appendChild(createSpan(monthName));
});

yearElems.forEach((elem) => {
    elem.appendChild(createSpan(currentYear));
});