"use client";

import {Check,Lightbulb} from 'lucide-react';
import {RadioGroup,RadioGroupItem} from '@/components/ui/radio-group';
import type {Lesson} from '@/lib/lessons';

export const answerLetters=['A','B','C','D'];
export function LessonQuiz({lesson,choice,submitted,onChoose,onSubmit,onRetry}:{lesson:Lesson;choice:number|null;submitted:boolean;onChoose:(choice:number)=>void;onSubmit:()=>void;onRetry:()=>void}){
  const correct=choice===lesson.quiz.correctIndex;
  return <>
    <div className="quiz-situation"><span className="content-label">NHỚ LẠI TÌNH HUỐNG</span><p>{lesson.story}</p></div>
    <h3 id="quiz-question">{lesson.quiz.question}</h3>
    <p className="quiz-instruction">Chọn một đáp án A, B, C hoặc D, rồi bấm “Trả lời”.</p>
    <RadioGroup className="quiz-options" aria-labelledby="quiz-question" value={choice===null?'':String(choice)} onValueChange={value=>onChoose(Number(value))} disabled={submitted}>
      {lesson.quiz.options.map((option,index)=><label key={index} className={'quiz-option'+(choice===index?' is-chosen':'')+(submitted&&index===lesson.quiz.correctIndex?' is-correct':'')} htmlFor={`answer-${lesson.id}-${index}`}>
        <RadioGroupItem value={String(index)} id={`answer-${lesson.id}-${index}`}/>
        <span className="answer-letter" aria-hidden="true">{answerLetters[index]}</span>
        <span className="answer-text"><span className="sr-only">{answerLetters[index]}. </span>{option}{submitted&&index===lesson.quiz.correctIndex&&<small><Check size={15}/> Lựa chọn phù hợp</small>}</span>
      </label>)}
    </RadioGroup>
    {!submitted?<button className="button quiz-submit" disabled={choice===null} onClick={onSubmit}>Trả lời <Check size={17}/></button>:<div className={'quiz-feedback'+(correct?' correct':'')} role="status">
      <strong>{correct?'Con đã chọn cách phù hợp!':'Cảm ơn con đã suy nghĩ. Mình cùng xem cách phù hợp nhé.'}</strong>
      <p>Con chọn <b>{answerLetters[choice!]}</b>. Lựa chọn phù hợp là <b>{answerLetters[lesson.quiz.correctIndex]}</b>: {lesson.quiz.options[lesson.quiz.correctIndex]}</p>
      <p>{lesson.explain}</p>
      <button className="text-button" onClick={onRetry}>Chọn lại để luyện thêm</button>
    </div>}
    <div className="parent-tip"><span><Lightbulb size={16}/> CÙNG NGHE LÝ DO CỦA CON</span><p>Hỏi “Vì sao con chọn cách đó?” trước khi bấm trả lời. Cha mẹ có thể đọc các lựa chọn cho con. Nếu con có cách khác hợp lý, hãy cùng trao đổi; đáp án gợi ý giúp mình hiểu bài, không dùng để so sánh các con.</p></div>
  </>;
}
