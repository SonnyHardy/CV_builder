import { Experience, PersonalDetails } from '@/type';
import React from 'react';
import Image from 'next/image';
import { BriefcaseBusiness, Mail, MapPinCheckInside, Phone } from 'lucide-react';

type Props = {
    personalDetails: PersonalDetails;
    file: File | null;
    theme: string;
    experiences: Experience[];
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {day: '2-digit', month: 'short', year: 'numeric'};
    return date.toLocaleDateString('fr-FR', options);
}

const CVPreview: React.FC<Props> = ({personalDetails, file, theme, experiences}) => {

    return (
        <div className={`flex p-16 w-[1000px] h-[1200px] shadow-lg`} data-theme={theme}>
            <div className='flex flex-col w-1/3'>

                <div className='h-80 rounded-full border-8 overflow-hidden border-primary'>
                    {file && (
                        <Image
                            src={URL.createObjectURL(file)}
                            width={300}
                            height={300}
                            className='w-full h-full rounded-lg object-cover'
                            alt="Profil image"
                            onLoadingComplete={() => {
                                if (typeof file !== 'string'){
                                    URL.revokeObjectURL(URL.createObjectURL(file))
                                }
                            }}
                        />
                    )}
                </div>

                <div className='mt-4 flex flex-col w-full'>
                    <div>
                        <h1 className='uppercase font-bold my-2'>
                            Contact
                        </h1>

                        <ul className='space-y-2'>
                            <li className='flex'>
                                <div className='break-all text-sm relative'>
                                    <div className='ml-8'>{personalDetails.phone}</div>
                                    {personalDetails.phone && (
                                        <div className='absolute left-0 top-0'>
                                            <Phone className='w-5 text-primary'/>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='break-all text-sm relative'>
                                    <div className='ml-8'>{personalDetails.email}</div>
                                    {personalDetails.email && (
                                        <div className='absolute left-0 top-0'>
                                            <Mail className='w-5 text-primary'/>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li className='flex'>
                                <div className='break-all text-sm relative'>
                                    <div className='ml-8'>{personalDetails.address}</div>
                                    {personalDetails.address && (
                                        <div className='absolute left-0 top-0'>
                                            <MapPinCheckInside className='w-5 text-primary'/>
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-2/3 ml-8'>
                <div className='w-full flex flex-col space-y-4'>
                    <h1 className='uppercase text-xl'>
                        {personalDetails.fullName}
                    </h1>
                    <h2 className='uppercase text-5xl text-primary font-bold'>
                        {personalDetails.postSeeking}
                    </h2>
                    <p className='break-all w-full text-sm'>
                        {personalDetails.description}
                    </p>
                </div>

                <section className='w-full h-fit p-5'>
                    <div>
                        <h1 className='uppercase font-bold mb-2'>Experiences</h1>
                        <ul className='steps steps-vertical space-y-3'>
                            {experiences.map((exp, index) => (
                                <li className='step step-primary' key={index}>
                                    <div className='text-left'>
                                        <h2 className='flex text-md uppercase'>
                                            <BriefcaseBusiness className='w-5' />
                                            <span className='ml-2'>{exp.jobTitle}</span>
                                        </h2>

                                        <div className='text-sm my-2'>
                                            <span className='badge badge-primary'>{exp.companyName}</span>
                                            <span className='italic ml-2'>
                                                {formatDate(exp.startDate)} au {formatDate(exp.endDate)}
                                            </span>
                                        </div>

                                        <p className='text-sm'>{exp.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CVPreview
