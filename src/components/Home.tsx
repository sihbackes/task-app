export default function Home() {
  return(
    <div>
        <button onClick={() => window.location.href = "/tasks"}>Tasks App</button>
        <button onClick={() => window.location.href = "/user/1"}>User Page</button>
    </div>
  )
}