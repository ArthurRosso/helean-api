import React from 'react';
import './App.css';

import Product from '../Product/Product';

function App() {
    return (
        <div className='App'>
			<nav class="navbar navbar-expand-lg bg-body-tertiary">
				<div class="container-md">
					<a class="navbar-brand" href="/"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5My44NyIgaGVpZ2h0PSIyMi40NyIgdmlld0JveD0iMCAwIDkzLjg3IDIyLjQ3Ij4KICA8cGF0aCBpZD0iVHJhY8OpXzUyIiBkYXRhLW5hbWU9IlRyYWPDqSA1MiIgZD0iTTIuMDcsMGg0LjJWLTkuMThjMC0yLjY3LDEuNDctNC4xMSwzLjc1LTQuMTEsMi4yMiwwLDMuNjksMS40NCwzLjY5LDQuMTFWMGg0LjJWLTkuNzVjMC00LjU5LTIuNzMtNy4xMS02LjQ4LTcuMTFhNi4zODYsNi4zODYsMCwwLDAtNS4xNiwyLjMxVi0yMi4ySDIuMDdaTTI3LjU0LTEzLjQ0QTMuNjkzLDMuNjkzLDAsMCwxLDMxLjUtOS44N0gyMy42MUEzLjg2LDMuODYsMCwwLDEsMjcuNTQtMTMuNDRabTcuODksOC4yMkgzMC45YTMuNDI1LDMuNDI1LDAsMCwxLTMuMzMsMi4wMSwzLjg4OSwzLjg4OSwwLDAsMS0zLjk5LTMuODRIMzUuNzNhOS44MTcsOS44MTcsMCwwLDAsLjEyLTEuNjIsNy44LDcuOCwwLDAsMC04LjE5LTguMjJjLTQuOTIsMC04LjM0LDMuMzMtOC4zNCw4LjU4LDAsNS4yMiwzLjUxLDguNTgsOC4zNCw4LjU4QTcuNzI1LDcuNzI1LDAsMCwwLDM1LjQzLTUuMjJaTTM3LjQxLDBoNC4yVi0yMi4yaC00LjJaTTUxLjM5LTEzLjQ0YTMuNjkzLDMuNjkzLDAsMCwxLDMuOTYsMy41N0g0Ny40NkEzLjg2LDMuODYsMCwwLDEsNTEuMzktMTMuNDRabTcuODksOC4yMkg1NC43NWEzLjQyNSwzLjQyNSwwLDAsMS0zLjMzLDIuMDEsMy44ODksMy44ODksMCwwLDEtMy45OS0zLjg0SDU5LjU4YTkuODE3LDkuODE3LDAsMCwwLC4xMi0xLjYyLDcuOCw3LjgsMCwwLDAtOC4xOS04LjIyYy00LjkyLDAtOC4zNCwzLjMzLTguMzQsOC41OCwwLDUuMjIsMy41MSw4LjU4LDguMzQsOC41OEE3LjcyNSw3LjcyNSwwLDAsMCw1OS4yOC01LjIyWm0uOS0zLjE1YzAsNS4xOSwzLjM2LDguNjQsNy41Niw4LjY0YTYuNTU1LDYuNTU1LDAsMCwwLDUuNTItMi43VjBoNC4yM1YtMTYuNjJINzMuMjZ2Mi4zN2E2LjU3Miw2LjU3MiwwLDAsMC01LjQ5LTIuNjRDNjMuNTQtMTYuODksNjAuMTgtMTMuNTYsNjAuMTgtOC4zN1ptMTMuMDguMDZjMCwzLjE1LTIuMSw0Ljg5LTQuNDEsNC44OS0yLjI1LDAtNC4zOC0xLjgtNC4zOC00Ljk1czIuMTMtNC44Myw0LjM4LTQuODNDNzEuMTYtMTMuMiw3My4yNi0xMS40Niw3My4yNi04LjMxWk05MS43NCwwaDQuMlYtOS43NWMwLTQuNTktMi43Ni03LjExLTYuNjMtNy4xMWE2LjIwOCw2LjIwOCwwLDAsMC01LjAxLDIuMzF2LTIuMDdIODAuMVYwaDQuMlYtOS4xOGMwLTIuNjcsMS40Ny00LjExLDMuNzUtNC4xMSwyLjIyLDAsMy42OSwxLjQ0LDMuNjksNC4xMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjA3IDIyLjIpIi8+Cjwvc3ZnPgo=" alt="helean logo" /></a>
				</div>
			</nav>
			<div class="container">
				<Product />
			</div>
		</div>
    );
}
  
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
