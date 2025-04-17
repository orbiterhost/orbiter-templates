function App() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center gap-12 bg-black text-white">
      <img src="/logo.svg" alt="Orbiter logo" className="max-w-[250px]" />
      <a
        href="https://docs.orbiter.host"
        target='_blank'
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md font-medium text-sm leading-5 px-4 py-2 bg-white text-black cursor-pointer outline-none border border-transparent hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 active:bg-gray-300"
      >
        Docs
      </a>
    </main>
  )
}

export default App
