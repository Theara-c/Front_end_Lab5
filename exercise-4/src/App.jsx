import Place from "./components/Place.jsx";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {/* For each place from AVAILABLE_PLACES, create a Place component */}
            {AVAILABLE_PLACES.map((picture) => (
              <Place id={picture.id} title={picture.title} image={{ src: picture.image.src, alt: picture.image.alt }}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
