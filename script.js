document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    document.body.insertBefore(canvas, document.body.firstChild);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const stars = 400; // Количество звёзд
    const starArray = [];

    class Star {
        constructor(x, y, size, speed) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speed = speed;
        }

        draw() {
            ctx.fillStyle = 'white';
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'white';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            this.x -= this.speed;
            if (this.x < 0) {
                this.x = canvas.width + this.size;
                this.y = Math.random() * canvas.height;
            }
            this.draw();
        }
    }

    function initStars() {
        for (let i = 0; i < stars; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let size = Math.random() * 3;
            let speed = Math.random() * 1 + 0.25;
            starArray.push(new Star(x, y, size, speed));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        starArray.forEach(star => {
            star.update();
        });
    }

    initStars();
    animate();

    window.onresize = function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
});
