import css from 'styled-jsx/css'

export default css`

/* Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––
- Grid
- sidebar Styles
- riksTable Styles
- Media Queries
*/


/* Grid
–––––––––––––––––––––––––––––––––––––––––––––––––– */
* {
  font-family: arial, Geneva, sans-serif;
  background-color: #D1E8E2;
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

/* sidebar styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.sidebar td {
  border: solid;
  border-color: #40E0D0;
  border-width: thin;
  border-radius: 3px;
  box-shadow: 0px 1px 4px -2px #333;

  text-align: center;
  text-transform: uppercase;
}
.sidebar a {
  padding: 10px;
  background-color: rgba(17, 100, 102, 0.1);
  text-decoration: none;
}
.sidebar p{
  background-color: rgba(17, 100, 102, 0.0);
}
.sidebar a:hover {
  background-color: rgba(17, 100, 102, 0.5);
}

.sidebar img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

/* risksTable Styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1 {
  text-transform: uppercase;

}
h2 {
    margin: 1.2em;
  font-weight: normal;
  text-transform: uppercase;
}
.risksTable th{
  margin: 0.2em;
  background-color: rgba(17, 100, 102, 0.3);
  padding: 10px;
  border: solid;
  border-color: #40E0D0;
  border-width: thin;

  text-transform: uppercase;
  font-weight: normal;
  font-size: 110%;
}
.risksTable td{
  margin: 0.2em;
  background-color: rgba(17, 100, 102, 0.1);
  padding: 10px;

  border: solid;
  border-color: #40E0D0;
  border-width: thin;
}

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
