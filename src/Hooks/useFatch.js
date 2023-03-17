import { useEffect, useState } from "react";

export function useFetch(url, method = 'get') {
  const [response, setResponse] = useState({
    data: null,
    loading: true
  })

  useEffect(function () {
    fetch(url, { method })
      .then(res => res.json())
      .then(res => setResponse({
        data: res,
        loading: false
      }))
  }, [url, method])

  return response
}