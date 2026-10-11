const skills = ["Программирование", "Изучение новых технологий", "Ответственный подход", "Постоянное развитие"];

const projects = [
  {
    number: "01",
    title: "Учебные проекты",
    description: "Практика программирования и применение знаний на учебных заданиях.",
    tag: "Проект"
  },
  {
    number: "02",
    title: "Развитие в IT",
    description: "Изучение инструментов и технологий для будущей работы программистом.",
    tag: "Обучение"
  }
];

function App() {
  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="#home">alina<span>.</span></a>
        <a className="nav-link" href="#contact">Связаться <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> РЕЗЮМЕ · ПОРТФОЛИО</p>
          <h1>Привет,<br />я <span className="accent">Алина.</span></h1>
          <p className="intro">
            Здесь начинается моя история. Я открыта новым возможностям,
            люблю учиться и стремлюсь превращать идеи в реальные результаты.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#about">Обо мне <span>↓</span></a>
            <a className="text-link" href="#projects">Мои проекты <span>↗</span></a>
          </div>
        </div>

        <div className="visual" aria-label="Декоративная карточка">
          <img className="alina-photo" src="/alina-photo.jpeg" alt="Алина Алтымышова" />
          <div className="photo-caption"><span>ALINA ALTYMYSHOVA</span><span>18 YEARS OLD · STUDENT</span></div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>УЧИТЬСЯ</span><b>✳</b><span>СОЗДАВАТЬ</span><b>✳</b><span>РАСТИ</span><b>✳</b><span>ПРОБОВАТЬ НОВОЕ</span><b>✳</b>
      </div>

      <section className="content-section about" id="about">
        <div className="section-label">01 / ОБО МНЕ</div>
        <div className="section-body">
          <h2>Немного обо мне<br /><span>и моём пути.</span></h2>
          <p>
            Меня зовут Алина. Я человек, которому интересно узнавать новое,
            развивать свои способности и не останавливаться на достигнутом.
            Сейчас я формирую свои навыки и ищу возможности для роста.
          </p>
          <p className="editable-hint">Этот текст можно заменить на настоящую историю Алины.</p>
        </div>
      </section>

      <section className="content-section skills-section">
        <div className="section-label">02 / МОИ СИЛЬНЫЕ СТОРОНЫ</div>
        <div className="section-body">
          <h2>Что я привношу<br /><span>в команду.</span></h2>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill" key={skill}>
                <span className="skill-number">0{index + 1}</span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-label">03 / ОПЫТ И ПРОЕКТЫ</div>
        <div className="section-body">
          <h2>Маленькие шаги.<br /><span>Большие планы.</span></h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.number}</span><span className="project-tag">{project.tag}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">04 / СЛЕДУЮЩИЙ ШАГ</p>
        <h2>Давайте знакомиться<span>.</span></h2>
        <p>Буду рада новым знакомствам, идеям и возможностям.</p>
        <a className="button button-light" href="#about">Написать мне <span>↗</span></a>
        <small>Добавьте актуальный email или ссылку на GitHub, когда будете готовы.</small>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">alina<span>.</span></a>
        <span>Сделано с интересом к будущему · 2026</span>
        <a href="#home" className="back-top">Наверх ↑</a>
      </footer>
    </main>
  );
}

export default App;
