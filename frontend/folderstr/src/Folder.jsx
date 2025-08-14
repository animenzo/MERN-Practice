import React, { useState } from 'react'

const Folder = ({files}) => {
console.log(files.children);
const [expand,setExpand] = useState(false);
  return (
    <div className='folder'>
      <div className='' onClick={()=>setExpand(!expand)}>
        {
        files.isFolder ? (
            <button className={expand ? "expand":""}>{">"}</button>
        ):null
      }
      {files.name}
      </div>
      {
        files.isFolder && expand && files.children.map((exp)=>(
            <div style={{paddingLeft: "20px"}} key={exp.name}>
                <Folder files={exp} />
            </div>
        ))
      }
    </div>
  )
}

export default Folder
