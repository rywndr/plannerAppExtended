import React, { useEffect, useState } from "react"

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "300px",
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
    cursor: "pointer",
  },
}

export default function PhotoWidget() {
  const [photoUrl, setPhotoUrl] = useState(null)

  useEffect(() => {
    fetchRandomPhoto()
  }, [])

  const fetchRandomPhoto = async () => {
    try {
      const response = await fetch("https://picsum.photos/400")
      setPhotoUrl(response.url)
    } catch (error) {
      console.error("Error fetching random photo:", error)
    }
  }

  const handleRefreshClick = () => {
    fetchRandomPhoto()
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Random Photo</h2>
      {photoUrl ? (
        <>
          <img src={photoUrl} alt="Random" style={styles.image} />
          <button style={styles.button} onClick={handleRefreshClick}>
            Refresh Photo
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
