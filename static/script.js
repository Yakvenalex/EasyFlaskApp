document.addEventListener('DOMContentLoaded', (event) => {
        const container = document.querySelector('.container');
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);

        const btn = document.querySelector('.btn');
        btn.addEventListener('mouseover', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });