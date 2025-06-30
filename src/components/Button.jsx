 

const Button = ({styling,text}) => {
  return (
    
      <div className={`login py-1 lg:py-2 text-xs px-6 lg:px-8 active:scale-[0.9] ${styling}`} >{text}</div>
  )
}

export default Button