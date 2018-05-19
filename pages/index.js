import Link from 'next/link'
import OrgsSideBar from '../components/orgsSideBar'
import TopMenu from '../components/topMenu'
const seedData = require('../db/orgs.json')

class Index extends React.Component {
  static async getInitialProps () {
    const orgs = {}
    seedData.data.map(org => {
      orgs[org.id] = org
    })
    return { orgs }
  }

  render () {
    return (
      <div className="grid-container-one">
        <TopMenu condition={this.state.condition} />
        <div className="grid-container-two">
          <OrgsSideBar orgs={this.props.orgs} />
          <div className="grid-item">
            <h2>Risk Register</h2>
            <p>To view the risk register, click on your company name to view the current risks.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
