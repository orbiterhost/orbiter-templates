// import { useState } from "react";
// import { ApiResponse } from "shared";
import "./App.css";

//const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

function App() {
	// const [data, setData] = useState<ApiResponse | undefined>();

	// async function sendRequest() {
	// 	try {
	// 		const req = await fetch(`${SERVER_URL}/hello`);
	// 		const res: ApiResponse = await req.json();
	// 		setData(res);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	return (
		<main>
			<img src="/logo.png" alt="Orbiter logo" />
			<p>
				Get started by editing <span className="code">src/App.tsx</span>
			</p>
			<div className="link-container">
				<a
					href="https://docs.orbiter.host"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					Docs
				</a>
				<a
					href="https://github.com/orbiterhost"
					target="_blank"
					rel="noopener noreferrer"
					className="link secondary"
				>
					Github
				</a>
			</div>
		</main>
	);
}

export default App;
