import  React from 'react'

export default function Blog() {
  return (
    <section className="page blog">
      <h1>Blog</h1>
      <p>Here will be listed your latest blog posts or news.</p>

      <article className="blog-post">
        <h2>Sample Post Title</h2>
        <p>
          This is a placeholder for a blog post. You can fetch posts dynamically
          or write them directly here.
        </p>
      </article>
    </section>
  )
}
