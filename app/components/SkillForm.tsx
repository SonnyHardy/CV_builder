import { Skill } from '@/type';
import React from 'react'

type Props = {
    skills: Skill[];
    setSkills: (skills: Skill[]) => void;
};

const SkillForm : React.FC<Props> = ({skills, setSkills}) => {
    return (
        <div>
            
        </div>
    )
}

export default SkillForm
