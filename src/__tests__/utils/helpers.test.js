import { decodeText, formatVideosResponse, formatSingleVideo } from 'utils/helpers'

const videosResponse = {
  result: {
    items: [
      {
        kind: 'something',
        id: {
          name: 'complex',
          kind: 'youtube',
          videoId: '1'
        },
        snippet: {
          title: 'videoTitle',
          description: 'videoDescription',
          thumbnails: {
            high: {
              url: 'thumbnailUrl',
              width: 480,
              height: 360
            }
          }
        },
        statistics: { viewCount: 0, likeCount: 0 }
      }
    ]
  }
}

describe('utils/helpers', () => {
  it('should decode de Text Correctly', () => {
    const name = 'Wizeline&#39;s'
    expect(decodeText(name)).toMatch("Wizeline's")
  })

  describe('formatVideosResponse', () => {
    it('should format correctly ', () => {
      const result = [
        {
          title: 'videoTitle',
          description: 'videoDescription',
          videoId: '1',
          thumbnail: 'thumbnailUrl'
        }
      ]

      expect(formatVideosResponse(videosResponse)).toEqual(result)
    })
    it('should return empty array if passed no response', () => {
      expect(formatVideosResponse()).toEqual([])
    })
  })

  describe('formatSingleVideo', () => {
    it('should format correctly ', () => {
      const result = {
        title: 'videoTitle',
        description: 'videoDescription',
        videoId: '1',
        thumbnail: 'thumbnailUrl',
        viewCount: 0,
        likeCount: 0
      }

      expect(formatSingleVideo(videosResponse)).toEqual(result)
    })
    it('should return empty object if passed no response', () => {
      expect(formatSingleVideo()).toEqual({})
    })
  })
})
// export const decodeText = (text) => {
//   return text.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
//     const num = parseInt(numStr, 10)
//     return String.fromCharCode(num)
//   })
// }

// export const formatVideosResponse = (response) => {
//   const {
//     result: { items }
//   } = response

//   return items.map((item) => {
//     const {
//       id: { videoId },
//       snippet: {
//         title,
//         description,
//         thumbnails: {
//           high: { url: thumbnail }
//         }
//       }
//     } = item
//     return { title, description, videoId, thumbnail }
//   })
// }

// export const formatSingleVideo = (videoInfo) => {
//   const {
//     result: { items }
//   } = videoInfo
//   let formattedInfo = {}
//   if (items.length > 0) {
//     const currentVideo = items[0]
//     const {
//       id: { videoId },
//       snippet: {
//         title,
//         description,
//         thumbnails: { high = {} }
//       },
//       statistics: { viewCount, likeCount }
//     } = currentVideo
//     formattedInfo = {
//       videoId,
//       title,
//       description,
//       viewCount,
//       likeCount,
//       thumbnail: high.url
//     }
//   }
//   return formattedInfo
// }
