const TableData=[{
    id:1,
    title:"Buckets you own",
    heads:["Name","Budgets","Spend","Forecast"],
    data:["ACME Corp",200000,137566,34567889],
    hasButton:false

},{
    id:2,
    title:"Approvals asssigned to you",
    heads:["Bucket name","Current Budget","Requested Budget","Requested Budget"],
    data:["ACME Corp",200000,137566,34567889],
    hasButton:[{
        id:10,
        text:"Approve"
    },{
        id:11,
        text:"Reject"
    }]
},{
    id:3,
    title:"Buckets you are member of",
    heads:["Name","Budgets","Spend","Forecast"],
    data:["ACME Corp",200000,137566,34567889],
    hasButton:false
}]


const SummaryData=[{
    id:6,
    amount:400000,
    description:"Total Budgets you own"
},{
    id:7,
    amount:299762,
    description:"Total Budgets you own",
    bg:"CFE2F3"
},{
    id:8,
    amount:2874582,
    description:"Total Budgets you own",
    bg:"D6EAD1"
}]
export  {TableData,SummaryData};