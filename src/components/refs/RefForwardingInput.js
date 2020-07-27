import React from "react";

/*
//traditional way
function RefForwardingInput (){

  return (
    <div>
      <input type="text"/>
    </div>
  );

}
*/

//new way
const RefForwardingInput = React.forwardRef((props, ref) => {

  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  );

});
export default RefForwardingInput;
