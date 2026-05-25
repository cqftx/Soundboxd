import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching albums:", err);
        setLoading(false);
      });
  }, []);

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="loading">Loading albums...</h2>;
  }

  return (
    <div className="container">
      <h1 className="title">Soundboxd</h1>

      <input
        type="text"
        placeholder="Search albums..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="grid">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="card">
            <img
              src={album.coverUrl}
              alt={album.title}
              className="cover"
            />

            <h3 className="album-title">{album.title}</h3>

            <p className="year">{album.year}</p>

            {album.spotifyUrl && (
              <a
                href={album.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="spotify"
              >
                Open on Spotify
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;