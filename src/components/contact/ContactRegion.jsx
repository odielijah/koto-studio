import ContactOffice from "./ContactOffice";

export default function ContactRegion({ region }) {
  return (
    <div className="contact-content max-md:!border-t-0">
      <div className="region mb-4">
        <span className="yellow-span text-[11px]">{region.region}</span>
      </div>
      {region.offices.map((office, i) => (
        <ContactOffice key={i} office={office} />
      ))}
    </div>
  );
}
