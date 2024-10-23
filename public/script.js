document.addEventListener('DOMContentLoaded', function() {
    function fetchData() {
        fetch('/api/dados')
            .then(response => response.json())
            .then(data => {
                const dadosDiv = document.getElementById('dados');
                dadosDiv.textContent = `Valor recebido: ${data.valor}`;
            })
            .catch(err => console.error('Erro ao buscar dados:', err));
    }

    setInterval(fetchData, 5000); // Atualiza os dados a cada 5 segundos
});
