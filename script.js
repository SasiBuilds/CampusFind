function postLost() {
  alert("Redirecting to Lost Item form...");
}

function postFound() {
  alert("Redirecting to Found Item form...");
}

function searchItems() {
  const query = document.getElementById("searchInput").value;
  if (query.trim() === "") {
    alert("Please enter something to search.");
  } else {
    alert("Searching for: " + query);
  }
}
