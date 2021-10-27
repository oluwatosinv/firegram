import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion/dist/framer-motion'

const ImageGrid = ({ SetSelectedImge }) => {
  const { docs } = useFirestore('images')
  console.log(docs)
  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            key={doc.id}
            className='img-wrap'
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => SetSelectedImge(doc.urls)}
          >
            <motion.img
              src={doc.urls}
              alt='pics'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
