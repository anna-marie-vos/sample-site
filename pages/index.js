import Link from 'next/link'
import OrgsSideBar from '../components/orgsSideBar'
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
      <div className="grid-container">
        <OrgsSideBar orgs={this.props.orgs} />
        <div>
          <Link href="/about">
            <a>About Page</a>
          </Link>
          <p>Hello Next.js</p>
        </div>
      </div>
    )
  }
}

export default Index
