import Link from "next/link";
import "./global.css";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Welcome to Cerebra Brain</h1>
        <p>Your ultimate solution for enhanced focus and mental clarity.</p>
      </header>

      <section id="overview">
        <h2>Overview</h2>
        <p>
          Cerebra Brain is a unique cognitive supplement designed to boost brain
          health and improve your cognitive functions. With a blend of natural
          ingredients, it promises to enhance focus, memory, and overall mental
          performance.
        </p>
      </section>

      <section id="key-benefits">
        <h2>Key Benefits</h2>
        <ul>
          <li>Improves focus and concentration</li>
          <li>Increases memory retention</li>
          <li>Supports cognitive health</li>
          <li>Enhances mood and motivation</li>
        </ul>
      </section>

      <section id="ingredients-summary">
        <h2>Ingredients Summary</h2>
        <p>
          Cerebra Brain is formulated with a powerful blend of:
          <br />- Ginkgo Biloba
          <br />- Bacopa Monnieri
          <br />- Rhodiola Rosea
          <br />- Omega-3 Fatty Acids
          <br />
          These ingredients are known for their cognitive enhancing properties
          and overall health benefits.
        </p>
      </section>

      <section id="usage-instructions">
        <h2>Usage Instructions</h2>
        <p>
          Take two capsules daily with a meal. For best results, use consistently
          and combine with a healthy diet and lifestyle.
        </p>
      </section>

      <section id="calls-to-action">
        <h2>Ready to Boost Your Brain Power?</h2>

        <Link href="/order">
          <button>Order Now</button>
        </Link>

        <Link href="/learn-more">
          <button>Learn More</button>
        </Link>
      </section>

      <footer>
        <p>&copy; 2026 Cerebra Brain. All rights reserved.</p>
      </footer>
    </main>
  );
}
