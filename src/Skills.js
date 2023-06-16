function Skills({skills})
{
return(
<div>
<h2>Skills</h2>
<ul>
{
    skills.map((skill,index1)=>(
        <li key={index1}>{skill}</li>
    ))
}
</ul>
</div>

)
}
export default Skills;