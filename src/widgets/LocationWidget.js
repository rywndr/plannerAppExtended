import React, { useEffect, useState } from "react"

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  locationText: {
    fontSize: "18px",
  },
  googleMapsIframe: {
    width: "100%",
    height: "300px",
    marginTop: "20px",
  },
}

export default function LocationWidget() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    // Get user's current location using geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setLocation({ latitude, longitude })
      },
      error => {
        console.error("Error getting location:", error)
      }
    )
  }, [])

  const handleOpenMaps = () => {
    if (location) {
      const { latitude, longitude } = location
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
      window.open(mapsUrl, "_blank")
    }
  }

  useEffect(() => {
    const getCityAndCountry = async () => {
      if (location) {
        try {
          const response = await fetch(
            `https://geocode.xyz/${location.latitude},${location.longitude}?json=1`
          )
          const data = await response.json()
          const { city, country } = data
          setLocation(prevLocation => ({
            ...prevLocation,
            city,
            country,
          }))
        } catch (error) {
          console.error("Error getting city and country:", error)
        }
      }
    }

    if (location) {
      getCityAndCountry()
    }
  }, [location])

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Location</h2>
      {location ? (
        <>
          <p style={styles.locationText}>
            Latitude: {location.latitude.toFixed(4)}, Longitude:{" "}
            {location.longitude.toFixed(4)}
          </p>
          {location.city && location.country ? (
            <p style={styles.locationText}>
              Location: {location.city}, {location.country}
            </p>
          ) : (
            <p style={styles.locationText}>Fetching location...</p>
          )}
          <p style={styles.locationText}>
            <button onClick={handleOpenMaps}>Open in Google Maps</button>
          </p>
          <iframe
            style={styles.googleMapsIframe}
            title="Google Maps"
            src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&output=embed`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <p style={styles.locationText}>Loading...</p>
      )}
    </div>
  )
}
