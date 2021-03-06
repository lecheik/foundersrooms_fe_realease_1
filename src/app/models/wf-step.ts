import { Url } from './url';
import { StepNote } from './step-note';
import { StepComment } from './step-comment';
import { StepAttachment } from './step-attachment';
import { StepDeliverable } from './step-deliverable';
export class WfStep {
	public id:number;
	public groupName:string;
	public groupId:number;
	public groupStepId:number;
	public stepName:string;
	public stepNum:number;
	public descrip:string;
	public description:string[]=new Array();
	public del:string;
	public deliverables:string[]=new Array();
	public deliverablesModelStatus:StepDeliverable[]=new Array();
	public res:string;
	public resources:string[]=new Array();
	public recom:string;
	public recommandations:string[]=new Array();
	public links:string;
	public liens:string[]=new Array();
	public titles:string;
	public linksLabels:string[]=new Array();
	public linksTitles:Url[]=new Array();
	public notes:StepNote[]=new Array();
	public remarks:StepComment[]=new Array();
	public attachmentsMetaData:StepAttachment[]=new Array();
	public completed:boolean=false;
	public stepRatio:number=0;
}
