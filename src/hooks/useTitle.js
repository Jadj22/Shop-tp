import { useEffect } from "react"


const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} | Shop `
    },[title])

  return null
}

export default useTitle
