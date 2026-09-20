---
title: Tour
date: 2022-10-24

type: landing

sections:
  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <style>
        .tour-hero {
          position: relative;
          height: 46vh;
          min-height: 280px;
          background: url('/media/tour.jpg') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          margin: -1.5rem -1.5rem 2.5rem -1.5rem;
          overflow: hidden;
          border-radius: 0;
        }
        .tour-hero-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 60%, transparent 100%);
          width: 100%;
          padding: 2.5rem 2.8rem;
        }
        .tour-hero-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00bed2;
          margin-bottom: 0.6rem;
        }
        .tour-hero-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.6rem 0;
          line-height: 1.2;
        }
        .tour-hero-sub {
          font-size: 0.97rem;
          color: rgba(255,255,255,0.78);
          max-width: 560px;
          line-height: 1.6;
        }

        .tour-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 960px) {
          .tour-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .tour-grid { grid-template-columns: 1fr; }
          .tour-hero { margin: -1rem -1rem 1.5rem -1rem; }
          .tour-hero-title { font-size: 1.7rem; }
          .tour-hero-overlay { padding: 1.5rem 1.4rem; }
        }

        .tour-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          height: 320px;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: 0 4px 18px rgba(0,0,0,0.2);
          transition: height 0.38s ease, opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          color: #fff;
        }
        .tour-card.active {
          height: 520px;
          box-shadow: 0 12px 38px rgba(0,0,0,0.38);
          transform: translateY(-5px);
        }
        .tour-card.dimmed {
          opacity: 0.55;
          transform: scale(0.97);
        }
        .tour-card-overlay {
          background: linear-gradient(to top,
            rgba(0,0,0,0.93) 0%,
            rgba(0,0,0,0.55) 55%,
            transparent 100%);
          padding: 1.4rem 1.2rem 1.2rem;
        }
        .tour-card.active .tour-card-overlay {
          background: linear-gradient(to top,
            rgba(0,0,0,0.97) 0%,
            rgba(0,0,0,0.75) 65%,
            transparent 100%);
        }
        .tour-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 0.45rem 0;
          line-height: 1.3;
          color: #fff;
        }
        .tour-card-desc {
          font-size: 0.8rem;
          line-height: 1.58;
          color: rgba(255,255,255,0.83);
          overflow: hidden;
          max-height: 3.95em;
          transition: max-height 0.38s ease;
          margin-bottom: 0.55rem;
        }
        .tour-card.active .tour-card-desc {
          max-height: 24em;
        }
        .tour-card-contact {
          font-size: 0.75rem;
          color: #00bed2;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .tour-card-contact a {
          color: #00bed2 !important;
          text-decoration: none !important;
        }
        .tour-card-contact a:hover {
          text-decoration: underline !important;
        }
        .tour-card-hint {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.38);
          margin-top: 0.4rem;
          letter-spacing: 0.04em;
        }
        .tour-card.active .tour-card-hint {
          display: none;
        }
        </style>

        <div class="tour-hero">
          <div class="tour-hero-overlay">
            <div class="tour-hero-label">Computational and Soft Matter Physics · University of Vienna</div>
            <div class="tour-hero-title">Virtual Lab Tour</div>
            <div class="tour-hero-sub">Take a look at what we're working on — click any topic below to learn more.</div>
          </div>
        </div>

        <div class="tour-grid">

          <div class="tour-card" style="background-image: url('/media/tour_maxime.jpg');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">FastDDM</div>
              <div class="tour-card-desc">FastDDM is a robust Python package we engineered to streamline the analysis of Differential Dynamic Microscopy experiments. Dive into the core of FastDDM and discover how its integration with C++ and CUDA elevates performance, offering rapid and precise execution on both CPU and GPU.</div>
              <div class="tour-card-contact">Contact: <a href="/author/maxime-lavaud/">M. Lavaud</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

          <div class="tour-card" style="background-image: url('/media/tour_nikos.jpg');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">Nonlinear Dynamics of Soft Materials</div>
              <div class="tour-card-desc">Coupling rheometry with microscopy, we study the dynamics of soft materials like pastes, emulsions and gels undergoing shear flow. This method allows us to measure the macroscopic mechanical properties of the material and simultaneously track embedded microparticles to assess the localized shear-induced diffusion. We design and prototype custom-made instruments, develop codes (LabVIEW, MatLab) and perform image processing.</div>
              <div class="tour-card-contact">Contact: <a href="/author/nikolaos-kalafatakis/">N. Kalafatakis</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

          <div class="tour-card" style="background-image: url('/media/PIV.jpg');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">Structure &amp; Dynamics in Cellular Monolayers</div>
              <div class="tour-card-desc">Through particle image velocimetry (PIV) we can probe dynamical changes in cellular monolayers, their velocity correlation lengths and directional alignments and orderedness. A different perspective on cellular dynamics comes from following the trajectories of single cells within a monolayer, which provides the general quantity mean square displacement (MSD) and its scaling behaviour over time.</div>
              <div class="tour-card-contact">Contact: <a href="/author/jasmin-di-franco/">J. Di Franco</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

          <div class="tour-card" style="background-image: url('/media/tour_sakshi.png');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">Training and Memory in Soft Materials </div>
              <div class="tour-card-desc">"Memory" in soft materials can be defined as tunable viscoelasticity achieved by repeated nonlinear shear deformation (training). We study how training can be employed to encode memory in colloidal gels and hydrogels. To this effect, we combine rheology with advanced microscopic techniques to connect macroscopic mechanical response to microscopic rearrangements during aging, yielding, and structural evolution.</div>
              <div class="tour-card-contact">Contact: <a href="/author/sakshi-khandelwal/">S. Khandelwal</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

          <div class="tour-card" style="background-image: url('/media/tour_carlo.png');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">Probing Fluctuation-Induced Forces</div>
              <div class="tour-card-desc">Dense out-of-equilibrium colloidal suspensions are predicted to generate large Casimir-like forces in confined spaces when the confinement becomes smaller than the characteristic length scale of the so-called giant fluctuations. We aim to provide the first direct experimental evidence of this phenomenon by tracking the interactions of colloidal particles.</div>
              <div class="tour-card-contact">Contact: <a href="/author/remi-pinchede/">R. Pinchede</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

          <div class="tour-card" style="background-image: url('/media/tour_Merisa.png');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">Microrheology for 3D Bioprinting</div>
              <div class="tour-card-desc">Structure and temperature influence the mechanical behavior of biopolymers used for 3D printing. By measuring the diffusion of small tracer particles dispersed in the biopolymer solution, we study their rheological behaviour. Our findings are aimed at supporting the development of novel bio-inks for 3D printing.</div>
              <div class="tour-card-contact">Contact: <a href="/author/merisa-avdic/">M. Avdic</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

          <div class="tour-card" style="background-image: url('/media/tour_Alejandro.jpg');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">AI-Enhanced DDM</div>
              <div class="tour-card-desc">We develop computational methods and machine-learning approaches for Differential Dynamic Microscopy (DDM) data analysis, enabling robust reconstruction of heterogeneous microscopic dynamics from complex dynamical signals.</div>
              <div class="tour-card-contact">Contact: <a href="/author/alejandro-cobo/">A. Cobo</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

          <div class="tour-card" style="background-image: url('/media/tour_barnali.png');">
            <div class="tour-card-overlay">
              <div class="tour-card-title">Bulk rheology and 3D Bioprinting</div>
              <div class="tour-card-desc">Three-dimensional (3D) bioprinting is a powerful tissue engineering technique that enables the fabrication of complex biological structures by precisely depositing biomaterials and living cells. We use bulk rheology to determine the printability in both direct ink writing (DIW) and Freeform Reversible Embedding of Suspended Hydrogels (FRESH) bioprinting.
              </div>
              <div class="tour-card-contact">Contact: <a href="/author/barnali-kumar/">B. Kumar</a></div>
              <div class="tour-card-hint">Click to expand</div>
            </div>
          </div>

        </div>

        <script>
        (function() {
          function initTourCards() {
            var cards = document.querySelectorAll('.tour-card');
            if (!cards.length) return;
            cards.forEach(function(card) {
              card.addEventListener('click', function() {
                var wasActive = card.classList.contains('active');
                cards.forEach(function(c) {
                  c.classList.remove('active', 'dimmed');
                });
                if (!wasActive) {
                  card.classList.add('active');
                  cards.forEach(function(c) {
                    if (c !== card) c.classList.add('dimmed');
                  });
                }
              });
            });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTourCards);
          } else {
            initTourCards();
          }
        })();
        </script>
    design:
      columns: '1'
---
