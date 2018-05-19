import { mapObjIndexed, values, pipe } from 'ramda'
import Link from 'next/link'

const mapOrgNames = mapObjIndexed((org, key) => (
  <tr key={key}>
    <td>
      <Link href={`/company?id=${org.id}`}>
        <a className="grid-container-two">
          <img className="grid-item" src={org.logo} alt="logo"/>
          <p>{org.name}</p>
        </a>
      </Link>
    </td>
  </tr>
))
const mapOrgsToValues = pipe(mapOrgNames, values)

class OrgsSideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { condition: false }
    this.eventHandler = this.eventHandler.bind(this)
  }

  eventHandler (event) {
    this.setState((prevState) => ({
      condition: !prevState.condition
    }))
  }

  render () {
    return (
      <div className="grid-item">
        <div className={this.state.condition ? "hambrg-btn active" : "hambrg-btn"}
          onClick={this.eventHandler}>
          <span />
          <span />
          <span />
        </div>
        <table className={this.state.condition ? "sidebar" : "sidebar active"}
          onClick={this.eventHandler}>
          <tbody>
            {mapOrgsToValues(this.props.orgs)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default OrgsSideBar
