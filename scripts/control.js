document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const titleText = container.getAttribute('data-title');
        const overlay = container.querySelector('.title-overlay');
        
        overlay.textContent = titleText;
    });
});