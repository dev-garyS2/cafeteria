function Map() {
  return (
    <section id="location" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Encuéntranos Aquí</h2>
      <div style={{ marginTop: '1rem', maxWidth: '800px', margin: 'auto' }}>
        <iframe
          title="Ubicación de Café Aromático"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478.1765659716429!2d-68.130318!3d-16.5052585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206533f840e9%3A0x1299f6163d43b53b!2sCaf%C3%A9%20Ciudad!5e0!3m2!1ses!2sbo!4v1748669152461!5m2!1ses!2sbo"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
