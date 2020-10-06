import React from 'react'
import { SuggestedList, VideoPlayer } from 'modules/videoDetail'
import { render } from 'utils/test-utils'

const mockList = jest.fn()
const mockListVideo = jest.fn()
jest.mock('hooks', () => ({
  useYoutubeAPI: jest.fn().mockImplementation(() => {
    return {
      search: { list: mockList },
      videos: { list: mockListVideo }
    }
  })
}))
describe('SuggestedList', () => {
  beforeEach(() => {
    mockList.mockClear()
  })
  it('should call list on render', async () => {
    render(<SuggestedList />)
    expect(mockList.mock.calls.length).toBe(1)
  })
})

describe('VideoPlayer', () => {
  beforeEach(() => {
    mockListVideo.mockClear()
  })
  it('should call list on render', async () => {
    render(<VideoPlayer />)
    expect(mockList.mock.calls.length).toBe(1)
  })
})
