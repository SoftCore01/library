export const staffModel = `
CREATE TABLE IF NOT EXISTS staff(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  surname TEXT NOT NULL,
  otherNames TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  gender VARCHAR(1) NOT NULL,
  staffID INTEGER NOT NULL,
  isCollegeStaff INTEGER NOT NULL,
  isTeaching INTEGER NOT NULL,
  facultyOrUnit VARCHAR(255) NOT NULL,
  department VARCHAR(255),
  address TEXT NOT NULL,
  phoneNumber VARCHAR(11) NOT NULL,
  createdAt DATETIME DEFAULT (datetime('now', 'localtime')) NOT NULL,
  membershipFeePaidAt DATETIME DEFAULT (datetime('now', 'localtime')),
  membershipExpiresOn DATETIME DEFAULT (datetime('now', 'localtime'))
);
`;
