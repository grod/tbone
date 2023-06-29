import "./style.css"
import { useState } from "react"

function IndexPopup() {

  return (
    <div className="w-80 h-96 flex flex-col justify-center items-center shadow bg-blue-400  text-white">
      <div className="text-lg">T-bone's mäktiga Extension</div>
      <div className="text-xs font-mono">popup.tsx</div>

			<div className="mt-8">
				Ta bort den här filen om du inte vill ha någon popup
			</div>
    </div>
  )
}

export default IndexPopup
