const fileSystem = {
  name: 'root',
  files: ['file1.txt', 'file2.txt'],
  folders: [
    {
      name: 'docs',
      files: ['doc1.pdf', 'doc2.pdf'],
      folders: [
        {
          name: 'personal',
          files: ['resume.docx'],
          folders: [],
        },
      ],
    },
    {
      name: 'images',
      files: ['photo1.jpg', 'photo2.jpg'],
      folders: [],
    },
  ],
};

function GetAllFiles(fileSystem){
    let res=[]
    if(fileSystem.files){
        res=res.concat(fileSystem.files)
    }

    if(fileSystem.folders && fileSystem.folders.length>0){
        for(let i of fileSystem.folders){
            res=res.concat(GetAllFiles(i))
        }
    }
    return res
}
console.log(GetAllFiles(fileSystem));


// expected output

// [
//   'file1.txt',
//   'file2.txt',
//   'doc1.pdf',
//   'doc2.pdf',
//   'resume.docx',
//   'photo1.jpg',
//   'photo2.jpg'
// ]