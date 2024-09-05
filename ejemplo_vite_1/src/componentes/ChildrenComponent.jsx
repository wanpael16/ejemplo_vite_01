
export default function ChildrenComponent({children,otro}) {
  return (
   <>
    {children}
    <p className="clase_azul">{otro}</p>
   </>
  )
}
