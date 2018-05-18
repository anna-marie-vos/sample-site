import { mapObjIndexed, values, pipe } from 'ramda'
import OrgsSideBar from '../components/orgsSideBar'
const orgData = require('../db/orgs.json')
const riskData = require('../db/riskRegisters.json')

const mapRiskNames = mapObjIndexed((risk, key) => (
  <ul key={key}>
    <li>{risk.title1}</li>
    <li>{risk.title2}</li>
    <li>{risk.title3}</li>
  </ul>
))
const mapRisksToValues = pipe(mapRiskNames, values)

class Company extends React.Component {
  static async getInitialProps () {
    const risks = {}
    const orgs = {}
    orgData.data.map(org => {
      orgs[org.id] = { 'id': org.id, 'name': org.name }
    })
    riskData.risks.map(risk => {
      risks[risk.id_org] = {}
    })
    riskData.risks.map(risk => {
      risks[risk.id_org][risk.id] = risk
    })
    return { orgs, risks }
  }

  renderRisks (risks) {
    return mapRisksToValues(risks)
  }

  render () {
    const {orgs, risks, url} = this.props
    return (
      <div className="grid-container">
        <OrgsSideBar  orgs={orgs} />
        <ul className="grid-item">
          <li >Title 1</li>
          <li >Title 2</li>
          <li >Title 3</li>
        </ul>
        <ul>
          {this.renderRisks(risks[url.query.id])}
        </ul>

      </div>
    )
  }
}

export default Company
