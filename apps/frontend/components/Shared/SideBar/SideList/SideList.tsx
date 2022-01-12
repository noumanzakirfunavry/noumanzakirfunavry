import { SideListProps } from "apps/frontend/types/Types"
import { FC } from "react"

const SideList:FC<SideListProps> = ({type}) =>{
    return (
        <>
          {
            type === "numbered" && (
              <>Numbered</>
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