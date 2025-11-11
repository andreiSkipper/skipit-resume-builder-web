'use client';

import dayjs from 'dayjs';
import { IExperience } from '@/interfaces/IExperience';
import SkillButtonList from '@/components/SkillButtonList';
import { calculatePeriod } from '@/lib/helpers';
import Image from 'next/image';

interface ExperienceItemProps {
  experience: IExperience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = dayjs(experience.start_date).format('MMM/YYYY');
  const endDate = experience.end_date ? dayjs(experience.end_date).format('MMM/YYYY') : 'Present';
  const period = experience.start_date
    ? calculatePeriod(
        experience.start_date as Date,
        experience.end_date ? (experience.end_date as Date) : new Date()
      )
    : null;

  return (
    <div className="lg:ps-8 lg:border-s lg:border-[#f1f1f1]">
      <div className="flex flex-col lg:flex-row">
        {experience.logo && (
          <div className="group relative flex items-center float-start w-[100px] h-[100px] mx-auto mb-4 p-3 overflow-hidden rounded-full border-2 border-white bg-[#1a1a1a] hover:bg-white lg:mx-0 lg:mb-0 lg:me-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${experience.logo}`}
              alt={experience.company}
              width={100}
              height={100}
              priority
              className="transition-transform duration-300 group-hover:brightness-0 group-hover:scale-120"
            />
          </div>
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">{experience.company}</h3>
          <h4 className="text-md font-medium">{experience.position}</h4>
          <p className="text-sm mt-auto">
            <span className="me-1">{startDate}</span>-<span className="mx-1">{endDate}</span>
            {period && <span> ({period})</span>}
          </p>
          <p className="text-sm">{experience.location}</p>
        </div>
      </div>
      {!!experience.skills && !!experience.skills.length && (
        <div className="flex flex-wrap gap-3 justify-center mt-4 lg:justify-start">
          <SkillButtonList skills={experience.skills} hideIcons />
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
