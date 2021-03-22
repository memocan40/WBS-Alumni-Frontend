import './style.css';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-left">
				<div className="footer-header">Made by:</div>
				<div className="left-content">
					<div className="footer-collaborator-wrapper">
						<span className="footer-name">
							Mehmet Can
						</span>
						<div className="footer-link-wrapper">
							<a href="https://github.com/memocan40/" className="fab fa-github footer-link"></a>
							<a href="https://www.linkedin.com/in/mehmet-can-580742168/" className="fab fa-linkedin footer-link"></a>
						</div>
					</div>
					<div className="footer-collaborator-wrapper">
						<span className="footer-name">
							Elie Soued
						</span>
						<div className="footer-link-wrapper">
							<a href="https://github.com/Elie-Soued/" className="fab fa-github footer-link"></a>
							<a href="https://www.linkedin.com/in/elie-soued-70017358/" className="fab fa-linkedin footer-link"></a>
						</div>
					</div>
					<div className="footer-collaborator-wrapper">
						<span className="nametags">
							David Surina
						</span>
						<div className="footer-link-wrapper">
							<a href="https://github.com/DavidSurina/" className="fab fa-github footer-link"></a>
							<a href="https://www.linkedin.com/in/dsurina/" className="fab fa-linkedin footer-link" target="_blank"></a>
						</div>
					</div>			
					<div className="footer-collaborator-wrapper">
						<span className="nametags">
							Alex Stapel
						</span>
						<div className="footer-link-wrapper">
							<a href="https://github.com/olkhon" className="fab fa-github footer-link" target="_blank"></a>
							<a href="#" className="fab fa-linkedin footer-link" target="_blank"></a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-middle">
				<div className="footer-header">Special thanks to</div>{' '}
				<div>
					<div className="footer-name-container">
						<div className="footer-middle-name">--- Aria ---</div>
						<div className="footer-middle-name">--- Donald ---</div>
						<div className="footer-middle-name">--- Victor ---</div>
					</div>
				</div>
			</div>
			<div className="footer-right">
				<div className="footer-header">Project repos</div>
				<div className="project-repos-container">
					<a href="" className="footer-repo-link">Front End</a>
					<a href="" className="footer-repo-link">Back End</a>
				</div>
			</div>
		</footer>
	);
}
