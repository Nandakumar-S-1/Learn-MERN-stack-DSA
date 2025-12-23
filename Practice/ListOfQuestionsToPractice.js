// ==================== QUESTION 1 ====================
// Find all product names from nested categories using recursion
const categories = {
  name: 'Electronics',
  products: ['Laptop', 'Mouse'],
  subcategories: [
    {
      name: 'Mobile',
      products: ['iPhone', 'Samsung'],
      subcategories: [
        {
          name: 'Accessories',
          products: ['Charger', 'Case'],
          subcategories: []
        }
      ]
    },
    {
      name: 'Audio',
      products: ['Headphones', 'Speaker'],
      subcategories: []
    }
  ]
};
// Expected Output: ['Laptop', 'Mouse', 'iPhone', 'Samsung', 'Charger', 'Case', 'Headphones', 'Speaker']
// Write function: getAllProducts(category)


// ==================== QUESTION 2 ====================
// Binary search for nearest train time
const trains = ['05:00', '07:30', '09:45', '12:00', '14:30', '17:00', '20:15'];
// Expected Output:
// findTrain(trains, '09:45'); // "09:45"
// findTrain(trains, '11:00'); // "12:00"
// findTrain(trains, '21:00'); // "No trains available"
// Write function: findTrain(trains, targetTime)


// ==================== QUESTION 3 ====================
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


// ==================== QUESTION 4 ====================
// Transform student data with GPA comparison
const students = [
  [
    { id: 1, name: 'Tom', gpa: 3.5 },
    { id: 2, name: 'Jerry', gpa: 3.8 }
  ],
  [
    { id: 3, name: 'Mike', gpa: 3.2 },
    { id: 4, name: 'Sarah', gpa: 3.9 }
  ]
];
// Expected Output: Transform to include averageGpa and gpaDiff for each student
// Example: { name: 'Tom', gpa: 3.5, averageGpa: '3.60', gpaDiff: 'Below average by 0.10' }
// Write function: transformStudents(students)


// ==================== QUESTION 5 ====================
// Recursively count all employees in departments
const company = {
  name: 'HQ',
  employees: 5,
  departments: [
    {
      name: 'Engineering',
      employees: 10,
      departments: [
        { name: 'Frontend', employees: 4, departments: [] },
        { name: 'Backend', employees: 6, departments: [] }
      ]
    },
    {
      name: 'Sales',
      employees: 8,
      departments: []
    }
  ]
};
// Expected Output: 33 (5 + 10 + 4 + 6 + 8)
// Write function: countEmployees(dept)


// ==================== QUESTION 6 ====================
// Binary search for closest price
const prices = [10, 25, 40, 55, 70, 85, 100];
// Expected Output:
// findPrice(prices, 40); // 40
// findPrice(prices, 60); // 70
// findPrice(prices, 105); // "No higher price available"
// Write function: findPrice(prices, target)


// ==================== QUESTION 7 ====================
// Get all tasks for a project
const tasks = [
  { projectId: 'P1', tasks: ['Design', 'Code'] },
  { projectId: 'P2', tasks: ['Test'] },
  { projectId: 'P1', tasks: ['Deploy'] },
  { projectId: 'P3', tasks: null }
];
// Expected Output:
// getProjectTasks(tasks, 'P1'); // ['Design', 'Code', 'Deploy']
// getProjectTasks(tasks, 'P3'); // "No tasks assigned"
// getProjectTasks(tasks, 'P4'); // "Project not found"
// Write function: getProjectTasks(tasks, projectId)


// ==================== QUESTION 8 ====================
// Transform employee salary data with comparison
const employees = [
  [
    { name: 'John', salary: 50000 },
    { name: 'Jane', salary: 60000 }
  ],
  [
    { name: 'Bob', salary: 45000 },
    { name: 'Alice', salary: 70000 }
  ]
];
// Expected Output: Transform to include averageSalary and salaryDiff for each employee
// Example: { name: 'John', salary: 50000, averageSalary: '56250.00', salaryDiff: 'Below average by 6250.00' }
// Write function: transformSalaries(employees)


// ==================== QUESTION 9 ====================
// Recursively find all tags in nested blog structure
const blog = {
  title: 'Main Blog',
  tags: ['tech', 'news'],
  posts: [
    {
      title: 'Post 1',
      tags: ['javascript', 'coding'],
      posts: [
        { title: 'Comment 1', tags: ['help'], posts: [] }
      ]
    },
    {
      title: 'Post 2',
      tags: ['python'],
      posts: []
    }
  ]
};
// Expected Output: ['tech', 'news', 'javascript', 'coding', 'help', 'python']
// Write function: getAllTags(blog)


// ==================== QUESTION 10 ====================
// Binary search for appointment slot
const slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];
// Expected Output:
// findSlot(slots, '10:00'); // "10:00"
// findSlot(slots, '10:15'); // "10:30"
// findSlot(slots, '12:30'); // "No slots available"
// Write function: findSlot(slots, time)


// ==================== QUESTION 11 ====================
// Get all movies watched by user
const watchHistory = [
  { userId: 'U1', movies: ['Inception', 'Matrix'] },
  { userId: 'U2', movies: ['Avatar'] },
  { userId: 'U1', movies: ['Interstellar'] },
  { userId: 'U3', movies: null }
];
// Expected Output:
// getUserMovies(watchHistory, 'U1'); // ['Inception', 'Matrix', 'Interstellar']
// getUserMovies(watchHistory, 'U3'); // "No movies watched"
// getUserMovies(watchHistory, 'U4'); // "User not found"
// Write function: getUserMovies(watchHistory, userId)


// ==================== QUESTION 12 ====================
// Transform product ratings with average comparison
const products = [
  [
    { name: 'Product A', rating: 4.2 },
    { name: 'Product B', rating: 4.5 }
  ],
  [
    { name: 'Product C', rating: 3.8 },
    { name: 'Product D', rating: 4.7 }
  ]
];
// Expected Output: Transform to include averageRating and ratingDiff for each product
// Example: { name: 'Product A', rating: 4.2, averageRating: '4.30', ratingDiff: 'Below average by 0.10' }
// Write function: transformRatings(products)


// ==================== QUESTION 13 ====================
// Recursively sum all values in nested object
const budget = {
  amount: 1000,
  subBudgets: [
    {
      amount: 500,
      subBudgets: [
        { amount: 200, subBudgets: [] },
        { amount: 300, subBudgets: [] }
      ]
    },
    {
      amount: 400,
      subBudgets: []
    }
  ]
};
// Expected Output: 2400
// Write function: sumBudget(budget)


// ==================== QUESTION 14 ====================
// Binary search for parking slot number
const parkingSlots = [101, 105, 110, 115, 120, 125, 130];
// Expected Output:
// findParking(parkingSlots, 110); // 110
// findParking(parkingSlots, 118); // 120
// findParking(parkingSlots, 135); // "No parking available"
// Write function: findParking(parkingSlots, slot)


// ==================== QUESTION 15 ====================
// Get all courses for a student
const enrollments = [
  { studentId: 'S1', courses: ['Math', 'Physics'] },
  { studentId: 'S2', courses: ['Chemistry'] },
  { studentId: 'S1', courses: ['Biology'] },
  { studentId: 'S3', courses: null }
];
// Expected Output:
// getStudentCourses(enrollments, 'S1'); // ['Math', 'Physics', 'Biology']
// getStudentCourses(enrollments, 'S3'); // "No courses enrolled"
// getStudentCourses(enrollments, 'S4'); // "Student not found"
// Write function: getStudentCourses(enrollments, studentId)


// ==================== QUESTION 16 ====================
// Transform temperature data with average comparison
const temperatures = [
  [
    { city: 'New York', temp: 25 },
    { city: 'Boston', temp: 22 }
  ],
  [
    { city: 'Miami', temp: 30 },
    { city: 'Seattle', temp: 18 }
  ]
];
// Expected Output: Transform to include averageTemp and tempDiff for each city
// Example: { city: 'New York', temp: 25, averageTemp: '23.75', tempDiff: 'Warmer than average by 1.25' }
// Write function: transformTemperatures(temperatures)


// ==================== QUESTION 17 ====================
// Recursively collect all IDs from nested menu
const menu = {
  id: 1,
  submenus: [
    {
      id: 2,
      submenus: [
        { id: 4, submenus: [] },
        { id: 5, submenus: [] }
      ]
    },
    {
      id: 3,
      submenus: [
        { id: 6, submenus: [] }
      ]
    }
  ]
};
// Expected Output: [1, 2, 4, 5, 3, 6]
// Write function: getAllMenuIds(menu)


// ==================== QUESTION 18 ====================
// Binary search for room number
const rooms = ['A101', 'A105', 'A110', 'B201', 'B205', 'C301'];
// Expected Output:
// findRoom(rooms, 'A110'); // "A110"
// findRoom(rooms, 'A112'); // "B201"
// findRoom(rooms, 'D401'); // "No room available"
// Write function: findRoom(rooms, target)


// ==================== QUESTION 19 ====================
// Get all songs in user's playlists
const playlists = [
  { userId: 'U1', songs: ['Song A', 'Song B'] },
  { userId: 'U2', songs: ['Song C'] },
  { userId: 'U1', songs: ['Song D'] },
  { userId: 'U3', songs: null }
];
// Expected Output:
// getUserSongs(playlists, 'U1'); // ['Song A', 'Song B', 'Song D']
// getUserSongs(playlists, 'U3'); // "No songs in playlist"
// getUserSongs(playlists, 'U4'); // "User not found"
// Write function: getUserSongs(playlists, userId)


// ==================== QUESTION 20 ====================
// Transform score data with average comparison
const scores = [
  [
    { player: 'Alex', score: 850 },
    { player: 'Beth', score: 920 }
  ],
  [
    { player: 'Chris', score: 780 },
    { player: 'Dana', score: 950 }
  ]
];
// Expected Output: Transform to include averageScore and scoreDiff for each player
// Example: { player: 'Alex', score: 850, averageScore: '875.00', scoreDiff: 'Below average by 25.00' }
// Write function: transformScores(scores)


// ==================== QUESTION 1 ====================
// Flatten nested array and group by category
const products = [
  [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 }
  ],
  [
    { id: 3, name: 'Shirt', category: 'Clothing', price: 50 },
    { id: 4, name: 'Monitor', category: 'Electronics', price: 300 }
  ]
];
// Expected Output: 
// {
//   Electronics: [{ id: 1, name: 'Laptop', price: 1000 }, { id: 2, name: 'Phone', price: 500 }, { id: 4, name: 'Monitor', price: 300 }],
//   Clothing: [{ id: 3, name: 'Shirt', price: 50 }]
// }
// Write function: groupByCategory(products)


// ==================== QUESTION 2 ====================
// Find the person with highest total score across all subjects
const students = [
  { name: 'John', scores: { math: 80, science: 90, english: 85 } },
  { name: 'Jane', scores: { math: 95, science: 88, english: 92 } },
  { name: 'Bob', scores: { math: 70, science: 75, english: 80 } }
];
// Expected Output: { name: 'Jane', totalScore: 275 }
// Write function: findTopStudent(students)


// ==================== QUESTION 3 ====================
// Merge nested arrays and remove duplicates by id
const data1 = [
  [{ id: 1, value: 'A' }, { id: 2, value: 'B' }],
  [{ id: 3, value: 'C' }]
];
const data2 = [
  [{ id: 2, value: 'B' }, { id: 4, value: 'D' }],
  [{ id: 1, value: 'A' }]
];
// Expected Output: [{ id: 1, value: 'A' }, { id: 2, value: 'B' }, { id: 3, value: 'C' }, { id: 4, value: 'D' }]
// Write function: mergeAndDeduplicate(data1, data2)


// ==================== QUESTION 4 ====================
// Calculate department-wise average salary
const employees = [
  { name: 'John', dept: 'IT', salary: 60000 },
  { name: 'Jane', dept: 'HR', salary: 50000 },
  { name: 'Bob', dept: 'IT', salary: 70000 },
  { name: 'Alice', dept: 'HR', salary: 55000 },
  { name: 'Mike', dept: 'IT', salary: 65000 }
];
// Expected Output: { IT: 65000, HR: 52500 }
// Write function: avgSalaryByDept(employees)


// ==================== QUESTION 5 ====================
// Transform nested object to flat array with full path
const menu = {
  home: { dashboard: { stats: 'stats-page', reports: 'reports-page' } },
  settings: { profile: 'profile-page', security: 'security-page' }
};
// Expected Output: 
// [
//   { path: 'home.dashboard.stats', value: 'stats-page' },
//   { path: 'home.dashboard.reports', value: 'reports-page' },
//   { path: 'settings.profile', value: 'profile-page' },
//   { path: 'settings.security', value: 'security-page' }
// ]
// Write function: flattenObject(menu)


// ==================== QUESTION 6 ====================
// Find common items across all nested arrays
const arrays = [
  [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ],
  [
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' }
  ],
  [
    { id: 3, name: 'Orange' },
    { id: 5, name: 'Grape' }
  ]
];
// Expected Output: [{ id: 3, name: 'Orange' }]
// Write function: findCommonItems(arrays)


// ==================== QUESTION 7 ====================
// Count frequency of each value in nested arrays
const votes = [
  [{ vote: 'yes' }, { vote: 'no' }, { vote: 'yes' }],
  [{ vote: 'yes' }, { vote: 'abstain' }],
  [{ vote: 'no' }, { vote: 'yes' }]
];
// Expected Output: { yes: 4, no: 2, abstain: 1 }
// Write function: countVotes(votes)


// ==================== QUESTION 8 ====================
// Pivot data: Convert array of objects to object of arrays
const sales = [
  { month: 'Jan', product: 'A', amount: 100 },
  { month: 'Jan', product: 'B', amount: 150 },
  { month: 'Feb', product: 'A', amount: 120 },
  { month: 'Feb', product: 'B', amount: 130 }
];
// Expected Output: 
// {
//   A: [{ month: 'Jan', amount: 100 }, { month: 'Feb', amount: 120 }],
//   B: [{ month: 'Jan', amount: 150 }, { month: 'Feb', amount: 130 }]
// }
// Write function: pivotByProduct(sales)


// ==================== QUESTION 9 ====================
// Deep clone and modify nested objects
const original = {
  user: { name: 'John', address: { city: 'NYC', zip: '10001' } },
  settings: { theme: 'dark' }
};
// Clone and change city to 'LA' without affecting original
// Expected Output: New object with city as 'LA', original unchanged
// Write function: cloneAndModify(original, 'LA')


// ==================== QUESTION 10 ====================
// Find top N products by total sales across stores
const storeSales = [
  [
    { product: 'Laptop', sales: 5 },
    { product: 'Phone', sales: 10 }
  ],
  [
    { product: 'Laptop', sales: 8 },
    { product: 'Tablet', sales: 3 }
  ],
  [
    { product: 'Phone', sales: 7 },
    { product: 'Laptop', sales: 4 }
  ]
];
// Expected Output (top 2): [{ product: 'Laptop', totalSales: 17 }, { product: 'Phone', totalSales: 17 }]
// Write function: topNProducts(storeSales, n)


// ==================== QUESTION 11 ====================
// Build hierarchy from flat array
const flatData = [
  { id: 1, name: 'Root', parentId: null },
  { id: 2, name: 'Child1', parentId: 1 },
  { id: 3, name: 'Child2', parentId: 1 },
  { id: 4, name: 'Grandchild1', parentId: 2 }
];
// Expected Output: Nested structure with children array
// { id: 1, name: 'Root', children: [{ id: 2, name: 'Child1', children: [...] }, ...] }
// Write function: buildHierarchy(flatData)


// ==================== QUESTION 12 ====================
// Calculate running total for each category
const transactions = [
  { date: '2024-01-01', category: 'Food', amount: 50 },
  { date: '2024-01-02', category: 'Transport', amount: 20 },
  { date: '2024-01-03', category: 'Food', amount: 30 },
  { date: '2024-01-04', category: 'Transport', amount: 15 }
];
// Expected Output: 
// [
//   { date: '2024-01-01', category: 'Food', amount: 50, runningTotal: 50 },
//   { date: '2024-01-02', category: 'Transport', amount: 20, runningTotal: 20 },
//   { date: '2024-01-03', category: 'Food', amount: 30, runningTotal: 80 },
//   { date: '2024-01-04', category: 'Transport', amount: 15, runningTotal: 35 }
// ]
// Write function: addRunningTotal(transactions)


// ==================== QUESTION 13 ====================
// Nested array intersection - find students in all classes
const classes = [
  [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ],
  [
    { id: 2, name: 'Jane' },
    { id: 4, name: 'Alice' }
  ],
  [
    { id: 2, name: 'Jane' },
    { id: 5, name: 'Mike' }
  ]
];
// Expected Output: [{ id: 2, name: 'Jane' }]
// Write function: findStudentInAllClasses(classes)


// ==================== QUESTION 14 ====================
// Transform array to nested object by path
const paths = [
  { path: 'user.profile.name', value: 'John' },
  { path: 'user.profile.age', value: 30 },
  { path: 'user.settings.theme', value: 'dark' }
];
// Expected Output: 
// { user: { profile: { name: 'John', age: 30 }, settings: { theme: 'dark' } } }
// Write function: pathsToObject(paths)


// ==================== QUESTION 15 ====================
// Find missing IDs in sequence across nested arrays
const records = [
  [{ id: 1 }, { id: 2 }, { id: 4 }],
  [{ id: 5 }, { id: 7 }],
  [{ id: 8 }, { id: 10 }]
];
// Expected Output: [3, 6, 9]
// Write function: findMissingIds(records)


// ==================== QUESTION 16 ====================
// Aggregate nested data with multiple conditions
const orders = [
  { customer: 'John', items: [{ name: 'Book', price: 10, qty: 2 }] },
  { customer: 'Jane', items: [{ name: 'Pen', price: 5, qty: 3 }, { name: 'Book', price: 10, qty: 1 }] },
  { customer: 'John', items: [{ name: 'Pen', price: 5, qty: 1 }] }
];
// Expected Output: 
// {
//   John: { totalAmount: 25, itemCount: 3 },
//   Jane: { totalAmount: 25, itemCount: 4 }
// }
// Write function: aggregateOrders(orders)


// ==================== QUESTION 17 ====================
// Transpose nested 2D array of objects
const matrix = [
  [{ val: 1 }, { val: 2 }, { val: 3 }],
  [{ val: 4 }, { val: 5 }, { val: 6 }]
];
// Expected Output: 
// [
//   [{ val: 1 }, { val: 4 }],
//   [{ val: 2 }, { val: 5 }],
//   [{ val: 3 }, { val: 6 }]
// ]
// Write function: transposeMatrix(matrix)


// ==================== QUESTION 18 ====================
// Merge objects with same key, sum numeric values
const data = [
  { id: 1, name: 'Product A', sales: 100, returns: 5 },
  { id: 2, name: 'Product B', sales: 150, returns: 10 },
  { id: 1, name: 'Product A', sales: 50, returns: 2 },
  { id: 2, name: 'Product B', sales: 75, returns: 3 }
];
// Expected Output: 
// [
//   { id: 1, name: 'Product A', sales: 150, returns: 7 },
//   { id: 2, name: 'Product B', sales: 225, returns: 13 }
// ]
// Write function: mergeAndSum(data)


// ==================== QUESTION 19 ====================
// Filter nested arrays based on nested object property
const inventory = [
  [
    { item: 'Laptop', specs: { ram: 8, storage: 256 }, inStock: true },
    { item: 'Phone', specs: { ram: 6, storage: 128 }, inStock: false }
  ],
  [
    { item: 'Tablet', specs: { ram: 4, storage: 64 }, inStock: true },
    { item: 'Desktop', specs: { ram: 16, storage: 512 }, inStock: true }
  ]
];
// Expected Output: Items with ram >= 8 and inStock = true
// [
//   { item: 'Laptop', specs: { ram: 8, storage: 256 }, inStock: true },
//   { item: 'Desktop', specs: { ram: 16, storage: 512 }, inStock: true }
// ]
// Write function: filterInventory(inventory, minRam, inStock)


// ==================== QUESTION 20 ====================
// Create lookup table from nested arrays with composite key
const students = [
  [
    { grade: 10, section: 'A', name: 'John', score: 85 },
    { grade: 10, section: 'B', name: 'Jane', score: 90 }
  ],
  [
    { grade: 11, section: 'A', name: 'Bob', score: 88 },
    { grade: 10, section: 'A', name: 'Alice', score: 92 }
  ]
];
// Expected Output: 
// {
//   '10-A': [{ name: 'John', score: 85 }, { name: 'Alice', score: 92 }],
//   '10-B': [{ name: 'Jane', score: 90 }],
//   '11-A': [{ name: 'Bob', score: 88 }]
// }
// Write function: createLookupTable(students)