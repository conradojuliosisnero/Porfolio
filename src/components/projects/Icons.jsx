export default function Icon({ icons }) {
  const iconMap = {
    html: "HTML",
    css: "CSS",
    sass: "SASS",
    js: "JavaScript",
    react: "React",
    Api: "API",
    redux: "REDUX",
    python: "Python",
    Nextjs: "Next.js",
    php: "PHP",
    sql: "SQL",
  };
  return (
    <div className="card__project__stack">
      <div className="stack__icon">
        {Object.keys(iconMap).map(
          (key) =>
            icons[key] && <img key={key} src={icons[key]} alt={iconMap[key]} />
        )}
      </div>
    </div>
  );
}
