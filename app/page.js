// app/page.js

const IMAGES = {
  bee:       '/images/bee.png',
  chart:     '/images/chart.png',
  gears:     '/images/gears.png',
  book:      '/images/book.png',
  handshake: '/images/handshake.png',
  crea:      '/images/crea.png',
  cedex:     '/images/cedex.png',
  ort:       '/images/ort.png',
  piggy:     '/images/piggy.png',
  topsection:'/images/topsection.png',
};

export default function Page() {
  return (
    <main className="text-white">
      {/* Barra superior */}
      <div className="wrap container-landing d-flex align-items-center gap-2 py-3">
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={IMAGES.bee} alt="Buzzcon" width={50} height={50} />
          <span className="fw-bold fs-2" style={{ marginLeft: 8 }}>Buzzcon</span>
        </a>
      </div>

      {/* BLOQUE SUPERIOR */}
      <section className="wrap container-landing hero-head-block">
        <div className="row align-items-center g-3">
          <div className="col-lg-7 col-md-8">
            <div className="hero-title-wrap">
              <h1 className="hero-title fw-bold">
                Que tu plata nunca deje<br />de moverse
              </h1>
            </div>
            <p className="hero-sub mt-3">
              Pone tu plata a rendir. Capacitate, invertí, crea tu propia empresa, pero<br />
              nunca dejes tu plata quieta
            </p>
          </div>

          <div className="col-lg-5 col-md-4 text-md-end text-center">
            <img
              src={IMAGES.piggy}
              alt="Ahorro"
              className="hero-piggy"
              draggable="false"
            />
          </div>
        </div>
      </section>

      {/* TEXTO CENTRAL */}
      <section className="wrap container-landing center-badge-row">
        <div className="center-badge-box">
          Mas de XXXX ya están invirtiendo
        </div>
      </section>

      {/* HERO */}
      <section className="hero-top">
        <div className="hero-top-figure">
          <img
            src={IMAGES.topsection}
            alt="Top section"
            className="hero-top-img"
            draggable="false"
          />
          {/* Botón centrado dentro de la curva */}
          <a href="register" className="hero-cta-btn">
            Ir a registrarse <span className="ms-1">→</span>
          </a>
        </div>
      </section>

      {/* INVERTÍ */}
      <section className="wrap container-landing section-pad">
        <div className="row g-4 align-items-center">
          <div className="col-md-7">
            <h3 className="sec-title">Invertí</h3>
            <p className="lead-landing">
              Buscá entre todas las propuestas e invertí en la que veas un mayor futuro.
              Contactate con el que la publicó para crear acuerdos.
            </p>
              <a href="investments" className="btn-inversiones">
                Ir a inversiones <span className="ms-1">→</span>
              </a>
          </div>
          <div className="col-md-5 text-center">
            <img src={IMAGES.chart} alt="Gráfico" className="sec-illo" />
          </div>
        </div>
      </section>

      {/* CREÁ */}
      <section className="wrap container-landing section-pad">
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center order-md-1 order-2">
            <img src={IMAGES.gears} alt="Emprender" className="sec-illo" />
          </div>
          <div className="col-md-7 order-md-2 order-1">
            <h3 className="sec-title">Creá</h3>
            <p className="lead-landing">
              Usando nuestra ayuda, creá la empresa de tus sueños. Vos buscá, y nosotros te decimos
              todo lo que necesitás para crearlo.
            </p>
            <a href="venture" className="btn-emprender">
              Ir a emprender <span className="ms-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ASESORATE */}
      <section className="wrap container-landing section-pad">
        <div className="row g-4 align-items-center">
          <div className="col-md-7">
            <h3 className="sec-title">Asesorate</h3>
            <p className="lead-landing">
              No todos saben cómo empezar. Contactate con aceleradoras especializadas
              para que te ayuden a poner en marcha tu idea.
            </p>
            <a href="mentorship" className="btn-asesoramiento">
              Ir a asesoramiento <span className="ms-1">→</span>
            </a>
          </div>
          <div className="col-md-5 text-center">
            <img src={IMAGES.book} alt="Capacitación" className="sec-illo" />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="wrap container-landing">
        <div className="partners-panel">
          <div className="text-center mb-3">
            <img src={IMAGES.handshake} alt="Alianzas" className="handshake-hero" />
          </div>
          <p className="panel-text text-center mx-auto">
            Buzzcon cuenta con colaboradores especializados en diversos campos. Juntos,
            somos capaces de brindar un servicio mas extenso y que cubra todas las necesidades.
          </p>

          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap mt-3">
            <img src={IMAGES.crea} alt="CREA" style={{height: '200px', marginBottom: '-30px', marginRight: '100px'}} />
            <img src={IMAGES.cedex} alt="CEDEX" style={{height: '100px'}} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="buzz-footer py-4 mt-5">
        <div className="wrap container-landing d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div style={{fontSize: '1.3rem', fontWeight: 'bold'}}>
            <div>Página oficial de Buzzcon (buzzcon.com.ar)</div>
            <div>Información de contacto: support@buzzcon.com.ar</div>
            <div>Teléfono: xx-xxxx-xxxx</div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="footer-divider" />
            <img src={IMAGES.ort} alt="ORT Argentina" height="80" />
          </div>
        </div>
      </footer>
    </main>
  );
}
