document.getElementById('dataForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const valor = document.getElementById('valor').value;

  fetch('/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ valor })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erro ao salvar os dados');
      }
      return response.json();
  })
  .then(data => {
      document.getElementById('resultado').innerText = `Dados salvos com sucesso: ${data.valor} (ID: ${data.id})`;
      document.getElementById('dataForm').reset();
  })
  .catch(error => {
      console.error('Erro ao enviar dados:', error);
      document.getElementById('resultado').innerText = 'Erro ao salvar os dados.';
  });
});
