const viewport = document.querySelector('.viewport');
const content = document.querySelector('.scrollable-content');

const sb = new ScrollBooster({
  viewport,
  content,
  bounce: true,
  textSelection: false,
  emulateScroll: true,
  onUpdate: (state) => {
    // state contains useful metrics: position, dragOffset, isDragging, isMoving, borderCollision
    // you can control scroll rendering manually without 'scrollMethod' option:
    content.style.transform = `translate(
      ${-state.position.x}px,
      ${-state.position.y}px
    )`;
  },
  shouldScroll: (state, event) => {
    // disable scroll if clicked on button
    const isButton = event.target.nodeName.toLowerCase() === 'button';
    return !isButton;
  },
  onClick: (state, event) => {
    // prevent default link event
    const isLink = event.target.nodeName.toLowerCase() === 'link';
    if (isLink) {
      event.preventDefault();
    }
  }
});

// methods usage examples:
sb.updateMetrics();
sb.scrollTo({ x: 100, y: 100 });
sb.updateOptions({ emulateScroll: false });
sb.destroy();