import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = () => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const q = query(
      collection(projectFirestore, 'images'),
      orderBy('createdAt', 'desc')
    )
    const unsub = onSnapshot(q, (snapshot) => {
      //console.log(snapshot.docs)
      let documents = []
      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id })
      })
      setDocs(documents)
    })
    return () => unsub()
  }, [])

  return { docs }
}

export default useFirestore
