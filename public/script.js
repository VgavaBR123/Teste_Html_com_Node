document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const messageContent = document.getElementById('messageInput').value;
  
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: messageContent })
      });
  
      const result = await response.json();
      document.getElementById('responseMessage').innerText = result.message;
  
      // Limpar o campo de entrada
      document.getElementById('messageInput').value = '';
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      document.getElementById('responseMessage').innerText = 'Erro ao salvar a mensagem.';
    }
  });
  