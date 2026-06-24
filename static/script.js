document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');
    const resetBtn = document.getElementById('reset-btn');

    // Пути к твоим будущим 6 картинкам
    const cardImages = [
        '/static/images/pic1.webp',
        '/static/images/pic2.jpg',
        '/static/images/pic3.webp',
        '/static/images/pic4.webp',
        '/static/images/pic5.webp',
        '/static/images/pic6.png'
    ];

    function initGame() {
        container.innerHTML = ''; // Очищаем поле

        // Получаем случайные неповторяющиеся числа с бэкенда
        fetch('/get_numbers')
            .then(response => response.json())
            .then(numbers => {
                numbers.forEach((num, index) => {
                    // Создаем обертку карточки
                    const card = document.createElement('div');
                    card.className = 'card-container';

                    // Создаем внутренний блок для 3D эффекта
                    const inner = document.createElement('div');
                    inner.className = 'card-inner';

                    // Лицевая сторона (Картинка-заглушка)
                    const front = document.createElement('div');
                    front.className = 'card-front';
                    // Когда положишь картинки в папку, раскомментируй строку ниже:
                    front.style.backgroundImage = `url('${cardImages[index]}')`;

                    // Обратная сторона (Только число)
                    const back = document.createElement('div');
                    back.className = 'card-back';
                    back.innerHTML = `<span>${num}</span>`;

                    // Собираем карточку воедино
                    inner.appendChild(front);
                    inner.appendChild(back);
                    card.appendChild(inner);

                    // Логика переворота по клику (работает и на тач-экранах)
                    card.addEventListener('click', () => {
                        card.classList.toggle('flipped');
                    });

                    container.appendChild(card);
                });
            });
    }



    // Запуск при старте страницы
    initGame();
});