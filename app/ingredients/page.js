export default function Ingredients() {
  const ingredients = [
    {
      name: "Turmeric",
      scientific: "Curcuma longa",
      mechanism:
        "Contains curcumin, which has anti-inflammatory and antioxidant properties.",
      benefits:
        "Promotes joint health, supports the immune system, may help in cancer prevention.",
    },
    {
      name: "Ginger",
      scientific: "Zingiber officinale",
      mechanism:
        "Contains gingerols that may help reduce oxidative stress and inflammation.",
      benefits:
        "Aids digestion, reduces nausea, has anti-inflammatory effects.",
    },
    {
      name: "Garlic",
      scientific: "Allium sativum",
      mechanism:
        "Contains allicin which has antimicrobial and anti-inflammatory properties.",
      benefits:
        "Supports heart health, may lower blood pressure, boosts the immune system.",
    },
    {
      name: "Cinnamon",
      scientific: "Cinnamomum verum",
      mechanism:
        "Contains cinnamaldehyde with anti-inflammatory and antioxidant effects.",
      benefits:
        "Helps regulate blood sugar, may aid in weight loss.",
    },
    {
      name: "Green Tea",
      scientific: "Camellia sinensis",
      mechanism:
        "Rich in polyphenols like EGCG, powerful antioxidants.",
      benefits:
        "Improves brain function, aids fat loss, supports heart health.",
    },
    {
      name: "Honey",
      scientific: "Apis mellifera",
      mechanism:
        "Contains flavonoids and phenolic compounds.",
      benefits:
        "Antioxidant, soothes sore throat, improves digestion.",
    },
    {
      name: "Coconut Oil",
      scientific: "Cocos nucifera",
      mechanism:
        "Contains medium-chain triglycerides for quick energy use.",
      benefits:
        "Supports weight management, heart health, and skin hydration.",
    },
  ];

  return (
    <main className="container">
      <h1>Ingredients</h1>
      <p className="subtitle">
        Discover the powerful natural ingredients that make Cerebra Brain effective.
      </p>

      <div className="grid">
        {ingredients.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.name}</h2>

            <p>
              <strong>Scientific Name:</strong> {item.scientific}
            </p>

            <p>
              <strong>Mechanism:</strong> {item.mechanism}
            </p>

            <p>
              <strong>Benefits:</strong> {item.benefits}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
