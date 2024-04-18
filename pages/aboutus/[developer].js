import { useRouter } from "next/router"

const developer = () => {
  const details = [
    { id : 1, name: 'Yash', role: 'Senior Developer'},
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  ]

  const routeValue = useRouter();
  const urlId = routeValue.query.developer;
  const filteredArray = details.filter( (val) => {
    return +urlId === val.id
  });

  console.log(filteredArray);
  return (
    <>
    
    {filteredArray.length > 0  && <h1>Name of Employee : {filteredArray[0].name}</h1>}
    { filteredArray.length > 0  && <h2>Role of Employee : {filteredArray[0].role}</h2>}
    {filteredArray.length == 0  && <p>No Employee with this Id</p> }
    </>

  )
}

export default developer