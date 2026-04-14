import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <header className="hero">
        <h1>Welcome to Cerebra Brain</h1>
        <p className="subtitle">
          Your ultimate solution for enhanced focus and mental clarity.
        </p>

        <div className="cta-buttons">
          <Link href="/order" className="btn primary">
            Order Now
          </Link>

          <Link href="/learn-more" className="btn secondary">
            Learn More
          </Link>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="card">
        <h2>Overview</h2>
        <p>
          Cerebra Brain is a unique cognitive supplement designed to boost brain
          health and improve your cognitive functions. With a blend of natural
          ingredients, it promises to enhance focus, memory, and overall mental
          performance.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="card">
        <h2>Key Benefits</h2>
        <ul>
          <li>Improves focus and concentration</li>
          <li>Increases memory retention</li>
          <li>Supports cognitive health</li>
          <li>Enhances mood and motivation</li>
        </ul>
      </section>

      {/* INGREDIENTS */}
      <section className="card">
        <h2>Ingredients Summary</h2>
        <ul>
          <li>Ginkgo Biloba</li>
          <li>Bacopa Monnieri</li>
          <li>Rhodiola Rosea</li>
          <li>Omega-3 Fatty Acids</li>
        </ul>
        <p className="note">
          These ingredients are known for their cognitive enhancing properties
          and overall health benefits.
        </p>
      </section>

      {/* USAGE */}
      <section className="card">
        <h2>Usage Instructions</h2>
        <p>
          Take two capsules daily with a meal. For best results, use consistently
          and combine with a healthy diet and lifestyle.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2026 Cerebra Brain. All rights reserved.</p>
      </footer>
    </main>
  );
}
