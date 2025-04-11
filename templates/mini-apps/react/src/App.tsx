import { useState, useEffect } from 'react'
import sdk from '@farcaster/frame-sdk';
import { Context } from '@farcaster/frame-sdk';

function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);


  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <img src="/logo.svg" alt="Orbiter logo" />
      {context ? (
        <>
          <h3>Hello {context.user.displayName}!</h3>
          <p>FID: {context.user.fid}</p>
          <div onClick={() => sdk.actions.openUrl("https://docs.orbiter.host/miniapps")} className='link'>Docs</div>
        </>
      ) : (
        <>
          <a className='link' target='_blank' rel="noopener noreferrer" href="https://warpcast.com/~/developers/mini-apps/debug">Farcaster Portal</a>
          <a href="https://docs.orbiter.host" target='_blank' rel="noopener noreferrer" className='link'>Docs</a>
        </>
      )}

    </main>
  )
}

export default App
