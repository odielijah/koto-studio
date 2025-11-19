export default function ContactOffice({ office }) {
  return (
    <ul className="three-cols grid grid-cols-3 gap-8">
      <li className="location">
        <p className="location-name">{office.name}</p>
        {office.mapLink ? (
          <a href={office.mapLink} className="location_address">
            {office.address.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </a>
        ) : (
          <p className="location_address">
            {office.address.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        )}
      </li>

      <li className="locationColumn-people text-[18px]">
        {office.people.map((person, i) => (
          <p key={i} className="contact__person">
            <span>{person.name}</span>
            <span>{person.title}</span>
          </p>
        ))}
      </li>

      <li className="locationColumn-contact text-[18px]">
        <a
          className="hoverable emailLink block underline"
          href={`mailto:${office.contact.email}`}
        >
          {office.contact.email}
        </a>
        <a
          className="hoverable phoneLink block"
          href={`tel:${office.contact.phone}`}
        >
          {office.contact.phone}
        </a>
      </li>
    </ul>
  );
}
