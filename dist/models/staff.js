export const staffModel = `
CREATE TABLE IF NOT EXISTS staff(
  staffID INTEGER NOT NULL,
  gender VARCHAR(1) NOT NULL,
  isCollegeStaff INTEGER NOT NULL,
  isTeaching INTEGER NOT NULL,
  facultyOrUnit VARCHAR(255) NOT NULL,
  department VARCHAR(255),
  address TEXT NOT NULL,
  phoneNumber VARCHAR(11) NOT NULL,
  createdAt DATETIME DEFAULT (datetime('now', 'localtime')) NOT NULL,
  membershipFeePaidAt DATETIME DEFAULT (datetime('now', 'localtime')),
  membershipExpiresOn DATETIME DEFAULT (datetime('now', 'localtime')),
  userId INTEGER NOT NULL,
  FOREIGN KEY(userId) REFERENCES users(userId)
);
`;
