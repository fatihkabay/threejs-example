import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate("/moving-car")}>Moving Car</button>
    </div>
  )
}

export default Home