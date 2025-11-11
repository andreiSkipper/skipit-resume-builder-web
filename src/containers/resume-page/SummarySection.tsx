'use client';

import SkillButtonList from '@/components/SkillButtonList';
import SkillFilterList from '@/components/SkillFilterList';
import Summary from '@/components/Summary';
import skillStore from '@/stores/skillStore';
import userStore from '@/stores/userStore';

const SummarySection = () => {
  const { user } = userStore;
  const { skills } = skillStore;

  return (
    <div className="h-full mb-10 text-center lg:sticky lg:top-10 lg:w-[50%] lg:mb-0 lg:pe-8 lg:flex lg:flex-col lg:items-end lg:text-end">
      {user && <Summary user={user} />}
      {skills.length > 0 && (
        <>
          <h2 className="sticky top-0 bg-[#1a1a1a] z-10 text-2xl font-bold mt-4 py-4 lg:mt-0">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3 w-full lg:justify-end">
            <SkillFilterList />
            <div className="pt-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                <SkillButtonList skills={skills} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SummarySection;
