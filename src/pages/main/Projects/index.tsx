// Dependencies
import React from 'react';

// Components
import { MainLayout } from '../../../components/layouts/MainLayout';
import { Section } from '../../../components/Section';
import {useProjectContext} from "../../../contexts/ProjectContext";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Export page
const ProjectsPage = () => {
  const { sections, addSection } = useProjectContext();

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
      {sections.map(section => (
        <Section key={section.id} id={section.id} />
      ))}
      </DndProvider>

      <div className="w-full h-px border border-indigo-500 relative">
        <button className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-40 h-9 bg-indigo-500 rounded-3xl text-white' onClick={addSection}>+ Add Section</button>
      </div>
    </div>
  );
};

export default ProjectsPage;
