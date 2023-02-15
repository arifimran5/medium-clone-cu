const form = document.getElementById('create-post');

const createPost = async (title, body) => {
  const res = await fetch('/blog/new', {
    method: 'POST',
    body: JSON.stringify({ title, body }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (data.message == 'success') {
    window.location.pathname = '/blogs';
  }
};
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const body = e.target.body.value;

  if (!title && !body) {
    return;
  }
  createPost(title, body);
});
