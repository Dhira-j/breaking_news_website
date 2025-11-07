// src/pages/NewsDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch("/utils/api.json");
      const data = await res.json();
      const found = Array.isArray(data) ? data.find((n) => n.id === id) : null;
      setNewsItem(found);
    };
    fetchItem();
  }, [id]);

  if (!newsItem) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-outline-secondary mb-3">← Back</Link>
      <h1>{newsItem.title}</h1>
      <p className="text-muted">
        By {newsItem.author} — {newsItem.date}
      </p>
      <img src={newsItem.imageUrl} alt={newsItem.title} className="img-fluid mb-3" />
      <p>{newsItem.content || newsItem.excerpt}</p>
    </div>
  );
};

export default NewsDetail;
