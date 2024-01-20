import React from 'react'


// in functional component we use the React.memo to control the re-rendering whereas in case of class compo it was pure class extension
function MemoComp({name}) {
    console.log('Memo Component rendering')
  return (
    
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
