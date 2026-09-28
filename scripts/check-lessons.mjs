import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import ts from 'typescript';

// Load the small, pure curriculum modules without a browser or generated files.
const root=fileURLToPath(new URL('../',import.meta.url));
const urls=new Map();
function moduleUrl(file){
  if(urls.has(file))return urls.get(file);
  let code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
  code=code.replace(/from ['"](.\/.+?)['"]/g,(_,name)=>`from '${moduleUrl(path.resolve(path.dirname(file),name+'.ts'))}'`);
  const url='data:text/javascript;base64,'+Buffer.from(code).toString('base64');
  urls.set(file,url);return url;
}
const {lessons}=await import(moduleUrl(path.join(root,'lib/lessons.ts')));
const {readLessonDraft}=await import(moduleUrl(path.join(root,'lib/lesson-draft.ts')));
assert.equal(lessons.length,365);
const answerCounts=[0,0,0,0];
for(const [index,lesson] of lessons.entries()){
  assert.equal(lesson.id,index+1);
  assert.ok(lesson.goal&&lesson.story&&lesson.explain&&lesson.remember);
  assert.equal(lesson.quiz.options.length,4,`Bài ${lesson.id}`);
  assert.equal(new Set(lesson.quiz.options).size,4,`Lựa chọn trùng trong bài ${lesson.id}`);
  assert.ok(lesson.quiz.options.every(option=>typeof option==='string'&&option.trim().length>0));
  assert.ok(Number.isInteger(lesson.quiz.correctIndex)&&lesson.quiz.correctIndex>=0&&lesson.quiz.correctIndex<4);
  answerCounts[lesson.quiz.correctIndex]++;
}
assert.deepEqual(answerCounts,[92,91,91,91]);
assert.equal(lessons[0].title,'Khi cần giúp đỡ, con nói thế nào?');
assert.equal(lessons[29].title,'Nhìn lại: Con đã lớn lên thế nào?');
assert.equal(lessons[364].title,'365 điều hay, hành trình còn tiếp');
for(const raw of [null,'{','null','[]',JSON.stringify({id:366,step:2}),JSON.stringify({id:1,step:6})])assert.equal(readLessonDraft(raw,365),null);
assert.deepEqual(readLessonDraft(JSON.stringify({id:1,step:4}),365),{id:1,step:2,choice:null,submitted:false,quizVersion:1});
for(const choice of [0,1,2,3]){
  const draft={id:365,step:3,choice,submitted:true,quizVersion:1};
  assert.deepEqual(readLessonDraft(JSON.stringify(draft),365),draft);
  assert.equal(readLessonDraft(JSON.stringify({...draft,submitted:false}),365).step,2);
}
assert.deepEqual(readLessonDraft(JSON.stringify({id:1,step:2,choice:2,submitted:false,quizVersion:1}),365),{id:1,step:2,choice:2,submitted:false,quizVersion:1});
for(const choice of [-1,4,'1',null]){
  const draft=readLessonDraft(JSON.stringify({id:1,step:3,choice,submitted:true,quizVersion:1}),365);
  assert.equal(draft.choice,null);assert.equal(draft.submitted,false);assert.equal(draft.step,2);
}
console.log('Passed: 365 lessons, four distinct choices each, answer positions, stable IDs, and draft resume/migration validation.');
