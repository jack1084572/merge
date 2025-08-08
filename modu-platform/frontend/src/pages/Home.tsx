import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  summary: string;
}

export const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://laughing-zebra-r4wrx6x9rqjpcpjg5-8000.app.github.dev/posts')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setError(null);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError('无法加载文章');
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">我的博客</h1>
      {error && <p className="text-red-500">{error}</p>}
      {posts.map(post => (
        <div key={post.id} className="mb-4 border-b pb-2">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  );
};
