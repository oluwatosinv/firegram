import React, { useState } from 'react'
import ImageGrid from './comps/ImageGrid'
import Modal from './comps/Modal'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'

function App() {
  const [selectedImg, SetSelectedImge] = useState(null)
  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid SetSelectedImge={SetSelectedImge} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} SetSelectedImge={SetSelectedImge} />
      )}
    </div>
  )
}

export default App
