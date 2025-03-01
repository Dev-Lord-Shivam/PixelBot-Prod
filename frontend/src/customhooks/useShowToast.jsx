import { toaster } from "@/components/ui/toaster"
import { useCallback } from "react"

const useShowToast = () => {
   
    const showToast = useCallback((title, type) => {
        toaster.create({
            title: `${title}`,
            type: `${type}`,
          })
    }, []);
    return showToast
}

export default useShowToast
