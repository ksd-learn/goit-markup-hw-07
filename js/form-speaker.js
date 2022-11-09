(() => {
    document
    .querySelector('.js-speaker-form')
    .addEventListener('submit', e => {
        e.preventDefault();
        new FormData(e.currentTarget).forEach((value, name) =>
            console.log(`Форма ${name}: ${value}`)
        );
    });
    document
    .querySelector('.js-speaker-join')
    .addEventListener('submit', e => {
        e.preventDefault();
        new FormData(e.currentTarget).forEach((value, name) =>
            console.log(`Рассылка ${name}: ${value}`)
        );
    });
})();