import React, {Fragment} from 'react';


const Shaunak = (props) => {
    return(
      <Fragment>
      <div>
        This is {props.name} Component.
      </div>
      <div>
        sfasdfasdfasdafdsfasd
      </div>
      </Fragment>
    )
}

export const Shaunak2 = (props) => {
    return(
      <Fragment>
      <div>
        This is {props.name} Component.
      </div>
      <div>
          2nd component
      </div>
      </Fragment>
    )
}

// export const Shaunak2; // named export
export default Shaunak; //default export