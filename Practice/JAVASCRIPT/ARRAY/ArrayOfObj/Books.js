// Get all books borrowed by a member
const library = [
  { memberId: 101, name: 'Alice', books: ['Book A', 'Book B'] },
  { memberId: 102, name: 'Bob', books: null },
  { memberId: 101, name: 'Alice', books: ['Book C'] },
  { memberId: 103, name: 'Charlie', books: ['Book D', 'Book E'] }
];
// Expected Output:
// getMemberBooks(library, 101); // ['Book A', 'Book B', 'Book C']
// getMemberBooks(library, 102); // "No books borrowed"
// getMemberBooks(library, 104); // "Member not found"
// Write function: getMemberBooks(library, memberId)

function GetA(arr,n){
    let res=[]
    let found=false
    for(let i of arr){
        if(i.memberId===n){
            found=true
            if(i.books){
                res=res.concat(i.books)
            }
        }
    }
    if(!found)return 'member not found'
    return res.length>0 ? res : 'No books borrowed'
}
console.log(GetA(library,102));
