function App() {
	return (
		<main className="flex flex-col min-h-screen w-full items-center justify-center gap-12 bg-[#121113] text-white">
			<img src="/logo.png" alt="Orbiter logo" className="max-w-[300px]" />
			<p>
				Get started by editing{" "}
				<span className="monospace bg-[#232323] p-1.5 text-sm rounded-sm font-mono">
					src/App.tsx
				</span>
			</p>
			<div className="flex items-center gap-6">
				<a
					href="https://docs.orbiter.host"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center rounded-md font-medium text-sm leading-5 px-4 py-2 bg-[#FFB757] text-black cursor-pointer outline-none border border-transparent hover:bg-[#F1AB4B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
				>
					Docs
				</a>
				<a
					href="https://github.com/orbiterhost"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center rounded-md font-medium text-sm leading-5 px-4 py-2 bg-[#1a191b] text-[#d1d1d1] cursor-pointer outline-none border border-transparent hover:bg-[#232225] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
				>
					GitHub
				</a>
			</div>
		</main>
	);
}

export default App;
