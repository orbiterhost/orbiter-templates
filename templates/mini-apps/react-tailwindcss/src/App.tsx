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
    return <div className="bg-black text-white">Loading...</div>;
  }

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center gap-12 bg-black text-white">
      <img src="/logo.svg" alt="Orbiter logo" className="max-w-[250px]" />
      {context ? (
        <>
          <h3 className="text-white">Hello {context.user.displayName}!</h3>
          <p className="text-white">FID: {context.user.fid}</p>
          <div
            onClick={() => sdk.actions.openUrl("https://docs.orbiter.host/miniapps")}
            className="inline-flex items-center justify-center rounded-md font-medium text-sm leading-5 px-4 py-2 bg-white text-black cursor-pointer outline-none border border-transparent hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 active:bg-gray-300"
          >
            Docs
          </div>
        </>
      ) : (
        <>
          <a
            className="inline-flex items-center justify-center rounded-md font-medium text-sm leading-5 px-4 py-2 bg-white text-black cursor-pointer outline-none border border-transparent hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 active:bg-gray-300"
            target='_blank'
            rel="noopener noreferrer"
            href="https://warpcast.com/~/developers/mini-apps/debug"
          >
            Farcaster Portal
          </a>
          <a
            href="https://docs.orbiter.host"
            target='_blank'
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md font-medium text-sm leading-5 px-4 py-2 bg-white text-black cursor-pointer outline-none border border-transparent hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 active:bg-gray-300"
          >
            Docs
          </a>
        </>
      )}
    </main>
  )
}

export default App
