import { useState, useEffect } from 'react'

import {
	projectStorage,
	projectFirestorage,
	timeStamp,
} from '../firebase/config'

const useStorage = (file) => {
	const [progress, setProgress] = useState(0)
	const [error, setError] = useState(null)
	const [url, setUrl] = useState(null)

	useEffect(() => {
		// create a reference
		const storageRef = projectStorage.ref(file.name)
		// reference to a collection we want to save the document to
		const collectionRef = projectFirestorage.collection('images')

		// upload the file
		storageRef.put(file).on(
			'state_changed',
			(snap) => {
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
				setProgress(percentage)
			},
			(error) => {
				setError(error)
			},
			async () => {
				const url = await storageRef.getDownloadURL()
				const createdAt = timeStamp()
				// creating a document inside the 'image' collection
				await collectionRef.add({ url, createdAt })
				setUrl(url)
			}
		)
	}, [file])

	return { progress, url, error }
}

export default useStorage
