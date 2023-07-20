// Dependencies
import React, { useState, createContext, useContext, FC } from 'react';
import { v4 as uuidv4 } from "uuid";

type Widget = {
  i: string
  x: number
  y: number
  w: number
  h: number
  order: number;
  type: string;
}

type Section = {
  id: string;
  title: string;
  widgets: Widget[];
}

interface ProjectContextProps {
  sections: Section[];
  addSection: () => void;
  updateSection: (section: Section) => void;
  addWidget: (sectionId: string, type: string) => void;
  removeWidget: (sectionId: string, widgetId: string) => void;
}

const initialValues = {
  sections: [{
    id: uuidv4(),
    title: 'New Section',
    widgets: []
  }],
  addSection: () => {},
  updateSection: () => {},
  addWidget: () => {},
  removeWidget: () => {},

}

const ProjectContext = createContext<ProjectContextProps>(initialValues);

export const ProjectProvider: FC<any> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>(initialValues.sections);
  
  const addSection = () => {
    const newSection = {
      id: uuidv4(),
      title: 'New Section',
      widgets: []
    };
    
    setSections(prevSections => [...prevSections, newSection]);
  };
  
  const updateSection = (section: Section) => {
    setSections(prevSections => prevSections.map((oldSection) => oldSection.id === section.id ? section : oldSection));
  }
  
  const addWidget = (sectionId: string, type: string) => {
    const section = sections.find((sec) => sec.id === sectionId);
    
    const newWidget = {
      i: uuidv4(),
      x: 1,
      y: 10,
      w: 10,
      h: 4,
      type: type,
      order: (section?.widgets?.length ?? 0) + 1
    };
    
    setSections(prevSections => prevSections.map((section) => section.id === sectionId ? ({
      ...section,
      widgets: [...section?.widgets, newWidget]
    }) : section))
  };
 
  const removeWidget = (sectionId: string, widgetI: string) => {
    setSections(prevSections => prevSections.map(section => section.id === sectionId ? ({
      ...section,
      widgets: section.widgets.filter(widget => widget.i !== widgetI)
    }) : section))
  };
  
 
  
  const value = {
    sections,
    addSection,
    updateSection,
    addWidget,
    removeWidget,
 
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjectContext = () => {
  return useContext(ProjectContext);
}
