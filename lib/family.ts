import {z} from 'zod';
export const childSchema=z.object({id:z.string().uuid(),name:z.string().trim().min(1).max(40)});
export const recordSchema=z.object({lessonId:z.number().int().min(1).max(365),childId:z.string().uuid(),status:z.enum(['learned','practice','again']),note:z.string().max(1200),date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/)});
export const familySchema=z.object({children:z.array(childSchema).max(12),records:z.array(recordSchema).max(4380),startDate:z.string().regex(/^\d{4}-\d{2}-\d{2}$/)}).superRefine((v,ctx)=>{const ids=new Set(v.children.map(c=>c.id));if(ids.size!==v.children.length||v.records.some(r=>!ids.has(r.childId))||new Set(v.records.map(r=>r.childId+':'+r.lessonId)).size!==v.records.length)ctx.addIssue({code:'custom',message:'Invalid family references'});});
export type Family=z.infer<typeof familySchema>;
export type Child=z.infer<typeof childSchema>;
export type LearningRecord=z.infer<typeof recordSchema>;
