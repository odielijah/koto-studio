export default function ContactAdditional({ sections }) {
    return (
      <div className="contact-additional flex flex-wrap gt-th">
        {sections.map((section, i) => (
          <div key={i} className="contact-wrapper mb-10">
            <h2 className="text-[32px] !mb-4">{section.title}</h2>
            <div className="contact-content">
              <ul className={`three-cols ${section.people.length > 1 ? "grid grid-cols-3 gap-8" : "grid grid-cols-1"}`}>
                {section.people.map((person, j) => (
                  <li key={j}>
                    <span className="block">{person.name}</span>
                    <span className="block">{person.title}</span>
                    <a className="hoverable custom-underline" href={`mailto:${person.email}`}>
                      {person.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
  