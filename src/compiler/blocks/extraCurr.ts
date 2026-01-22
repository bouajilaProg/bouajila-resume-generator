import { ExtraCurricularActivity } from "../../../types/extraCurr.type";

function ExtraCurrBlock(activity: ExtraCurricularActivity): string {
  const date = activity.endDate
    ? `${activity.startDate} - ${activity.endDate}`
    : `${activity.startDate} - Present`;
  return `
    #experience(
  title: "${activity.activityName}",
  titleRole: none, 
  description: none, 
  location: none, 
  date: "${date}",
  tags: none  
  )
  `
}

export { ExtraCurrBlock };
