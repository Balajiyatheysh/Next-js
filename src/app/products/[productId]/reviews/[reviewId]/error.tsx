"use client"
export default function ErrorBoundry ({error}: {error : Error}){
  return <h4>{error.message}</h4>
}