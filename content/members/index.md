---
title: For Members
date: 2024-01-01

type: landing

sections:
  - block: markdown
    content:
      title:
      subtitle: ''
      text: |
        <style>
        .members-hero {
          padding: 3rem 0 2rem 0;
          text-align: center;
        }
        .members-hero-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0098a6;
          margin-bottom: 0.8rem;
        }
        .members-hero-title {
          font-size: 2.1rem;
          font-weight: 700;
          margin: 0 0 0.8rem 0;
        }
        .members-hero-sub {
          font-size: 0.95rem;
          color: #666;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }
        body.dark .members-hero-sub { color: #c7c9d1; }
        .members-hero-sub a, .members-status a {
          color: #0098a6;
          font-weight: 600;
          text-decoration: underline;
        }
        body.dark .members-hero-sub a, body.dark .members-status a { color: #6fb3f5; }
        .members-auth-box {
          max-width: 420px;
          margin: 2rem auto 0 auto;
          padding: 1.6rem 1.8rem;
          border-radius: 10px;
          background: #f8f9fa;
          border: 1px solid #e0e0e0;
          text-align: center;
        }
        body.dark .members-auth-box { background: #282a36; border-color: #44475a; }
        .members-auth-buttons {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .members-btn {
          padding: 0.6rem 1.4rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          border: 2px solid #1a2744;
          background: #1a2744;
          color: #fff;
          transition: background 0.2s;
        }
        .members-btn:hover { background: #243460; }
        .members-btn-outline {
          background: transparent;
          color: #1a2744;
        }
        body.dark .members-btn-outline { color: #8fd0e0; border-color: #8fd0e0; }
        .members-btn-outline:hover { background: #1a2744; color: #fff; }
        body.dark .members-btn-outline:hover { background: #8fd0e0; color: #1a2744; }
        .members-status {
          font-size: 0.85rem;
          color: #666;
          margin-top: 0.9rem;
        }
        body.dark .members-status { color: #c7c9d1; }
        .members-logged-in { display: none; }
        .members-logged-out { display: block; }
        .members-resources { display: none; margin-top: 2.5rem; }
        .members-resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          margin-top: 1.5rem;
        }
        @media (max-width: 900px) {
          .members-resources-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .members-resources-grid { grid-template-columns: 1fr; }
        }
        .members-res-card {
          display: block;
          padding: 1.1rem 1.2rem;
          border-radius: 10px;
          background: #f8f9fa;
          border: 1px solid #e0e0e0;
          text-decoration: none !important;
          color: inherit;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .members-res-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }
        .members-res-icon {
          width: 32px;
          height: 32px;
          margin-bottom: 0.6rem;
        }
        body.dark .members-res-card { background: #282a36; border-color: #44475a; }
        .members-res-title { font-weight: 700; font-size: 0.95rem; margin-bottom: 0.3rem; }
        .members-res-desc { font-size: 0.8rem; color: #666; line-height: 1.4; }
        body.dark .members-res-desc { color: #c7c9d1; }
        </style>

        <div class="members-hero">
        <div class="members-hero-label">Computational and Soft Matter Physics · University of Vienna</div>
        <div class="members-hero-title">For Members</div>
        <div class="members-hero-sub">A private space for current lab members. Sign in with your university email to reach internal resources. Access is by invitation only.</div>
        <div class="members-auth-box">
        <div class="members-logged-out" id="members-logged-out">
        <div>You're not signed in.</div>
        <div class="members-auth-buttons">
        <button class="members-btn" id="members-login-btn">Log in</button>
        </div>
        <div class="members-status">Don't have an account? <a href="mailto:mohandas.mohandas@univie.ac.at?subject=For%20Members%20access%20request">Ask an admin for an invite</a>.</div>
        </div>
        <div class="members-logged-in" id="members-logged-in">
        <div>Signed in as <strong id="members-user-email"></strong></div>
        <div class="members-auth-buttons">
        <button class="members-btn members-btn-outline" id="members-logout-btn">Log out</button>
        </div>
        </div>
        </div>
        </div>

        <div class="members-resources" id="members-resources">
        <h3 style="text-align:center;">Internal Resources</h3>
        <div class="members-resources-grid">
        <a class="members-res-card" href="https://launchpad.37signals.com/signin" target="_blank">
        <div class="members-res-title">Access Basecamp</div>
        <div class="members-res-desc">Use this link to login to your Basecamp account.</div>
        </a>
        <a class="members-res-card" href="https://drive.google.com/drive/folders/1SfqpRJ79aNnz7PvcpWfZUoUR2YspTRSY?usp=sharing" target="_blank">
        <img class="members-res-icon" src="/media/icon-drive.svg" alt="">
        <div class="members-res-title">Somex Internal Shared Drive</div>
        <div class="members-res-desc">Google drive link to the INTERNAL folder.</div>
        </a>
        <a class="members-res-card" href="#" target="_blank">
        <img class="members-res-icon" src="/media/icon-wiki.svg" alt="">
        <div class="members-res-title">Somex Wiki</div>
        <div class="members-res-desc">Under construction.</div>
        </a>
        <a class="members-res-card" href="https://wiki.univie.ac.at/spaces/OE/overview" target="_blank">
        <img class="members-res-icon" src="/media/icon-wiki.svg" alt="">
        <div class="members-res-title">University of Vienna Wiki</div>
        <div class="members-res-desc">Intranet link of the University of Vienna where members can find important information.</div>
        </a>
        <a class="members-res-card" href="https://moodle.univie.ac.at/" target="_blank">
        <img class="members-res-icon" src="/media/icon-moodle.svg" alt="">
        <div class="members-res-title">Moodle</div>
        <div class="members-res-desc">Use this link to access the Moodle - E-Learning platform.</div>
        </a>
        </div>
        </div>

        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script>
        (function(){
          function ready(fn) {
            if (document.readyState !== 'loading') { fn(); } else { document.addEventListener('DOMContentLoaded', fn); }
          }
          ready(function(){
            if (!window.netlifyIdentity) return;
            var loggedOutEl = document.getElementById('members-logged-out');
            var loggedInEl = document.getElementById('members-logged-in');
            var resourcesEl = document.getElementById('members-resources');
            var emailEl = document.getElementById('members-user-email');
            var loginBtn = document.getElementById('members-login-btn');
            var logoutBtn = document.getElementById('members-logout-btn');
            function updateUI(user) {
              if (user) {
                loggedOutEl.style.display = 'none';
                loggedInEl.style.display = 'block';
                resourcesEl.style.display = 'block';
                emailEl.textContent = user.email;
              } else {
                loggedOutEl.style.display = 'block';
                loggedInEl.style.display = 'none';
                resourcesEl.style.display = 'none';
              }
            }
            netlifyIdentity.on('init', updateUI);
            netlifyIdentity.on('login', function(user){ updateUI(user); netlifyIdentity.close(); });
            netlifyIdentity.on('logout', function(){ updateUI(null); });
            netlifyIdentity.on('error', function(err){ console.error('Netlify Identity error:', err); });
            loginBtn.addEventListener('click', function(){ netlifyIdentity.open('login'); });
            logoutBtn.addEventListener('click', function(){ netlifyIdentity.logout(); });
            netlifyIdentity.init({ APIUrl: 'https://somex-login.netlify.app/.netlify/identity' });
            if (window.location.hash && (window.location.hash.indexOf('invite_token') > -1 || window.location.hash.indexOf('recovery_token') > -1)) {
              netlifyIdentity.open();
            }
          });
        })();
        </script>
    design:
      columns: '1'
---
