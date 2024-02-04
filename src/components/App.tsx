import { useState } from 'react'

import BearBlowKiss from '../gifs/bear_blow_a_kiss.gif'
import BearKiss from '../gifs/bear_kiss.gif'

const lines: string[] = [
  'No',
  'Are you sure?',
  'Really sure?',
  'Pookie please',
  'Dont do this to me',
  'Im gonna cry...',
  "You're breaking my heart :("
]

const App = () => {
  const [count, setCount] = useState<number>(0)

  const [yes, setYes] = useState<boolean>(false)

  const fontSize = count * 20 + 16

  const handleNoClick = () => {
    setCount(count + 1)
  }

  const handleYesClick = () => {
    setYes(true)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white">
      {yes ? (
        <>
          <img src={BearKiss} alt="bear_kiss" className="h-80" />
          <div className="mt-4 text-2xl">Ok Yay!</div>
        </>
      ) : (
        <>
          <img src={BearBlowKiss} alt="bear_with_heart" />
          <div className="mt-4 text-2xl">Will you be my Valentine?</div>
          <div className="mt-4 space-x-4">
            <button
              type="button"
              className="bg-green-400 px-4 py-2"
              onClick={handleYesClick}
              style={{ fontSize: fontSize }}
            >
              Yes
            </button>
            <button
              type="button"
              className="bg-red-400 px-4 py-2"
              onClick={handleNoClick}
            >
              {lines[count % 7]}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
