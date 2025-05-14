const apiURL = 'https://682400fa65ba058033988b60.mockapi.io/api/v1/comments';

async function postComment() {
  const content = document.getElementById('commentInput').value;
  if (!content.trim()) return alert("Escribe algo primero");

  // Enviar el comentario
  await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, createdAt: new Date().toISOString() })
  });

  document.getElementById('commentInput').value = '';
  loadComments(); // Volver a cargar comentarios
}

async function loadComments() {
  const res = await fetch(apiURL);
  const comments = await res.json();

  const list = document.getElementById('commentList');
  list.innerHTML = '';
  comments.reverse().forEach(c => {
    const li = document.createElement('li');
    li.textContent = c.content;
    list.appendChild(li);
  });
}

loadComments(); // Cargar al iniciar
