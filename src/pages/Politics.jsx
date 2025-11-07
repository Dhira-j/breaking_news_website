import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Politics = () => {

const [news, setNews] = useState([]);

useEffect(()=>{
  fetchData();
},[])

const fetchData = async() =>{
 const response= await fetch("/utils/api.json");
 const data = await response.json();


const politicsNews = data.filter(
    (item)=>(item.category) === "Politics"
);

setNews(politicsNews);

};
return (
            <div>
      <h1 className="text-center mt-3 mb-3 bg-black text-light">Politics</h1>
      <div className="d-flex flex-wrap gap-3 m-auto">
        {news.map((item) => (
          <div key={item.id} className="card" style={{ width: "15rem" }}>
            <img
              src={item.imageUrl || "https://picsum.photos/400/200"}
              alt={item.title}
              className="card-img-top"
              style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.25rem",
                        borderTopRightRadius: "0.25rem",
                    }}
            />
            <div className="card-body">
              <h5 className="overflow-auto" style={{height:"50px"}}>{item.title}</h5>
              <p className="overflow-auto" style={{height:"100px"}}>{item.excerpt}</p>
            </div>
            <Link to={`/news/${item.id}`} className="btn btn-primary w-100">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Politics;