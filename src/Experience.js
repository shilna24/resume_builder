function Experience({experience})
{
    return(
        <div>
        <h2>Experience</h2>
        <ul>
        {
            experience.map((item,index)=>(
                <li key={index}>{item.company}-{item.role} {item.years}</li>
            ))
        }
        </ul>
        </div>
    )

}
export default Experience;