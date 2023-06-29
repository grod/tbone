import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  // css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Content = () => {
  return (
    <div className="w-64 h-32 flex flex-col justify-center items-center rounded-md shadow bg-blue-400  text-white">
      <div className="text-lg">T-bone's mäktiga Extension</div>
      <div className="text-xs font-mono">content.tsx</div>
    </div>
  )
}

export default Content

