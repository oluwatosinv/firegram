import { useEffect, useState } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'

const useStorage = (file) => {
  const [error, setError] = useState(0)
  const [progress, setProgress] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name)
    const uploadTask = uploadBytesResumable(storageRef, file)
    //const collectionRef = projectFirestore.collection('images')

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      async () => {
        const urls = await getDownloadURL(uploadTask.snapshot.ref)

        setUrl(urls)
        const createdAt = timestamp
        // console.log(createdAt)
        // console.log(urls)
        addDoc(collection(projectFirestore, 'images'), {
          urls,
          createdAt,
        })
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
