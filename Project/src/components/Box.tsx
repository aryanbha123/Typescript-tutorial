type BoxProps = {
  heading: string
  count?: 1 ,
  action : () => void
}
const Box = (props: BoxProps) => {
  return (
    <div style={{padding:"1rem"}}>
      <h1>{props.heading}</h1>
      <span>{props.count}</span>
    </div>
  )
}

export default Box
