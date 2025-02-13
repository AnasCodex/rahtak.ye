import "./App.css";

const headerData = {
  header: {
    logo: {
      src: "./logo.png",
      alt: "وصف الصورة",
      width: 150,
    },
    title: "شركة راحتك للسفريات وتأجير السيارات ",
    description:
      "شركتنا توفر أسطول باصات H1 موديل 2024 بمقاعد VIP مريحة ومكيف لكل كرسي. رحلاتنا بإشراف كادر محترف مع GPS وتأمين كامل. نقدم رحلات VIP لعدن بأسعار تنافسية وخصم 50% للأطفال، مع خدمات شحن سريعة وآمنة. جرب معنا سفر مميز وآمن!",
  },
};
const socialMediaData = [
  {
    name: "facebook",
    url: "https://www.facebook.com/rahtak.ye",
    backgroundColor: "#3b5998",
    icon: "fab fa-facebook-f",
    text: "فـيـســبـــوك",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/rahtak.ye",
    backgroundColor: "#e1306c",
    icon: "fab fa-instagram",
    text: "إنـسـتــقـــرام",
  },

  {
    name: "whatsapp2",
    url: "https://wa.me/+967772401040",
    backgroundColor: "#25d366",
    icon: "fab fa-whatsapp",
    text: "واتساب",
  },
];

function App() {
  return (
    <div className="container-fluid shadow ">
      <div className="mt-3 text-center">
        <img
          src="/logo.png"
          alt={headerData.header.logo.alt}
          width={headerData.header.logo.width}
        />
      </div>
      <div style={{ textAlign: "center", color: "#fff" }} className="mt-4">
        <h3 className="fw-bold mb-3">{headerData.header.title}</h3>
        <p className="fw-bold" style={{ color: "#000", textAlign: "justify" }}>
          {headerData.header.description}
        </p>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <div
        style={{ textAlign: "center", color: "#fff" }}
        className="mt-3 d-flex align-items-center justify-content-center gap-3 mb-3"
      >
        <i className="fas fa-share fa-2x"></i>
        <h3 className="fw-bold m-0">منصات التواصل الاجتماعي </h3>
      </div>
      <div id="social-icons-section" className="mb-3">
        {socialMediaData.map((d, i) => (
          <div className="icon-container-custom" data-social={d.name} key={i}>
            <a
              href={d.url}
              style={{ backgroundColor: d.backgroundColor }}
              className="icon-custom"
            >
              {d.image ? (
                <img src={d.image} alt={d.text} />
              ) : (
                <i className={d.icon}></i>
              )}
              <span className="icon-text">{d.text}</span>
              <i className="fas fa-share-alt share-icon"></i>
            </a>
          </div>
        ))}
      </div>

      <hr style={{ margin: "1rem 0" }} />
      <div
        style={{ textAlign: "center", color: "#fff" }}
        className="mt-3 d-flex align-items-center justify-content-center gap-3 mb-3"
      >
        <i className="fas fa-map-marker-alt fa-2x"></i>
        <h3 className="fw-bold m-0">عناويننا</h3>
      </div>
      <a href="#" className="map-link">
        <i className="fas fa-map-marked mb-1"></i>
        <span>صنعاء - الستين الجنوبي - جولة المرور</span>
      </a>
      <a href="#" className="map-link">
        <i className="fas fa-map-marked mb-1"></i>
        <span>عدن - المنصورة - جوار جامع الرضا</span>
      </a>
    </div>
  );
}

export default App;
