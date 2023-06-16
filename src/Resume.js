import React from 'react';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Border from './Border';
import PrintButton from './PrintButton';
function Resume({resumeData}){
return(
<div className='Resume'>
<h1>RESUME</h1>
<Border>
<Skills skills={resumeData.skills}/>
</Border>
<Border>
<Experience experience={resumeData.experience}/>
</Border>

<Border>
<Education education={resumeData.education}/>
<PrintButton />
</Border>
</div>

)
}
export default Resume;