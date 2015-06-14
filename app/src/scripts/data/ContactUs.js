const IssueTypes = [
    {value: 1, label: "Technical Support"},
    {value: 2, label: "Idea Submission"},
    {value: 3, label: "Orders: Where is my FlyFit"},
    {value: 4, label: "Sales: What to buy"}
];

const IssueSubTypes = {
    1: [ 
        {value: 1, label: "FlyFit App"},
        {value: 2, label: "Hardware"}
    ], 
    2: [
        {value: 3, label: "Other Ideas"},
        {value: 4, label: "Sponsorship Information"},
        {value: 5, label: "Suggestion for product & Promotion"},
    ],
    3: [
        {value: 6, label: "Delivery Issue"},
        {value: 7, label: "Lost or Missing items"}
    ],
    4: [
        {value: 8, label: "Product Recommendation"},
        {value: 9, label: "Order Online"}
    ]
};

module.exports = {
    IssueTypes,
    IssueSubTypes
};