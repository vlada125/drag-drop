// Dependencies
import React, { FC, useCallback, useMemo, useState, useEffect } from "react";
import {  useDrop } from "react-dnd";

// Types
import { SectionProps } from "./types";
import { TOOL_TYPE } from "../ToolBar/types";
// Components
import { ToolBar } from "../ToolBar";
import { useProjectContext } from "../../contexts/ProjectContext";
import { Responsive, WidthProvider } from "react-grid-layout";

// Styles 
import './index.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

// Export component
export const Section: FC<SectionProps> = (props) => {
  const { id } = props;
  const { sections, updateSection, removeWidget } = useProjectContext();
  const sectionData = useMemo(
    () => sections.find((section) => section.id === id),
    [sections, id]
  );

  const [isEditing, setIsEditing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [layouts, setLayouts] = useState({ lg: sectionData?.widgets || [] });

  useEffect(() => {
    setLayouts({ lg: sectionData?.widgets || [] });
  }, [sectionData?.widgets]);

  useEffect(() => {
    setMounted(true);
  }, [sectionData?.widgets]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [
      TOOL_TYPE.TEMPLATES,
      TOOL_TYPE.SECTION_ONE,
      TOOL_TYPE.SECTION_TWO_ONE,
      TOOL_TYPE.SECTION_TWO_TWO,
      TOOL_TYPE.SECTION_TWO_THREE,
      TOOL_TYPE.SECTION_THREE,
      TOOL_TYPE.TEXT_BOX,
      TOOL_TYPE.TEXT_SHORT_ANSWER,
      TOOL_TYPE.TEXT_PARAGRAPH,
      TOOL_TYPE.TEXT_MULTIPLE_CHOICE,
      TOOL_TYPE.TEXT_CHECKBOXES,
      TOOL_TYPE.TEXT_DROPDOWN,
      TOOL_TYPE.TEXT_DATE,
      TOOL_TYPE.TABLE_STANDARD,
      TOOL_TYPE.TABLE_STATUS,
      TOOL_TYPE.TABLE_REQUIREMENT,
      TOOL_TYPE.IMAGE_SINGLE,
      TOOL_TYPE.IMAGE_CAROUSEL,
      TOOL_TYPE.VIDEO_STANDARD,
      TOOL_TYPE.VIDEO_YOUTUBE,
      TOOL_TYPE.SMART_TIMELINE,
      TOOL_TYPE.SMART_FILE_UPLOAD,
      TOOL_TYPE.SMART_ACTION,
      TOOL_TYPE.CHART_BAR,
      TOOL_TYPE.CHART_LINE,
      TOOL_TYPE.CHART_SCATTER,
      TOOL_TYPE.CHART_PIE,
      TOOL_TYPE.CHART_DONUT,
      TOOL_TYPE.CHART_BUBBLE,
      TOOL_TYPE.CHART_CRITICAL_PLOT,
      TOOL_TYPE.CHART_BOX_PLOT,
      TOOL_TYPE.CHART_RADAR,
    ],
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#d3f5e1";

  if (isActive) {
    backgroundColor = "#d3f5e1";
  } else if (canDrop) {
    backgroundColor = "#d3f5e180";
  }

  const handleChange = useCallback(
    (event: any) => {
      if (sectionData) {
        updateSection({
          ...sectionData,
          title: event.target.value,
        });
      }
    },
    [sectionData, updateSection]
  );

  const onLayoutChange = useCallback(
    (layout: any) => {
      if (sectionData) {
        const updatedWidgets = sectionData.widgets.map((widget) => {
          const updatedLayout = layout.find((item: any) => item.i === widget.i);
          if (updatedLayout) {
            return { ...widget, ...updatedLayout };
          }
          return widget;
        });
        updateSection({
          ...sectionData,
          widgets: updatedWidgets,
        });
      }
    },
    [sectionData, updateSection]
  );

  const generateLayoutItem = () => {
    return layouts.lg.map((item, i) => (
      <div
        key={item.i}
        style={{
          background: "#fff",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className='absolute right-4 top-4 rounded-full text-2xl text-white bg-green-900 w-8 h-8' onClick={() => removeWidget(id, item.i )}>×</button>
        {item.type}
      </div>
    ));
  };

  return (
    // <DndProvider backend={HTML5Backend}>
      <div className="container py-[11px]  px-[100px] relative">
        <div className="w-full  py-2 bg-gradient-to-r from-cyan-600 to-slate-500 justify-center items-center gap-2.5 inline-flex rounded-t-xl">
          <div className="text-center  text-4xl font-bold">
            {" "}
            {isEditing ? (
              <input
                type="text"
                className="text-center outline-none"
                value={sectionData?.title}
                onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur()}
                onKeyDown={(e) => handleKeyDown(e)}
                autoFocus
              />
            ) : (
              <h2
                onDoubleClick={() => handleDoubleClick()}
                className="text-white"
              >
                {sectionData?.title}
              </h2>
            )}
          </div>
        </div>
        <div className="w-full flex bg-white p-4 rounded-b-xl">
          <div className="bg-green-500 min-w-full bg-opacity-10 border-[3px] border-dashed border-green-500 rounded-lg relative">
            <div className="w-full h-full flex flex-row p-10 gap-4" ref={drop} style={{background: backgroundColor}}>
              {!sectionData?.widgets?.length ? (
                <p className="text-center text-white text-5xl font-medium m-auto">
                  Add Items Here
                </p>
              ) : (
                <ResponsiveReactGridLayout
                  className="widget-container"
                  style={{width: "100%"}}
                  rowHeight={30}
                  cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                  layouts={layouts}
                  onLayoutChange={onLayoutChange}
                  useCSSTransforms={mounted}
                  measureBeforeMount={false}
                  // isDroppable={true}
                >
                  {generateLayoutItem()}
                </ResponsiveReactGridLayout>
              )}
            </div>
          </div>

          <ToolBar />
        </div>
      </div>
    // </DndProvider>
  );
};
