import { mapObjIndexed, values, pipe } from 'ramda'
import OrgsSideBar from '../components/orgsSideBar'
import TopMenu from '../components/topMenu'
const orgData = require('../db/orgs.json')
const riskData = require('../db/riskRegisters.json')

const mapRiskNames = mapObjIndexed((risk, key) => (
  <tr key={key} className="grid-container-three">
    <td>{risk.title1}</td>
    <td>{risk.title2}</td>
    <td>{risk.title3}</td>
  </tr>
))
const mapRisksToValues = pipe(mapRiskNames, values)

class Company extends React.Component {
  static async getInitialProps () {
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

  renderRisks (risks) {
    return mapRisksToValues(risks)
  }

  render () {
    const {orgs, risks, url} = this.props
    return (
      <div className="grid-container-one">
        <TopMenu />
        <div className="grid-container-two">
          <OrgsSideBar  orgs={orgs} />
          <div className="grid-item">
            <h1>{orgs[url.query.id].name}</h1>
            <table className="grid-container-one ">
              <tr className="grid-container-three ">
                <th >Title 1</th>
                <th >Title 2</th>
                <th >Title 3</th>
              </tr>
              {this.renderRisks(risks[url.query.id])}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Company
