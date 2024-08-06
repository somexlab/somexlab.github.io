---
title: Tour
date: 2022-10-24

type: landing

# to add a new line in the content of card
# start the content with "|"
# indent the content with 2 spaces
# to go on a new line, just add 2 spaces and return
sections:
  - block: slider
    content:
      slides:
      - title: 🧑‍🏭 External Services
        content: We promise to handle your questions with care, your experiments with precision, and occasionally, your coffee spills with panic! Take a look at the services we offer...
        align: center
        background:
          image:
            filename: services-2.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: Brightfield/Confocal Microscopy 🔬
        content: 'Our state-of-the-art equipment and expert support, allows users to capture detailed three-dimensional images with exceptional clarity and precision. Whether investigating cellular dynamics, studying intricate colloidal networks, or delving into fluorescent labeling, our microscopy facility provides the tools and expertise needed to achieve the desired results. Join us in unlocking new insights and pushing the boundaries of scientific discovery. Contact us to schedule your session today.'
        align: left
        background:
          image:
            filename: confocal_1.jpg
            filters:
              brightness: 0.8
          position: center
          color: '#111'
        link:
          icon: hand-point-up
          icon_pack: fas
          text: Request
          url: ../contact/
      - title: Rheometry 🫗
        content: 'Our latest rheometry facility allows for precise measurement and analysis of viscosity, elasticity, and flow properties across a wide range of temperatures and shear rates. From understanding the flow characteristics of polymer solutions and colloids to studying the rheological properties of biological fluids, our facility offers the tools and expertise to tackle diverse research challenges. Contact us to explore the capabilities of our rheometry facility.'
        align: left
        background:
          image:
            filename: rheometer_blur.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#444'
        link:
          icon: hand-point-up
          icon_pack: fas
          text: Request
          url: ../contact/
      - title: Rheo-imaging 📷
        content: |
          *"Rheology without structure is Theology"* - Prof. Malcolm Mackley.  
          Our rheometry facility boasts advanced imaging techniques that allow in-situ measurements on materials undergoing shear flow.
        align: left
        background:
          image:
            filename: rheometer.jpg
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          icon: hand-point-up
          icon_pack: fas
          text: Request
          url: ../contact/
      - title: 3D printing 🖨️
        content: |
          Materialize your complex designs with our advanced 3D printing facility tailored for scientific research. Having different filament options to choose from, we empower researchers to innovate with ease. From custom lab equipment to intricate prototypes, our facility delivers with accuracy and reliability. Elevate your scientific exploration and accelerate breakthroughs with our comprehensive 3D printing solutions.
        align: left
        background:
          image:
            filename: 3D_print_5.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#222'
        link:
          icon: hand-point-up
          icon_pack: fas
          text: Request
          url: ../contact/
      - title: Dynamic Light Scattering💡
        content: 'With our state-of-the-art equipment and expert guidance, you will gain unprecedented insights into the size, distribution, and dynamics of particles and molecules in solution. From characterizing nanoparticles to studying protein aggregation, DLS offers non-invasive, rapid analysis for a wide range of applications. Schedule a session today and discover the potential of DLS to drive your research forward.'
        align: left
        background:
          image:
            filename: scattering.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#222'
        link:
          icon: hand-point-up
          icon_pack: fas
          text: Request
          url: ../contact/
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: false
      # Duration of transition between slides (in ms)
      interval: 2000
---
