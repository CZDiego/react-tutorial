import React from "react";

const MemoComp = ({name}) => {

  console.log('Rendering memo');

  return (
    <div>
      Memo Component {name}
    </div>
  );

};

export default React.memo(MemoComp);
