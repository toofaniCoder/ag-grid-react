# React + Vite

## AG Grid `valueGetter` Examples (Students Context)

Below are practical `valueGetter` examples for AG Grid, tailored to a student data scenario:

### 1. Basic Field Access (Name)

```js
{
    headerName: 'Name',
    valueGetter: (params) => params.data.name
}
```

### 2. Combine First and Last Name

```js
{
    headerName: 'Full Name',
    valueGetter: (params) => `${params.data.firstName} ${params.data.lastName}`
}
```

### 3. Calculate Total Marks

```js
{
    headerName: 'Total Marks',
    valueGetter: (params) =>
        params.data.math + params.data.science + params.data.english
}
```

### 4. Conditional Pass/Fail

```js
{
    headerName: 'Result',
    valueGetter: (params) => {
        const total = params.data.math + params.data.science + params.data.english;
        return total >= 120 ? 'Pass' : 'Fail';
    }
}
```

### 5. Grade Based on Average

```js
{
    headerName: 'Grade',
    valueGetter: (params) => {
        const avg = (params.data.math + params.data.science + params.data.english) / 3;
        if (avg >= 90) return 'A';
        if (avg >= 75) return 'B';
        if (avg >= 60) return 'C';
        return 'D';
    }
}
```

### 6. Show Age from Birth Year

```js
{
    headerName: 'Age',
    valueGetter: (params) => new Date().getFullYear() - params.data.birthYear
}
```

### 7. Attendance Percentage

```js
{
    headerName: 'Attendance %',
    valueGetter: (params) => {
        const { presentDays, totalDays } = params.data;
        return ((presentDays / totalDays) * 100).toFixed(1) + '%';
    }
}
```

### 8. Scholarship Eligibility

```js
{
    headerName: 'Scholarship',
    valueGetter: (params) => {
        const avg = (params.data.math + params.data.science + params.data.english) / 3;
        return avg > 85 && params.data.attendance > 90 ? 'Eligible' : 'Not Eligible';
    }
}
```

## Data

```json
const studentData = [
  {
    name: "Aarav Mehta",
    firstName: "Aarav",
    lastName: "Mehta",
    math: 85,
    science: 92,
    english: 78,
    birthYear: 2008,
    presentDays: 180,
    totalDays: 200,
    attendance: 90
  },
  {
    name: "Siya Kapoor",
    firstName: "Siya",
    lastName: "Kapoor",
    math: 76,
    science: 65,
    english: 70,
    birthYear: 2009,
    presentDays: 195,
    totalDays: 200,
    attendance: 97
  },
  {
    name: "Rahul Sharma",
    firstName: "Rahul",
    lastName: "Sharma",
    math: 90,
    science: 88,
    english: 95,
    birthYear: 2007,
    presentDays: 170,
    totalDays: 200,
    attendance: 85
  },
  {
    name: "Ananya Joshi",
    firstName: "Ananya",
    lastName: "Joshi",
    math: 60,
    science: 58,
    english: 62,
    birthYear: 2008,
    presentDays: 185,
    totalDays: 200,
    attendance: 92
  },
  {
    name: "Kabir Khan",
    firstName: "Kabir",
    lastName: "Khan",
    math: 45,
    science: 50,
    english: 40,
    birthYear: 2010,
    presentDays: 160,
    totalDays: 200,
    attendance: 80
  }
];
```
