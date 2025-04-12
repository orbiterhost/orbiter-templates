import './style.css';
import sdk from '@farcaster/frame-sdk';

// Get references to DOM elements
const contentEl = document.getElementById('content');

async function init() {
  try {
    // Get context from SDK
    const context = await sdk.context;

    // Tell the SDK we're ready
    sdk.actions.ready();

    if (context) {
      // User is authenticated
      contentEl.innerHTML = `
        <h3>Hello ${context.user.displayName}!</h3>
        <p>FID: ${context.user.fid}</p>
        <div id="docs-link" class='link'>Docs</div>
      `;

      // Set up click handler
      document.getElementById('docs-link').addEventListener('click', () => {
        sdk.actions.openUrl("https://docs.orbiter.host/miniapps");
      });
    } else {
      // User is not authenticated
      contentEl.innerHTML = `
        <a class='link' target='_blank' rel="noopener noreferrer" href="https://warpcast.com/~/developers/mini-apps/debug">Farcaster Portal</a>
        <a href="https://docs.orbiter.host" target='_blank' rel="noopener noreferrer" class='link'>Docs</a>
      `;
    }
  } catch (error) {
    console.error("Error loading Farcaster SDK:", error);
    // Fallback UI
    contentEl.innerHTML = `
      <a class='link' target='_blank' rel="noopener noreferrer" href="https://warpcast.com/~/developers/mini-apps/debug">Farcaster Portal</a>
      <a href="https://docs.orbiter.host" target='_blank' rel="noopener noreferrer" class='link'>Docs</a>
    `;
  }

}

// Start the app
init();
