import {OpenStoriesFeed} from 'openstories-types'

function css(duration: number) {
  return `
  :host {
    display: inline-block;
    font-family: system-ui, sans-serif;
    --magic-h: 88vh;
    --magic-w: 88vw;
  }

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.9);
  }

  dialog button {
    border: 0;
    background: 0;
    appearance: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
  
  #side-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7vh;
  }

  #side-controls #close,
  #play,
  #pause {
    display: none;
  }
  
  dialog.is-paused #play {
    display: block;
  }

  dialog:not(.is-paused) #pause {
    display: block;
  }

  :host(open-stories.is-empty) .ring {
    opacity: 0.5;
  }

  :host(open-stories:not(.is-read):not(.is-empty)) .ring {
    border: 2px solid #08c;
    margin: 0;
  }

  .avatar {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  dialog {
    height: min(var(--magic-h), var(--magic-w) * 16/9);
    padding: 0;
    border: 0;
    aspect-ratio: 9/16;
    background: transparent;
    overflow: visible;
    max-height: var(--magic-h);
    max-width: var(--magic-w);
  }
  
  #images {
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
    background: #000;
    border-radius: 10px;
  }

  #images img {
    position: absolute;
    max-height: 100%;
    max-width: 100%;
    aspect-ratio: 9/16;
    top: 0;
    opacity: 0;
  }

  #images img.shown {
    opacity: 1;
  }

  .bar {
    border-radius: 3px;
    overflow: hidden;
    height: 100%;
    background: rgba(200, 200, 200, .2);
    z-index: 1;
    flex: auto;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    transition: all 200ms;
  }

  #bars:hover .bar {
    height: 4px;
    transform: translateY(-1px);
  }

  #bars {
    left: 0