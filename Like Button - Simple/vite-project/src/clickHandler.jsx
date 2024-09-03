

let liked = false;

function handleClick(event) {
  liked = !liked; // Toggle the liked state on each click

  const button = document.getElementById('btn');

  // Update button class based on liked state
  if (liked) {
    button.classList.add('liked'); // Add 'liked' class for styling when liked
    button.innerText = "Liked!"
  } else {
    button.classList.remove('liked'); // Remove 'liked' class for default styling
    button.innerText = "Like"
  }
}

export default handleClick;