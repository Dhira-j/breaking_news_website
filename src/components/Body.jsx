import { useEffect, useState } from "react";
import { Link } from "react-router-dom";








const Body = () => {

    const [news, setNews] = useState([]);
  

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("/utils/api.json");
        const value = await data.json();
        setNews(value);

    };
   

    // const Card = ({ id,title, imageUrl, excerpt, author, date }) => (
    //     <div className="card" style={{ width: "19rem" }}>
    //         <img
    //             src={imageUrl}
    //             className="card-img-top"
    //             alt={title || "News"}
    //         />
    //         <div className="card-body">
    //             <h5 className="card-title">{title || "Untitled"}</h5>
    //             {excerpt && <p className="card-text">{excerpt}</p>}
    //             <div className="mb-2 text-muted small">
    //                 {author && <span>By {author}</span>}
    //                 {author && date && <span> — </span>}
    //                 {date && <span>{date}</span>}
    //             </div>
    //             <Link to={`/news/${id}`} className="btn btn-primary w-100">Read More</Link>

    //         </div>
    //     </div>
    // );

    const Card = ({ id, title, imageUrl, excerpt }) => {
        return (
            <div key={id} className="card" style={{ width: "15rem" }}>
                <img
                    src={imageUrl}
                    alt={title || "News"}
                    className="card-img-top "
                    style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.25rem",
                        borderTopRightRadius: "0.25rem",
                    }}
                />
                <div className="card-body">
                    <h5 className="overflow-auto" style={{ height: "50px" }}>
                        {title || "Untitled"}
                    </h5>
                    <p className="overflow-auto" style={{ height: "100px" }}>
                        {excerpt || "No description available."}
                    </p>
                </div>
                <Link to={`/news/${id}`} className="btn btn-primary w-100">
                    Read More
                </Link>
            </div>
        );
    };
    const groupedNews = {};
    for (let item of news) {
        const category = item.category;
        if (!groupedNews[category]) {
            groupedNews[category] = [];
        }
        groupedNews[category].push(item);
    }


    return (
        <div>
            {Object.keys(groupedNews).map((category) => (
                <section key={category}>
                    {/* Category heading */}
                    <h1 className="text-center mt-3 mb-3 bg-black text-light">
                        {category}
                    </h1>

                    {/* All news items under that category */}
                    <div className="d-flex flex-wrap gap-3 m-auto">
                        {groupedNews[category].map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                excerpt={item.excerpt}
                                author={item.author}
                                date={item.date}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}



export default Body;