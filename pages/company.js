const orgData = require('../db/orgs.json')
const riskData = require('../db/riskRegisters.json')


class Company extends React.Component {
  static async getInitialProps () {
    // const id = this.props.url.query.id
    const id=1
    const orgs = {}
    orgData.data.map(org => {
      orgs[org.id] = {
        'id': org.id,
        'name': org.name
      }
    })
    const org = orgs[id]
    const risks = riskData
    return { org, risks }
  }

  render () {
    console.log('this is comany props', this.props)
    return (
      <div>
        <p>This is the company risk register</p>
      </div>
    )
  }
}

export default Company
