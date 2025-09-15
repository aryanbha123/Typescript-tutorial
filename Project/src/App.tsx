import Box from "./components/Box"
export default function App() {
  return (
    <>
      <Box  action={() => {alert("Hello")}} count={1} heading={"Heading"}/>
    </>
  )
}
