var _ = require('underscore')
var r=[
    {id:1},
    {id:2},
    {id:3}
]
var s=[
    {id:4},
    {id:1},
    {id:5},
    {id:2},
    {id:3}
]

r= [...new Set([...r, ...s])];

// for(i=0;i<s.length;i++)
// {
//     r.push(s[i]);
// }
console.log('Before removing duplicates',r)

if(r[0].id==r[4].id)
console.log('yes');
else
console.log("No")

// for(i=0;i<r.length;i++)
// {
//     for(j=i+1;j<r.length;j++)
//     {
//         if(r[i].id==r[j].id)
//         r.splice(j,1)
//     }
// }

var r = _.uniq(r, 'id');

console.log('After removing duplicates',r)

var matches=[
    { matchFeedID: 200096 },
    { matchFeedID: 203887 },
    { matchFeedID: 199339 },
    { matchFeedID: 200096 },
    { matchFeedID: 203887 },
    { matchFeedID: 203559 },
    { matchFeedID: 200682 }
  ]

matches= _.uniq(matches, 'matchFeedID');
console.log(matches)
