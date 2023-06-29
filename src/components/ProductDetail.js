import { useParams } from "react-router-dom"

export const ProductDetail = () => {
  const params = useParams()
  return (
    <div className="components">
            <div> ProductDetail {params.id}</div>
    </div>
  )
}
