const apiURL = 'https://682400fa65ba058033988b60.mockapi.io/api/v1/comments';

const profileImages = [
  '../storage/img/kactus.jpg',
  '../storage/img/marciancat.jpg',
  '../storage/img/naivdad.jpg',
  '../storage/img/beangta.jpeg',
  '../storage/img/gallinasminecraft.jpeg',
  '../storage/img/gatocarcel.jpeg',
  '../storage/img/gatociego.jpeg',
  '../storage/img/gatoconfundido.jpeg',
  '../storage/img/gatominecraft.jpeg',
  '../storage/img/patocafe.jpeg',
  '../storage/img/patocool.jpeg',
  '../storage/img/roblox.jpeg',
  '../storage/img/snoppy.jpeg',
  '../storage/img/steve.jpeg',
];

let lastUsedAvatar = null;

function getRandomAvatar() {
  let availableAvatars = profileImages.filter(img => img !== lastUsedAvatar);
  let chosen = availableAvatars[Math.floor(Math.random() * availableAvatars.length)];
  lastUsedAvatar = chosen;
  return chosen;
}

async function postComment() {
  const content = document.getElementById('commentInput').value;
  if (!content.trim()) return alert("Escribe algo primero");

  const randomImage = getRandomAvatar()

  // Enviar el comentario
  await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      content, 
      name: "Anónimo",
      avatar: randomImage,
      createdAt: new Date().toISOString()
    })
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
    li.innerHTML = `
    <div class="comment-card">
        <img src="${c.avatar}" alt="avatar" class="avatar-img">
        <div>
          <strong>${c.name}</strong>
          <p>${c.content}</p>
        </div>
      </div>
    `;
    list.appendChild(li);
  });
}

loadComments();

// :D