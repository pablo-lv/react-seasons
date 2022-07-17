import React from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'));

const App= () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    )
    return(
        <div>Latitude: </div>
    )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);