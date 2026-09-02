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

  - block: collection
    id: projects
    content:
      title: Projects
      count: 3
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Rheology
          tag: Rheology
        - name: Optics
          tag: Optics
        - name: Microscopy
          tag: Microscopy
        - name: Biology
          tag: Biology
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2' #valid if view:card
      view: card #showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true

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
