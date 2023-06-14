// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
      text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
      ]
    },
    {
      text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
      ]
    },
    {
      text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
      ]
    },
  ];
  
  // Task 3.1
  const topMenu = document.querySelector('#top-menu');
  
  menuLinks.forEach(link => {
    const linkEl = document.createElement('a');
    linkEl.href = link.href;
    linkEl.textContent = link.text;
    topMenu.appendChild(linkEl);
  });
  
  
  const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  mainEl.classList.add('flex-ctr');
  
  const topMenuEl = document.querySelector('#top-menu');
  topMenuEl.style.height = '100%';
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList.add('flex-around');
  
  // Task 4.0
  const subMenuEl = document.querySelector("#sub-menu");
  
  // Task 4.1
  subMenuEl.style.height = "100%";
  
  // Task 4.2
  subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');
  
  // Task 4.3
  subMenuEl.classList.add("flex-around");
  
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  const topMenuLinks = document.querySelectorAll("#top-menu a");
  let showingSubMenu = false;
  
  // Task 5.7
  document.querySelector("#top-menu").addEventListener("click", function(event) {
    event.preventDefault();
    if (!event.target.matches("a")) return;
  
    // Clear active link if clicked
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      showingSubMenu = false;
      subMenuEl.style.top = "0";
      return;
    }
  
    topMenuLinks.forEach(function(link) {
      link.classList.remove("active");
    });
    event.target.classList.add("active");
  
    const linkObject = menuLinks.find(function(link) {
      return link.text === event.target.textContent;
    });
  
    // Set showingSubMenu based on subLinks property
    showingSubMenu = linkObject.subLinks !== undefined;
  
    // Task 5.7
    if (showingSubMenu) {
      buildSubMenu(linkObject.subLinks);
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  });
  
  // Task 5.8
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = "";
  
    subLinks.forEach(function(link) {
      const subLinkEl = document.createElement("a");
      subLinkEl.href = link.href;
      subLinkEl.textContent = link.text;
      subMenuEl.appendChild(subLinkEl);
    });
  }
  
  // Task 6.1
  subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (!event.target.matches('a')) return;
  
    console.log(event.target.textContent); // Verify the handler is working
  
    // Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
  
    // Task 6.2
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  
    // Task 6.3
    mainEl.innerHTML = '<h1>' + event.target.textContent + '</h1>';
  
    // Task 6.4
    if (event.target.textContent === 'about') {
      mainEl.innerHTML = '<h1>about</h1>';
    }
  });
  