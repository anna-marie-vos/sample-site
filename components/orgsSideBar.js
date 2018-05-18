import { mapObjIndexed, values, pipe } from 'ramda'
import Link from 'next/link'

const mapOrgNames = mapObjIndexed((org, key) => (
  <tr key={key}>
    <Link href={`/company?id=${org.id}`}>
      <a>{org.name}</a>
    </Link>
  </tr>
))
const mapOrgsToValues = pipe(mapOrgNames, values)

class OrgsSideBar extends React.Component {
  render () {
    return (
      <table className="grid-item left">
        {mapOrgsToValues(this.props.orgs)}
      </table>
    )
  }
}

export default OrgsSideBar
