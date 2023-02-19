import React from "react"

const Pictures = ({imgSrc}) => {
  return (
    <div class="shrink-0 snap-start">
      <img src={imgSrc}
        className="rounded-lg shadow-xl hover:shadow-cyan-700 h-56 w-auto" />
    </div>
  )
}

export default Pictures;