import { Education } from '@/type'
import React, { useState } from 'react'

type Props = {
    educations: Education[];
    setEducations: (educations: Education[]) => void;
}

const EducationForm : React.FC<Props> = ({educations, setEducations}) => {

    const [newEducation, setNewEducation] = useState<Education>(
        {
            school: '',
            degree: '',
            description: '',
            startDate: '',
            endDate: ''
        }
    );

  return (
    <div>
      
    </div>
  )
}

export default EducationForm
