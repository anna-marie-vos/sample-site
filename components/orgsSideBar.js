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
  render () {
    return (
      <table className="sidebar">
        {mapOrgsToValues(this.props.orgs)}
      </table>
    )
  }
}

export default OrgsSideBar
