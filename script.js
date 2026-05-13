/* ══════════════════════════════════════════════════════
       📝 BLOG POST DATA — Edit everything here!
       ══════════════════════════════════════════════════════

       Each object in this array = one blog post card.

       Fields:
         tag      → label shown on the card (e.g. "Sulit Ba?", "Busog ug Saya")
         title    → post headline
         excerpt  → short preview shown on the card (2-3 sentences)
         author   → member name
         date     → publish date string
         thumb    → URL of the card thumbnail photo (replace with your actual photo!)
         hero     → URL of the full-post hero image (replace with your actual photo!)
         content  → full blog post HTML — paragraphs, photos, blockquotes, etc.
                    Use <p>, <img src="...">, <blockquote>, etc.

       To ADD a new post: copy one object, paste it inside the array, and fill it in.
       To REMOVE a post: delete the object.
    ══════════════════════════════════════════════════════ */
    const posts = [
      {
        tag: "Sulit Ba? 💸",
        title: "Sulit Ba? We tried it so your wallet doesn't have to suffer.",
        excerpt: "Mahal ba ni, o muabot pa sa akong budget? One student, one budget, a full afternoon of classes — we check if the meals near USC Talamban are truly worth every peso.",
        author: "Apale",
        date: "May 8, 2026",
        thumb: "",

        /* ══════════════════════════════════════════
           📸 HERO SLIDESHOW — SULIT BA?
           Add your photo URLs below. Each line is one slide.
           ▸ MINIMUM: 3 slides recommended.
           ▸ TO ADD a slide: copy one line and paste below it, change the URL.
           ▸ TO REMOVE a slide: delete that line entirely.
           Format: "your-photo-url-here",
        ══════════════════════════════════════════ */
        hero: [
          /* SLIDE 1 — e.g. overall cover shot of the food spots */ "",
          /* SLIDE 2 — e.g. close-up of food                    */ "",
          /* SLIDE 3 — e.g. the street / place ambiance         */ "",
          /* ▼ OPTIONAL SLIDE 4 — delete this line to remove    */ "",
        ],

        content: `
          <p>Be honest — what's the first thing that crosses your mind when lunch time hits? <em>"Mahal ba ni, o muabot pa sa akong budget?"</em> That's the question we always ask ourselves whenever we head out to eat near USC Talamban Campus.</p>

          <blockquote>"One student, one budget, and a full afternoon of classes ahead — dili pwede mag-aksaya, pero lami man sad e kaon ug mabusog gyud, diba?"</blockquote>

          <p>That's exactly what <strong>Sulit Ba?</strong> is all about — checking whether the food near campus is truly worth every peso. We're judging taste, serving size, price, and overall value. A meal is only sulit if it keeps you full <em>and</em> keeps your wallet breathing. So we went out, tried them all, and here's the honest verdict.</p>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">🍳 1. Silogan</h3>
          <p>There's something quietly iconic about a good silogan near campus. You walk in, the smell of garlic rice and tuyo hits you immediately, and suddenly it doesn't matter that it's only 11 AM — you're ready for a full meal. The sinangag is fragrant, the silog combination of your choice (longsilog, tapsilog, hotsilog — take your pick) comes in a generous portion, and the sunny side up egg is cooked just right. The best part? You walk out fed and full for under ₱60. Sulit kaayo. For students running on coffee and a 7 AM class, this is the breakfast-lunch combo that makes everything survivable.</p>

          <!--
          ════════════════════════════════════════════
          📸 SILOGAN PHOTOS  (2 photos shown side by side)
          ▸ Replace the src="" with your actual photo file or URL.
          ▸ TO ADD a 3rd photo: change class to "photo-grid grid-3"
            and copy-paste one more <div class="photo-slot"> block.
          ▸ TO REMOVE a photo: delete one <div class="photo-slot"> block.
          ════════════════════════════════════════════
          -->
          <div class="photo-grid">
            <div class="photo-slot">
              <!-- SILOGAN PHOTO 1 — e.g. the food plate / silog combo -->
              <img src="" alt="Silogan food" />
              <span class="photo-slot-label">📷 SILOGAN — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- SILOGAN PHOTO 2 — e.g. the stall / place exterior -->
              <img src="" alt="Silogan place" />
              <span class="photo-slot-label">📷 SILOGAN — Photo 2<br>Replace src="" with your photo</span>
            </div>
          </div>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">🍛 2. Mildson</h3>
          <p>Mildson is the kind of place that doesn't need to advertise itself — the line says everything. It's a staple near Talamban, and for good reason. The carinderia-style setup means you point at what you want, they scoop, and you eat. The viand choices rotate daily, and whether you get adobo, pinakbet, or their beloved ginisang gulay, the rice is unlimited (or at least generous enough that you won't leave hungry). Budget? We're talking ₱50–₱80 for a full meal with rice. Sulit? Absolutely. It's not Instagram-worthy, but your stomach doesn't care about aesthetics.</p>

          <!--
          ════════════════════════════════════════════
          📸 MILDSON PHOTOS  (2 photos shown side by side)
          ▸ Same instructions as above.
          ════════════════════════════════════════════
          -->
          <div class="photo-grid">
            <div class="photo-slot">
              <!-- MILDSON PHOTO 1 — e.g. the viand spread / food counter -->
              <img src="" alt="Mildson food" />
              <span class="photo-slot-label">📷 MILDSON — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- MILDSON PHOTO 2 — e.g. the place / your plate -->
              <img src="" alt="Mildson place" />
              <span class="photo-slot-label">📷 MILDSON — Photo 2<br>Replace src="" with your photo</span>
            </div>
          </div>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">🏢 3. Food Court</h3>
          <p>The food court near campus is basically a choose-your-own-adventure for budget eaters. Different stalls, different offerings — you've got your go-to fried dishes, your soup-and-rice combos, and a few wildcard options depending on the day. It's loud, it's busy during peak hours, and the seats disappear fast. But here's the thing: almost every stall offers a full meal for under ₱70, and variety is the name of the game. Sulit ba? Yes — especially if you time it right and avoid the 12 NN rush when the line stretches out the door.</p>

          <!--
          ════════════════════════════════════════════
          📸 FOOD COURT PHOTOS  (2 photos shown side by side)
          ════════════════════════════════════════════
          -->
          <div class="photo-grid">
            <div class="photo-slot">
              <!-- FOOD COURT PHOTO 1 — e.g. stall overview / crowd -->
              <img src="" alt="Food court" />
              <span class="photo-slot-label">📷 FOOD COURT — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- FOOD COURT PHOTO 2 — e.g. your meal / a specific stall -->
              <img src="" alt="Food court meal" />
              <span class="photo-slot-label">📷 FOOD COURT — Photo 2<br>Replace src="" with your photo</span>
            </div>
          </div>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">🍗 4. Fried Chicken sa Atbang (₱25 Chicken / Pungko-Pungko)</h3>
          <p>Twenty-five pesos. Repeat: <strong>₱25</strong>. For a piece of fried chicken. If that doesn't make you want to cry happy tears, I don't know what will. The pungko-pungko setup across from campus is the ultimate student survival spot — low plastic stools, no frills, no aircon, and absolutely no complaints from anyone eating there. The chicken is crispy, the barbecue sticks are an easy add-on, and the whole experience of eating on the side of the road while watching jeepneys pass is oddly comforting. Sulit? This is beyond sulit. This is a gift.</p>

          <!--
          ════════════════════════════════════════════
          📸 PUNGKO-PUNGKO PHOTOS  (3 photos in a row)
          ▸ This one has 3 photos. Change to "photo-grid" (no grid-3)
            and delete one block if you only want 2.
          ▸ TO ADD a 4th photo: change to "photo-grid grid-4"
            and copy one more block.
          ════════════════════════════════════════════
          -->
          <div class="photo-grid grid-3">
            <div class="photo-slot">
              <!-- PUNGKO-PUNGKO PHOTO 1 — e.g. the fried chicken up close -->
              <img src="" alt="Pungko pungko chicken" />
              <span class="photo-slot-label">📷 PUNGKO-PUNGKO — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- PUNGKO-PUNGKO PHOTO 2 — e.g. the stall setup / BBQ sticks -->
              <img src="" alt="Pungko pungko stall" />
              <span class="photo-slot-label">📷 PUNGKO-PUNGKO — Photo 2<br>Replace src="" with your photo</span>
            </div>
            <!-- ▼ OPTIONAL 3RD PHOTO — delete this block to go back to 2 photos -->
            <div class="photo-slot">
              <!-- PUNGKO-PUNGKO PHOTO 3 — e.g. the pungko setup / stools -->
              <img src="" alt="Pungko pungko vibe" />
              <span class="photo-slot-label">📷 PUNGKO-PUNGKO — Photo 3<br>Replace src="" with your photo</span>
            </div>
          </div>

          <blockquote>"₱25 chicken, plastic stool, tambay sa kanto — this is the USC Talamban fine dining experience no one talks about but everyone loves."</blockquote>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-accent);">📋 Final Verdict: Sulit Rankings</h3>
          <p><strong>🥇 Pungko-Pungko (₱25 Chicken)</strong> — Unmatched price-to-satisfaction ratio. The GOAT of budget eating near USC TC.<br>
          <strong>🥈 Silogan</strong> — Warm, filling, and consistent. Your best friend on early morning class days.<br>
          <strong>🥉 Mildson</strong> — Reliable, no-nonsense, and genuinely good home cooking. A classic for a reason.<br>
          <strong>🏅 Food Court</strong> — Great variety and value, just come before 12 NN if you want a seat.</p>

          <p>Bottom line: eating near USC Talamban doesn't have to hurt your allowance. These four spots prove that sulit and masarap can absolutely exist in the same sentence — and in the same plate. 🍽️</p>
        `
      },
      {
        tag: "Busog ug Saya 😄",
        title: "Busog ug Saya: Spots that feed your stomach AND your soul.",
        excerpt: "Good food is more than just the meal — it's the vibes, the generous servings, and the places that make you want to linger even during short lunch breaks.",
        author: "Ballesteros & Pomoy",
        date: "May 8, 2026",
        thumb: "",

        /* ══════════════════════════════════════════
           📸 HERO SLIDESHOW — BUSOG UG SAYA
           ▸ TO ADD a slide: copy one line and paste below it, change the URL.
           ▸ TO REMOVE a slide: delete that line entirely.
           Format: "your-photo-url-here",
        ══════════════════════════════════════════ */
        hero: [
          /* SLIDE 1 — e.g. SM J Mall Food Court interior / food  */ "jmall-foodcourt1.jpg",
          /* SLIDE 2 — e.g. Barangay Seoul / Korean food shot     */ "",
          /* SLIDE 3 — e.g. 5G Coffee House or Trillis ambiance   */ "pics/5g6.jpg",
          /* ▼ OPTIONAL SLIDE 4 — delete this line to remove      */ "",
        ],

        content: `
          <p><em>Written by <strong>Ballesteros</strong> &amp; <strong>Pomoy</strong></em></p>

          <p>Some meals fill your stomach. But the best ones? They fill something else entirely — the part of you that needs a breather between back-to-back classes, a moment to laugh with friends, or just a warm plate of something good after a long, draining day. That's what <strong>Busog ug Saya</strong> is all about: finding the spots near USC Talamban that don't just feed you, but actually make the whole lunch break feel worth it.</p>

          <blockquote>"Hindi lang busog ang hinahanap namin. Saya rin. Yung tipong kain ka, tapos gusto mo pa bumalik bukas." — Pomoy</blockquote>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">🛍️ 1. SM J Mall Food Court</h3>
          <p><em>— Ballesteros writes:</em> The SM J Mall Food Court is where variety meets vibes. It's air-conditioned (yehey!), it's spacious (on a monday), and it's got enough options that even the most indecisive person in your barkada (Mizzi) can finally make a decision within five minutes. Whether you're craving a full Filipino rice meal, something Japanese, or just a cold drink to survive the Cebu heat, this place has it. J Mall takes 1 multicab ride to get to from TC. It gets busog points for portion sizes that won't leave you hungry by 3 PM, and saya points for making it budget-friendly that don't make your wallet cry while still fulfilling your cravings.</p>

          <!--
          ════════════════════════════════════════════
          📸 SM J MALL FOOD COURT PHOTOS  (2 photos side by side)
          ▸ Replace src="" with your actual photo file or URL.
          ▸ TO ADD a 3rd photo: change class to "photo-grid grid-3"
            and copy-paste one more <div class="photo-slot"> block.
          ▸ TO REMOVE a photo: delete one <div class="photo-slot"> block.
          ════════════════════════════════════════════
          -->
          <div class="photo-grid">
            <div class="photo-slot">
              <!-- SM J MALL PHOTO 1 — e.g. food court interior / crowd -->
              <img src="" alt="SM J Mall Food Court" />
              <span class="photo-slot-label">📷 SM J MALL — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- SM J MALL PHOTO 2 — e.g. your meal / stall variety -->
              <img src="" alt="SM J Mall meal" />
              <span class="photo-slot-label">📷 SM J MALL — Photo 2<br>Replace src="" with your photo</span>
            </div>
          </div>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">🇰🇷 2. Barangay Seoul</h3>
          <p><em>— Pomoy writes:</em> Ehem heugh! Okay, let me be real with you — the moment I walked into Barangay Seoul, I felt something shift. Maybe it was the K-pop playing softly in the background, maybe it was the smell of bulgogi and garlic, or maybe I just really needed Korean food that day. Whatever it was, this place delivers. They make you form your own lunch meal with rice, ulam, two side dishes, and soup. The meal costs only 199 pesos making it popular for students and for people working near the area. I can hardly finish the meal with their portion sizes and if you're lucky they even add in a little extra ulam (I love their Korean chicken -Cas). For a spot near Talamban and for those going to IT to catch a ride home at the bus stop, it genuinely surprises you. Busog? Souper (pun intended). Saya? Kaayo!.</p>

          <!--
          ════════════════════════════════════════════
          📸 BARANGAY SEOUL PHOTOS  (2 photos side by side)
          ════════════════════════════════════════════
          -->
          <div class="photo-grid">
            <div class="photo-slot">
              <!-- BARANGAY SEOUL PHOTO 1 — e.g. Korean lunch meal / food -->
              <img src="" alt="Barangay Seoul food" />
              <span class="photo-slot-label">📷 BARANGAY SEOUL — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- BARANGAY SEOUL PHOTO 2 — e.g. restaurant interior / signage -->
              <img src="" alt="Barangay Seoul place" />
              <span class="photo-slot-label">📷 BARANGAY SEOUL — Photo 2<br>Replace src="" with your photo</span>
            </div>
          </div>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">☕ 3. 5G Coffee House</h3>
          <p><em>— Ballesteros writes:</em> This one's a little different, and that's exactly why it earns its spot on this list. 5G Coffee House is the kind of place you go when you need more than just food — you need a typa vibe reset. The coffee is good (and they have plenty of cat stickers all around the coffee machine), the food options are satisfying, and there's a calmness to the space compared to the other spaces near a campus area. Whether you're doing last-minute readings before class or decompressing after a brutal exam, 5G gives you the saya that no amount of stress-eating can replicate. Pairing: iced coffee + a plain croissant = aesthetically surviving the semester, one cup at a time.</p>

          <!--
          ════════════════════════════════════════════
          📸 5G COFFEE HOUSE PHOTOS  (3 photos in a row)
          ▸ 3 photos here — change to "photo-grid" (remove grid-3)
            and delete one block if you only want 2.
          ════════════════════════════════════════════
          -->
          <div class="photo-grid grid-3">
            <div class="photo-slot">
              <!-- 5G COFFEE PHOTO 1 — e.g. iced coffee / drinks -->
              <img src="pics/5g1.jpg" alt="5G Coffee drink" />
              <span class="photo-slot-label">📷 5G COFFEE — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- 5G COFFEE PHOTO 2 — e.g. food order / light meal -->
              <img src="pics/5g3.jpg" alt="5G Coffee food" />
              <span class="photo-slot-label">📷 5G COFFEE — Photo 2<br>Replace src="" with your photo</span>
            </div>
            <!-- ▼ OPTIONAL 3RD PHOTO — delete this block to go back to 2 photos -->
            <div class="photo-slot">
              <!-- 5G COFFEE PHOTO 3 — e.g. the cafe interior / ambiance -->
              <img src="pics/5g4.jpg" alt="5G Coffee house interior" />
              <span class="photo-slot-label">📷 5G COFFEE — Photo 3<br>Replace src="" with your photo</span>
            </div>
          </div>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-primary);">🍽️ 4. Trillis</h3>
          <p><em>— Pomoy writes:</em> Trillis was one of the places we went to when we were having trouble deciding where to eat. I wasn't expecting much — but then the food arrived, and suddenly I understood the hype. The portions here are generous in a way that makes you feel genuinely taken care of. They also offer unli rice for just 35 pesos making it sulit for us students. Trillis offers the kind of food that hits different during a Tuesday full after SIA class. The menu leans more on barbeque or mga sinugba, and it does it well — no gimmicks, just good cooking. My personal vote for the most "busog ug saya" spot on this list. You leave full, happy, and already planning your next visit.</p>

          <!--
          ════════════════════════════════════════════
          📸 TRILLIS PHOTOS  (2 photos side by side)
          ════════════════════════════════════════════
          -->
          <div class="photo-grid">
            <div class="photo-slot">
              <!-- TRILLIS PHOTO 1 — e.g. food plating / main dish -->
              <img src="" alt="Trillis food" />
              <span class="photo-slot-label">📷 TRILLIS — Photo 1<br>Replace src="" with your photo</span>
            </div>
            <div class="photo-slot">
              <!-- TRILLIS PHOTO 2 — e.g. restaurant exterior / place vibe -->
              <img src="" alt="Trillis place" />
              <span class="photo-slot-label">📷 TRILLIS — Photo 2<br>Replace src="" with your photo</span>
            </div>
          </div>

          <blockquote>"Trillis is the hug in food form that USC students didn't know they needed." — Pomoy</blockquote>

          <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:var(--color-accent);">✨ Our Joint Verdict</h3>
          <p>Between the two of us, we sampled, debated, and yes — overate — so you'd have a proper guide. Every spot on this list earned its place not just because the food is good, but because of how it made us feel. Busog ug saya isn't just a mood; it's a standard. And these four places near USC Talamban meet it.</p>

          <p>So the next time you're wondering where to go after class — skip the stress, follow the list, and eat well. You deserve it. 🍛😄</p>
        `
      },
      {
        tag: "Lami pa, Dali pa ⚡",
        title: "Lami pa, Dali pa: Fast, filling, and actually good.",
        excerpt: "Back-to-back afternoon classes? No problem. This post is for students with tight schedules who still want a real, satisfying lunch without the long wait.",
        author: "Hinoguin",
        date: "Coming Soon",

        /* 📸 Replace with your actual thumbnail photo URL */
        thumb: "",

        /* ══════════════════════════════════════════
           📸 HERO SLIDESHOW — LAMI PA, DALI PA
           ▸ TO ADD a slide: copy one line and paste below it, change the URL.
           ▸ TO REMOVE a slide: delete that line entirely.
        ══════════════════════════════════════════ */
        hero: [
          /* SLIDE 1 — e.g. fast food / quick serve shot     */ "",
          /* SLIDE 2 — e.g. food ready to eat / your order   */ "",
          /* SLIDE 3 — e.g. the place / stall exterior       */ "",
          /* ▼ OPTIONAL SLIDE 4 — delete this line to remove */ "",
        ],

        /* ✍️ Full blog post content */
        content: `
          <p>[ ✍️ Write the full Lami pa, Dali pa post here! Focus on waiting time, prep speed, accessibility during peak hours, and the best fast-serve spots near USC TC. ]</p>

          <!-- 📸 Add a photo of the food here:
               <img src="your-photo.jpg" alt="Food name" /> -->
        `
      },

      /* ══════════════════════════════════════════
         ➕ ADD MORE POSTS HERE
         Copy the object above and paste below this comment.
         Each member needs 3 posts total for the final output.
      ══════════════════════════════════════════ */

    ];

    /* ── Featured Banner Slideshow ── */
    (function() {
      // Collect all non-empty hero images from all posts
      const allHeroImages = posts.flatMap(p =>
        Array.isArray(p.hero) ? p.hero.filter(s => s && s.trim() !== '') : []
      );

      const banner = document.getElementById('featured-banner');
      const fallback = document.getElementById('featured-fallback');
      const dotsEl = document.getElementById('featured-dots');

      if (allHeroImages.length === 0) return; // no images yet — fallback stays visible

      // Hide fallback once real slides are ready
      fallback.style.display = 'none';

      // Build slide divs (insert before overlay which is children[1])
      allHeroImages.forEach((src, i) => {
        const div = document.createElement('div');
        div.className = 'featured-slide' + (i === 0 ? ' active' : '');
        div.style.backgroundImage = "url('" + src + "')";
        banner.insertBefore(div, banner.children[1]);
      });

      if (allHeroImages.length === 1) return;

      // Build dots
      allHeroImages.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'featured-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goFeatured(i));
        dotsEl.appendChild(dot);
      });

      let current = 0;

      function goFeatured(n) {
        const slides = banner.querySelectorAll('.featured-slide');
        const dots   = dotsEl.querySelectorAll('.featured-dot');
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = n;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
      }

      // Auto-advance every 3.5 s
      setInterval(() => goFeatured((current + 1) % allHeroImages.length), 3500);
    })();

    /* ── Card rendering ── */
    const grid = document.getElementById('cards-grid');

    posts.forEach((post, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-thumb ${post.thumb ? '' : 'no-image'}"
             style="${post.thumb ? `background-image:url('${post.thumb}')` : ''}">
          ${post.thumb
            ? `<span class="card-tag">${post.tag}</span>`
            : `<span class="placeholder-icon">🍽️</span>
               <span class="placeholder-text">Add your food photo in the posts[] array</span>`}
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${post.date}</span>
            <span class="sep">·</span>
            <span>${post.tag}</span>
          </div>
          <h3 class="card-title">${post.title}</h3>
          <p class="card-excerpt">${post.excerpt}</p>
        </div>
        <div class="card-footer">
          <div class="author-pill">
            <div class="author-avatar">${post.author[0]}</div>
            ${post.author}
          </div>
          <a href="#" class="read-more" data-idx="${i}">Read →</a>
        </div>
      `;
      grid.appendChild(card);
    });

    /* ── Modal logic ── */
    const backdrop = document.getElementById('modal-backdrop');
    const modalHero = document.getElementById('modal-hero');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalMeta = document.getElementById('modal-meta');
    const modalContent = document.getElementById('modal-content');

    let slideTimer = null;

    function buildSlideshow(heroData) {
      modalHero.innerHTML = '';
      // Normalize: hero can be a string (legacy) or an array
      const slides = Array.isArray(heroData)
        ? heroData.filter(s => s && s.trim() !== '')
        : (heroData ? [heroData] : []);

      if (slides.length === 0) {
        modalHero.innerHTML = '<div class="hero-placeholder">📸 Add hero photos in the post\'s "hero" array</div>';
        return;
      }

      // Build slide divs
      slides.forEach((src, i) => {
        const div = document.createElement('div');
        div.className = 'hero-slide' + (i === 0 ? ' active' : '');
        div.style.backgroundImage = `url('${src}')`;
        modalHero.appendChild(div);
      });

      if (slides.length === 1) return; // no controls needed for single image

      // Dots
      const dotsEl = document.createElement('div');
      dotsEl.className = 'hero-dots';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsEl.appendChild(dot);
      });
      modalHero.appendChild(dotsEl);

      // Arrows
      const prev = document.createElement('button');
      prev.className = 'hero-arrow prev'; prev.innerHTML = '‹';
      prev.addEventListener('click', () => goToSlide((currentSlide - 1 + slides.length) % slides.length));
      modalHero.appendChild(prev);

      const next = document.createElement('button');
      next.className = 'hero-arrow next'; next.innerHTML = '›';
      next.addEventListener('click', () => goToSlide((currentSlide + 1) % slides.length));
      modalHero.appendChild(next);

      let currentSlide = 0;

      function goToSlide(n) {
        const allSlides = modalHero.querySelectorAll('.hero-slide');
        const allDots = modalHero.querySelectorAll('.hero-dot');
        allSlides[currentSlide].classList.remove('active');
        allDots[currentSlide].classList.remove('active');
        currentSlide = n;
        allSlides[currentSlide].classList.add('active');
        allDots[currentSlide].classList.add('active');
        resetTimer();
      }

      function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => {
          goToSlide((currentSlide + 1) % slides.length);
        }, 4000);
      }

      resetTimer();
    }

    document.addEventListener('click', e => {
      const link = e.target.closest('[data-idx]');
      if (!link) return;
      e.preventDefault();
      const post = posts[+link.dataset.idx];

      clearInterval(slideTimer);
      buildSlideshow(post.hero);

      modalTag.textContent = post.tag;
      modalTitle.textContent = post.title;
      modalMeta.textContent = `By ${post.author} · ${post.date}`;
      modalContent.innerHTML = post.content;
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    document.getElementById('modal-close').addEventListener('click', () => {
      clearInterval(slideTimer);
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    });

    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) {
        clearInterval(slideTimer);
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });