import ServiceCarusel from "../ServiceCarusel";
export default function ServiceCarouselSection({ services }) {
  return (
    <section className="service-section">
      <ServiceCarusel data={data?.services} />
    </section>
  );
}
