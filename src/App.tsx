import AppCarousel from "./components/AppCarousel";

function App() {
  return (
    <div className="relative bg-black text-center h-screen text-white py-10 sm:px-10 sm:py-10">
      <div className="z-50 relative flex flex-col justify-around h-full">
        <h1 className="text-3xl">feliz aniversário 💖</h1>
        <div className="relative z-50 h-[70vh] md:h-[70vh] px-4 sm:px-0">
          <AppCarousel />
        </div>
      </div>
      <div className="stars z-10"></div>
      <section className="absolute z-10 shooting-star-space">
        <span className="shooting-star"></span>
        <span className="shooting-star"></span>
        <span className="shooting-star"></span>
        <span className="shooting-star"></span>
        <span className="shooting-star"></span>
        <span className="shooting-star"></span>
        <span className="shooting-star"></span>
        <span className="shooting-star"></span>
      </section>
    </div>
  );
}

export default App;
