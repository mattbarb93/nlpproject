import { postData } from '../src/client/js/postData'
const fetch = require('jest-fetch-mock');

describe('testing api', () => {
    //Resets the tests, and removes all mocked values
    beforeEach(() => {
        fetch.resetMocks()
    })

    //EXAMPLE. TWEAK IT OUT LATER!
    it('resolves with function and timeout', async () => {
        fetch.mockResponseOnce(
          () =>
            new Promise(resolve => setTimeout(() => resolve(), 100))
        )
        try {
          const response = await postData('http://localhost:8081/sentiment', {text: "test postData function"})
          expect(response).toEqual(({
            polarity: "neutral",
            subjectivity: "subjective",
            text: "test postData function",
            polarity_confidence: 0.6688255071640015,
            subjectivity_confidence: 0.9996673087051509
        }))
        } catch (e) {
          throw e
        }
      })
    
})