function Education({education})
{
    return(
        <div>
        <h2>Education</h2>
        <ul>
        {
            education.map((item,index)=>(
                <li key={index}>{item.institution} |{item.degree} | {item.year}</li>
            ))
        }
        </ul>
        </div>
        
    )
    }
export default Education;