import React from "react";


const Loading = () => {
  return (
    <div>
      bg="transparent"
      d="flex"
      align="center"
      justify="center"
      pos="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
      style={{ zIndex: -1 }}
    
    </div>
  );
};

// const LoadingComponent = () => (
//     <Div d="flex" align="center" justify="center" h="100%">
//         <Icon name="Loading3" size="20px" color="brand500" />
//     </Div>
// )

export default Loading;
