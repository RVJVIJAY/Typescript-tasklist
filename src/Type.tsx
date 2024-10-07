export interface Statedata{
    data:string,
    setdata:React.Dispatch<React.SetStateAction<string>>
}

export interface Alldata {
    id:number,
    data:string,
}

export interface Showdata{
    alldata:Alldata[],
    setalldata:React.Dispatch<React.SetStateAction<Alldata[]>>,
    handleedit:(id:number)=>void
}