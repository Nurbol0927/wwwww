document.addEventListener('DOMContentLoaded', () => {
    const clickableSquare = document.getElementById('clickableSquare');
    const imageContainer = document.getElementById('imageContainer');

    clickableSquare.addEventListener('click', () => {
        clickableSquare.style.display = 'none'; // Скрываем квадрат
        imageContainer.classList.add('visible'); // Показываем контейнер с изображением
    });
});