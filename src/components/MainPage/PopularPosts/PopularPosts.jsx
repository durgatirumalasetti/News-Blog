import "./PopularPosts.css";

const PopularPosts = ({ posts = [] }) => {
  return (
    <div className="popular-posts">
      <h3 className="section-title">Popular Posts</h3>

      {posts.map((post) => {
        if (!post.url) return null; // avoid broken links

        return (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="popular-item"
          >
            <img
              src={post.image || "https://via.placeholder.com/100x65?text=News"}
              alt={post.title || "news"}
              loading="lazy"
            />

            <div className="content">
              <span className="category">
                {post.source?.name || "News"}
              </span>

              <p className="title">{post.title}</p>

              {post.publishedAt && (
                <small>
                  {new Date(post.publishedAt).toDateString()}
                </small>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default PopularPosts;
