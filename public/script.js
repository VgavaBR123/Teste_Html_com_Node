// script.js
document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const dataInput = document.getElementById('dataInput').value;
  
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: dataInput }),
      });
  
      const result = await response.json();
      console.log(result.message);
      alert(result.message);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  });
  