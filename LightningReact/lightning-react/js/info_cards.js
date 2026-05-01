

    // const phrases = [
    //   ['Advantage ', 'More secure code'],
    //   ['Advantage ', 'More robust code'],
    //   ['Advantage ', 'Faster turnaround time'],
    //   ['Advantage ', 'Streamline your workflow'],
    //   ['Advantage ', 'More readable code base'],
    // ];

        const phrases = [
      ['More secure code'],
      ['More robust code'],
      ['Faster turnaround time'],
      ['Streamline your workflow'],
      ['More readable code base'],
    ];
        const placedRects = [];
    let burstTimer = null;

    
  export function startBurst() {
    console.log('START BURST');
    const stage = document.getElementById('stage');
    let cardId = 1;
      if (burstTimer) return;
     // burstBtn.textContent = 'Stop burst';
      burstTimer = setInterval(() => {
        const txt = phrases[Math.floor(Math.random() * phrases.length)];
        const ok = addCard(txt);
        if (!ok) {
          stopBurst();
        }
      }, 810);
    }

    export function stopBurst() {
      if (!burstTimer) return;
      clearInterval(burstTimer);
      burstTimer = null;
    //  burstBtn.textContent = 'Start burst';
    }

    function clearCards() {
      stopBurst();
      stage.innerHTML = '';
      placedRects.length = 0;
      cardId = 1;
     // updateStats();
    }

    export function addCard(text) {
      console.log('ADD CARD');
      const size = measureCard(text);
      const pos = findFreePosition(size.width, size.height);
      console.log('POS IS');
      console.log(pos);
      if (!pos) return false;

      const card = document.createElement('div');
      card.className = 'card';
      card.style.left = `${pos.left}px`;
      card.style.top = `${pos.top}px`;
     // card.style.setProperty('--rotation', `${randomBetween(-1, 1)}deg`);
      card.innerHTML = `<span>${text}</span>`;
          const stage = document.getElementById('stage');

      stage.appendChild(card);

      placedRects.push(pos);
     // updateStats();
      return true;
    }

        function measureCard(text) {
      const probe = document.createElement('div');
      probe.className = 'card';
      probe.style.visibility = 'hidden';
      probe.style.left = '-9999px';
      probe.style.top = '-9999px';
      probe.innerHTML = `<span>${text}</span>`;
    const stage = document.getElementById('stage');
      stage.appendChild(probe);
      const rect = probe.getBoundingClientRect();
      probe.remove();
      return { width: rect.width, height: rect.height };
    }

    function findFreePosition(width, height, options = {}) {
      const margin = 10;
      const maxAttempts = 150;
      const gap = 7;

      const stageRect = stage.getBoundingClientRect();
      const maxX = stageRect.width - width - margin;
      const maxY = stageRect.height - height - margin;

      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const left = randomBetween(margin, maxX);
        const top = randomBetween(margin, maxY);
        const candidate = {
          left,
          top,
          right: left + width,
          bottom: top + height,
        };

        if (!placedRects.some(p => intersects(candidate, p, gap))) {
          return candidate;
        }
      }

      return null;
    }

        function randomBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    function intersects(a, b, gap = 10) {
      return !(
        a.right + gap < b.left ||
        a.left > b.right + gap ||
        a.bottom + gap < b.top ||
        a.top > b.bottom + gap
      );
    }
    export function startInfoCards(){
    startBurst();
    }
    