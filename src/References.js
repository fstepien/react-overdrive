import React, { Component } from 'react';
// import Overdrive from 'react-overdrive';

class References extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="references">
					<h2>REFERENCES</h2>

					<ul>
						{' '}
						<li>
							<a
								href="https://github.com/berzniz/react-overdrive"
								rel="noopener noreferrer"
								target="_blank"
							>
								{' '}
								react-overdrive on GitHub{' '}
							</a>
							<div style={{ fontSize: '2rem' }}>
								by Tal Bereznitskey
								<a
									href="https://twitter.com/ketacode"
									rel="noopener noreferrer"
									target="_blank"
								>
									{' '}
									@ketacode{' '}
								</a>
							</div>
						</li>
						<li>
							<a
								href="https://www.leveluptutorials.com/tutorials/react-16-for-everyone"
								rel="noopener noreferrer"
								target="_blank"
							>
								{' '}
								movie-database from LevelUpTutorials{' '}
							</a>
							<div style={{ fontSize: '2rem' }}>
								by Scott Tolinski
								<a
									href="https://twitter.com/stolinski"
									rel="noopener noreferrer"
									target="_blank"
								>
									{' '}
									@stolinski{' '}
								</a>
							</div>
						</li>
						<li>
							<a
								href="http://overdrive.filipstepien.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								{' '}
								presentation available overdrive.filipstepien.com{' '}
							</a>
							<div style={{ fontSize: '2rem' }}>
								<a
									href="https://twitter.com/Filip_Stepien"
									rel="noopener noreferrer"
									target="_blank"
								>
									{' '}
									@Filip_Stepien{' '}
								</a>
								Web Dev Stundent at{' '}
								<a
									href="http://hackeryou.com/"
									rel="noopener noreferrer"
									target="_blank"
								>
									{' '}
									HackerYou{' '}
								</a>
							</div>
						</li>
					</ul>
				</section>
			</React.Fragment>
		);
	}
}

export default References;
