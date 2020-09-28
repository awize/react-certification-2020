export const decodeText = (text) => {
  return text.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
    const num = parseInt(numStr, 10)
    return String.fromCharCode(num)
  })
}

export const formatVideosResponse = (response) => {
  const {
    result: { items }
  } = response

  return items.map((item) => {
    const {
      id: { videoId },
      snippet: {
        title,
        description,
        thumbnails: {
          high: { url: thumbnail }
        }
      }
    } = item
    return { title, description, videoId, thumbnail }
  })
}

export const formatSingleVideo = (videoInfo) => {
  const {
    result: { items }
  } = videoInfo
  let formattedInfo = {}
  if (items.length > 0) {
    const currentVideo = items[0]
    const {
      snippet: {
        title,
        description,
        thumbnails: { high }
      },
      statistics: { viewCount, likeCount }
    } = currentVideo
    formattedInfo = {
      title,
      description,
      viewCount,
      likeCount,
      high
    }
  }
  return formattedInfo
}
