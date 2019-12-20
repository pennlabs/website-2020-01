// Most of these styles are from github.com/TryGhost/Casper,
// licensed under the MIT License.
export const postStyle = `
<style>
  .post-full-content h1,
  .post-full-content h2,
  .post-full-content h3,
  .post-full-content h4,
  .post-full-content h5,
  .post-full-content h6, 
  .post-full-content ul, 
  .post-full-content ol {
    all: revert
  }
</style>
<style>
.kg-bookmark-card {
  width: 100%;
  background: var(--white);
}

.kg-card + .kg-bookmark-card {
  margin-top: 0;
}

.post-full-content .kg-bookmark-container {
  display: flex;
  min-height: 148px;
  color: var(--darkgrey);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: none;
  border-radius: 3px;
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.09);
}

.post-full-content .kg-bookmark-container:hover {
  color: var(--darkgrey);
  text-decoration: none;
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.09);
}

.kg-bookmark-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
}

.kg-bookmark-title {
  color: color(var(--midgrey) l(-30%));
  font-size: 1rem;
  line-height: 1em;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
}

.post-full-content .kg-bookmark-container:hover .kg-bookmark-title {
  color: var(--blue);
}

.kg-bookmark-description {
  display: -webkit-box;
  overflow-y: hidden;
  margin-top: 12px;
  max-height: 48px;
  color: color(var(--midgrey) l(-10%));
  font-size: 1rem;
  line-height: 1em;
  font-weight: 400;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.kg-bookmark-thumbnail {
  max-width: 33%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.kg-bookmark-thumbnail img {
  width: 100%;
  border-radius: 0 3px 3px 0;

  object-fit: cover;
}

.kg-bookmark-metadata {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 14px;
  color: color(var(--midgrey) l(-10%));
  font-size: 1rem;
  font-weight: 400;
}

.post-full-content .kg-bookmark-icon {
  margin-right: 8px;
  width: 22px;
  height: 22px;
}

.kg-bookmark-author {
  line-height: 1.5em;
}

.kg-bookmark-author:after {
  content: "•";
  margin: 0 6px;
}

.kg-bookmark-publisher {
  overflow: hidden;
  max-width: 240px;
  line-height: 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 800px) {
  .post-full-content figure {
      margin: 0.2em 0 1.3em;
  }

  .post-full-content h1 + figure,
  .post-full-content h2 + figure,
  .post-full-content h3 + figure,
  .post-full-content h4 + figure {
      margin-top: 0.9em;
  }
}

@media (max-width: 500px) {
  .post-full-content .kg-width-wide,
  .post-full-content .kg-width-full {
      margin-right: -5vw;
      margin-left: -5vw;
  }

  .post-full-content figcaption {
      margin-bottom: 0.4em;
  }

  .post-full-content .kg-bookmark-container {
      flex-direction: column;
  }

  .kg-bookmark-title,
  .kg-bookmark-description,
  .kg-bookmark-metadata {
      font-size: 1rem;
      line-height: 1.5em;
  }

  .post-full-content .kg-bookmark-icon {
      width: 18px;
      height: 18px;
  }

  .kg-bookmark-thumbnail {
      order: 1;
      min-height: 160px;
      width: 100%;
  }

  .kg-bookmark-thumbnail img {
      border-radius: 3px 3px 0 0;
  }

  .kg-bookmark-content {
      order: 2;
  }
}

.kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide {
  margin: -2.25em 0 3em;
}

.post-full-content figcaption {
  margin: 1.0em 0 0;
  color: color(var(--midgrey) l(-10%));
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 75%;
  line-height: 1.5em;
  text-align: center;;
}
.post-full-content .kg-image {
  max-width: 100%;
}

/* Preventing full-width image overlap with post image.  */
.post-full-image + .post-full-content .kg-content *:first-child .kg-image {
  width: 100%;
}

.post-full-content .kg-width-wide .kg-image {
  max-width: 1040px;
}

.post-full-content .kg-width-full .kg-image {
  max-width: 100vw;
}

.post-full-content figure {
  margin: 0.8em 0 2.3em;
}

@media (max-width: 1040px) {
  .post-full-content .kg-width-full .kg-image {
      width: 100vw;
  }
}

figure.kg-image-card {
  align-self: center;
}

.post-full-content figure img {
  margin: 0;
}

.kg-width-full figcaption {
  padding: 0 1.5em;
}

.post-content {
  display: flex;
  flex-direction: column;
  // align-items: center;
}

</style>
`
