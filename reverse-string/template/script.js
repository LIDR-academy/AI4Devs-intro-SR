document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('inputText');
    const btn = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    btn.addEventListener('click', function() {
        const text = input.value.trim();
        if (!text) {
            result.textContent = 'Por favor, ingresa un texto.';
            result.className = 'alert alert-warning';
            result.classList.remove('d-none');
            return;
        }
        const reversed = text.split('').reverse().join('');
        result.textContent = reversed;
        result.className = 'alert alert-success';
        result.classList.remove('d-none');
    });
});