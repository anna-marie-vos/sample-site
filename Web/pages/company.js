import { mapObjIndexed, values, pipe } from 'ramda'
import OrgsSideBar from './Web/components/orgsSideBar'
import TopMenu from './Web/components/topMenu'
const orgData = require('./server/db/orgs.json')
const riskData = require('./server/db/riskRegisters.json')

const mapRiskNames = mapObjIndexed((risk, key) => (
	<tr key={key} className="grid-container-three">
		<td>{risk.catagory}</td>
		<td>{risk.risk}</td>
		<td>{risk.mitigation}</td>
	</tr>
))
const mapRisksToValues = pipe(
	mapRiskNames,
	values
)

class Company extends React.Component {
	static async getInitialProps() {
		const risks = {}
		const orgs = {}
		orgData.data.map(org => {
			orgs[org.id] = org
		})
		riskData.risks.map(risk => {
			risks[risk.id_org] = {}
		})
		riskData.risks.map(risk => {
			risks[risk.id_org][risk.id] = risk
		})
		return { orgs, risks }
	}

	renderRisks(risks) {
		return mapRisksToValues(risks)
	}

	render() {
		const { orgs, risks, url } = this.props
		return (
			<div className="grid-container-one">
				<TopMenu />
				<div className="grid-container-two">
					<OrgsSideBar orgs={orgs} />
					<div className="grid-item">
						<h2>{orgs[url.query.id].name}</h2>
						<table className="grid-container-one risksTable">
							<tbody>
								<tr className="grid-container-three ">
									<th>Catagory</th>
									<th>Risks</th>
									<th>Mitigation</th>
								</tr>
								{this.renderRisks(risks[url.query.id])}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default Company
