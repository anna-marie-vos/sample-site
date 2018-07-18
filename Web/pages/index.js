import Link from 'next/link'
import OrgsSideBar from './Web/components/orgsSideBar'
import TopMenu from './Web/components/topMenu'
const seedData = require('./server/db/orgs.json')

class Index extends React.Component {
	static async getInitialProps() {
		const orgs = {}
		seedData.data.map(org => {
			orgs[org.id] = org
		})
		return { orgs }
	}

	render() {
		return (
			<div className="grid-container-one">
				<TopMenu />
				<div className="grid-container-two">
					<OrgsSideBar orgs={this.props.orgs} />
					<div className="grid-item">
						<h2>Risk Register</h2>
						<p>
							To view the risk register, click on your company name to view the
							current risks.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Index
