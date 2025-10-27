---
# Leave the homepage title empty to use the site title
title:
date: 2024-06-01
type: landing

sections:
  - block: hero
    content:
      title: |
        Welcome to the ***So**ft **M**atter **eX**periments* Lab
      image:
        filename: welcome.gif
      text: |
        led by [Roberto Cerbino]({{< relref "authors/admin/_index.md" >}})!  
        From exploring the behavior of polymers and colloids to investigating the dynamics of biological systems, we are dedicated to unraveling the complexities of ***<a style="font-weight: bold; text-decoration:none;" href="https://www.nature.com/subjects/soft-materials">Soft</a>*** materials. Whether you're a seasoned researcher or an aspiring scientist, we invite you to join us on this exciting journey of discovery.
        {style="text-align: justify;"}
  
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

  - block: portfolio
    id: projects
    content:
      title: Projects
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
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  
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
  
  - block: collection
    content:
      title: Preprints
      text: ""
      count: 3
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '2'
  
  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: group.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
