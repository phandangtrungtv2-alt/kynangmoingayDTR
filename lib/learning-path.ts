import type {LearningRecord} from './family';
import type {Lesson} from './lessons';

export function learningPath(lessons:Lesson[],records:LearningRecord[]){
  const byLesson=new Map<number,{record:LearningRecord;order:number}>();
  records.forEach((record,order)=>{
    const previous=byLesson.get(record.lessonId);
    if(!previous||record.date>=previous.record.date)byLesson.set(record.lessonId,{record,order});
  });
  const learnedIds=new Set(byLesson.keys());
  const recent=[...byLesson.entries()]
    .sort((a,b)=>b[1].record.date.localeCompare(a[1].record.date)||b[1].order-a[1].order)
    .flatMap(([id,{record}])=>{const lesson=lessons.find(l=>l.id===id);return lesson?[{lesson,record}]:[]});
  const upcoming=lessons.filter(l=>!learnedIds.has(l.id));
  return{learnedIds,recent,upcoming,next:upcoming[0]||null,total:recent.length};
}
