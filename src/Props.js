function Props(){
    const studentName="ibro"
    return(
        <div>
            <Greeting name={studentName}/>
        </div>
    )
}
function Greeting(props){
    return(
        <div>
            <h1>Hellow!{props.name}</h1>
        </div>
    )
}
export default Props;