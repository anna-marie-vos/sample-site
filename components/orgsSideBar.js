import { mapObjIndexed, values, pipe } from 'ramda'
import Link from 'next/link'

const mapOrgNames = mapObjIndexed((org, key) => (
  <li key={key}>
    <Link href={`/company?id=${org.id}`}>
      <a>{org.name}</a>
    </Link>
  </li>
))
const mapOrgsToValues = pipe(mapOrgNames, values)

class OrgsSideBar extends React.Component {
  render () {
    return (
      <ul>
        {mapOrgsToValues(this.props.orgs)}
      </ul>
    )
  }
}

export default OrgsSideBar
