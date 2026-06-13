const featuredTrips = [
  {
    title: "Island Escape",
    detail: "Beach stays, snorkeling days, and slow sunsets.",
    price: "From $699",
  },
  {
    title: "City Discovery",
    detail: "Guided landmarks, food stops, and local culture.",
    price: "From $449",
  },
  {
    title: "Nature Retreat",
    detail: "Scenic trails, quiet lodges, and fresh-air weekends.",
    price: "From $529",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="https://flyzatours.com">
            Flyza Tours
          </a>
          <div className="navLinks">
            <a href="#packages">Packages</a>
            <a href="#why">Why Flyza</a>
            <a href="mailto:hello@flyzatours.com">Contact</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Travel and tours made simple</p>
          <h1>Plan your next trip with Flyza Tours.</h1>
          <p className="intro">
            A clean homepage concept for flyzatours.com, built for curated
            destinations, easy inquiries, and memorable travel experiences.
          </p>
          <div className="actions">
            <a className="primaryButton" href="mailto:hello@flyzatours.com">
              Start planning
            </a>
            <a className="secondaryButton" href="#packages">
              View packages
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="sectionHeader">
          <p className="eyebrow">Featured packages</p>
          <h2>Trips for every kind of traveler.</h2>
        </div>
        <div className="tripGrid">
          {featuredTrips.map((trip) => (
            <article className="tripCard" key={trip.title}>
              <h3>{trip.title}</h3>
              <p>{trip.detail}</p>
              <span>{trip.price}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="infoBand" id="why">
        <div>
          <p className="eyebrow">Why choose us</p>
          <h2>Friendly planning, flexible tours, and clear pricing.</h2>
        </div>
        <p>
          Flyza Tours helps travelers move from inspiration to itinerary with
          simple package options, personal support, and destination experiences
          designed around comfort, timing, and budget.
        </p>
      </section>
    </main>
  );
}
