function StatCard({ title, value, description, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-card-info">
        <h3>{title}</h3>
        <h2>{value}</h2>
        <p>{description}</p>
      </div>

      <div className="stat-card-icon">
        {icon}
      </div>
    </div>
  );
}

export default StatCard;
