import Link from 'next/link'
import OrgsSideBar from '../components/orgsSideBar'
import TopMenu from '../components/topMenu'
const seedData = require('../db/orgs.json')

class Index extends React.Component {
  static async getInitialProps () {
    const orgs = {}
    seedData.data.map(org => {
      orgs[org.id] = {
        'id': org.id,
        'name': org.name
      }
    })
    return { orgs }
  }

  render () {
    return (
      <div className="grid-container-one">
        <TopMenu />
        <div className="grid-container-two">
          <OrgsSideBar orgs={this.props.orgs} />
          <div className="grid-item">
            <h1>Hello Next.js</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
