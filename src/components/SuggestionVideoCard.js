import React from 'react'

const SuggestionVideoCard = ({snippet}) => {
  return (
    <div className="flex gap-4 mb-4" >
    <div className="w-auto ">
      <img
        className="rounded-lg h-28"
        src={snippet.thumbnails.medium.url}
        alt="suggestion"
      />
    </div>
    <div className="flex flex-col w-1/3">
      <p className=" font-bold">{snippet.title}</p>
      <p className="flex flex-col text-gray-400">
        <span>{snippet.channelTitle}</span>
      </p>
    </div>
  </div>
  )
}

export default SuggestionVideoCard