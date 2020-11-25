# `<open-stories>`

An [OpenStoriesFeed](https://github.com/dddddddddzzzz/OpenStories) viewer. See it in action on [muan.co](https://muan.co).

## WIP

Things yet to be supported: 

- `feed._open_stories.preview`
- `feed.items[]._open_stories.preview`
- `feed.items[]._open_stories.duration_in_seconds`
- `feed.items[]._open_stories.content_warning`
- `feed.items[]._open_stories.mime_type`: [`video/*`](https://github.com/dddddddddzzzz/OpenStories#video-story)

## Usage

```html
<!-- Include `OpenStoriesElement` -->
<script src="https://unpkg.com/open-stories-element@0.0.16" type="module" defer></script>

<!-- Render `<open-stories>` -->
<open-stories src="./feed.json"></open-stories>
```

This requires native [`<dialog>`](https://caniuse.com/dialog) and [Shadow DOM](https://caniuse.com/shadowdomv1) support. No polyfills in