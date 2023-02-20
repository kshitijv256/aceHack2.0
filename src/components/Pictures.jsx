import React from "react"

const Pictures = ({imgSrc}) => {
  return (
    <div class="shrink-0 md:my-0 my-8">
      <img src={imgSrc}
        className="rounded-lg shadow-2xl hover:shadow-cyan-700 max-h-64" />
    </div>
  )
}

export default Pictures;