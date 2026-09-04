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
        <div style="display:flex;align-items:flex-start;gap:3rem;flex-wrap:wrap;padding:0;">
          <div style="flex:1;min-width:280px;">
            <h1 style="font-size:2.2rem;line-height:1.2;margin:0 0 1rem 0;">Welcome to the <em><strong>So</strong>ft <strong>M</strong>atter e<strong>X</strong>periments</em> Lab</h1>
            <p style="font-size:1.25rem;line-height:1.7;">led by <a href="/author/roberto-cerbino/">Roberto Cerbino</a>!<br>
            From exploring the behavior of polymers and colloids to investigating the dynamics of biological systems, we are dedicated to unraveling the complexities of <strong><a style="font-weight:bold;text-decoration:none;" href="https://www.nature.com/subjects/soft-materials">Soft</a></strong> materials. Whether you're a seasoned researcher or an aspiring scientist, we invite you to join us on this exciting journey of discovery.</p>
          </div>
          <div style="flex:0 0 40%;min-width:250px;max-width:500px;">
            <video autoplay muted loop playsinline style="width:100%;border-radius:8px;">
              <source src="/media/welcome.webm" type="video/webm">
            </video>
          </div>
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
