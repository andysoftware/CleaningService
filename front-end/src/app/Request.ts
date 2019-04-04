export class Request{
    name:String;
    suggestedPrice:int;
	finalPrice:int;
	areaToClean:String[];
	
    constructor(request:any){
        this.name = request.name;
        this.suggestedPrice = request.suggestedPrice;
		this.finalPrice = request.suggestedPrice;//gets computed later
		this.areaToClean = request.areaToClean;
    }
}