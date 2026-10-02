---
# Leave the homepage title empty to use the site title
title:
date: 2024-06-01
type: landing

sections:
  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <style>
        .somex-hero {
          display: flex;
          min-height: 68vh;
          margin: -1.5rem -1.5rem -1.5rem -1.5rem;
          flex-wrap: wrap;
          overflow: hidden;
        }
        .somex-hero-left {
          flex: 1 1 380px;
          padding: 4rem 3rem 3rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
        }
        body.dark .somex-hero-left { background: #282a36; }
        .somex-hero-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0098a6;
          margin-bottom: 1.1rem;
        }
        .somex-hero-title {
          font-size: 2.5rem;
          line-height: 1.18;
          font-weight: 700;
          margin: 0 0 1.1rem 0;
          color: inherit;
        }
        body.dark .somex-hero-title { color: #f8f8f2; }
        .somex-hero-title em {
          font-style: italic;
          color: #1565c0;
        }
        .somex-hero-lead {
          font-size: 1rem;
          line-height: 1.75;
          color: #555;
          margin-bottom: 2rem;
          max-width: 480px;
        }
        .somex-hero-lead a { color: #1565c0; }
        body.dark .somex-hero-lead { color: #c7c9d1; }
        body.dark .somex-hero-lead a { color: #6fb3f5; }
        .somex-hero-buttons {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin-bottom: 1.6rem;
        }
        .somex-btn-dark {
          padding: 0.65rem 1.5rem;
          background: #1a2744;
          color: #fff !important;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.93rem;
          text-decoration: none !important;
          border: 2px solid #1a2744;
          transition: background 0.2s;
          display: inline-block;
        }
        .somex-btn-dark:hover { background: #243460; border-color: #243460; }
        .somex-btn-outline {
          padding: 0.65rem 1.5rem;
          background: transparent;
          color: #1a2744 !important;
          border: 2px solid #1a2744;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.93rem;
          text-decoration: none !important;
          transition: background 0.2s, color 0.2s;
          display: inline-block;
        }
        .somex-btn-outline:hover { background: #1a2744; color: #fff !important; }
        body.dark .somex-btn-outline { color: #8fd0e0 !important; border-color: #8fd0e0; }
        body.dark .somex-btn-outline:hover { background: #8fd0e0; color: #1a2744 !important; }
        .somex-hero-tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .somex-hero-tag {
          padding: 0.22rem 0.75rem;
          border: 1px solid #ccc;
          border-radius: 20px;
          font-size: 0.78rem;
          color: #666;
          background: transparent;
        }
        body.dark .somex-hero-tag { border-color: #44475a; color: #c7c9d1; }
        .somex-hero-right {
          flex: 0 0 55%;
          min-width: 300px;
          height: 68vh;
          min-height: 420px;
          max-height: 560px;
          background: #111;
          position: relative;
          overflow: hidden;
        }
        .hero-track {
          display: flex;
          width: 300%;
          height: 100%;
          transition: transform 0.7s ease-in-out;
        }
        .hero-track-slide {
          position: relative;
          flex: 0 0 calc(100% / 3);
          width: calc(100% / 3);
          height: 100%;
          background-size: cover;
          background-position: center;
        }
        .hero-cap {
          position: absolute;
          bottom: 2.15rem;
          left: 0;
          right: 0;
          padding: 0.55rem 1rem;
          background: rgba(0,0,0,0.52);
          font-size: 0.68rem;
          color: rgba(255,255,255,0.75);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          line-height: 1.4;
        }
        .hero-cap-dot { opacity: 0.4; }
        .hero-dots {
          position: absolute;
          bottom: 0.7rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 0.45rem;
          z-index: 3;
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .hero-dot.active {
          background: #00bed2;
          transform: scale(1.3);
        }
        @media (max-width: 768px) {
          .somex-hero { min-height: auto; margin: -1rem; }
          .somex-hero-left { padding: 2.5rem 1.5rem 2rem; flex: 1 1 100%; }
          .somex-hero-right { flex: 0 0 100%; height: 240px; min-height: 240px; }
          .somex-hero-title { font-size: 1.9rem; }
        }
        </style>

        <div class="somex-hero">

          <div class="somex-hero-left">
            <div class="somex-hero-label">Computational and Soft Matter Physics · University of Vienna</div>
            <h1 class="somex-hero-title">Welcome to the <em>Soft Matter e<strong>X</strong>periments</em> Lab</h1>
            <p class="somex-hero-lead">led by <a href="/author/roberto-cerbino/">Roberto Cerbino</a>.<br>
            From exploring the behavior of polymers and colloids to investigating the dynamics of biological systems, we are dedicated to unraveling the complexities of <a href="https://www.nature.com/subjects/soft-materials">Soft</a> materials.</p>
            <div class="somex-hero-buttons">
              <a href="/tour/" class="somex-btn-dark">Explore research</a>
              <a href="/people/" class="somex-btn-outline">Meet the team</a>
            </div>
            <div class="somex-hero-tags">
              <span class="somex-hero-tag">Rheology</span>
              <span class="somex-hero-tag">DDM</span>
              <span class="somex-hero-tag">Colloids</span>
              <span class="somex-hero-tag">Biophysics</span>
            </div>
          </div>

          <div class="somex-hero-right">
            <div class="hero-track" id="hero-track">
              <div class="hero-track-slide" style="background-image:url('/media/welcome1.png')"><div class="hero-cap">Jamming in cellular monolayers · Phase contrast image of a cellular monolayer of MCF10A captured at 10X</div></div>
              <div class="hero-track-slide" style="background-image:url('/media/welcome2.png')"><div class="hero-cap">ShearView rheometer · A viscoelastic sample is loaded between the rough glass slides of the rheometer.</div></div>
              <div class="hero-track-slide" style="background-image:url('/media/welcome3.png')"><div class="hero-cap">Rheo-Imaging · Rheo-microscopy measurement performed in brightfield conditions.</div></div>
            </div>
            <div class="hero-dots" id="hero-dots">
              <button class="hero-dot active" data-i="0" aria-label="Slide 1"></button>
              <button class="hero-dot" data-i="1" aria-label="Slide 2"></button>
              <button class="hero-dot" data-i="2" aria-label="Slide 3"></button>
            </div>
          </div>
          <script>
          (function(){
            var track = document.getElementById('hero-track');
            var dots = document.querySelectorAll('#hero-dots .hero-dot');
            var n = dots.length;
            var current = 0;
            var timer;
            function goTo(i){
              current = (i + n) % n;
              track.style.transform = 'translateX(-' + ((100 / n) * current) + '%)';
              dots.forEach(function(d, idx){ d.classList.toggle('active', idx === current); });
            }
            function startTimer(){
              clearInterval(timer);
              timer = setInterval(function(){ goTo(current + 1); }, 5000);
            }
            dots.forEach(function(d, idx){
              d.addEventListener('click', function(){
                goTo(idx);
                startTimer();
              });
            });
            goTo(0);
            startTimer();
          })();
          </script>

        </div>
    design:
      columns: '1'
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 3
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '2'

  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <div style="text-align:center;padding:20px 0;">
          <img src="/media/group2026.jpg" alt="Group photo"
               style="max-width:100%;height:auto;display:block;margin:0 auto;border-radius:8px;">
        </div>
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'

#  - block: portfolio
#    id: projects
#    content:
#      title: Projects
#      count: 3
#      filters:
#        folders:
#          - project
#      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
#      default_button_index: 0
#      # Filter toolbar (optional).
#      # Add or remove as many filters (`filter_button` instances) as you like.
#      # To show all items, set `tag` to "*".
#      # To filter by a specific tag, set `tag` to an existing tag name.
#      # To remove the toolbar, delete the entire `filter_button` block.
#      buttons:
#        - name: All
#          tag: '*'
#        - name: Rheology
#          tag: Rheology
#        - name: Optics
#          tag: Optics
#        - name: Microscopy
#          tag: Microscopy
#        - name: Biology
#          tag: Biology
#    design:
#      # Choose how many columns the section has. Valid values: '1' or '2'.
#      columns: '2' #valid if view:card
#      view: card #showcase
#      # For Showcase view, flip alternate rows?
#      flip_alt_rows: true
  
#  - block: markdown
#    content:
#      title:
#      subtitle:
#      text: |
#        <div style="text-align:center; margin-top:1rem;">
#          <a href="/project/" class="btn btn-primary">
#            View All Projects →
#          </a>
#        </div>
#    design:
#      columns: '1'

  - block: markdown
    id: projects
    content:
      title: Projects
      subtitle: ''
      text: |
        <style>
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
        .proj-card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          background: var(--card-bg, #fff);
          display: flex;
          flex-direction: column;
          transition: transform 0.18s, box-shadow 0.18s;
          text-decoration: none;
          color: inherit;
        }
        .proj-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.15);
          text-decoration: none;
          color: inherit;
        }
        .proj-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
        .proj-card-body {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .proj-card-title {
          font-size: 0.97rem;
          font-weight: 700;
          margin: 0 0 0.4rem 0;
          line-height: 1.35;
        }
        .proj-card-summary {
          font-size: 0.83rem;
          color: #666;
          flex: 1;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
        .proj-tag {
          font-size: 0.72rem;
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
          background: #e8f0fe;
          color: #1a56db;
          font-weight: 600;
        }
        .proj-extra { display: none; }
        .proj-extra.visible { display: contents; }
        .proj-show-more {
          margin-top: 1.5rem;
          text-align: center;
        }
        .proj-show-more button {
          padding: 0.55rem 1.6rem;
          border-radius: 6px;
          border: 2px solid #1a56db;
          background: transparent;
          color: #1a56db;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .proj-show-more button:hover {
          background: #1a56db;
          color: #fff;
        }
        </style>

        <div class="proj-grid">

          <a class="proj-card" href="/project/26-04-01-nefcoeg/">
            <img src="/project/26-04-01-nefcoeg/featured.jpg" alt="NEFCoEG" onerror="this.style.display='none'">
            <div class="proj-card-body">
              <div class="proj-card-title">Non-Equilibrium Fluctuations in Colloids under Effective Gravity (NEFCoEG)</div>
              <div class="proj-card-summary">Investigating non-equilibrium velocity fluctuations in colloidal sedimentation, from lab to microgravity conditions aboard the ISS.</div>
              <div class="proj-tags"><span class="proj-tag">Microscopy</span><span class="proj-tag">Sedimentation</span></div>
            </div>
          </a>

          <a class="proj-card" href="/project/25-11-01-mechanosynth/">
            <img src="/project/25-11-01-mechanosynth/featured.jpg" alt="MechanoSynth" onerror="this.style.display='none'">
            <div class="proj-card-body">
              <div class="proj-card-title">MechanoSynth</div>
              <div class="proj-card-summary">Decoding and engineering multiscale mechanoresponses in synthetic and biological tissues.</div>
              <div class="proj-tags"><span class="proj-tag">Rheology</span><span class="proj-tag">Biophysics</span></div>
            </div>
          </a>

          <a class="proj-card" href="/project/24-10-21-traingel/">
            <img src="/project/24-10-21-traingel/featured.jpg" alt="TRAINGEL" onerror="this.style.display='none'">
            <div class="proj-card-body">
              <div class="proj-card-title">Transforming Gels Through Training (TRAINGEL)</div>
              <div class="proj-card-summary">Training colloidal gels through mechanical solicitation or by altering the interaction between colloidal particles.</div>
              <div class="proj-tags"><span class="proj-tag">Rheology</span><span class="proj-tag">Gels</span></div>
            </div>
          </a>

          <a class="proj-card" href="/project/24-04-09-sedimentation/">
            <img src="/project/24-04-09-sedimentation/featured.png" alt="Sedimentation" onerror="this.style.display='none'">
            <div class="proj-card-body">
              <div class="proj-card-title">The Non-Equilibrium Physics of Colloidal Sedimentation</div>
              <div class="proj-card-summary">Combining novel quantitative microscopy approaches and advanced simulations to capture the richness of the sedimentation process.</div>
              <div class="proj-tags"><span class="proj-tag">Microscopy</span><span class="proj-tag">Colloids</span></div>
            </div>
          </a>

          <a class="proj-card" href="/project/22-12-01-forgreensoft/">
            <img src="/project/22-12-01-forgreensoft/featured.jpg" alt="FORGreenSoft" onerror="this.style.display='none'">
            <div class="proj-card-body">
              <div class="proj-card-title">Advancing Research &amp; Innovation of FORTH in Green Soft Matter (FORGreenSoft)</div>
              <div class="proj-card-summary">Exploring eco-friendly pathways towards Soft Matter systems.</div>
              <div class="proj-tags"><span class="proj-tag">Soft matter</span><span class="proj-tag">Rheology</span></div>
            </div>
          </a>

        </div>
    design:
      columns: '1'
  - block: collection
    content:
      title: Journal Articles
      text: ""
      count: 3
      filters:
        folders:
          - publication
        publication_type: 'article-journal'
    design:
      view: citation
      columns: '2'
  
  #- block: collection
  #  content:
  #    title: Preprints
  #    text: ""
  #    count: 3
  #    filters:
  #      folders:
  #        - publication
  #      publication_type: 'article'
  #  design:
  #    view: citation
  #    columns: '2'
  
#  - block: markdown
#    content:
#      title:
#      subtitle: ''
#      text:
#    design:
#      columns: '1'
#      background:
#        image: 
#          filename: group2026.jpg
#          filters:
#            brightness: 1
#          parallax: false
#          position: center
#          size: cover
#          text_color_light: true
#      spacing:
#        padding: ['20px', '0', '20px', '0']
#      css_class: fullscreen
#
#  - block: markdown
#    content:
#      title:
#      subtitle:
#      text: |
#        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
#    design:
#      columns: '1'
---
