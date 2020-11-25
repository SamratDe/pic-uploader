import { useState, useEffect } from 'react'

import { projectFirestorage } from '../firebase/config'

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([])

	useEffect(() => {
		const unsub = projectFirestorage
			.collection(collection)
			.orderBy('createdAt', 'desc')
			.onSnapshot((snap) => {
				let documents = []
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id })
				})
				setDocs(documents)
			})
		return () => unsub()
	}, [collection])

	return { docs }
}

export default useFirestore
