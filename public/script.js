document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const valor = document.getElementById('valor').value;

  fetch('/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ valor }),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Dados salvos com sucesso:', data);
  })
  .catch((error) => {
      console.error('Erro ao salvar dados:', error);
  });
});
