export type LessonDraft={id:number;step:number;choice:number|null;submitted:boolean;quizVersion:1};

export function readLessonDraft(raw:string|null,lessonCount:number):LessonDraft|null{
  try{
    const value=JSON.parse(raw||'null');
    if(!value||!Number.isInteger(value.id)||value.id<1||value.id>lessonCount||!Number.isInteger(value.step)||value.step<0||value.step>5)return null;
    const choice=value.quizVersion===1&&Number.isInteger(value.choice)&&value.choice>=0&&value.choice<4?value.choice:null;
    const submitted=choice!==null&&value.submitted===true;
    return {id:value.id,step:!submitted&&value.step>=3?2:value.step,choice,submitted,quizVersion:1};
  }catch{return null;}
}
