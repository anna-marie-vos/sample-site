import css from 'styled-jsx/css'

export default css`

/* Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––
- Grid
- Base Styles
- Typography
- Links
- Buttons
- Forms
- Lists
- Code
- Tables
- Spacing
- Utilities
- Clearing
- Media Queries
*/


/* Grid
–––––––––––––––––––––––––––––––––––––––––––––––––– */
* {
  font-family: arial, Geneva, sans-serif;
  background-color: #2C3531;
  color: #D1E8E2;
}

.grid-container-one {
  display: grid;
  grid-template-columns: auto;
}
.grid-container-two {
  display: grid;
  grid-template-columns: 30% auto;
    grid-template-rows: auto;
}
.grid-container-three {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-item {
  text-align: center;
  align-self: stretch;
}


/* Base Styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.sidebar td {
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(17, 100, 102, 0.3);
  border: solid;
  border-color: #40E0D0;
  border-width: thin;
}

.sidebar a {
  padding: 20px;
  background-color: rgba(17, 100, 102, 0.3);
  text-decoration: none;
  display: block;
}
.sidebar a:hover {
  background-color: rgba(17, 100, 102, 1);
}

/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Buttons
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Forms
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Lists
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Tables
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Spacing
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Utilities
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Clearing
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* Media Queries
–––––––––––––––––––––––––––––––––––––––––––––––––– */



/* Larger than mobile */
@media (min-width: 400px) {}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {}

/* Larger than tablet */
@media (min-width: 750px) {}

/* Larger than desktop */
@media (min-width: 1000px) {}

/* Larger than Desktop HD */
@media (min-width: 1200px) {}

`
