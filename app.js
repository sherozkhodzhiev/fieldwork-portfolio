// A pressed filter always matches the set of visible project cards.
const filters = document.querySelectorAll('button[aria-pressed]');
for (const button of filters) {
  button.addEventListener('click', () => {
    for (const item of filters) item.setAttribute('aria-pressed', item === button);
    for (const card of document.querySelectorAll('[data-owner]')) {
      card.hidden = button.textContent.trim() !== 'All' && card.dataset.owner !== button.textContent.trim();
    }
  });
}

const next = document.querySelector('#next');
if (next) {
  const profiles = [
    ['Sherozbek Khodzhiev', 'sheroz', 'Sherozbek holding his artwork', 'sherozkhodzhiev', document.querySelector('#bio').textContent],
    ['Nursultan Raimzhanov', 'nursultan', 'Nursultan wearing a white shirt and tie', 'theraimzhanov', 'I enjoy turning a hackathon idea into something people can try. With PERLA, that means helping shoppers explore a look and giving brands a way to learn from that interest.']
  ];
  let index = 0;
  function changeProfile(direction) {
    index = (index + direction + profiles.length) % profiles.length;
    const [name, image, alt, handle, biography] = profiles[index];
    const portrait = document.querySelector('#portrait');
    portrait.src = 'assets/' + image + '.jpg';
    portrait.alt = alt;
    document.querySelector('#name').textContent = name;
    document.querySelector('#bio').textContent = biography;
    document.querySelector('#profile').href = 'https://github.com/' + handle;
    document.querySelector('#counter').textContent = 'Profile ' + (index + 1) + ' of ' + profiles.length;
  }
  next.addEventListener('click', () => changeProfile(1));
  document.querySelector('#prev').addEventListener('click', () => changeProfile(-1));
}

// Town Hall's SlickNav menu reuses the desktop list at the mobile breakpoint.
jQuery('#nav_menu').slicknav({ prependTo: '#mobile_menu', label: 'Menu' });

if (next && window.location.hash === '#nursultan') next.click();
