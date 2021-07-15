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
    left: 0; 
    right: 0;
    top: 0;
    height: 2px;
    position: absolute;
    padding: 10px;
    display: flex;
    gap: 5px;
    z-index: 2;
  }

  #side-controls button,
  #side-controls a {
    display: inline-flex;
  }

  #time {
    position: absolute;
    margin: 10px;
    top: 0; 
    left: 0;
    z-index: 1;
  }

  #time, {
    color: rgba(255, 255, 255, 0.7);
  }

  #time,
  #metadata,
  #more {
    color: #fff;
    font-size: 1.7vh;
    font-weight: 600;
    text-shadow: 0 0 2px black;;
  }

  svg {
    width: auto;
    height: 3.5vh;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, .5));
    line-height: 0;
  }

  #bottom-controls {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    display: flex;
    align-items: end;
    overflow: hidden;
    gap: 1vh;
  }

  .action {
    cursor: pointer;
    transition: transform .3s;
  }

  .action:not([disabled]):hover,
  .action:not([disabled]):focus {
    transform: scale(1.2);
  }

  #open-heart {
    left: auto;
    right: 0;
    display: inline-flex;
  }

  #open-heart .off {
    transition: opacity .3s;
  }

  #open-heart .on {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: scale(0);
    transition: transform .3s;
  }

  #open-heart[aria-pressed="true"] .on { 
    transform: scale(1);
    opacity: 1;
  }

  #open-heart[aria-pressed="true"] .off { opacity: 0; }

  #open-heart[aria-pressed="true"] path { fill: #f00; }

  #open-heart[aria-busy="true"] { animation: pulsate .4s infinite; }

  @keyframes pulsate {
    0% { transform: scale(1) }
    100% { transform: scale(1.2) }
  }

  #open-heart[errored] {
    opacity: .5;
  }

  #metadata-details {
    display: flex;
    flex: 1 1 auto;
    align-items: end;
    overflow: hidden;
    padding: 0.7vh 0;
    gap: 0.7vh; 
  }

  #metadata,
  #more {
    line-height: 1.5em;
  }

  .is-collapsed #more {
    display: block;
  }
  
  #more {
    display: none;
    cursor: pointer;
  }

  #metadata {
    flex: 1 1 auto;
    white-space: nowrap;
  }
  
  .is-collapsed #metadata {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .is-expanded #metadata {
    white-space: normal;
  }

  #metadata a {
    color: #000;
  }

  .progress {
    height: 100%;
    animation: none;
    background-color: #fff;
  }
  
  .progressing ~ .bar .progress {
    background-color: transparent;
    width: auto;
  }

  .is-loading .progressing .progress,
  .is-paused .progressing .progress {
    animation-play-state: paused;
  }

  .progressing .progress {
    width: 0;
    animation: progress ${duration}s linear;
    animation-play-state: running;
  }

  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  .is-loading button,
  .is-loading #controls,
  .is-loading #metadata-details,
  .is-loading #open-heart {
    display: none;
  }

  .is-loading #images img {
    opacity: 0;
  }

  .is-loading .loading-visual {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2vh;
    aspect-ratio: 1;
    text-align: center;
    background: #fff;
    z-index: 1;
    margin-left: -1vh;
    animation: rotate 2s linear infinite;
    font-size: 14px;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loading-visual {
    display: none;
  }

  #goToBlock {
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 2vw;
    aspect-ratio: 9 / 16;
    height: min(var(--magic-h), var(--magic-w) * 16/9);
    position: absolute;
    top: 50%;
    z-index: 1;
    pointer-events: none;
    box-sizing: border-box;
  }

  #back, #forward {
    pointer-events: all;
    position: absolute;
    z-index: 1;
    min-width: 40px;
    height: calc(100% - 100px);
    bottom: 50px;
    padding: 0;
    font-size: 3vh;
    width: 12vh;
    font-family: system-ui, sans-serif;
    color: #fff;
  }

  #back {
    left: -1.5em;
    text-align: left;
  }

  #forward {
    right: -1.5em;
    text-align: right;
  }

  @media (max-width: 420px), screen and (orientation: portrait) {
    :host {
      --magic-h: calc(var(--mobileVh) * 97);
      --magic-w: 100vw;
    }

    ::backdrop {
      background-color: #000;
    }

    #side-controls #close {
      display: inline-flex;
    }
  }

  [hidden] {
    display: none !important;
  }
`
}

class OpenStoriesElement extends HTMLElement {
  root: ShadowRoot
  dialog: HTMLDialogElement
  button: HTMLButtonElement
  close: HTMLButtonElement
  time: HTMLElement
  metadataDetails: HTMLElement
  moreMetadata: HTMLButtonElement
  meta: HTMLElement
  openHeart: HTMLButtonElement
  themeColor: HTMLMetaElement | null = null
  link: HTMLAnchorElement
  currentIndex: number = -1
  count = 0
  timer: number | null = null
  currentBar: HTMLElement | null = null
  currentImage: HTMLElement | null = null
  images: HTMLElement[] = []
  bars: HTMLElement[] = []
  promises: Promise<unknown>[] = []
  paused: boolean = false
  open: boolean = false
  goToBinding: () => void
  items: OpenStoriesFeed["items"] = []

  constructor() {
    super()
    this.root = this.attachShadow({mode: 'open'})
    this.root.innerHTML = `
      <button type="dialog" id="trigger" part="button"><slot>View stories</slot></button>
      <dialog class="is-loading" part="dialog">
        <div class="loading-visual" part="loading-visual"></div>
        <div id="bars"></div>
        <span id="time"></span>
        <div id="goToBlock">
          <button id="back">←</button>
          <button id="forward">→</button>
        </div>
        <div id="images"></div>
        <div id="bottom-controls">
          <div id="metadata-details">
            <div id="metadata" part="metadata-content"></div>
            <button type="button" id="more" part="metadata-summary">
            [more]
            </button>
          </div>
          <div id="side-controls">
            <button id="close" class="action" type="button" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="7.35723" width="1.91942" height="10.1014" rx="0.95971" transform="rotate(-45 6 7.35723)" fill="white"/>
                <rect x="7.35724" y="14.5" width="1.91942" height="10.1014" rx="0.95971" transform="rotate(-135 7.35724 14.5)" fill="white"/>
              </svg>
            </button>
            <button id="play-pause" class="action" type="button" aria-label="Play/Pause" aria-pressed="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="play">
                <path d="M7 13.0568V6.94319C7 6.12982 7.91937 5.65669 8.58124 6.12946L12.8608 9.18627C13.4191 9.58509 13.4191 10.4149 12.8608 10.8137L8.58124 13.8705C7.91937 14.3433 7 13.8702 7 13.0568Z" fill="white"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="pause">
                <rect x="7" y="6" width="2" height="8" rx="1" fill="white"/>
                <path d="M11 7C11 6.44772 11.4477 6 12 6V6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14V14C11.4477 14 11 13.5523 11 13V7Z" fill="white"/>
              </svg>
            </button>
            <a href id="link" class="action" aria-label="Story (copy link)">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" 