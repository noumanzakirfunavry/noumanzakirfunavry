import { SideListProps } from "apps/frontend/types/Types"
import { FC } from "react"

const SideList:FC<SideListProps> = ({type}) =>{
    return (
        <>
          {
            type === "numbered" && (
              <><h1>side list</h1></>
            )
          }
          {
            type === "simple" && (
              <>Simple</>
            )
          }
          
        </>
    )
}

export default SideList