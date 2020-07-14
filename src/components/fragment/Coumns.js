import React, {Fragment} from "react";

const Columns = () => {

  const items = [
    {
      id: 0,
      name: 'Diego'
    },
    {
      id: 1,
      name: 'Carlos'
    }
  ];

  return (
    <Fragment>
      {
        items.map(item => (
          <Fragment key={item.id}>
            <td>Name</td>
            <td>{item.name}</td>
          </Fragment>
        ))
      }

    </Fragment>
  );

};

export default Columns;
