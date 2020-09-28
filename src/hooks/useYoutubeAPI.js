import { useEffect, useState } from 'react'

const useYoutubeAPI = () => {
  const [youtubeApi, setYoutubeApi] = useState(null)

  const initGapi = () => {
    if (!window.gapi) {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/client.js'

      script.onload = () => {
        window.gapi.load('client', () => {
          window.gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)

          window.gapi.client.load('youtube', 'v3', () => {
            setYoutubeApi(window.gapi.client.youtube)
          })
        })
      }
      document.body.appendChild(script)
    }
    if (window.gapi && window.gapi.client && window.gapi.client.youtube) {
      setYoutubeApi(window.gapi.client.youtube)
    }
  }

  useEffect(() => {
    initGapi()
  }, [])

  return youtubeApi
}

export default useYoutubeAPI
