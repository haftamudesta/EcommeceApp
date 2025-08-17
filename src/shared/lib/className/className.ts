type classValues=string | Record<string,boolean> | undefined | null 

export const classNames=(...args:classValues[]): string =>{
        return args.flatMap((arg)=>{
                if(!arg) return [];
                if(typeof arg==="string") return [arg];
                if(typeof arg==="object"){ 
                        return Object.entries(arg)
                        .filter(([_,value])=>Boolean(value))
                        .map(([key])=>key)
                }
                return[]
        }).join(" ")
}
