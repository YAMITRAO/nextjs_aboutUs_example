import Link from "next/link"

const aboutus = () => {
    const details = [
        { id : 1, name: 'Yash', role: 'Senior Developer'},
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
      ]
    return (
      <>
      {details.map((val)=>{
        return <div> <Link href={`/aboutus/${val.id}`}>{val.name}</Link></div>
      })}
      </>
    )
  }
  
  export default aboutus