import "./styles.css";

type ArticleProps = {
  imageUrl: string;
  date: string;
  title: string;
};

const Article = ({ imageUrl, date, title }: ArticleProps) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="AI blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
